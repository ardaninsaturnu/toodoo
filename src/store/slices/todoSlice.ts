import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  task: string;
  priority: string;
  id: number;
  status: boolean;
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://63d59887dc3c55baf42a9acf.mockapi.io/api/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: Todo) => {
  const response = await axios.post('https://63d59887dc3c55baf42a9acf.mockapi.io/api/todos', todo);
  return response.data;
});

export const removeTodo = createAsyncThunk('todos/removeTodo', async (id: number) => {
  await axios.delete(`https://63d59887dc3c55baf42a9acf.mockapi.io/api/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] as Todo[], loading: false },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    });
  },
});

export const { setLoading } = todosSlice.actions;

export default todosSlice.reducer;
