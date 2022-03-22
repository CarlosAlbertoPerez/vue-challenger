<template>
  <div class="fixed top-0 z-50 w-full bg-white">
    <!-- Header Responsive -->
    <div class="flex justify-between px-4 md:hidden">
      <nuxt-link to="/">
        <img class="h-20" src="~/assets/img/logo.png" alt="" />
      </nuxt-link>

      <button @click="menu = !menu">
        <img class="h-8" src="~/assets/img/icon-burger.svg" alt="icon" />
      </button>
    </div>
    <div v-if="menu" class="absolute z-50 w-full bg-white md:hidden">
      <nuxt-link to="#" class="flex items-center px-4 py-2">
        <img class="h-8" src="~/assets/img/resources.svg" alt="" />
        <LinksResponsive title="Online Resourses" to="/" />
      </nuxt-link>
      <nuxt-link to="#" class="flex items-center px-4 py-2">
        <img class="h-8" src="~/assets/img/books.svg" alt="" />
        <LinksResponsive title="Books" to="/books" />
      </nuxt-link>
      
      <nuxt-link to="#" class="flex items-center px-4 py-2">
        <img class="h-8" src="~/assets/img/favorite.svg" alt="" />
        <LinksResponsive title="Favorites" to="/favorites" />
      </nuxt-link>
      
      
    </div>

    <!-- Header full Screen -->
    <div class="hidden px-4 md:flex md:justify-between lg:px-8">
      <nuxt-link to="/">
        <img class="h-20" src="~/assets/img/logo.png" alt="" />
      </nuxt-link>
      
      <div class="hidden space-x-4 md:flex md:items-center">
        <div class="flex items-center px-2 rounded">
          <img class="h-8" src="~/assets/img/resources.svg" alt="" />
          <LinksHome title="Online Resources" to="/" />
        </div>
        <div class="flex items-center px-2 rounded">
          <img class="h-8" src="~/assets/img/books.svg" alt="" />
          <LinksHome title="Books" to="/books" />
        </div>
        <div class="flex items-center">
          <img class="h-8" src="~/assets/img/favorite.svg" alt="" />
          <LinksHome title="Favorites" to="/favorites" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import LinksResponsive from "./LinksResponsive.vue";
import LinksHome from "./LinksHome.vue";
export default {
  name: "Header",
  components: {
    LinksResponsive,
    LinksHome,
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style></style>
