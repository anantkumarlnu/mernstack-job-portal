import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const CompanyShowcase = () => {
  const companies = JSON.parse(localStorage.getItem("userImages")) || [];
  const baseURL = "http://localhost:3000";

  return (
    <Box
      sx={{
        padding: "2rem",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "text.primary", marginBottom: "2rem" }}
      >
        Company Showcase
      </Typography>
      {companies.length > 0 ? (
        <ImageList variant="masonry" cols={3} gap={16}>
          {companies.map((company) => (
            <ImageListItem
              key={company._id}
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "background.paper",
              }}
            >
              <img
                src={`${baseURL}/${company.path}`}
                alt={company.title || "Company Image"}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Card
                sx={{
                  padding: 1,
                  textAlign: "center",
                  backgroundColor: "background.paper",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    {company.title || "No Title"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {company.description || "No Description Available"}
                  </Typography>
                </CardContent>
              </Card>
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Typography align="center" sx={{ color: "text.secondary" }}>
          No companies to display. Please upload images or check your
          connection.
        </Typography>
      )}
    </Box>
  );
};

export default CompanyShowcase;