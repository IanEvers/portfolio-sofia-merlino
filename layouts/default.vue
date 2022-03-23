<template>
  <div class="contenedor">

    <div class="hrVertical"></div>

    <Header />

    <hr class="hrHeader">

    <slot/>

  </div>
</template>

<style>

.hrHeader {
  margin: 0;
}

.hrVertical {
  height: 100%;
  position: absolute;
  left: 1.5rem;
  border-left: #bebda9 2px solid;
}

.lila {
  color: #cdbffc;
}

.fondoLila {
  background-color: #cdbffc;
}

.fondo {
  background-color: #faf2e5;
}


.contenedor {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}



</style>