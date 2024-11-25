import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
        Our job portal is a dynamic platform designed to connect job seekers
        with top-tier companies. We leverage innovative tools and an intuitive
        design to simplify the job search process, allowing users to focus on
        what matters most: achieving their career goals.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Comprehensive Listings
              </Typography>
              <Typography variant="body2">
                Access thousands of job opportunities tailored to your skills
                and preferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Company Insights
              </Typography>
              <Typography variant="body2">
                Learn more about the culture, mission, and career opportunities
                at leading companies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personalized Experience
              </Typography>
              <Typography variant="body2">
                Save job searches, bookmark listings, and receive tailored
                recommendations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Modern Interface
              </Typography>
              <Typography variant="body2">
                Experience a seamless and intuitive interface built with the
                latest technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body1" sx={{ mt: 4, textAlign: "center" }}>
        We are committed to delivering not just a job portal, but a career
        companion. With modern technology, responsive design, and a focus on
        user satisfaction, we aim to make your career journey inspiring and
        stress-free.
      </Typography>
    </Container>
  );
};

export default About;