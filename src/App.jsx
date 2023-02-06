import "./App.css";
// --------------------------------MSG--------------------------------------
import { Msgtwo, ColorGame } from "./Msg and color"; //multiple named import
import { MovieList } from "./MovieList"; //named import
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { MovieDetailsPage } from "./MovieDetailsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AddMovie } from "./AddMovie";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let queryClient = new QueryClient();
function App() {
  // let [movies] = useState([]);

  let [mode, setMode] = useState("light");
  let darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  let navigate = useNavigate();
  let backgroundStyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ThemeProvider theme={darkTheme}>
        <Paper sx={backgroundStyles} elevation={4}>
          <div className="App">
            <AppBar position="static">
              <Toolbar>
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                  color="inherit"
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    navigate("/movies");
                  }}
                  color="inherit"
                >
                  Movies
                </Button>
                <Button
                  onClick={() => {
                    navigate("/movies/add");
                  }}
                  color="inherit"
                >
                  Add Movie
                </Button>
                <Button
                  onClick={() => {
                    navigate("/color-game");
                  }}
                  color="inherit"
                >
                  Color Game
                </Button>
                <Button
                  onClick={() => {
                    navigate("/tic-tac-toe");
                  }}
                  color="inherit"
                >
                  Tic Tac Toe Game
                </Button>
                <Button
                  onClick={() => {
                    navigate("/msgtwo");
                  }}
                  color="inherit"
                >
                  Bio
                </Button>
                <Button
                  onClick={() => {
                    navigate("/basicform");
                  }}
                  color="inherit"
                >
                  Basic form
                </Button>
                <Button
                  sx={{ marginLeft: "auto" }}
                  onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                  color="inherit"
                  startIcon={
                    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                >
                  {mode === "light" ? "Dark" : "Light"}Mode
                </Button>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/films"
                element={<Navigate replace to="/movies" />}
              />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/color-game" element={<ColorGame />} />
              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/msgtwo" element={<Msgtwo />} />
              <Route path="/basicform" element={<BasicForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Paper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
// export default App; //(default export)
export { App }; //(named export)
