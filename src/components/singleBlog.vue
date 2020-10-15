<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <p>{{blog.content}}</p>
    <p>{{blog.author}}</p>
    <ul>
      <li :key="category" v-for="category in blog.categories">{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://latihan-vue-js.firebaseio.com/posts/' + this.id + '.json')
    .then(data => data.json())
    .then(data => this.blog = data)
  }
}
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>