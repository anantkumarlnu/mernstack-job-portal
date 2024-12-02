import React, { useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmployees,
  setEmployeeLoading,
  setEmployeeError,
} from "../../store";
import axios from "axios";

const Employees = () => {
  const { users, loading, error } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch(setEmployeeLoading());
      try {
        const response = await axios.get("http://localhost:3000/user/getAll");
        dispatch(setEmployees(response.data.users));
      } catch (err) {
        dispatch(setEmployeeError("Failed to fetch users. Please try again."));
      }
    };
    fetchEmployees();
  }, [dispatch]);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Employees
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
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Employees;
