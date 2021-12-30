<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-primary">

     <ul class="navbar-nav">
        <li class="nav-item">
           <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
           <router-link class="btn btn-primary" to="/create"> Create Article </router-link>
        </li>
     </ul>
</nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>