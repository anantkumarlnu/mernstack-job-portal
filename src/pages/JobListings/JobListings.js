import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import jobPosts from "./jobsData";
import { useTheme } from "@mui/material/styles";

const JobListings = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ color: theme.palette.text.primary }}
      >
        Job Listings
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {jobPosts.map((job) => (
          <Card
            key={job.id}
            sx={{
              width: 300,
              boxShadow: 3,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {job.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {job.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary }}
              >
                {job.lastUpdated}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                href={job.applyLink}
                target="_blank"
                fullWidth
              >
                Apply Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default JobListings;