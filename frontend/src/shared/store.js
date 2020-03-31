import * as actions from './actions';

export default {
  appTitle: 'Melodious',

  player: {
    state: 'stopped',
    currentTrack: false,
    currentTime: 0,
    volume: 0.75,
    audio: new Audio()
  },

  trackData: {
    fetched: false,
    tracks: []
  },

  ...actions
};
