<template>
  <div class="relative flex-row bg-gray-100">
    <Header></Header>
    <div class="flex items-center justify-center px-4 py-4 mt-24 bg-primary">
      <input
        class="px-4 py-2 focus:outline-none w-80 lg:w-[30rem] rounded -mr-10"
        type="text"
        v-model="busqueda"
        placeholder="Enter keyword, title, or author"
      />
      <nuxt-link to="/Books">
        <button @click="buscarLibro" >
          <img class="z-20 h-6" src="~/assets/img/search.svg" alt="" />
        </button>
      </nuxt-link>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/comunes/Header.vue";
import Footer from "../components/comunes/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      busqueda: "",
    };
  },

  mounted() {},

  methods: {
    buscarLibro() {
      this.$axios
        .$get(`http://openlibrary.org/search.json?q=${this.busqueda}`)
        .then((data) => this.$store.commit("addLibros", data.docs));
    },
  },
};
</script>
