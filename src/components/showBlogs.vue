<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div :key="blog" v-for="blog in filteredBlogs" class="single-blog">
      <!-- Custom Directives -->

      <!-- Filter pada output blog tanpa merubah sumber data -->
      <!-- Dengan cara menggunakan tanda | -->
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <p>{{ blog.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     blogs: [],
     search: ''
   }
 },
 methods: {
   
 },
 computed: {
   filteredBlogs: function(){
     return this.blogs.filter((blog) => {
       return blog.title.match(this.search)
     })
   }
 },
 created() {
  //  GET REQUEST
   this.$http.get('https://jsonplaceholder.typicode.com/posts')
   .then(data => this.blogs = data.body.slice(0,10))
 },
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border;
  background: #eeeeee;
}
</style>