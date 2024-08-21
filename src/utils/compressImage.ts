// compress image using CompressorJS
import Compressor from "compressorjs";

export const compressImage = async (file: File) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 800,
      maxHeight: 800,
      mimeType: "image/jpeg",
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
};
