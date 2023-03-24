<template>
    <div class="w-full h-[calc(100vh-40px)] flex flex-col justify-center items-center">
        <p class="text-4xl text-color-101B61 font-bold">Page Not Found</p>
        <p class="text-4xl text-color-101B61 font-bold">404</p>
        <p class="text-xl text-color-101B61 font-normal mt-5">Please wait, the page is loading...</p>
    </div>
</template>

<script>
import  { useRouter } from 'vue-router';

export default {
    setup () {
        
        const router = useRouter();

        setTimeout(() => {
            router.push({ name: 'home'})
        }, 1000)

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>