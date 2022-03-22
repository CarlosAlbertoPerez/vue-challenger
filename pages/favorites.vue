<template>
  <div class="relative">
    <Header></Header>
    <h1 class="mx-10 mt-24 text-3xl font-semibold text-center text-secondary">Favorites</h1>

    <div class="flex flex-wrap justify-center mb-20">
      <div
        v-for="libro in this.$store.state.favoritos"
        :key="libro.key"
        class="px-10 mt-10 w-[30rem]"
      >
        <div class="flex space-x-2">
          <img class="w-32 h-32" src="~/assets/img/books2.jpg" alt="" />
          <div class="w-56">
            <p class="text-sm">Title: {{ libro.title }}</p>
            <p class="mt-2 text-sm">Author: <span v-for="(author, index) in libro.author_name" :key="index"> {{author}}, </span></p>
            <p class="mt-2 text-sm">Published: {{libro.first_publish_year}}</p>
          </div>
        </div>
        
        
      </div>
    </div>
    
    
    <Footer />
  </div>
</template>

<script>
import Header from "../components/comunes/Header.vue";
import Footer from "../components/comunes/Footer.vue";
export default {
  name: "Favorites",
  components: { Header, Footer },
}
</script>

<style>

</style>