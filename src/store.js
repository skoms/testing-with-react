import { configureStore } from '@reduxjs/toolkit'

export const middleWares = [];

export const store = configureStore({
  reducer: {

  },
  middleware: middleWares
});

