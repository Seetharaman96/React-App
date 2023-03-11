// import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { API } from "./global";

let formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().url().min(4),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().url().min(4),
});

export function EditMovie() {
  let { id } = useParams();
  let [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((res) => res.json())
      .then((result) => setMovie(result));
  }, [id]);
  console.log(movie);
  return movie ? <EditMovieForm movie={movie} /> : <h2>Loading Form...</h2>;
}

function EditMovieForm({ movie }) {
  let { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatedMovie) => {
        console.log("Form values", updatedMovie);
        updatingMovie(updatedMovie);
      },
    });
  let navigate = useNavigate();

  let updatingMovie = async (updatedMovie) => {
    await fetch(`${API}/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movies");
  };
  return (
    <form onSubmit={handleSubmit} className="input-box">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />

      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        label="Poster"
        variant="outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        label="Rating"
        variant="outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        label="Summary"
        variant="outlined"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="Trailer"
        variant="outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      <Button color="success" type="submit" variant="contained">
        SAVE
      </Button>
    </form>
  );
}
