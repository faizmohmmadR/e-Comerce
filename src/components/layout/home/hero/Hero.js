import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    backgroundImage: "/images/smart-watch.png",
    discount: "Opening Sale Discount 50%",
    title: "Nike Air Force 1 NDESTURK",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    buttonText: "Shop Now",
    image: "/images/smart-watch.png",
  },
  {
    backgroundImage: "/images/smart-phone.png",
    discount: "Summer Sale Discount 30%",
    title: "Adidas Ultra Boost",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    buttonText: "Buy Now",
    image: "/images/smart-phone.png",
  },
  {
    backgroundImage: "/images/laptop-bg.png",
    discount: "Spring Sale Discount 40%",
    title: "Puma Running Shoes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Shop Now",
    image: "/images/laptop-bg.png",
  },
  {
    backgroundImage: "/images/iphones.png",
    discount: "Winter Sale Discount 60%",
    title: "Reebok CrossFit",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Buy Now",
    image: "/images/iphones.png",
  },
  {
    backgroundImage: "/images/hero-img.png",
    discount: "Autumn Sale Discount 20%",
    title: "New Balance 574",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Shop Now",
    image: "/images/hero-img.png",
  },
  {
    backgroundImage: "/images/headphones.png",
    discount: "Flash Sale Discount 70%",
    title: "Under Armour Sneakers",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Buy Now",
    image: "/images/headphones.png",
  },
  {
    backgroundImage: "/images/gaming.png",
    discount: "Holiday Sale Discount 50%",
    title: "Converse Chuck Taylor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Shop Now",
    image: "/images/gaming.png",
  },
  {
    backgroundImage: "/images/camera.png",
    discount: "Black Friday Discount 80%",
    title: "Vans Old Skool",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Buy Now",
    image: "/images/camera.png",
  },
  {
    backgroundImage: "/images/apple-mac.png",
    discount: "Cyber Monday Discount 75%",
    title: "ASICS Gel-Kayano",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Shop Now",
    image: "/images/apple-mac.png",
  },
  {
    backgroundImage: "/images/air-pods.png",
    discount: "New Year Sale Discount 65%",
    title: "Saucony Originals",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
    buttonText: "Buy Now",
    image: "/images/air-pods.png",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const CustomDots = () => (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {slides.map((_, i) => (
        <div
          key={i}
          style={{
            width: i === currentSlide ? "20px" : "10px",
            height: "10px",
            borderRadius: "5px",
            background: i === currentSlide ? "#c96004" : "#d69a65",
            margin: "0 5px",
            transition: "width 0.3s ease",
          }}
        />
      ))}
    </div>
  );

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Grid
            key={index}
            container
            sx={{
              background: `url(${slide.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              borderRadius: "30px",
              overflow: "hidden",
              borderTop: "1px solid #ebeeee",
            }}
          >
            <Grid
              container
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(251, 252, 252, 0.88)",
                backdropFilter: "blur(20px)",
                boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.1)",
                borderRadius: "30px",
                padding: 4,
              }}
            >
              <Grid
                container
                spacing={2}
                justifyContent={"space-around"}
                alignItems="center"
              >
                <Grid item xs={12} md={5}>
                  <Typography mt={4}>
                    <span
                      style={{
                        backgroundColor: "#e6c7a1",
                        color: "white",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      {slide.discount}
                    </span>
                  </Typography>
                  <Typography variant="h3" mt={4}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" mt={4}>
                    {slide.description}
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "#242321",
                      textTransform: "capitalize",
                      transition: "all 0.5s ease",
                      color: "white",
                      ":hover": { bgcolor: "#636260" },
                      mt: 4,
                    }}
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    {slide.buttonText}
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={slide.image}
                    sx={{
                      maxHeight: { xs: 300, md: 400 },
                      width: "80%",
                      objectFit: "fill",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Slider>
      <CustomDots />
    </div>
  );
};

export default Hero;
