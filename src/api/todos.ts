import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';
//Your userId is
// 2956
// Please use it for all your requests to the Students API. For example:
// https://mate.academy/students-api/todos?userId=2956
// https://mate.academy/students-api/todos?userId=2952

export const USER_ID = 2952;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
export const createTodo = (newTodo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { ...newTodo, userId: USER_ID });
};

export const updateTodo = (todo: Todo) => {
  return client.patch<Todo>(`/todos/${todo.id}`, todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};
