import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setJobs, setJobLoading, setJobError } from "../../store";
import axios from "axios";

const Jobs = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(setJobLoading());
      try {
        const response = await axios.get("http://localhost:3000/jobs/get");
        dispatch(setJobs(response.data.jobs));
      } catch (err) {
        dispatch(setJobError("Failed to load jobs. Please try again later."));
      }
    };
    fetchJobs();
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Available Jobs
      </Typography>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Posted On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.companyName}</TableCell>
                  <TableCell>{job.jobTitle}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    {new Date(job.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Jobs;