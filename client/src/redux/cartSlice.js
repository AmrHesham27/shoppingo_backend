import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsNumber: 0,
    items: {},
  },
  reducers: {
    addProduct: (state, action) => {
      if (!state.items[action.payload.id]) {
        state.itemsNumber++;
        state.items[action.payload["id"]] = action.payload;
      }
    },
    removeProduct: (state, action) => {
      if (state.items[action.payload.id]) {
        state.itemsNumber =
          state.itemsNumber - state.items[action.payload.id]["qty"];
        delete state.items[action.payload.id];
      }
    },
    decreaseProductQty: (state, action) => {
      if (state.items[action.payload.id].qty === 1) {
        delete state.items[action.payload.id];
      } else {
        state.items[action.payload.id].qty--;
      }
      state.itemsNumber--;
    },
    increaseProductQty: (state, action) => {
      state.items[action.payload.id].qty++;
      state.itemsNumber++;
    },
    setCart: (state, action) => {
      state.itemsNumber = action.payload["itemsNumber"];
      state.items = action.payload["items"];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
