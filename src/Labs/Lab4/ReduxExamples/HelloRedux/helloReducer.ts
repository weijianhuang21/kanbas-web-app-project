import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World123",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
export default helloSlice.reducer;