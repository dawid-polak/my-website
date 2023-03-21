<template>
     <div class="w-full h-full relative flex flex-col">
          <Navbar />
          <main class="w-full h-[calc(100vh-40px)] flex flex-col lg:flex-row justify-center absolute">
               <div class="w-3/5 hidden lg:flex flex-col justify-center items-center">
                    <div>
                         <h1 class="text-6xl text-color-101B61 font-light animate__animated animate__fadeInDown">
                              Hi, my <br />
                              name is <span class="font-normal">David</span>.
                         </h1>
                         <p style="animation-delay: 1.5s;" class="text-2xl text-color-101B61 mt-8 font-extralight animate__animated animate__fadeIn">
                              I’m a front-end developer from <br />
                              Breslau.
                         </p>
                    </div>
               </div>
               <div class="w-full lg:w-2/5 flex items-center lg:justify-start justify-center animate__animated animate__rotateIn">
                    <img class="w-3/5" src="../assets/img/me.png" alt="me" />
               </div>
               <div class="w-full text-center mt-[-20px] lg:hidden">
                    <h1 class="text-4xl text-color-101B61 font-light animate__animated animate__fadeInDown">
                         Hi, my name is<br />
                         <span class="font-normal">David</span>.
                    </h1>
                    <p class="w-4/5 m-auto text-xl text-color-101B61 mt-8 font-extralight animate__animated animate__fadeInDown">
                         I’m a front-end developer from 
                         Breslau.
                    </p>

               </div>
          </main>
     </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
     components: {
          Navbar,
     },
};
</script>

<style lang="scss" scoped></style>
