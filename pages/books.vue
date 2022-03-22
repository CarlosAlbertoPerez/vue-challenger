<template>
  <div class="relative">
    <Header></Header>
    <h1 class="mx-10 mt-24 text-3xl font-semibold text-center text-secondary">
      Books
    </h1>

    <!-- spinner -->
    <div v-if="this.$store.state.libros.length == 0" class="relative">
      <div class="relative flex items-center justify-center top-20 spinner">
        <div
          class="border-b-2 rounded-full border-primary animate-spin h-96 w-96"
        ></div>
      </div>
    </div>

    <!-- books -->
    <div class="flex flex-wrap justify-center mb-20">
      <div
        v-for="libro in this.$store.state.libros"
        :key="libro.key"
        class="px-10 mt-10 w-[30rem]"
      >
        <div class="flex space-x-2">
          <img class="w-32 h-32" src="~/assets/img/books2.jpg" alt="" />
          <div class="w-56">
            <p class="text-sm">Title: {{ libro.title }}</p>
            <p class="mt-2 text-sm">
              Author:
              <span v-for="(author, index) in libro.author_name" :key="index">
                {{ author }},
              </span>
            </p>
            <p class="mt-2 text-sm">
              Published: {{ libro.first_publish_year }}
            </p>
          </div>
        </div>
        <button
          @click="recibirData(libro)"
          class="px-2 py-1 mt-4 text-white rounded-sm bg-primary hover:bg-blue-900"
        >
          See details
        </button>
        <button
          @click="enviarFavorito(libro)"
          class="px-2 py-1 mt-4 text-white rounded-sm bg-primary hover:bg-blue-900"
        >
          Add to Favorites
        </button>
      </div>
    </div>
    <div class="fixed top-0" v-if="detalles">
      <BooksDetails @click="handleClick" :data="dataDetails"></BooksDetails>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/comunes/Header.vue";
import Footer from "../components/comunes/Footer.vue";
import BooksDetails from "../components/BooksDetails.vue";
export default {
  components: { Header, Footer, BooksDetails },
  name: "Libros",
  data() {
    return {
      libros: [],
      dataDetails: {},
      detalles: false,
    };
  },

  methods: {
    recibirData(data) {
      this.dataDetails = data;

      console.log(this.dataDetails);
      this.detalles = true;
    },

    handleClick() {
      this.detalles = false;
    },

    enviarFavorito(data) {
      console.log("click");
      this.$store.commit("addFavoritos", data);
    },
  },
};
</script>

<style>


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
