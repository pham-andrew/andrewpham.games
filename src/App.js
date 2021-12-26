import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Flag from './Flag'
import Witp from './Witp';
import Footer from './Footer'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const App = () => {

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  }

  return <>
      <Paper>
        <Box sx={{ width:'100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange}>
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Project: FLAG" {...a11yProps(1)} />
              <Tab label="Project: WITP" {...a11yProps(2)} />
              <Tab label="Dev Blog" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <img src="https://pham-andrew.github.io/andrewpham.games/images/hero.jpg" alt="developer's bedroom" style={{width:'100%'}} />
          <TabPanel value={tab} index={0}>
            <Box sx={{display: 'flex'}}>
              <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(1)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.nintendojo.com/wp-content/uploads/2018/06/icey-switch-2-640x360.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Memory
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Project Fight Like an eGirl
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Project FLAG is a hero based anime 2D platformer with some RPG elements.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34c0ce00-4b2b-4113-ae46-282dc56aae1c/d8r2jpi-443e7239-5843-457a-abfc-e78d6943daf3.png/v1/fill/w_1024,h_576,q_80,strp/the_aliens_from_the_simpson_on_futurama_by_dlee1293847_d8r2jpi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMzRjMGNlMDAtNGIyYi00MTEzLWFlNDYtMjgyZGM1NmFhZTFjXC9kOHIyanBpLTQ0M2U3MjM5LTU4NDMtNDU3YS1hYmZjLWU3OGQ2OTQzZGFmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rpe6U1eRhhouIfwTroJP2Efoe99d_d6PPgN8Fq0kwBI"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Terrans vs Westaboos
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Project Walk In The Park
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Project WITP is a 4v4 FPS where future humans fight westaboo aliens invading Earth.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Flag />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Witp />
          </TabPanel>
          <TabPanel value={tab} index={3}>
            MAKIN GAMES IS REAL EXPENSIVE
          </TabPanel>
        </Box>
      </Paper>
      <Footer />
  </>
}
export default App