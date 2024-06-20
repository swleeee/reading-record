import { ChangeEvent, useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';

export const useImageFileUploader = (
  initPreviewUrl: string | null,
  onChange: (file: File | null) => void,
) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadLoading, setIsUploadLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(initPreviewUrl);

  const handleImageCompress = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 256,
        useWebWorker: true,
        fileType: 'image/webp',
      };

      try {
        setIsUploadLoading(true);
        const compressedFile = await imageCompression(files[0], options);
        onChange(compressedFile);
        const promise = imageCompression.getDataUrlFromFile(compressedFile);
        promise.then((result) => {
          setPreviewUrl(result);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsUploadLoading(false);
      }
    }
  };

  const handleImageFileEdit = () => {
    fileInputRef.current?.click();
  };

  const handlePreviewImageDelete = () => {
    setPreviewUrl(null);
    onChange(null);
  };

  return {
    fileInputRef,
    isUploadLoading,
    previewUrl,
    handleFileChange: handleImageCompress,
    handlePreviewImageDelete,
    handleImageFileEdit,
  };
};
