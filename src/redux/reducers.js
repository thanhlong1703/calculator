import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = createSlice({
  name: "calc",
  initialState: {
    result: [],
    display: [],
    ans: [],
  },
  reducers: {
    //action
    ADD_NUMBERS: (state, action) => {
      state.display.push(action.payload);
      //   console.log(state);
    },
    BUTTON_EQUAL: (state) => {
      state.result = eval(state.display.join(""));
    },
    BUTTON_CLEAR: (state) => {
      state.display = [];
      state.result = [];
    },
    BUTTON_DEL: (state) => {
      //   console.log("a");
      state.display = state.display.slice(0, -1);
    },
  },
});

export const { ADD_NUMBERS, BUTTON_EQUAL, BUTTON_CLEAR, BUTTON_DEL } =
  rootReducer.actions;
