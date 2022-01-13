import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import uiReducer from './ui/uiSlice'

const reducer = {
    counter: counterReducer,
    ui: uiReducer
}

export default configureStore({
  reducer: reducer,
})