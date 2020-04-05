import axios from 'axios';
import cookies from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const tracks = async () => {
  const res = await axios.get(`${apiUrl}/tracks`);
  return res.data;
}

const login = async (token) => {
  const res = await axios.post(`${apiUrl}/login`, { token });
  return res.data;
}

const session = async () => {
  const userId = cookies.load('userId');
  const res = await axios.get(`${apiUrl}/session/${userId}`);
  return res.data;
}

const playlist = async id => {
  const res = await axios.get(`${apiUrl}/playlist/${id}`);
  return res.data;
}

const addTrackToPlaylist = async (trackId, playlistId) => {
  const userId = cookies.load('userId');
  const res = await axios.post(`${apiUrl}/playlist/${playlistId}/track/${trackId}`);
  return res.data;
}

const createPlaylist = async (title, description) => {
  const userId = cookies.load('userId');

  const res = await axios.post(`${apiUrl}/playlist`, {
    title,
    description,
    userId
  });

  return res.data;
}

const createTrack = async (data) => {
  const userId = cookies.load('userId');

  let postData = {
    type: data.type,
    title: data.title,
    artist: data.artist,
    genre: data.genre,
    authId: userId
  };

  if (data.type === 'youtube') postData.videoId = data.videoId;
  if (data.type === 'mp3') postData.trackData = data.trackData;

  const res = await axios.post(`${apiUrl}/admin/tracks/add`, postData);
  return res.data;
}

export default { tracks, login, session, createPlaylist, playlist, addTrackToPlaylist, createTrack };
