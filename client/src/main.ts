import {
  getData,
  titleInput,
  decscriptionInput,
  postDataBtn,
} from './utils/constants';

import './style.css';
const app = document.getElementById('app') as HTMLElement;

app?.append(getData, titleInput, decscriptionInput, postDataBtn);
