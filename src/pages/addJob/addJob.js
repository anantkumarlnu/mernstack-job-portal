import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  showAlert,
  hideAlert,
  updateJobDetails,
  resetJobDetails,
} from "../../store";

const AddJob = () => {
  const dispatch = useDispatch();
  const jobDetails = useSelector((state) => state.job.jobDetails);
  const alert = useSelector((state) => state.alert);

  const handleChange = (e) => {
    dispatch(updateJobDetails({ [e.target.name]: e.target.value }));
  };

  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const textRegex = /^[a-zA-Z0-9\s]+$/;
    const descriptionRegex = /^[a-zA-Z0-9\s,\.]+$/;
    const salaryRegex = /^[0-9]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,]+$/;

    const { companyName, jobTitle, description, salary, location } = jobDetails;

    if (!companyName || !jobTitle || !description || !salary || !location) {
      dispatch(
        showAlert({
          message: "All fields are required.",
          severity: "error",
        })
      );
      return;
    }

    if (!textRegex.test(companyName)) {
      dispatch(
        showAlert({
          message:
            "Company name can only contain letters, numbers, and spaces.",
          severity: "error",
        })
      );
      return;
    }

    if (!textRegex.test(jobTitle)) {
      dispatch(
        showAlert({
          message: "Job title can only contain letters, numbers, and spaces.",
          severity: "error",
        })
      );
      return;
    }

    if (!descriptionRegex.test(description)) {
      dispatch(
        showAlert({
          message:
            "Description can only contain letters, numbers, spaces, commas, and periods.",
          severity: "error",
        })
      );
      return;
    }

    if (!salaryRegex.test(salary)) {
      dispatch(
        showAlert({
          message: "Salary must be a valid number greater than zero.",
          severity: "error",
        })
      );
      return;
    }

    if (!addressRegex.test(location)) {
      dispatch(
        showAlert({
          message:
            "Location can only contain letters, numbers, spaces, and commas.",
          severity: "error",
        })
      );
      return;
    }

    try {
      await axios.post("http://localhost:3000/jobs/create", jobDetails);
      dispatch(
        showAlert({
          message: "Job created successfully!",
          severity: "success",
        })
      );
      dispatch(resetJobDetails());
    } catch (error) {
      console.error("Error creating job:", error);
      dispatch(
        showAlert({
          message: "Failed to create job. Please try again.",
          severity: "error",
        })
      );
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Add Job
      </Typography>
      <Card sx={{ mb: 4, padding: 2 }}>
        <CardContent>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Company Name"
              name="companyName"
              variant="outlined"
              required
              fullWidth
              value={jobDetails.companyName}
              onChange={handleChange}
            />
            <TextField
              label="Job Title"
              name="jobTitle"
              variant="outlined"
              required
              fullWidth
              value={jobDetails.jobTitle}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
              value={jobDetails.description}
              onChange={handleChange}
            />
            <TextField
              label="Salary"
              name="salary"
              type="number"
              variant="outlined"
              required
              fullWidth
              value={jobDetails.salary}
              onChange={handleChange}
            />
            <TextField
              label="Location"
              name="location"
              variant="outlined"
              required
              fullWidth
              value={jobDetails.location}
              onChange={handleChange}
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

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddJob;
