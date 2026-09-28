<template>
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Everton Marussi — início" @click="open = false"><img src="@/assets/Icons/logo.png" alt=""></a>
    <button class="menu-toggle" :aria-expanded="String(open)" aria-controls="main-navigation" @click="open = !open">{{ open ? 'Fechar −' : 'Menu +' }}</button>
    <nav id="main-navigation" :class="{ open }" aria-label="Navegação principal" @keydown.esc="open = false">
      <a v-for="link in links" :key="link[0]" :href="'#' + link[0]" @click="open = false">{{ link[1] }}</a>
      <a class="nav-contact" href="#contact" @click="open = false">Vamos conversar <span>↗</span></a>
    </nav>
  </header>
</template>
<script>
export default { name: 'HeaderSite', data: () => ({ open: false, links: [['about', 'Sobre mim'], ['journey', 'Trajetória'], ['work', 'Projetos'], ['community', 'Comunidade'], ['stack', 'Tecnologias']] }) }
</script>
