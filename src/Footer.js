import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function Footer() {
    return (
        <AppBar position="static" sx={{bgcolor: 'white'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1">
                © 2021 Andrew Pham,
                Hero Image Credit: <a href="http://www.freepik.com">Designed by upklyak / Freepik</a>,
                FPS Image Credit: <a href='https://www.freepik.com/photos/technology'>Technology photo created by DCStudio - www.freepik.com</a>
                
              </Typography>
              </Toolbar>
          </Container>
        </AppBar>
    )
}