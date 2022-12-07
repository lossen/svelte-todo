import { v4 as uuid } from 'uuid';
const API_URL = 'https://jsonplaceholder.typicode.com';

export const todoItemApi = {
  create: async (title) => {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    return { ...result, id: uuid() };
  },
  update: async (id, fieldName, value) => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        [fieldName]: value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    return result;
  },
  get: async (id) => {
    const response = await fetch(`${API_URL}/todos/${id}`);
    const result = await response.json();
    return result;
  },
  delete: async (id) => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result;
  },
};
