<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Title</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div :key="blog" v-for="blog in filteredBlogs" class="single-blog">
      <!-- Custom Directives -->

      <!-- Filter pada output blog tanpa merubah sumber data -->
      <!-- Dengan cara menggunakan tanda | -->
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
// import file mixin
import searchMixin from '../mixins/searchMixin'

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
  
},
filters:{
  toUppercase(value) {
    return value.toUpperCase();
  }
},
directives: {
  'rainbow': {
    bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2,8)
  }
  }
},
created() {
//  GET REQUEST
  this.$http.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => this.blogs = data.body.slice(0,10))
},

// membuat mixin dengan array
mixins: [searchMixin]
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