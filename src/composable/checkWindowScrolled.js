import {
    ref
} from 'vue';

let scrolled = ref(false);

const checkWindowScrolled = (expectedScrollValue) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > expectedScrollValue) {
            scrolled.value = true;
        } else {
            scrolled.value = false;
        }
    })

    return {
        scrolled
    }
}

export default checkWindowScrolled;