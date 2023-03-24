<template>
     <ModalCookies v-if="!cookiesAccepted" @handleCookiesAccept="cookiesAccept" />
     <BtnGoTop v-if="scrolled" />
     <router-view></router-view>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
import Cookies from "universal-cookie";
import checkWindowScrolled from "./composable/checkWindowScrolled.js";

import ModalCookies from "./components/ModalCookies.vue";
import BtnGoTop from "./components/BtnGoTop.vue";
export default {
     components: {
          ModalCookies,
          BtnGoTop,
     },
     setup() {
          const cookies = new Cookies();
          const cookiesAccepted = ref(false);
          const { scrolled } = checkWindowScrolled(200);

          onMounted(() => {
               if (!cookies.get("lang")) {
                    cookies.set("lang", "EN");
               }

               if (!cookies.get("cookiesAccepted")) {
                    cookies.set("cookiesAccepted", false);
               }
          });

          const cookiesAccept = () => {
               cookies.set("cookiesAccepted", true);

               if (cookies.get("cookiesAccepted") === "true") {
                    cookiesAccepted.value = true;
               }
          };

          if (cookies.get("cookiesAccepted") === "true") {
               cookiesAccepted.value = true;
          }

          return { cookiesAccepted, cookiesAccept, scrolled };
     },
};
</script>

<style lang="scss" scoped></style>
