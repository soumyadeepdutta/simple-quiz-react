import instance from "../axios";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl, FormLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Register() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const userdata = {
      firstName,
      lastName,
      email,
    };
    await instance
      .post("/users/register", userdata)
      .then((res) => {
        if (res.data.status === false) {
          setErrorMessage(res.data.message);
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify({
              userId: res.data.userId.toString(),
              userEmail: res.data.email.toString(),
            })
          );
          alert("Success");
        }
      })
      .catch((ex) => {
        setErrorMessage(ex.response.data.message || "Something went wrong!");
      });
  }

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormLabel color="primary">Enter your details</FormLabel>
        <FormControl margin="normal">
          <div>
            <TextField
              id="filled-basic"
              label="First Name"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setFirstName(event.target.value);
                setErrorMessage("");
              }}
            />
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setLasttName(event.target.value);
                setErrorMessage("");
              }}
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorMessage("");
              }}
            />
            {/* <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              type="password"
            /> */}
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Typography color="error">{errorMessage}</Typography>
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default Register;
