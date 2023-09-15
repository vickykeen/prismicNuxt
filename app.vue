<script lang="ts" setup>
  const locale = useState<string>('locale.setting')
  useHead({

  })
  useFont([
    {
      src: '/fonts/JUST Sans ExBold.woff2',
      family: 'Just Ext',
      weight: '900',
      fallback: ['sans-serif'],
      variable: 'font_just_ext' 
    },
    {
      src: '/fonts/JUST Sans Regular.woff2',
      family: 'Just Reg',
      weight: '300',
      fallback: ['sans-serif'],
      variable: 'font_just_reg' 
    },
    {
      src: '/fonts/JUST Sans SemiBold.woff2',
      family: 'Just Semi',
      weight: '100 900',
      fallback: ['sans-serif'],
      variable: 'font_just_Semi' 
    },
    {
      src: '/fonts/Eugenia.woff2',
      family: 'Eugenia',
      weight: '100 900',
      fallback: ['serif'],
      variable: 'font_eugenia' 
    },
  ])
</script>
<template>
  <Html lang="en"> 
      <main class="app">
        <!-- <Preload /> -->
        <Nav />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <!-- <Footer /> -->
      </main>
  </Html>
</template>
<style>
.app {
  min-height: 100vh;
  margin: 0 auto;

}

</style>