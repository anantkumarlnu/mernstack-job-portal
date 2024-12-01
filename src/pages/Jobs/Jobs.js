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
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showAlert } from "../../store";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.userType);

  useEffect(() => {
    if (userType !== "employee") {
      dispatch(
        showAlert({
          message: "Access Denied! Only employees can view jobs.",
          severity: "error",
        })
      );
      return;
    }
    fetchJobs();
  }, [userType, dispatch]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/jobs/get");
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      dispatch(
        showAlert({
          message: "Failed to load jobs. Please try again later.",
          severity: "error",
        })
      );
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Available Jobs
      </Typography>
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
    </Container>
  );
};

export default Jobs;
