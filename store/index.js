export const state = () => ({
  libros: [],
  favoritos: []
})

export const mutations = {
  addLibros(state, nuevoEstado ) {
      state.libros = nuevoEstado
  },

  addFavoritos(state, nuevoFavorito ) {
    if (state.favoritos.length > 0) {
      state.favoritos = [nuevoFavorito, ...state.favoritos]
      
    } else {
      state.favoritos = [nuevoFavorito]
    }
    
},
  
}






export const getters = {}


// export const getters = {
//   libros: state => state.libros
// }