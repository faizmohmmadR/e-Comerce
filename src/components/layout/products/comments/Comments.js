import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Rating,
} from "@mui/material";
import dayjs from "dayjs";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      comment: "Great product, highly recommended!",
      rating: 5,
      date: dayjs().subtract(2, "days").format("MMM D, YYYY"),
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      comment: "The quality is amazing, love it!",
      rating: 4,
      date: dayjs().subtract(1, "week").format("MMM D, YYYY"),
    },
    {
      id: 3,
      author: "Bob Johnson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      comment: "Delivers as promised, fast shipping.",
      rating: 4,
      date: dayjs().subtract(3, "days").format("MMM D, YYYY"),
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "Guest",
          avatar: `https://randomuser.me/api/portraits/lego/${
            comments.length % 10
          }.jpg`,
          comment: newComment,
          rating: newRating,
          date: dayjs().format("MMM D, YYYY"),
        },
      ]);
      setNewComment("");
      setNewRating(0);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" padding="20px">
      <Grid item xs={12} md={10}>
        <Divider>
          <Typography variant="h5" fontWeight="bold" color="primary">
            Comments
          </Typography>
        </Divider>
        <Box mt={2}>
          <TextField
            label="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            sx={{
              backgroundColor: "grey.200",
              borderRadius: "8px",
            }}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Rating
              name="new-rating"
              value={newRating}
              onChange={(event, newValue) => {
                setNewRating(newValue);
              }}
              precision={0.5}
              size="large"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddComment}
              sx={{ ml: 2, borderRadius: "8px" }}
            >
              Add Comment
            </Button>
          </Box>
        </Box>
        <Box mt={3}>
          {comments.map((comment) => (
            <Card key={comment.id} sx={{ mb: 2 }}>
              <CardHeader
                avatar={<Avatar alt={comment.author} src={comment.avatar} />}
                title={comment.author}
                titleTypographyProps={{
                  fontWeight: "bold",
                  color: "primary",
                }}
                subheader={
                  <Box display="flex" alignItems="center">
                    <Rating
                      name={`rating-${comment.id}`}
                      value={comment.rating}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                    <Typography variant="body2" ml={1} color="textSecondary">
                      {comment.date}
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <Typography variant="body1">{comment.comment}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Comments;
