import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetailsPage() {
  let { id } = useParams();
  let [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((res) => res.json())
      .then((result) => setMovie(result));
  }, [id]);
  console.log(movie);

  let ratingColor = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  let navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="650px"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-information">
        <div className="name-rating">
          <h2 className="movie-name">{movie.name} </h2>
          <p style={ratingColor} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
