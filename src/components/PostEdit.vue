<template>
  <div class="container mt-4">

    <form @submit.prevent="updatePost">
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

    <button class="btn btn-success mt-4"> Update Post</button>
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
  name: "PostEdit",
    props: {
    id: {
      type:[Number, String],
      required:true
    }
  },
   data() {
    return{
      title: null,
      text: null,
      error: null,
    }
  },
  methods: {
    updatePost(){
      if(!this.title || !this.text) {
          this.error = "Please add all fields"
          console.warn("no data")
        }
        else {
          console.warn("data exist")
        fetch(`http://127.0.0.1:8000/api/v1/post/${this.id}/`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: this.title, text:this.text})
      } )
      .then(resp => resp.json())
      .then(() => {
        this.$router.push('/')
         })
      .catch(error => console.log(error))
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if(to.params.id !== undefined) {
      fetch(`http://127.0.0.1:8000/api/v1/post/${to.params.id}`, {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
        }
      } )
      .then(resp => resp.json())
      .then((data) => {
        return next(vm=> (vm.title=data.title, vm.text=data.text ))
      })
    } else {
      return next
    }
  }
}
</script>

<style scoped>
</style>