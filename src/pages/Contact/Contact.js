import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Have questions, feedback, or need assistance? Send us a message or reach
        out directly!
      </Typography>
      <Card sx={{ mb: 4, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Send Us a Message
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField label="Name" variant="outlined" required fullWidth />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{ alignSelf: "flex-end" }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ flex: "1 1 calc(50% - 1rem)", minWidth: "300px" }}>
          <CardContent>
            <Typography variant="h6">Email</Typography>
            <Typography variant="body1">
              willBeIgnored@northeastern.edu
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: "1 1 calc(50% - 1rem)", minWidth: "300px" }}>
          <CardContent>
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body1">+1-123-123-1234</Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, color: "text.secondary" }}
      >
        We aim to respond to all inquiries within 24-48 hours.
      </Typography>
    </Container>
  );
};

export default Contact;