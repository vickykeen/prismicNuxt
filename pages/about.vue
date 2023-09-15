<script setup>

    import { useToggle } from '@vueuse/core'

 
    const { $ScrollTrigger } = useNuxtApp()
    const { $gsap } = useNuxtApp()
    const { $Draggable } = useNuxtApp()
    const { $Flip } = useNuxtApp()
    const { $Observer } = useNuxtApp()


    definePageMeta({
    })
 
    onMounted(() => {
    })


</script>

<template>
    <div >
        <section class="flex justify-center">
                This is About
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>