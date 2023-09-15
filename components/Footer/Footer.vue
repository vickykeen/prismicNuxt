<script setup lang="ts">

</script>
<template>
    <footer class="footer">
        <div class="container_wrapper mx-auto">
            <div>
                <h1 class="uppercase">
                    Let's Talk
                </h1>
                <p class="text-4xl flex">About</p>
            </div>
            <div class="flex mt-10">
                <div class="uppercase flex flex-col footer_info font_just_ext">
                    <span class="text-6xl">COLLABORATION</span>
                    <span class="text-6xl">PROJECTS</span>
                    <span class="text-6xl">Enquiry</span>
                    <span class="mt-5"><nuxt-link to="/">Contact Me</nuxt-link></span>
                </div>
                <div class="flex flex-col gap-y-2 footer_socials ml-auto">
                    <span><nuxt-link to="/">Facebook</nuxt-link></span>
                    <span><nuxt-link to="/">Instagram</nuxt-link></span>
                    <span><nuxt-link to="/">LinkedIn</nuxt-link></span>
                </div>
            </div>
        </div>
        <div class="footer_copyright pt-10 px-10">
            <div class="footer_copyright_info flex justify-between py-4">
                <span>vicky © 2023</span>
                <span>Designed and developed by Vicky</span>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer_info{
    font-family: var(--font_just_ext);
}
.footer_copyright_info{
    border-top: 1px solid #1a1a1e;
}
</style>