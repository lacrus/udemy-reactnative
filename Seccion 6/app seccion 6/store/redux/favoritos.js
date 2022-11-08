import { createSlice } from "@reduxjs/  ";

const favoritosSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const agregarFavorito = favoritosSlice.actions.addFavorite;
export const removeFavorite = favoritosSlice.actions.removeFavorite;
export default favoritosSlice.reducer;
