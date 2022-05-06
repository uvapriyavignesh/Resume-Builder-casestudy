import React from "react";
import "./Common.css";
import { AppBar } from "@material-ui/core";
import { Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div calss="row">
      <div class="col-12">
        <AppBar position="sticky" style={{ position: "sticky" }}>
          <Toolbar>
            <IconButton
              edge="start"
              style={{
                marginRight: 20,
              }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              Resume Builder
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
