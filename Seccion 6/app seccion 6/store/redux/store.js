import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritos";

export default store = configureStore({
  reducer: {
    estadoComidasFavoritas: favoritesReducer,
  },
});
