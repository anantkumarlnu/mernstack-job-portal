import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = ({ onLogout, userType }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          component="img"
          src="/images/logo.png"
          alt="Logo"
          sx={{ height: "40px", marginRight: "1rem" }}
        />
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          {userType === "employee" && (
            <>
              <Button color="inherit" component={Link} to="/home">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/jobs">
                Job Listings
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/companies">
                Company Showcase
              </Button>
            </>
          )}
          {userType === "admin" && (
            <Button color="inherit" component={Link} to="/employees">
              Employees
            </Button>
          )}
        </Box>
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;