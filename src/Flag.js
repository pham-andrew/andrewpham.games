import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Flag = () => {
    return <>
        <Typography variant='h3' sx={{m: 1}}>Memory</Typography>
        <Typography variant='body1' sx={{m: 1}}>Some mages develop the power to summon copies of heroes to support their party. Befriend heroes and use them in the open world!</Typography>
        <Typography variant='h5' sx={{m: 1}}>Inspirations</Typography>
        <Box sx={{display: 'flex'}}>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://gamerempire.net/wp-content/uploads/2021/01/Is-Maplestory-Worth-Playing-Image.webp"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Maplestory
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Gameplay
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2D Platformer MMORPG with all the nostalgia.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://www.nintendojo.com/wp-content/uploads/2018/06/icey-switch-2-640x360.jpg"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Icey
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Art Style
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2D Hack and Slash with anime styling.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
        <Typography variant='h5' sx={{m: 1}}>Fragments</Typography>
        <Box sx={{display: 'flex'}}>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
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
                            Thief: Assassin
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Your childhood friend grows up to be a cool and collected guildmaster!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
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
                            Mage: Witch
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Dark robe, oversized hat... yep, she's a witch.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
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
                            Knight: Fencer
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
                <CardActionArea>
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
                <CardActionArea>
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
                            Knights' Order
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A fantasy city with sky high towers and flying tall ships.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200, margin: 2 }}>
                <CardActionArea>
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
    </>
}
export default Flag;