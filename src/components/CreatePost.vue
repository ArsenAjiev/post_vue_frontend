<template>
<h1> create Post</h1>

  <div class="container mt-4">

    <form @submit.prevent="insertPost">
     <input
         type="text"
         class="form-control"
         placeholder="Enter title"
         v-model="title"
     >
    <br/>

    <textarea
      rows="8"
      placeholder="enter body"
      class="form-control"
      v-model="text"
    >
    </textarea>

    <button class="btn btn-success mt-4"> Publish Post</button>
    </form>

        <div v-if="error"
       class="alert alert-warning alert-dismissible fade show mt-5"
       role="alert"
       >
    <strong>{{error}}</strong>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreateArticle",
  data() {
    return{
      title: null,
      text: null,
      error: null,
    }
  },
  methods: {
    insertPost() {
       if(!this.title || !this.text) {
          this.error = "Please add all fields"
          console.warn("no data")
        }
        else {
          console.warn("data exist")
        fetch('https://postdjangobackend.herokuapp.com/api/v1/post/', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: this.title, text:this.text})
      } )
      .then(resp => resp.json())
      .then(() => {
        console.log("123")
        this.$router.push({
          name: 'home'
        })
      })
      .catch(error => console.log(error))
      }
    }
  }
}
</script>

<style scoped>
</style>