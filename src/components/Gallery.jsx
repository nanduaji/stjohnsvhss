import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";
import {
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "@mui/icons-material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import lightbox styles

const galleryImages = [
  {
    src: "manager.jpeg",
    alt: "Image 1",
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    src: "student_studying.jpeg",
    alt: "Image 2",
    title: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: "college.jpeg",
    alt: "Image 3",
    title: "Image 3",
    description: "Description for Image 3",
  },
];

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ marginBottom: "20px" }}
      >
        Gallery
      </Typography>
      <Grid container spacing={4}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => openLightbox(index)}
            >
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.alt}
                sx={{ transition: "transform 0.3s ease" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[currentImageIndex].src}
          nextSrc={
            galleryImages[(currentImageIndex + 1) % galleryImages.length].src
          }
          prevSrc={
            galleryImages[
              (currentImageIndex + galleryImages.length - 1) %
                galleryImages.length
            ].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + galleryImages.length - 1) %
                galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length)
          }
          imageTitle={galleryImages[currentImageIndex].title}
          imageCaption={galleryImages[currentImageIndex].description}
          reactModalProps={{
            shouldCloseOnOverlayClick: true,
            style: {
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
              content: {
                background: "transparent",
                border: "none",
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Gallery;
