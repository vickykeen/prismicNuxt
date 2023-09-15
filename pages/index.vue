<script setup >

    const { $gsap } = useNuxtApp()
    const { $Observer } = useNuxtApp()
    import { inView, animate,stagger } from "motion";
    definePageMeta({ })
    // onMounted(() => { 

    //     inView(".test", ({ target }) => {
    //         animate(
    //             target.querySelectorAll(".word>.char"),
    //             { opacity: 1, transform: "none" },
    //             { delay: stagger(0.05), duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    //         );
    //     });

    // })
  // Add a listener for the scroll event
  const scrollContainer = ref(null);
  onMounted(() => {
    scrollContainer.value.addEventListener("scroll", handleScroll);
  });

  // Define the scroll event handler
  const handleScroll = () => {
    // Check if the user has scrolled to the bottom of the content
    const container = scrollContainer.value;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      // User has scrolled to the bottom, load more images here
      loadMoreImages();
    }
  };
    const imageSources = [
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
        {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
    ]

//     const visibleImages = ref(4); // Initial number of visible images
//   const totalImages = ref(imageSources.length);

//   const loadMoreImages = () => {
//     // Increase the number of visible images
//     visibleImages.value += 4; // You can change this number as needed

//     // Check if all images have been loaded
//     if (visibleImages.value >= totalImages.value) {
//       // All images are loaded
//     }
//   }; 

const loadMoreImages = () => {
    // Increase the number of visible images
    visibleImages.value += 2; // You can change this number as needed

    // Check if all images have been loaded
    if (visibleImages.value >= totalImages.value) {
      // All images are loaded
    }
  };
</script>

<template>
 <section class="" ref="scrollContainer">
    <div class="mb-10">
        <figure class="hero-image ">
            <div class="hero-image-wrapper">
                <NuxtImg class="w-full" src="https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true" />
            </div>
             <div class="hero-search">
                <div class="hero-search-wrapper">
                    <div class="hero-search-item px-4 md:px-0">
                        <div class="text-center mb-4">
                            <p>Free curated AI generated images</p>
                        </div>
                        <form action="" class="mx-auto relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 " placeholder="Search images..." required>
                        </form>
                    </div>
                    <div>
                        
                    </div>
                </div>
             </div>
        </figure> 
    </div>
    <article class=""  >
        <div class="grid xl:grid-cols-8 md:grid-cols-6 w-full">
            <div class="col-span-2 image-container" v-for="(imageSource, index) in imageSources" >
                <div class="p-4 ">
                    <div class="image-wrapper">
                        <NuxtImg  class="w-full image-source" :src="imageSource.url" />
                    </div>
                    <div class="mt-4 flex justify-between items-center image-content">
                        <div class="flex items-center">
                            <span> <NuxtImg class="h-10 w-10 flex-none rounded-full" src="https://tailwindui.com/img/avatar-3.jpg" /> </span><span class="ml-4 flex-auto">{{ imageSource.author }}</span>
                        </div>
                        <div class="flex items-center">
                            <SvgDownload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
      <!-- Add a load more button or trigger -->
  <!-- <div class="flex justify-center test">
    <span>
      <button @click="loadMoreImages">Load More Images</button>
    </span>
  </div> -->
	<div class="flex justify-center test ">
       <span>
            <TextSplit>asdasdasd</TextSplit>  
       </span> 
	</div>  
</section>
</template>
<style lang="scss" scoped>
 .hero-image{
    position: relative;
    height: 45rem;
    &-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
 }
 .hero-search{
    position: relative;
    height: 100%;
    &-wrapper{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &-item{
        margin-bottom: auto;
        margin-top: auto;
        width: 100%;
        @media (min-width: 768px){
            margin-inline: auto;
            max-width: 1320px;
            form{
                 width: 66.66%;
            }
        }
    }

 }
 .image-source{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
 }
 .image-container{
    border-bottom: 1px dashed #cdcdcd;
    @media (min-width: 1280px){
        &:nth-child(2n+1){
            border-right: 1px dashed #cdcdcd;
            border-left: 1px dashed #cdcdcd;
        }  

    }
    @media (max-width: 768px){
        &:nth-child(1n+1){
            border-right: 1px dashed #cdcdcd;
            border-left: 1px dashed #cdcdcd;
        }  

    }
 }
 .image-wrapper{
    position: relative;
    aspect-ratio: 1;
 }
 .image-content{
    color:#1d1d1d
 }
</style>
<style >
    #target .word .char {
      display: block;
      transform: translateX(-100px);
      opacity: 0;
    }
</style>