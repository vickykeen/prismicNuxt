// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
          '@vueuse/nuxt',
          '@nuxtjs/tailwindcss',
          '@nuxt/image-edge',
          'nuxt-swiper',
          '@hypernym/nuxt-gsap',
          '@hypernym/nuxt-font',
          '@nuxtjs/prismic',
     ],
     prismic: { endpoint: 'renderwit' },
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
     // image: {
     //      imagekit: {
     //        baseURL: 'https://ik.imagekit.io/lds4myi98'
     //      }
     // },
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