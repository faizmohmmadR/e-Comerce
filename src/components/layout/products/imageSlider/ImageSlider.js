import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./ImageSlider.css";

const images = [
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/crew-4Hg8LH9Hoxc-unsplash.jpg",
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg",
  "/images/nordwood-themes-EZSm8xRjnX0-unsplash.jpg",
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/crew-4Hg8LH9Hoxc-unsplash.jpg",
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg",
  "/images/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg",
  "/images/chris-lynch-KkTsH_vjjG8-unsplash.jpg",
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/crew-4Hg8LH9Hoxc-unsplash.jpg",
  "/images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
  "/images/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg",
];

const THUMBNAILS_TO_SHOW = 7;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [mainAnimationDirection, setMainAnimationDirection] = useState("");
  const [thumbnailAnimationDirection, setThumbnailAnimationDirection] =
    useState("");

  useEffect(() => {
    setTimeout(() => setMainAnimationDirection(""), 500);
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => setThumbnailAnimationDirection(""), 500);
  }, [thumbnailStartIndex]);

  const handlePrev = () => {
    setMainAnimationDirection("left");
    setThumbnailAnimationDirection("left");
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      if (newIndex < thumbnailStartIndex) {
        setThumbnailStartIndex(newIndex);
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setMainAnimationDirection("right");
    setThumbnailAnimationDirection("right");
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      if (newIndex >= thumbnailStartIndex + THUMBNAILS_TO_SHOW) {
        setThumbnailStartIndex(newIndex - THUMBNAILS_TO_SHOW + 1);
      }
      return newIndex;
    });
  };

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", position: "relative" }}>
      <Box className="slider">
        <Box
          className={`image-container ${mainAnimationDirection}`}
          sx={{ height: { xs: 200, sm: 300, md: 400 } }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={`main-image animate-image-${mainAnimationDirection}`}
            key={currentIndex}
          />
        </Box>
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "10",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
        className="arrow arrow-left"
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "10",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
        className="arrow arrow-right"
      >
        <ArrowForwardIos />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          overflow: "hidden",
        }}
      >
        <Box
          className={`thumbnail-container animate-thumbnail-${thumbnailAnimationDirection}`}
          sx={{
            display: "flex",
            transform: `translateX(-${thumbnailStartIndex * 100}px)`,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: 60, sm: 80, md: 100 },
                height: { xs: 30, sm: 40, md: 50 },
                margin: 1,
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
                border: currentIndex === index ? "2px solid #1976d2" : "none",
              }}
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
