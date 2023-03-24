<template>
    <div class="fixed bottom-[20px] w-[calc(100%-40px)] bg-color-A9DCEC h-32 flex justify-center items-center z-50">
        <div class="flex items-center mx-5">
            <p class="text-color-101B61">We use cookies to make your experience better</p>
            <span @click="sendEvent" class="ml-5 bg-color-8002E0 py-2 px-8 rounded-full text-color-FFFFFF cursor-pointer">OK</span>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['handleCookiesAccept'],
        setup(props, { emit }) {

            const sendEvent = () => {
                emit('handleCookiesAccept');
            }

            return { sendEvent }
        }
    }
</script>

<style lang="scss" scoped>

</style>