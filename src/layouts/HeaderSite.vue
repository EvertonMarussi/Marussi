<template>
  <div>
    <mq-layout>
      <div style="position: absolute; z-index: 10; width: 100%;">
        <div style="display: flex; width: 100%; justify-content: space-between; align-items: center; padding-top: 20px;">
          <div style="margin-left: 54px;">
            <img src="@/assets/Icons/logo.png" alt="">
          </div>
          <div style="display: flex; align-items: center; margin-right: 54px;">
            <button class="raleway-medium" >Home</button>
            <button class="raleway-medium" >About</button>
            <button class="raleway-medium" >Growth</button>
            <button class="raleway-medium" >Projects</button>
            <button class="raleway-medium" >Contact</button>
            <button><img src="@/assets/Icons/menu.png" alt=""></button>
          </div>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>

export default {
  name: 'HeaderSite',
  components: {
    
  }
}
</script>

<style>

</style>
