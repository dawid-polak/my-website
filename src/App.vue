<template>
   
    <router-view></router-view>


</template>

<script>
import { onMounted } from 'vue';
import Cookies from 'universal-cookie';

export default {
     setup() {
         onMounted(() => {

             const cookies = new Cookies();
            
            if (!cookies.get('lang')){
                cookies.set('lang', 'EN');
            };

        });

     },
};
</script>

<style lang="scss" scoped></style>
