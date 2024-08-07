import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const Timer = ({ color, bgColor }) => {
  const [targetDate, setTargetDate] = useState(
    new Date().getTime() +
      1 * 24 * 60 * 60 * 1000 +
      4 * 60 * 60 * 1000 +
      23 * 60 * 1000 +
      30 * 1000
  );

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      setTargetDate(
        new Date().getTime() +
          1 * 24 * 60 * 60 * 1000 +
          4 * 60 * 60 * 1000 +
          23 * 60 * 1000 +
          30 * 1000
      );
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const StackStyle = {
    width: { xs: "15vw", md: "4.5vw" },
    height: "7vh",
    fontWeight: "bold",
    backgroundColor: bgColor ? bgColor : "black",
    color: color ? color : "white",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #d1d0cd",
  };

  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Box textAlign="center">
        <Stack sx={StackStyle}>{timeLeft.days}</Stack>
        <Typography variant="caption">Days</Typography>
      </Box>
      <Stack
        style={{ marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}
      >
        :
      </Stack>
      <Box textAlign="center">
        <Stack sx={StackStyle}>{timeLeft.hours}</Stack>
        <Typography variant="caption">Hours</Typography>
      </Box>
      <Stack
        style={{ marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}
      >
        :
      </Stack>
      <Box textAlign="center">
        <Stack sx={StackStyle}>{timeLeft.minutes}</Stack>
        <Typography variant="caption">Minutes</Typography>
      </Box>
      <Stack
        style={{ marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}
      >
        :
      </Stack>
      <Box textAlign="center">
        <Stack sx={StackStyle}>{timeLeft.seconds}</Stack>
        <Typography variant="caption">Seconds</Typography>
      </Box>
    </Grid>
  );
};

export default Timer;
