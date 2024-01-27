import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LoginUser, loginUser } from '../../api';
import local from '../../core/local';
import DialogError from '../../components/DialogError';

const Login = () => {
  const [error,setError] = React.useState(null);
  const [firstname, setFirstName] = React.useState("")
  const [lastname, setLastName] = React.useState("")
  const [password, setPassword] = React.useState("")
  
  const handleClick = () => {
    let toReturn : LoginUser = {
      firstname:firstname,
      lastname:lastname,
      password:password
    }
    loginUser(toReturn).then((value)=>{
      console.log(value)
    }).catch((e)=>{
      throw e
    })
  }
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {error}
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            P
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Firstname"
              label="Firstname"
              name="Firstname"
              autoComplete="Firstname"
              autoFocus
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>{setLastName(e.target.value)}}
              id="Lastname"
              label="Email Address"
              name="Lastname"
              autoComplete="Lastname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
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
    </Grid>
  );
}

export default Login;