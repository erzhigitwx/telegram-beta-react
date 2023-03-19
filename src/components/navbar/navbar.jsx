import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../store/userState";

const Navbar = function () {
  const isAuth = useSelector((State) => State.userState.isAuth);
  const dispatch = useDispatch();
  function signOutHandler() {
    dispatch(changeUser(false));
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#0088cc",
            height: 80,
            justifyContent: "center",
            alignItems: "space-around",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            {!isAuth && (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sign Up
              </Typography>
            )}
            {isAuth && (
              <Button color="inherit" onClick={signOutHandler}>
                Log out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
