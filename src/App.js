import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer'
import { purple } from '@mui/material/colors';
import "@fontsource/suez-one";
import "@fontsource/roboto";
import { Button } from '@mui/material';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: { 
        main: purple[700]
      },
    },
    typography: {
      fontFamily: 'Suez One'
    }
  })

  const robotoTheme = createTheme({
    palette: {
      primary: { 
        main: purple[700]
      }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  })

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

  return <>
    <ThemeProvider theme={theme}>
      <Paper>
        <Box sx={{ width:'100%' }}>
          <Typography variant='h3' align='center' sx={{position: 'absolute', top: '6vw', width: '100%', color: 'white'}}>The Andrew Pham Experience</Typography>
          <Typography variant='body1' align='center' theme={robotoTheme} sx={{position: 'absolute', top: '10vw', width: '100%', color: 'white'}}>An Indie Game Developer</Typography>
          <img src="https://pham-andrew.github.io/andrewpham.games/images/hero.jpg" alt="developer's bedroom" style={{width:'100%'}} />
          <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '-7vw'}}>
            <Card sx={{ maxWidth: 500, margin: 4 }} variant="outlined">
              <Box sx={{ position: 'relative' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://github.com/pham-andrew/andrewpham.games/blob/main/public/images/concept.png?raw=true"
                  />
                </CardActionArea>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h5">Project FLAG</Typography>
                  <Typography variant="body2" theme={robotoTheme}>Anime-inspired 2D Platformer RPG</Typography>
                </Box>
              </Box>
            </Card>
            <Card sx={{ maxWidth: 500, margin: 4 }} variant="outlined">
              <Box sx={{ position: 'relative' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://github.com/pham-andrew/andrewpham.games/blob/main/public/images/fps.jpg?raw=true"
                  />
                </CardActionArea>
                <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      bgcolor: 'rgba(0, 0, 0, 0.54)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <Typography variant="h5">Project WITP</Typography>
                    <Typography variant="body2" theme={robotoTheme}>Slow Paced 4v4 FPS</Typography>
                  </Box>
              </Box>
            </Card>
          </Box>
          <Box textAlign='center'>
          <Typography variant='h6' theme={createTheme()} sx={{fontWeight: 'bold', margin: 3, color: '#272443'}} align='center'>About TAPE</Typography>
          <Typography variant='h4' align='center' sx={{color: '#272443'}}>A One-Man Game Development Effort</Typography>
          <Typography variant='body1' theme={createTheme()} sx={{fontWeight: 'bold', margin: 3, marginLeft: '20vw', marginRight: '20vw', color: '#272443'}} align='center'>
            TAPE is an indie game developer with one mission: to create games Andrew wants to play.
            We have a legendary team of professional software engineers, certified product owners, and ivy league scholars including
            lead game designer, Andrew, executive game producer, Andrew, and head game developer, Andrew, along with help from a myriad of freelancers and consultants who aren't Andrew.
            Our development studio is based out of a Denver industrial loft, and also just happens to be a studio apartment.
          </Typography>
          <Button variant="outlined" theme={robotoTheme}>Learn More</Button>
          </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', margin: 5}}>
          <img src="https://github.com/pham-andrew/andrewpham.games/blob/main/public/images/laptop.jpg?raw=true" alt="laptop" style={{width: "500px", borderRadius: '3%'}} />
        </Box>
      </Paper>
    </ThemeProvider>
    <Footer />
  </>
}
export default App