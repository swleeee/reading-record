import { useRef, useState } from 'react';

export const useImageFileUploader = (onChange: (file: File | null) => void) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onChange(file);
      previewFile(file);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
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
    previewUrl,
    handleFileChange,
    handlePreviewImageDelete,
    handleImageFileEdit,
  };
};
