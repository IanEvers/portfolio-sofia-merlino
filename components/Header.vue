<template>
  <header>

    <nuxt-link to="/" class="link"> <h1 class="headerTitulo lila"> Sofía Merlino </h1> </nuxt-link>

    <nav class="menu">

      <nuxt-link to="/" class="link"> about </nuxt-link>
      <nuxt-link to="/ilustraciones" class="link"> ilustraciones </nuxt-link>
      <nuxt-link to="/fotografia" class="link"> fotografía </nuxt-link>
      <nuxt-link to="/grafico" class="link"> d. gráfico </nuxt-link>
      <nuxt-link to="/industrial" class="link"> d. industrial </nuxt-link>
      <nuxt-link to="/contacto" class="link"> contacto </nuxt-link>

    </nav>

  </header>

</template>

<style>

@font-face {
  font-family: 'Afterglow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('assets/fonts/Afterglow-Regular.ttf') format('truetype');
}

header {
  display: flex;
  gap: 2rem;
  align-items: baseline;
  justify-content: space-between;
  margin-left: 1.5rem;
  border-left: #bebda9 2px solid;
  padding-bottom: 0.4rem;
}

.headerTitulo {
  font-size: clamp(3rem, 6vw,5rem);
  font-family: 'Afterglow';
  text-decoration: none;
  padding-top: 3rem;
  line-height: 0.8;
  padding-left: 0.8rem;
  margin: 0;
  font-weight: 500;
}

.link {
  text-decoration: none;
  font-size: clamp(1rem, 1.5vw,1.5rem);
  font-weight: 600;
  color: #bebda9;
  white-space: nowrap;
}

.menu {
  color: #bebda9;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 1.5rem;
  padding-right: 2rem;
}



</style>