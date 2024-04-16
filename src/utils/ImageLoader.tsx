import React, { useEffect } from "react";

interface ImageLoaderProps {
  sectionId: string;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageLoader = ({ sectionId, setLoaded }: ImageLoaderProps) => {
  let total = 0;
  let count = 0;

  useEffect(() => {
    const images = document.getElementById(sectionId)?.querySelectorAll("img");

    const setImagesLoaded = () => {
      setLoaded(true);
    };

    if (images) {
      images.forEach((image: HTMLImageElement) => {
        total += 1;
        image.onload = () => {
          count += 1;
          if (count >= images?.length) {
            setImagesLoaded();
          }
        };

        image.onerror = () => {
          count += 1;
          if (count >= images?.length) {
            setImagesLoaded();
          }
        };
      });
    }
  }, [sectionId]);

  return null;
};

export default ImageLoader;
