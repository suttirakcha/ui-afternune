import { create } from "zustand";

type UploadImageStore = {
  previewUrl: string | null;
  imageFile: FormData | null;
  setPreviewUrl: (file: File) => void;
  resetPreview: () => void;
};

export const useUploadImageStore = create<UploadImageStore>((set, get) => ({
  previewUrl: null,
  imageFile: null,
  setPreviewUrl: (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const tempUrl = URL.createObjectURL(file);
    set({ previewUrl: tempUrl, imageFile: formData });
  },
  resetPreview: () => {
    const formData = new FormData();
    formData.delete("file");

    const { previewUrl } = get();
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    set({ imageFile: null, previewUrl: null });
  },
}));
