// import { Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

// ------------------------------------Movies---------------------------------
export function MovieList() {
  let [movies, setMovies] = useState([]);

  let getMovies = () => {
    fetch(`${API}/movies`)
      .then((res) => res.json())
      .then((result) => setMovies(result));
  };
  // --------------------------------------------------------------------------------------------

  useEffect(() => getMovies(), []);

  // ----------------------------------------------------------------------------------------------
  // promise method
  // let deleteMovie = (id) => {
  //   fetch(`${API}/movies/${id}`, {
  //     method: "DELETE",
  //   }).then(() => getMovies());
  // };

  // ----------------------------------------------------------------------------------------------

  // async await method
  let deleteMovie = async (id) => {
    await fetch(`${API}/movies/${id}`, {
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
            key={mov._id}
            id={mov._id}
            editButton={
              <IconButton
                onClick={() => {
                  navigate(`/movies/edit/${mov._id}`);
                }}
                color="secondary"
                sx={{ marginLeft: "auto" }}
              >
                <EditIcon />
              </IconButton>
            }
            deleteButton={
              <IconButton onClick={() => deleteMovie(mov._id)} color="error">
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
