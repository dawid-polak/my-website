<template>
     <div class="w-full h-full relative flex flex-col items-center">
          <Navbar />
          <div class="w-4/5 sm:w-3/5 mt-24 sm:mt-48 relative">
               <h1 style="animation-duration: 0.5s" class="text-5xl sm:text-6xl font-bold text-color-101B61 animate__animated animate__fadeInRightBig">About Me <span class="w-3 h-3 ml-[-7px] mb-[-1px] rounded-full bg-color-8002E0 inline-block"></span></h1>
               <hr style="animation-duration: 0.2s" class="text-color-8002E0 bg-color-8002E0 p-[1px] w-28 mt-5 mb-5 animate__animated animate__fadeInRightBig" />
               <p style="animation-delay: 0.5s" class="font-light text-color-101B61 text-xl sm:text-2xl animate__animated animate__fadeIn">
                    I discovered my passion for front end in a technical school during computer science classes. The first contact with code made this job extremely exciting for me. I am glad that I can turn them into a professional job.
               </p>
          </div>
          <div class="relative mt-10 sm:mt-24 flex flex-col items-center">
               <span style="animation-delay: 1s" class="text-color-9AA09E tracking-[5px] text-xs animate__animated animate__fadeIn">SCROLL</span>
               <span style="animation-delay: 1.5s" class="bg-color-9AA09E w-[1px] h-64 block text-color mt-5 animate__animated animate__fadeInUp"></span>
          </div>
          <div class="w-4/5 mt-20 flex flex-col items-center">
               <p class="text-md sm:text-xl text-color-101B61 m-2 font-normal mb-16 max-w-[600px]">
                    <span class="font-bold">I am a front-end developer because</span> I believe that the visual aspect has contributed to the global development of technology to a large extent. In my opinion, if it wasn't for the graphical interface, we wouldn't be so eager to reach for the
                    digitized world. Thanks to the visuals, we interact with the application. It becomes a place where we spend our time pleasantly. Therefore, it should be made a more inspiring place. A place that changes us. I am glad that I can contribute to this.
               </p>
          </div>
          <div class="w-4/5 flex flex h-full justify-center">
               <div class="w-3/4 h-full rounded flex flex-col sm:items-center">
                    <h1 class="text-2xl sm:text-3xl text-color-101B61 font-bold">Full list of skills</h1>
                    <ul class="list-disc my-10 text-color-101B61 font-light text-xl flex flex-wrap justify-center">
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">HTML</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.1s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">CSS</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.2s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">SCSS</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.3s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Tailwind CSS</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.4s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Bootstrap 5</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.5s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">JSON</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.6s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">JavaScript</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.7s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">TypeScript</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.8s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Vue 3</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 0.9s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Firebase 9</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.0s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">VSCode</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.1s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">ESLint</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.2s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Vite</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.3s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Vue CLI</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.4s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Git</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.5s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">GitHub</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.6s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Netlify</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.7s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Figma</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.8s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">Adobe XD</li>
                         <li v-if="activeAnimationListSkills" style="animation-delay: 1.9s" class="m-2 ml-10 animate__animated animate__fadeInRightBig">SEO</li>
                    </ul>
               </div>
          </div>
          <div class="w-4/5 flex flex-col items-center">
               <span ref="secoundSpanLine" style="animation-delay: 1.5s" class="w-full sm:w-3/5 h-[1px] bg-color-9AA09E block text-color my-5"></span>
               <p class="text-3xl sm:text-5xl text-color-101B61 cursor-pointer font-semibold underline my-10">DOWNLOAD CV</p>
               <span ref="secoundSpanLine" style="animation-delay: 1.5s" class="w-full md:w-3/5 h-[1px] bg-color-9AA09E block text-color my-5"></span>
          </div>
          <div class="w-4/5 sm:w-3/5 mt-20 self-center">
               <h1 class="text-5xl text-color-1c494c">Love for the mountains</h1>
               <p class="m-3 mt-10 sm:ml-10 max-w-[650px] text-color-1c494c text-xl font-light">
                    After work, I love spending time in the mountains. For this reason, I travel a lot and I am a climber. I am fascinated by exploring new trails and beautiful places on Earth. This passion helps me to keep balance, be happy and positive in my life.
               </p>

               <img class="p-5 pb-20 lg:p-20 lg:pt-10" src="../assets/img/mountain.png" alt="mountain" />
          </div>
     </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";

export default {
     components: {
          Navbar,
     },
     setup() {
          const activeAnimationListSkills = ref(false);
          const secoundSpanLine = ref();

          onMounted(() => {
               window.addEventListener("scroll", () => {
                    const scrollPosiotion = window.scrollY;
                    const secoundSpanLinePosition = secoundSpanLine.value.getBoundingClientRect().top;

                    if (scrollPosiotion + 1000 > secoundSpanLinePosition) {
                         activeAnimationListSkills.value = true;
                    } else {
                         activeAnimationListSkills.value = false;
                    }
               });
          });

          return { activeAnimationListSkills, secoundSpanLine };
     },
};
</script>

<style lang="scss" scoped></style>
