<template>
  <div class="container">
    <div class="section" style="width: 100%; height: 100vh; background-color: #000;"></div>
    <div class="section" style="width: 100%; height: 100vh; background-color: #d8ffff;"></div>
    <div class="section" style="width: 100%; height: 100vh; background-color: #ffffd8;"></div>
  </div>
</template>

<script>

export default {
  name: 'paginaPrincipal',
  components: {
    
  }
}
</script>

<style>

html, body{
  margin: 0;
  padding: 0;
  height: 100%;
  scroll-behavior: smooth; 
}

.container {
  height: 100vh; 
  overflow-y: scroll; 
  scroll-snap-type: y mandatory; 
}

.section {
  height: 100vh; 
  scroll-snap-align: start; 
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

</style>
