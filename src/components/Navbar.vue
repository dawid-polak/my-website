<template>
     <div v-if="showMenu" style="animation-duration: 0.3s" class="absolute w-full h-[calc(100vh-40px)] bg-color-A9DCEC z-40 animate__animated" :class="{ animate__fadeInDown: showMenu, animate__fadeInUp: !showMenu }">
          <div class="mt-24 sm:mt-36 flex items-center mb-5 sm:mb-0">
               <hr class="w-20 py-[1px] text-color-8002E0 bg-color-8002E0 mx-8 animate__animated" :class="{ animate__fadeInRight: showMenu }" />
               <a href="https://www.linkedin.com/in/dawid-polak-39a4a4252/" target="_blank">
                    <img class="w-6 h-6 m-2 sm:m-4 animate__animated cursor-pointer" :class="{ animate__fadeInRight: showMenu }" src="../assets/icons/linkedin.png" alt="linkedin" />
               </a>
               <a href="https://www.instagram.com/dawid_polak_02/" target="_blank">
                    <img class="w-6 h-6 m-2 sm:m-4 animate__animated cursor-pointer" :class="{ animate__fadeInRight: showMenu }" src="../assets/icons/instagram.png" alt="instagram" />
               </a>
               <a href="https://github.com/dawid-polak" target="_blank">
                    <img class="w-6 h-6 m-2 sm:m-4 animate__animated cursor-pointer" :class="{ animate__fadeInRight: showMenu }" src="../assets/icons/github.png" alt="github" />
               </a>
          </div>
          <div class="ml-4 sm:ml-10 mt-4">
               <span v-for="subpage in dataMenu.subpages" :key="subpage" :style="{ 'animation-delay': subpage.delay + 's' }" class="block text-5xl sm:text-6xl font-bold text-color-101B61 m-4 mb-10 animate__animated cursor-pointer item--list-menu" :class="{ animate__fadeInRight: showMenu }">
                    <router-link :to="{ name: subpage.name }">{{ subpage.text }}</router-link>
               </span>
          </div>
          <div class="ml-8 sm:ml-10 mt-4 flex">
               <span @click="changeLang('EN')" class="block text-2xl sm:text-2xl font-bold text-color-101B61 mt-4 mr-3 animate__animated cursor-pointer item--list-menu" :class="{ animate__fadeInRight: showMenu }">EN</span>
               <span @click="changeLang('PL')" class="block text-2xl sm:text-2xl font-bold text-color-101B61 mt-4 animate__animated cursor-pointer item--list-menu" :class="{ animate__fadeInRight: showMenu }">PL</span>
          </div>
     </div>
     <div :class="{ 'bg-color-A9DCEC': showMenu }" class="w-full h-20 sm:h-32 flex items-center justify-between fixed relative z-50">
          <div class="border-l-2 border-color-222222 ml-5 sm:ml-12 w-20">
               <p v-if="!showMenu" @click="showMenu = !showMenu" :class="{ animate__flipInX: !showMenu }" class="font-medium text-color-222222 ml-5 tracking-widest cursor-pointer text-sm animate__animated text-center animate__animated menu">{{ dataMenu.menu }}</p>
               <p v-if="showMenu" @click="showMenu = !showMenu" :class="{ animate__flipInX: showMenu }" class="font-medium text-color-222222 ml-5 tracking-widest cursor-pointer text-sm animate__animated text-center animate__animated menu">{{ dataMenu.close}}</p>
          </div>
          <div class="mr-5 sm:mr-12 w-30 sm:w-32">
               <a href="mailto: dawidow.polak@gmail.com">
                    <p class="font-medium text-color-222222 tracking-widest cursor-pointer text-sm animate__animated text-center contact_me">{{ dataMenu.contact_me }}</p>
               </a>
          </div>
     </div>
</template>

<script>
import { ref } from "vue";
import Cookies from "universal-cookie";
import writeData from "../composable/writeData.js"

export default {
     emits: ['lang'],
     setup(props, { emit }) {
          const showMenu = ref(false);
          const dataMenu = ref({});

          const handleWriteData = async() => {

               const { data } = await writeData('navbar');
               dataMenu.value = data;
          }
          handleWriteData();

          const changeLang = (newLang) => {
               const cookies = new Cookies();
               cookies.set("lang", newLang);
               handleWriteData();
               emit('lang')
               showMenu.value = !showMenu.value;
          };

          return { showMenu, dataMenu, changeLang };
     },
};
</script>

<style lang="scss" scoped>
.item--list-menu {
     &:hover {
          color: #ffffff;
     }
}

.contact_me {
     animation: letter_spacing_back 0.1s ease-out forwards;
     &:hover {
          animation: letter_spacing 0.1s ease-out forwards;
     }
}

.menu {
     animation: letter_spacing_back 0.1s ease-out forwards;
     &:hover {
          animation: letter_spacing 0.1s ease-out forwards;
     }
}

@keyframes letter_spacing {
     0% {
          letter-spacing: 2px;
     }
     100% {
          letter-spacing: 4px;
     }
}

@keyframes letter_spacing_back {
     0% {
          letter-spacing: 4px;
     }
     100% {
          letter-spacing: 2px;
     }
}
</style>
