import React from "react";
import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { faker } from "@faker-js/faker";

const reviews = [
  {
    id: 1,
    date: "06 Aug 2024",
    name: "Jayvion Simon",
    rating: 5,
    review:
      "Amazing experience I love it a lot. Thanks to the team that dreams come true, great! I appreciate their attitude and approach.",
  },
  {
    id: 2,
    date: "05 Aug 2024",
    name: "Lucian Obrien",
    rating: 5,
    review:
      "Amazing experience I love it a lot. Thanks to the team that dreams come true, great! I appreciate their attitude and approach.",
  },
  {
    id: 3,
    date: "04 Aug 2024",
    name: "Deja Brady",
    rating: 5,
    review:
      "Amazing experience I love it a lot. Thanks to the team that dreams come true, great! I appreciate their attitude and approach.",
  },
  {
    id: 4,
    date: "03 Aug 2024",
    name: "Harrison Stein",
    rating: 5,
    review:
      "Amazing experience I love it a lot. Thanks to the team that dreams come true, great! I appreciate their attitude and approach.",
  },
];

const reviewCardStyle = {
  padding: 2,
  borderRadius: 2,
  textAlign: "left",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  bgcolor: "#f8f9fa",
};

const PopularReviews = () => {
  return (
    <Box margin={"40px 0px"}>
      <Typography variant="h2" padding={"40px 0px"}>
        Popular Reviews
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item key={review.id} xs={12} sm={6} md={3}>
            <Paper sx={reviewCardStyle}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  src={faker.image.avatar()}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="body2" color="textSecondary" mb={1}>
                    {review.date}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {review.name}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" my={1}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: index < review.rating ? "#ffb400" : "#ccc",
                      fontSize: 20,
                    }}
                  />
                ))}
              </Box>
              <Typography variant="body2" color="textSecondary">
                {review.review}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularReviews;
