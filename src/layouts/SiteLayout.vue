<template>
  <div>
    <HeaderSite/>
    <ContentSite/>
    <FooterSite/>
  </div>
</template>

<script>

import HeaderSite from './HeaderSite.vue'
import ContentSite from './ContentSite.vue'
import FooterSite from './FooterSite.vue'

export default {
  name: 'SiteLayout',
  components: {
    HeaderSite,
    ContentSite,
    FooterSite
  }
}
</script>

<style>

</style>
