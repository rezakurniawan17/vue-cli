<template>
  <div>
    <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form action="">
        <label>Blog Title</label>
        <input  v-model.lazy="blog.title" type="text" required>
        <label>Content</label>
        <textarea  v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value="ninja" v-model="blog.categories">
          <label>Wizard</label>
          <input type="checkbox" value="wizard" v-model="blog.categories">
          <label>Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories">
          <label>Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories">
        </div>
        <label for="">Author</label>
        <select v-model="blog.author">
          <option :key="author" v-for="author in authors">{{author}}</option>
        </select>
      </form>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content: </p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
          <li :key="category" v-for="category in blog.categories">
            {{category}}
          </li>
        </ul>
        <p>Author: {{blog.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Ninja','Avenger','Vue Vindicator']
    }
  },
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}
</style>