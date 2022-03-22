<template>
  <div class="fixed top-0 z-50 flex justify-center w-full p-10 py-40 h-5/6 bg-primary lg:p-40">
    <button @click="handleClick" class="absolute px-4 py-1 bg-white rounded-md top-24 right-24 text-secondary">X</button>
    <div class="flex w-full space-x-2 text-white lg:">
      <img class="w-40 h-40 lg:w-80 lg:h-80" src="~/assets/img/books2.jpg" alt="" />
      <div class="w-56 lg:w-[52rem]">
        <p class="text-sm lg:text-xl lg:ml-8">Title: {{ data.title }}</p>
        <p class="mt-2 text-sm lg:ml-8 lg:mt-8 lg:text-xl">
          Author: <span v-for="(author, index) in data.author_name" :key="index"> {{author}}, </span>
        </p>
        <p class="mt-2 text-sm lg:ml-8 lg:mt-8 lg:text-xl">Published: {{data.first_publish_year }}</p>
        <p class="mt-2 text-sm lg:ml-8 lg:mt-8 lg:text-xl">Pages: {{data.number_of_pages_median}}</p>
        <p class="mt-2 text-sm lg:ml-8 lg:mt-8 lg:text-xl">Language: <span v-for="(leng, index) in data.language" :key="index"> {{leng}}, </span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksDetails",
  props: {
    data: {}
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
  
};
</script>

<style></style>
