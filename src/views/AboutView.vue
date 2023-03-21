<template>
    <div class="w-full h-full relative flex flex-col items-center">
        <Navbar />
        <div class="w-4/5 sm:w-3/5 mt-24 sm:mt-48 relative">
            <h1 style="animation-duration: 0.5s;" class="text-5xl sm:text-6xl font-bold text-color-101B61 animate__animated animate__fadeInRightBig">About Me <span class="w-3 h-3 ml-[-7px] mb-[-1px] rounded-full bg-color-8002E0 inline-block"></span></h1>
            <hr style="animation-duration: 0.2s;" class="text-color-8002E0 bg-color-8002E0 p-[1px] w-28 mt-5 mb-5 animate__animated animate__fadeInRightBig">
            <p style="animation-delay: 0.5s;" class="font-light text-color-101B61 text-xl sm:text-2xl animate__animated animate__fadeIn">I discovered my passion for front end in a technical school during computer science classes. The first contact with code made this job extremely exciting for me. I am glad that I can turn them into a professional job.</p>
        </div>
        <div class="relative mt-10 sm:mt-24 flex flex-col items-center">
            <span style="animation-delay: 1s;" class="text-color-9AA09E tracking-[5px] text-xs animate__animated animate__fadeIn">SCROLL</span>
            <span style="animation-delay: 1.5s;" class="bg-color-9AA09E w-[1px] h-64 block text-color mt-5 animate__animated animate__fadeInUp"></span>
        </div>
        <div class="w-4/5 mt-20 flex flex-col items-center">
            <p class="text-md text-color-101B61 m-2 font-light mb-16 sm:w-96"><span class="font-bold">I am a front-end developer because</span> I believe that the visual aspect has contributed to the global development of technology to a large extent. In my opinion, if it wasn't for the graphical interface, we wouldn't be so eager to reach for the digitized world. Thanks to the visuals, we interact with the application. It becomes a place where we spend our time pleasantly. Therefore, it should be made a more inspiring place. A place that changes us. I am glad that I can contribute to this.</p>
            <span ref="secoundSpanLine" style="animation-delay: 1.5s;" class="h-48 bg-color-9AA09E w-[1px] block text-color mt-5 mb-10"></span>
        </div>
        <div class="w-4/5 flex flex h-full">
            <div class="w-full sm:w-96 h-full bg-color- self-center mt-5 rounded">
                <h1 class="text-2xl text-color-101B61 font-bold mt-10 ml-5">Full list of skills</h1>
                <ul class="list-disc ml-10 my-10 text-color-101B61 font-light text-xl">
                    <li v-if="activeAnimationListSkills" style="animation-delay: 0.0s;" class="m-2 animate__animated animate__fadeInRightBig">HTML</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 0.3s;" class="m-2 animate__animated animate__fadeInRightBig">CSS</li>
                    <li v-if="activeAnimationListSkills" style="animation-delay: 0.6s;" class="m-2 animate__animated animate__fadeInRightBig">SCSS</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 0.9s;" class="m-2 animate__animated animate__fadeInRightBig">Tailwind CSS</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 1.2s;" class="m-2 animate__animated animate__fadeInRightBig">Bootstrap 5</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 1.5s;" class="m-2 animate__animated animate__fadeInRightBig">JSON</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 1.8s;" class="m-2 animate__animated animate__fadeInRightBig">JavaScript</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 2.1s;" class="m-2 animate__animated animate__fadeInRightBig">TypeScript</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 2.4s;" class="m-2 animate__animated animate__fadeInRightBig">Vue 3</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 2.7s;" class="m-2 animate__animated animate__fadeInRightBig">Firebase 9</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 3.0s;" class="m-2 animate__animated animate__fadeInRightBig">VSCode</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 3.3s;" class="m-2 animate__animated animate__fadeInRightBig">ESLint</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 3.6s;" class="m-2 animate__animated animate__fadeInRightBig">Vite</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 3.9s;" class="m-2 animate__animated animate__fadeInRightBig">Vue CLI</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 4.2s;" class="m-2 animate__animated animate__fadeInRightBig">Git</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 4.5s;" class="m-2 animate__animated animate__fadeInRightBig">GitHub</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 4.8s;" class="m-2 animate__animated animate__fadeInRightBig">Netlify</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 5.1s;" class="m-2 animate__animated animate__fadeInRightBig">Figma</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 5.4s;" class="m-2 animate__animated animate__fadeInRightBig">Adobe XD</li>
                    <li v-if="activeAnimationListSkills"  style="animation-delay: 5.7s;" class="m-2 animate__animated animate__fadeInRightBig">SEO</li>
                </ul>
            </div>
            <div class="w-2/3 mt-5 hidden sm:flex justify-center items-center">
                <img src="../assets/icons/ui.png" alt="ui">
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar
    },
    setup () {
        const activeAnimationListSkills = ref(false);
        const secoundSpanLine = ref();

        onMounted(() => {
            window.addEventListener('scroll', () => {
                const scrollPosiotion = window.scrollY;
                const secoundSpanLinePosition = secoundSpanLine.value.getBoundingClientRect().top;

                if (scrollPosiotion + 500 > secoundSpanLinePosition) {
                    activeAnimationListSkills.value = true;
                } else {
                    activeAnimationListSkills.value = false;
                }
            
                
            })
        })

        return {activeAnimationListSkills, secoundSpanLine}
    }
}
</script>

<style lang="scss" scoped>

</style>