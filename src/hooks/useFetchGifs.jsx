import React from "react";
import getGifs from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  //se hace un isLoading o useState para saber si ya se cargaron las imagenes y se inicializan con el valor true
  const [loading, setIsLoading] = useState(true);

  const getImages = async () => {
    const images = await getGifs({ category });
    setImages(images);
    //cuando se carguen las imagenes se devolvera el valor de false
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading: false,
  };
};

export default useFetchGifs;
