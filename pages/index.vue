<template>
  <div class="mLeft">

  
    <div class="about">
      <div class="subtituloYFoto">
        <h2 class="subtituloAbout fondoLila">About me</h2>
        <img src="/merHero.png" alt="Sofía Merlino">
      </div>

      <p class="presentacion">
          
        Hola! Soy Sofi, tengo 21 años y soy estudiante de Diseño Industrial en la UBA, actualmente cursando mi tercer año. <br> <br>
        
        Desde siempre tuve afinidad por el diseño y el arte en sus diversas expresiones y medios: dibujo, pintura, escultura, escritura, fotografía, etc. <br> <br>
        
        Me encanta aprender cosas nuevas y constantemente me encuentro haciendo cursos, investigando y practicando para mejorar mis habilidades y ampliar mi conocimiento.<br> <br>
        
        En este portfolio podrán ver gran variedad de proyectos (algunos personales y otros para terceros) en los que estuve involucrada en los últimos años. <br> <br>
        
        Estoy buscando seguir creciendo y aprendiendo profesionalmente, así que si te interesa mi trabajo no dudes en contactarme o compartirlo con alguien que creas que le va a gustar :) <br> <br>

      </p>

    </div>

    <footer>
      <div class="hrVerticalFooter"></div>

        <p> contacto </p>
      <div class="hrVerticalFooter"></div>

    </footer>

  </div>

</template>

<script>
 
export default {
  layout: 'default',
  name: 'blog',
};

</script>

<style>

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('assets/fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
}

@font-face {
  font-family: 'Montserra';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #7c7c79;
  line-height: 1.2;
  margin: 0;
  background-color: #faf2e5;
}

.mLeft {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1.5rem;
  height: 100%;
}

.about {
  display: flex;
  justify-content: space-evenly;
  margin: auto 0;
  gap: 2rem;
  align-items: center;
}

.subtituloYFoto {
  padding-left: 2rem;
  padding-bottom: 2rem;
  
}

.subtituloAbout {
  margin: 0;
  margin-bottom: 0.7rem;
  font-family: 'Afterglow';
  font-weight: 200;
  font-size: 3rem;
  text-align: center;
  color: #faf2e5;
  padding: 0.7rem;
  line-height: 0.5;
  border-radius: 10px;
}

.presentacion {
  font-size: 1.3rem;
  line-height: 1.4;
  padding: 1rem;
  max-width: 1300px;
}

footer {
  margin: 0 auto;
}

footer p{
  font-size: 1.4rem;
  color: #bebda9;
  font-weight: bold;
  text-align: center;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  border-left: #bebda9 3px solid;
  border-right: #bebda9 3px solid;
}


</style>