import { v4 as uuidv4 } from 'uuid';

import { supabase } from '@/shared/lib';

const BUCKET = import.meta.env.VITE_STORAGE_BUCKET;

export const uploadFileAPI = async (folder: string, newFile: File) => {
  const uuid = uuidv4();

  const { data: profileData, error: profileError } = await supabase.storage
    .from(BUCKET)
    .upload(`${folder}/${uuid}.${newFile.type.split('/')[1]}`, newFile, {
      cacheControl: '3600',
      upsert: true,
    });

  if (profileError) {
    throw new Error(profileError.message);
  }

  return profileData;
};

export const deleteUploadedFileAPI = async (originFilePath: string) => {
  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([originFilePath]);

  if (error) {
    throw new Error(error.message);
  }

  return null;
};
