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

const App = () => {

  const theme = createTheme({
    palette: {
      primary: { 
        main: purple[200]
      },
      secondary: { 
        main: purple[200],
      },
    },
    typography: {
      fontFamily: 'Suez One'
    }
  })

  return <>
    <ThemeProvider theme={theme}>
      <Paper>
        <Box sx={{ width:'100%'}}>
          <Typography variant='h3' align='center' sx={{position: 'absolute', top: '6vw', width: '100%', color: 'white'}}>The Andrew Pham Experience</Typography>
          <img src="https://pham-andrew.github.io/andrewpham.games/images/hero.jpg" alt="developer's bedroom" style={{width:'100%'}} />
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '-7vw'}}>
              <Card sx={{ maxWidth: 500, margin: 4 }} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://www.nintendojo.com/wp-content/uploads/2018/06/icey-switch-2-640x360.jpg"
                  />
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 500, margin: 4 }} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34c0ce00-4b2b-4113-ae46-282dc56aae1c/d8r2jpi-443e7239-5843-457a-abfc-e78d6943daf3.png/v1/fill/w_1024,h_576,q_80,strp/the_aliens_from_the_simpson_on_futurama_by_dlee1293847_d8r2jpi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMzRjMGNlMDAtNGIyYi00MTEzLWFlNDYtMjgyZGM1NmFhZTFjXC9kOHIyanBpLTQ0M2U3MjM5LTU4NDMtNDU3YS1hYmZjLWU3OGQ2OTQzZGFmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rpe6U1eRhhouIfwTroJP2Efoe99d_d6PPgN8Fq0kwBI"
                  />
                </CardActionArea>
              </Card>
            </Box>
            <Typography variant='h6' theme={createTheme()} sx={{fontWeight: 'bold', margin: 3, color: '#272443'}} align='center'>About TAPE</Typography>
            <Typography variant='h4' align='center' sx={{color: '#272443'}}>A One-Man Game Development Effort</Typography>
            <Typography variant='body1' theme={createTheme()} sx={{fontWeight: 'bold', margin: 3, color: '#272443'}} align='center'>
              TAPE is an indie game developer with one mission: to create games Andrew wants to play.
              We have a legendary team of industry developers and ivy league software engineers including
              lead game designer, Andrew, game producer, Andrew, and head game developer, Andrew, along with a myriad of freelancers and consultants.
              Our development studio is based out of a Denver industrial loft... and also just happens to be a studio apartment.
            </Typography>
        </Box>
      </Paper>
      <Footer />
    </ThemeProvider>
  </>
}
export default App