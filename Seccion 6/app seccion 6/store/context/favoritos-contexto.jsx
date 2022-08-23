import { createContext, useState } from "react";

export const FavoritosContexto = createContext({
  ids: [],
  agregarFavoritos: (id) => {},
  eliminarFavoritos: (id) => {},
});

export default function FavoritosContextoProvider({ children }) {
  const [comidaFavoritaIds, setComidaFavoritaIds] = useState([]);

  function agregarFavoritos(id) {
    setComidaFavoritaIds((estadoActual) => [...estadoActual, id]);
  }

  function eliminarFavoritos(id) {
    setComidaFavoritaIds((estadoActual) => {
      estadoActual.filter((comidaId) => comidaId !== id);
    });
  }

  const value = {
    ids: comidaFavoritaIds,
    agregarFavoritos: agregarFavoritos,
    eliminarFavoritos: eliminarFavoritos,
  };

  return (
    <FavoritosContexto.Provider value={value}>
      {children}
    </FavoritosContexto.Provider>
  );
}
