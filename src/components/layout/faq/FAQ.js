import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Please visit our returns page for more information.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes between 5-10 business days depending on your location. You will receive a tracking number once your order has been shipped.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to many countries worldwide. Please check our shipping page for more details and a list of countries we ship to.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive an email with a tracking number and a link to track your order online.",
  },
];

const FAQ = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h2" fontWeight="bold" mb={4}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
