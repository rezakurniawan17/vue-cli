// Deklarasi file penampung mixin dengan format javascript
export default {
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
}