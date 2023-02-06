// import { Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

// ------------------------------------Movies---------------------------------
export function MovieList() {
  let [movies, setMovies] = useState([]);

  let getMovies = () => {
    fetch("https://63d96a8c5a330a6ae17b6bf4.mockapi.io/movie")
      .then((res) => res.json())
      .then((result) => setMovies(result));
  };
  // --------------------------------------------------------------------------------------------

  useEffect(() => getMovies(), []);

  // ----------------------------------------------------------------------------------------------
  // promise method
  // let deleteMovie = (id) => {
  //   fetch(`https://63d96a8c5a330a6ae17b6bf4.mockapi.io/movie/${id}`, {
  //     method: "DELETE",
  //   }).then(() => getMovies());
  // };

  // ----------------------------------------------------------------------------------------------

  // async await method
  let deleteMovie = async (id) => {
    await fetch(`https://63d96a8c5a330a6ae17b6bf4.mockapi.io/movie/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };
  let navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movies.map((mov) => (
          <Movie
            movie={mov}
            key={mov.id}
            id={mov.id}
            editButton={
              <IconButton
                onClick={() => {
                  navigate(`/movies/edit/${mov.id}`);
                }}
                color="secondary"
                sx={{ marginLeft: "auto" }}
              >
                <EditIcon />
              </IconButton>
            }
            deleteButton={
              <IconButton onClick={() => deleteMovie(mov.id)} color="error">
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
