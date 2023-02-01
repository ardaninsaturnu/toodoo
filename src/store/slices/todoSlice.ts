import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ListObject,GetListResponse} from "../../models/Todo";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get<GetListResponse['data']>('https://63d59887dc3c55baf42a9acf.mockapi.io/api/tasks-test');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: ListObject) => {
  const response = await axios.post('https://63d59887dc3c55baf42a9acf.mockapi.io/api/tasks-test', todo);

  if(response.status !== 201){
    alert('something went wrong')
    return;
  }

  return response.data;
});

export const removeTodo = createAsyncThunk('todos/removeTodo', async (id: number) => {
  await axios.delete(`https://63d59887dc3c55baf42a9acf.mockapi.io/api/tasks-test/${id}`);
  return id;
});


export const updateTodo = createAsyncThunk('todos/updateTodo', async (
  { id, status }: { id: number, status: boolean }
) => {
  await axios.put(`https://63d59887dc3c55baf42a9acf.mockapi.io/api/tasks-test/${id}`, { status });
  return { id, status };
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] as ListObject[], loading: false },
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
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const {id, status} = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos[todoIndex].status = status;
    });
  },
});

export const { setLoading } = todosSlice.actions;

export default todosSlice.reducer;
