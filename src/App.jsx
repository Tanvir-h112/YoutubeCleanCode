
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/navbar';
import usePlaylists from './hooks/usePlaylists';
import PlaylistCardItem from './components/playlist-card-item';
import {Container} from '@mui/system'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

const HomePage = ({playlistArray})=> {
  return(
    <Container maxWidth={'lg'} sx={{my: 16}} >
    {playlistArray.length > 0 && (
      <Grid container>
      
        { playlistArray.map((item)=> ( 
          <Grid item xs={12} md={6} lg={4} mb={2}>
            <PlaylistCardItem
            key={item.playlistId}
            playlistId={item.playlistId}
              playlistThumbnail={item.playlistThumbnail}
              playlistTitle={item.playlistTitle}
              channelTitle={item.channelTitle} 
            /> 
          </Grid>
          ))}
        </Grid>
      )}
  </Container>
  )
}

const PlayerPage = ({playlists})=> {
  const {playlistId} = useParams();
  const current = playlists[playlistId]
  console.log('Current course', current)

  return (
    <Container maxWidth={'lg'} sx={{ my: 16}}>
     <Typography variant='h2' align='center'>
         {current.playlistTitle}
     </Typography>
    <Typography variant='body1'>
        {current.playlistThumbnail}
    </Typography>
    </Container>
  )
}

const NotFound = ()=> {
  return (
    <Container maxWidth={'lg'} sx={{ my: 16}}>
     <Typography variant='h2' align='center'>
          404 Page Not Found
     </Typography>
    </Container>
  )
}

const App =()=> {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists)

    return (
      <BrowserRouter>
        <CssBaseline />
        <Navbar getPlaylistById={getPlaylistById} />
        <Routes>
          <Route 
            path='/' element={<HomePage playlistArray={playlistArray} />}
          />
          <Route path='/player/:playlsitId' element={<PlayerPage playlists={playlists} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;