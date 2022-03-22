export const state = () => ({
  libros: [],
  favoritos: [],
});

export const mutations = {
  addLibros(state, nuevoEstado) {
    state.libros = nuevoEstado;
  },

  addFavoritos(state, nuevoFavorito) {
    if (state.favoritos.length > 0) {
      state.favoritos = [nuevoFavorito, ...state.favoritos];
    } else {
      state.favoritos = [nuevoFavorito];
    }
  },

  deleteLibro(state, id) {
    state.favoritos = state.favoritos.filter((el) => {
      return el.key !== id;
    });

    console.log(id);
  },
};

export const getters = {};


