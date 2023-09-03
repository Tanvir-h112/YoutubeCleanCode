import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { PlayCircleOutline } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'


const PlaylistCardItem = ({playlistThumbnail, playlistTitle, channelTitle, playlistId}) =>  {

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: 1,
    }}>
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {playlistTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{flexGrow: 1}}></Box>
      <CardActions disableSpacing>
        <Button to={`/player/${playlistId}`} component={Link}> 
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <PlayCircleOutline />
            <Typography  variant='body2' fontWeight={600}>
              Start Tutorial
            </Typography>
            </Stack>
        </Button>
        
      </CardActions>

    </Card>
  );
}

export default PlaylistCardItem;