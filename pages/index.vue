<script setup >
    import { components } from '~/slices'

    definePageMeta({ })
    onMounted(() => {});

    const { client } = usePrismic()
    const { data: page } = useAsyncData('homeMain', () => client.getByUID('page', 'homeMain'))
</script>

<template>
 <section class="relative" >
    <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
     />
</section>
</template>
<style lang="scss" scoped>
</style>