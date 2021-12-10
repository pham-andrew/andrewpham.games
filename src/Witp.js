import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Witp = () => {
    return <>
        <Typography variant='h3'>Terrans vs Westaboos</Typography>
        <Typography variant='body1'>In a distant galaxy, aliens receive television transmissions from the 50s. After a glipse at the golden age of westerns, they head to Earth with revolvers and lever action rifles only to encounter earthlings a millenia more advanced...</Typography>
        <Typography variant='h5' sx={{m: 1}}>Inspirations</Typography>
        <Box sx={{display: 'flex'}}>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.akamai.steamstatic.com/steam/apps/594650/ss_36f6d959f75d1cca48c2a98d892d2697f6d4bde6.1920x1080.jpg?t=1638865766"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Hunt: Showdown
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Gunplay
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A slow and methodical battle royale with unparalleled sound design and slow western gunplay.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
        <Typography variant='h5' sx={{m: 1}}>Maps</Typography>
        <Box sx={{display: 'flex'}}>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://lh3.googleusercontent.com/proxy/B5oWDtaGfEYLOiIoU_BscOKI3wBkwL8cSDMOFfEK0_s-7yt-OW7jt5kLmzht5m2jlsfynYQzKIcAHS2uvbg24E40i-7oDlHEaAiskXn1RNI5KrHR13W8kPzubEoq_uO4TBCNC35QUgU-h5gMSLslsGpZC5F_wcnFAx1uEgXiTg"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Western Set
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            A Hollywood western movie set
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Looks exactly like a town in the wild west! Except for the lighting, sound, and camera equipment laying about.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </>
}
export default Witp