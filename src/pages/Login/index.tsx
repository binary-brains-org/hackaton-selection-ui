import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppLogo from "../../components/AppLogo.tsx";
import { useForm } from "react-hook-form";
import { LoginUser, loginUser } from "../../api";
import { useState } from "react";
import DialogError from "../../components/DialogError.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm<LoginUser>();
  const nav = useNavigate();
  const [error, setError] = useState<Error | null>(null);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/kids_financing.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AppLogo />
          <Typography component="h1" variant="h5">
            Welcome back !
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(v => {
              loginUser(v)
                .then((d) => {
                  local.setUser(d)
                  nav("/");
                })
                .catch(setError);
            })}
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("firstname")}
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="firstname"
              name="firstname"
              autoComplete="firstname"
              autoFocus
            />
            <TextField
              {...register("lastname")}
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="lastname"
              type="lastname"
              id="lastname"
            />
            <TextField
              {...register("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      {error ? DialogError(error) : null}
    </Grid>
  );
};

export default Login;
