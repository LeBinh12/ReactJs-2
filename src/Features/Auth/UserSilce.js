import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'Api/userApi';

const register = createAsyncThunk(
    'users/register',
    async (payLoad) => {
        // call API
        const data = await userApi.register(payLoad);

        localStorage.setItem('data', JSON.stringify(data.data));


        return data.data;
    },
  )
  

const userSlice = createSlice({
  name: 'user',
    initialState: {
        current: {},
        settings: {},
  },
  reducers: {

    },
  
   extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload; // Sử dụng "action.payload" đúng
    });
  },
});

const {  reducer } = userSlice;

export default reducer;
