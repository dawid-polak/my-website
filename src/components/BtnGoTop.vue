<template>
     <div @click="scrollToTop" class="fixed bottom-[50px] right-[50px] h-12 w-12 bg-color-A9DCEC h-32 flex justify-center items-center z-50 rounded fixed justify-center items-center cursor-pointer">
          <img class="w-6 h-6" src="../assets/icons/top.png" alt="arowTop" />
     </div>
</template>

<script>
export default {
     setup() {
          const scrollToTop = () => {
               window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
               });
          };

          return { scrollToTop };
     },
};
</script>

<style lang="scss" scoped></style>
