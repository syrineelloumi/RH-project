import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { userLogin } from '../redux/action';



const theme = createTheme();

const Login = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  //const { loading, user } = useSelector((state) => state);
  // const {  errors } = useSelector((state) => state);
  const dispatch = useDispatch();
  let handelSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, motDePasse }))
    setEmail("")
    setMotDePasse("")
  }
  // console.log(email);
  // console.log(motDePasse);
  return (
    <div>
      {/* { localStorage.getItem("token")?(<Navigate to="/userList"/>): */}
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
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
              <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box component="form" noValidate onSubmit={handelSubmit} sx={{ mt: 1 }}>
                <TextField
                
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  
                />

                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  name="motDePasse"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setMotDePasse(e.target.value)}
                />


                <button
                  className="btn btn-primary btn-lg btn-block"
                  
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , ml: 6 }}
                >
                  Sign In
                </button>
                


               



              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>)

    </div>
  );
}

export default Login;