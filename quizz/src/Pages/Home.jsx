import React from "react";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/test");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand ms-5 text-light fs-4" to="/test">
            Online Test
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex" role="search">
        <button className="btn btn-lg text-light" type="submit">Log Out</button>
      </form>
        </div>
      </nav>
      <div className="container d-flex justify-content-center mt-5 box">
        <div className="row mt-5">
          <h1 className="ms-5">
            I<span className="instruct">nstructio</span>n
          </h1>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="All Question contained equal marks." />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Each Question weightage is 1 marks." />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Timing for test is 1 Hr." />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Attempted Question will be shown as green." />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Unattempted Question will be shown as yellow." />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Defaultly All Question will be shown as Red." />
              </ListItemButton>
            </ListItem>
            <button
              className="btn btn-lg bg-success"
              onClick={handleNext}
              style={{ color: "#fff", marginLeft: "500px", width: "100px" }}
            >
              Next
            </button>
          </List>
        </div>
      </div>
    </>
  );
}

export default Home;
