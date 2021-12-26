import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function Footer() {
    return (
        <AppBar position="static" sx={{bgcolor: 'white'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1">
                © 2021 Andrew Pham,
                Hero Image Credit: <a href="http://www.freepik.com">Designed by upklyak / Freepik</a>
              </Typography>
              </Toolbar>
          </Container>
        </AppBar>
    )
}