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
    <div className="container-fluid">
      <nav className="navbar bg-secondary">
        <div className="container-fluid ">
          <Link className="navbar-brand mx-auto text-light fs-3" to="/test">
            Online Test
          </Link>
        </div>
      </nav>
      <div
        className="container d-flex justify-content-center box mt-5"
      >
        <div className="row">
          <div className="col-12">
            <h1 className="ps-5 fs-1" style={{ fontFamily: "Roman" }}>
              I<span className="instruct">nstructio</span>n
            </h1>
            <List className="text-center">
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
                className="btn btn-lg bg-success mt-3"
                onClick={handleNext}
                style={{ color: "#fff", width: "100px"  }}
              >
                Next
              </button>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
