export const getTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  const result = await response.json();
  return result;
};
