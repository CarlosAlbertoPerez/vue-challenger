<template>
  <div class="px-4 py-1 rounded lg:text-lg ">
    <nuxt-link :to="to">
      <div class="flex items-center space-x-2 ">
        <p>{{title}}</p>
      </div>
    </nuxt-link>  
  </div>
</template>

<script>
export default {
  name: 'LinksHome',
  props: {
    title: String,
    to: String,
    fondo: String,
    
  },

}
</script>

<style>

</style>