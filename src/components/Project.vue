<template>
     <div class="w-full flex my-10 flex-col justify-center items-center sm:flex-row">
          <div class="w-full sm:w-1/3">
               <img :src="data.img_src" alt="jm" />
          </div>
          <div class="w-full sm:w-2/3 sm:pl-10 flex flex-col justify-center mt-10 sm:mt-0">
               <a class="hover:underline" :href="data.link" target="_blank">
                    <h1 class="text-xl sm:text-2xl font-bold text-color-101B61 cursor-pointer mt-[-10px] sm:mt-0">{{ data.name }}</h1>
               </a>
               <p class="max-w-[500px] p-4 font-thin">{{ data.description}}</p>
               <div class="flex items-center justify-center sm:justify-start cursor-pointer">
                    <img class="w-8 rounded" src="../assets/icons/github.png" alt="github" />
                    <a :href="data.github_link" target="_blank">
                         <p class="m-2 w-16 text-center tracking-[3px] text-color-8002E0 code">code</p>
                    </a>
               </div>
          </div>
     </div>
</template>

<script>

export default {
     props: ['data'],
     setup(props) {
     
     }
};
</script>

<style lang="scss" scoped>
.code {
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
