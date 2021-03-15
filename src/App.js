import React from "react";

import "./App.css";
import Register from "./components/Register";
import Container from "@material-ui/core/Container";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Paper, Typography } from "@material-ui/core";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
        intro: {
          padding: 10,
          alignItems: "center",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Paper style={theme.intro}>
          <Typography variant="h3" color="textPrimary">
            Instructions
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Read each numbered item carefully. Read the statements marked “A”
            and “B.” Determine which statement is most similar to what you would
            do. Assign a point value to the A and B statements using the
            following scale. The total point value for A and B is five (5). If
            statement A is most similar to what you would do: A = 5 B = 0 If
            statement A is not satisfactory, but better than B: A = 4 or 3 B = 1
            or 2 If statement B is most similar to what you would do: A = 0 B =
            5 If statement B is not satisfactory, but better than A: A = 1 or 2
            B = 4 or 3
          </Typography>
        </Paper>

        <Register />
      </Container>
    </ThemeProvider>
  );
}

export default App;
