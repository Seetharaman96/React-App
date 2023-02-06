import { useState } from "react";
// import Button from "@mui/material/Button";
import { Counter } from "./Counter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  // let summaryStyles = {
  //   display: show ? "block" : "none",
  // };
  let ratingColor = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  let navigate = useNavigate();
  return (
    <Card className="movie-container">
      <CardMedia
        component="img"
        alt={movie.name}
        // height="140"
        image={movie.poster}
      />
      <CardContent>
        <div className="name-rating">
          <h2 className="movie-name">
            {movie.name}{" "}
            <IconButton
              onClick={() => {
                setShow(!show);
              }}
              color="primary"
              variant="contained"
              aria-label="Toggle-summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => {
                navigate(`/movies/${id}`);
              }}
              color="primary"
              variant="contained"
              aria-label="Movie-details"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={ratingColor} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        {/* conditional styling */}
        {/* <p style={summaryStyles} className="movie-summary">
              {movie.summary}
            </p> */}
        {/* conditional rendering */}
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        {/* render props */}
        <Counter /> {editButton} {deleteButton}
      </CardActions>
    </Card>
  );
}
