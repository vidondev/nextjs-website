import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {    
    menu: {
      isOpen: false
    }
  },
  reducers: {
    toggleMenu:(state,action) => {
      state.menu.isOpen = action.payload.isOpen
    }
  },
})

export const { toggleMenu } = uiSlice.actions

export default uiSlice.reducer