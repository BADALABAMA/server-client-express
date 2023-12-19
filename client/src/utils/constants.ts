export const getData = document.createElement('button') as HTMLButtonElement;
export const titleInput: HTMLInputElement = document.createElement('input');
export const decscriptionInput: HTMLInputElement =
  document.createElement('input');
export const postDataBtn: HTMLButtonElement = document.createElement('button');

titleInput.className = 'title__input';
postDataBtn.className = 'data__btn';
getData.textContent = 'Get data';
decscriptionInput.className = 'decscription__input';

decscriptionInput.placeholder = 'decscription';
titleInput.placeholder = 'title';
postDataBtn.textContent = 'Post data';

import { createTodoList } from './function';
import { IData } from '../Interfaces/IData';

const app = document.getElementById('app') as HTMLElement;
getData?.addEventListener('click', async () => {
  try {
    const serverData = await fetch('http://localhost:3000/todoList', {
      method: 'GET',
    });
    const parsedData: { toDoData: IData[] } = await serverData.json();
    createTodoList(parsedData, app);
    console.log(['PARSED__DATA'], parsedData);
  } catch (error) {
    console.error('Error when executing a GET request:', error);
  }
});

postDataBtn?.addEventListener('click', async () => {
  if (titleInput.value && decscriptionInput.value !== '') {
    try {
      const serverData = await fetch('http://localhost:3000/todoList', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          title: titleInput.value,
          description: decscriptionInput.value,
        }),
      });
      const parsedData = await serverData.json();

      console.log(parsedData);
    } catch (error) {
      console.error('Error when executing a POST request:', error);
    }
  }
});
