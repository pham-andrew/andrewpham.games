import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const App = () => {

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const theme = React.useMemo(() =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    [],
  );

  return (<>
    <ThemeProvider theme={theme}>
      <Paper sx={{margin: '50px'}}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Project: FLAG" {...a11yProps(1)} />
              <Tab label="Project: WITP" {...a11yProps(2)} />
              <Tab label="Dev Blog" {...a11yProps(3)} />
            </Tabs>
          </Box>
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
            <Typography variant='h3' sx={{m: 1}}>Memory</Typography>
            <Typography variant='body1' sx={{m: 1}}>Some mages develop the power to summon copies of heroes to support their party; however, the summoning spell requires a connection that some may find too personal...</Typography>
            <Typography variant='h5' sx={{m: 1}}>Fragments</Typography>
            <Box sx={{display: 'flex'}}>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Alice
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Thief > Assassin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your childhood friend grows up to be a cool and collected guildmaster!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      El
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Witch
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dark robe, oversized hat... yep she's a witch.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Lux
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Knight
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Daughter of a poor noble, Lux dreams of being a knight.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Typography variant='h5' sx={{m: 1}}>Cities</Typography>
            <Box sx={{display: 'flex'}}>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i0.wp.com/4.bp.blogspot.com/-p2bdvvEhRaE/XOlXughW4_I/AAAAAAAADIU/jqI2brLlXwMYzdnks33IY_pwiXp3sMk2gCKgBGAs/w0/anime-girl-mask-cyberpunk-sci-fi-uhdpaper.com-4K-168.jpg"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Little Tokyo
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Thieves' Guild
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A squalid and crowded urban battlefield for rival gangs with a love of streetwear.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f8582be-2c46-4f47-9191-31e1f0c0ad7d/d7hqtrm-cb8b9648-9cc1-4a6a-a467-ab12052c80a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmODU4MmJlLTJjNDYtNGY0Ny05MTkxLTMxZTFmMGMwYWQ3ZFwvZDdocXRybS1jYjhiOTY0OC05Y2MxLTRhNmEtYTQ2Ny1hYjEyMDUyYzgwYTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cAEmQSvXJ0gbY3nLr4G5aeWYm9QtwobiO0zw1L5ClX8"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Skyport
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Order of Knights
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A fantasy city with sky high towers and flying tall ships.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea onClick={()=>setTab(2)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=800&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F01%2Fnight-snow-shirakawa-go-village-japan-MOSTSNOW0118.jpg"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Lenia
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Magic Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A snowy town built around the magic academy surronded by forest.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Typography variant='h3'>Terrans vs Westaboos</Typography>
            <Typography variant='body1'>In a distant galaxy, aliens receive television transmissions from the 50s. After a glipse at the golden age of westerns, they head to Earth with revolvers and lever action rifles only to encounter earthlings a millenia more advanced...</Typography>
          </TabPanel>
          <TabPanel value={tab} index={3}>
            MAKIN GAMES IS REAL EXPENSIVE
          </TabPanel>
        </Box>
      </Paper>
    </ThemeProvider>
  </>);
}

export default App;