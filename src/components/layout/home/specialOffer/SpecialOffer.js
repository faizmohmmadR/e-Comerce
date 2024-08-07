import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Timer from "../Timer";

const boxImageStyle = {
  width: { xs: "80vw", sm: "60vw", md: "30vw" },
  height: { xs: "30vh", sm: "90vh", md: "50vh" },
  padding: "10px",
  borderRadius: "15px",
};

const imageContainerStyle = {
  boxShadow: "1px 1px 40px 1px #ebe9e6",
  bgcolor: "white",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 5px",
  cursor: "pointer",
};

const spanStyle = {
  padding: "10px 20px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bold",
};

const colors = ["#FF4500", "#9400D3", "#00CED1", "#008000"];
const memoryOptions = ["128GB", "256GB", "512GB", "1TB"];

const SpecialOffer = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMemory, setSelectedMemory] = useState(memoryOptions[0]);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      mt={12}
      mb={5}
    >
      <Grid container>
        <Typography variant="h2" padding={"10px 0px"}>
          Special Offer
        </Typography>
      </Grid>
      <Grid container gap={2} justifyContent={"space-between"}>
        <Grid item xs={12} md={5.8} lg={3.8} sx={imageContainerStyle}>
          <Box textAlign={"center"} mt={4}>
            <Typography color={"red"}>new 2024</Typography>
            <Typography variant="h3" margin={"20px 0px"} fontSize={"22px"}>
              Apple iPhone 14
            </Typography>
            <Typography fontWeight={"bold"} color="black">
              <span
                style={{
                  border: "1px solid #e8e1da",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                From $999
              </span>
            </Typography>
          </Box>
          <Box width={"80%"} borderBottom={"1px dashed #e8e1da"} mt={5}></Box>
          <Grid container justifyContent={"center"} padding={"20px 30px"}>
            <Typography margin={"30px 0px"}>Deal ends in:</Typography>
            <Timer color={"black"} bgColor="white" />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={5.8}
          lg={3.8}
          sx={{
            ...imageContainerStyle,
            boxShadow: "0px 0px 0px",
            bgcolor: "#f4f6f8",
          }}
          component={"img"}
          src="/images/smart-phone.png"
        ></Grid>

        <Grid item xs={12} md={5.8} lg={3.8} padding={"0px 10px"}>
          <Box textAlign={"start"}>
            <Typography variant="h5" fontWeight="bold">
              Apple iPhone 14
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              marginBottom={2}
              mt={3}
            >
              While most people enjoy casino gambling, sports betting, lottery,
              and bingo playing for the fun.
            </Typography>
            <Typography variant="h6" marginBottom={1}>
              Color
            </Typography>
            <Box display="flex" justifyContent="start" gap={1} mt={3} mb={3}>
              {colors.map((color) => (
                <Box
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    width: 30,
                    height: 30,
                    backgroundColor: color,
                    borderRadius: "50%",
                    border:
                      selectedColor === color
                        ? "2px solid #000"
                        : "1px solid #ccc",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
            <Typography variant="h6" marginBottom={1} mt={1}>
              Memory
            </Typography>
            <Box display="flex" justifyContent="start" gap={1} mb={3} mt={3}>
              {memoryOptions.map((memory) => (
                <Box
                  key={memory}
                  onClick={() => setSelectedMemory(memory)}
                  sx={{
                    padding: "10px 20px",
                    border:
                      selectedMemory === memory
                        ? "2px solid #000"
                        : "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {memory}
                </Box>
              ))}
            </Box>
            <Button variant="contained" color="primary" sx={{ mt: "20px" }}>
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpecialOffer;
