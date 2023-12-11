import './style.css';
const app = document.getElementById('app') as HTMLElement;
const getData = document.querySelector('#getData') as HTMLButtonElement;

const titleInput: HTMLInputElement = document.createElement('input');
const idInput: HTMLInputElement = document.createElement('input');
const isReadInput: HTMLInputElement = document.createElement('input');
const postDataBtn: HTMLButtonElement = document.createElement('button');
titleInput.className = 'title__input';
postDataBtn.className = 'data__btn';
idInput.className = 'id__input';
isReadInput.className = 'checkbox__input';
isReadInput.type = 'checkbox';
isReadInput.value = 'false';
idInput.placeholder = 'id';
titleInput.placeholder = 'title';
postDataBtn.textContent = 'Post data';

isReadInput?.addEventListener('change', () => {
  if (isReadInput.value === 'false') {
    isReadInput.value = 'true';
  } else {
    isReadInput.value = 'false';
  }
});
getData?.addEventListener('click', async () => {
  try {
    const serverData = await fetch('http://localhost:3000/data');
    const parsedData = await serverData.json();

    console.log(parsedData);
  } catch (error) {
    console.error('Error when executing a GET request:', error);
  }
});

postDataBtn?.addEventListener('click', async () => {
  try {
    const serverData = await fetch('http://localhost:3000/data', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        id: idInput.value,
        title: titleInput.value,
        isRead: isReadInput.value,
      }),
    });
    const parsedData = await serverData.json();

    console.log(parsedData);
  } catch (error) {
    console.error('Error when executing a POST request:', error);
  }
});

app?.append(idInput, titleInput, isReadInput, postDataBtn);
