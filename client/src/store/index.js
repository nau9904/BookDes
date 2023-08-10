import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isFullTexture: false,
  fullDecal: './reactjs.png',
});

export default state;