// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
          '@nuxtjs/prismic', 
          '@vueuse/nuxt',
          '@nuxtjs/tailwindcss',
          '@nuxt/image-edge',
          'nuxt-swiper',
          '@hypernym/nuxt-gsap',
          '@hypernym/nuxt-font',
     ],
     
     css: [
          '~/assets/styles/main.scss',
          '~/assets/css/fonts.css'
     ],
     gsap: {
          extraPlugins: {
            scrollTrigger: true,
            draggable: true,
            flip: true,
            observer:true,
          }
     },
     font: {
          autoImport: true,
     },

     tailwindcss: {
          cssPath: '~/assets/css/tailwind.css',
          configPath: 'tailwind.config.js',
          exposeConfig: false,
          injectPosition: 0,
          viewer: true,
     },
     build: {
          transpile: ['swiper']
     }
})
