import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    listUsers: []
  },
  reducers: {
    addUser: (state, action) => {
      state.listUsers.push(action.payload)
    },
    upDateUser: (state, action) => {
      state.listUsers.map(user => {
        if (user.id === action.payload.id) {
          user.username = action.payload.newUsername;
        }
      })
    },
    deleteUser: (state, action) => {
      state.listUsers = state.listUsers.filter(user => user.id !== action.payload)
    }

  }
})

export const { addUser, upDateUser, deleteUser } = userSlice.actions

export default userSlice.reducer;