import { IData } from '../Interfaces/IData';

export function createTodoList(
  parsedData: { toDoData: IData[] },
  node: HTMLElement
) {
  parsedData.toDoData.forEach((data: IData) => {
    const list: HTMLDivElement = document.createElement('div');
    const title: HTMLHeadingElement = document.createElement('h1');
    const description: HTMLHeadingElement = document.createElement('h3');
    const checkbox: HTMLInputElement = document.createElement('input');

    list.className = 'todo-list';

    checkbox.type = 'checkbox';

    title.textContent = data.title;
    description.textContent = data.description;
    checkbox?.addEventListener('change', async (e) => {
      if (checkbox.value === 'true') {
        checkbox.value = 'false';
      } else {
        checkbox.value = 'true';
        const todoTitle = data.title;

        try {
          const response = await fetch(
            `http://localhost:3000/todoList/${encodeURIComponent(todoTitle)}`,
            {
              method: 'DELETE',
            }
          );

          if (response.ok) {
            list.remove();
          } else {
            console.error('Failed to delete todo');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }

      console.log(e.target);
    });

    list.append(title, description, checkbox);

    node.append(list);

    return list;
  });
}
