<template>
    <nav class="nav-extended ">
    <div class="nav-wrapper ">
      <a href="#" class="brand-logo center">Occasion Admin</a>
        <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-large-only"><i class="material-icons">menu</i></a>
      <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> -->
    </div>
   
  </nav>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
nav{
  position: fixed;
  z-index: 2;
}

.nav-wrapper{
  background: #521031;
}
</style>
