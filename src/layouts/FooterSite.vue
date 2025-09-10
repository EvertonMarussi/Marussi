<template>
  <div>

    <div v-if="$route.path!='/Marussi/'">
      <div style="width: 100%; height: 100vh;">
        FOOTER
        {{ $router.currentRoute.path }}
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'FooterSite',
  components: {
    
  }
}
</script>

<style>

</style>
