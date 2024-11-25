import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome to the Job List
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Welcome to your ultimate career companion—a place where ambition
            meets opportunity, and your goals take center stage. Whether you’re
            stepping into the professional world for the first time or seeking
            that next big leap in your career, this is where your journey
            begins. Dive into a curated selection of job opportunities, connect
            with industry-leading companies, and explore a platform designed to
            empower you at every step. Let’s redefine what’s possible
            together—because your success isn’t just a destination; it’s the
            journey we’re here to support.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 24px)",
              md: "calc(50% - 24px)",
            },
            minWidth: "300px",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/images/explorelisting.jpg"
            alt="Explore Job Listings"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Explore Job Listings
            </Typography>
            <Typography variant="body2">
              Discover countless job opportunities that match your skills and
              interests.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 24px)",
              md: "calc(50% - 24px)",
            },
            minWidth: "300px",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/images/aboutus.jpg"
            alt="About Us"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Learn more about our platform and how we connect job seekers with
              employers.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 24px)",
              md: "calc(50% - 24px)",
            },
            minWidth: "300px",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/images/showcase.jpg"
            alt="Company Showcase"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Company Showcase
            </Typography>
            <Typography variant="body2">
              Check out top companies and their latest job postings.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 24px)",
              md: "calc(50% - 24px)",
            },
            minWidth: "300px",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/images/contact.jpg"
            alt="Contact Us"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Get in touch with our team for any queries or support.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;