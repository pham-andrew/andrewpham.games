import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer'
import { purple } from '@mui/material/colors';
import "@fontsource/suez-one";
import "@fontsource/roboto";
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContentText } from '@mui/material';

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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
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
                <CardActionArea onClick={()=>handleClickOpen()}>
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
                <CardActionArea onClick={()=>handleClickOpen2()}>
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
          <Button variant="outlined" theme={robotoTheme} onClick={()=>handleClickOpen3()}>Learn More</Button>
          </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', margin: 5}}>
          <img src="https://github.com/pham-andrew/andrewpham.games/blob/main/public/images/laptop.jpg?raw=true" alt="laptop" style={{width: "500px", borderRadius: '3%'}} />
        </Box>
        <Box sx={{height: '50px'}}/>
      </Paper>
    </ThemeProvider>
    <Footer />
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle >
        Project Codename Fight Like An eGirl
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6">Inspiration</Typography>
          <Typography variant="body1">
            Why is it that there are no side scrolling anime games?
            The style is perfect for a 2D game but most either use a chibi anime design like Maplestory, are in 3D like Genshin Impact, or are turn based.
            Icey is the only modern example of a 2D anime sidescroller. Inspired by their work, hopefully we can expand the genre.
          </Typography>
          <Typography variant="h6">System</Typography>
          <Typography variant="body1">
            Befriend heros by completing questlines and summon them to the overworld to level up and participate in raids.
          </Typography>
          <Typography variant="h6">FAQ</Typography>
          <Typography variant="body1">
            Is this a JRPG? No, this game is being made in America... with significant help from artists abroad.
          </Typography>
          <Typography variant="body1">
            Am I playing as the hero? No, you are the summoner, you control the hero... yes, like fate, takt, ... or pokemon.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    <Dialog open={open2} onClose={handleClose2}>
      <DialogTitle >
        Project Codename Walk in the Park
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        <Typography variant="h5">Terrans vs Westaboos</Typography>
          <Typography variant="h6">Introduction</Typography>
          <Typography variant="body1">
            In a distant galaxy, aliens receive television transmissions from the 50s. After a glipse at the golden age of westerns, they head to Earth with revolvers and lever action rifles only to encounter earthlings a millenia more advanced...
          </Typography>
          <Typography variant="h6">System</Typography>
          <Typography variant="body1">
            The FPS is round based with each team spawning on opposite sides of the map and buying weapons.
            Humans use advanced energy based weaponry. Aliens use cap and ball era guns. The guns are the same on each side except for their styling.
            The weapons are slow to recharge and slow to load. This game's gunplay mechanics are inspired by Hunt: Showdown.
          </Typography>
          <Typography variant="h6">Map</Typography>
          <Typography variant="body1">
            The first map is the set of a hollywood western.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    <Dialog open={open3} onClose={handleClose3}>
      <DialogTitle >
        About Me
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">
            Hello! I'm Andrew, a
            Software Developer for the Space Force, 
            Software Engineering Graduate Student at Harvard University,
            and graduate of the Cal State Fullerton's Computer Science Video Game Design Focus.
            I'm primarily a web developer in my day job and create games as passion projects on the side.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </>
}
export default App