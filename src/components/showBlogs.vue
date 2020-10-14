<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div :key="blog" v-for="blog in blogs" class="single-blog">
      <!-- Custom Directives -->
      <h2 v-rainbow>{{ blog.title }}</h2>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     blogs: []
   }
 },
 methods: {
   
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