<template>
  <a
    class="header__button"
    @click="methodGoTo"
    v-lazy:background-image="buttonHeader"
    :href="!this.target ? orderLink : null"
    target="_blank"
  >
    <div class="header__button--text white--text">{{this.text}}</div>
  </a>
</template>
<script>
import { mapGetters } from 'vuex';
import constVar from '@/utils/constVar';
import buttonHeader from '../assets/button/button_header.png';

export default {
  name: 'headerButton',
  props: ['text', 'target', 'directToPage'],
  data() {
    return {
      localText: '',
      buttonHeader,
      constVar,
    };
  },
  computed: {
    currentURL() {
      return this.$route.path;
    },
    ...mapGetters({
      orderLink: 'orderLink',
    }),
  },
  methods: {
    methodGoTo() {
      if (!this.target) return;
      const targetClass = `.outer-${this.target}`;
      if (this.directToPage) {
        this.$router.push(this.target);
      } else if (
        document.querySelectorAll(targetClass).length > 0
        && this.$route.name !== this.target
      ) {
        this.$vuetify.goTo(targetClass, this.constVar.scrollPagAni);
      } else {
        this.$router.push('/home');
        setTimeout(() => {
          this.$vuetify.goTo(targetClass, this.constVar.scrollPagAni);
        }, 300);
      }
    },
  },
};
</script>
