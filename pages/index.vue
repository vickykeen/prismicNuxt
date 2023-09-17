<script setup >

    const { $gsap } = useNuxtApp()
    const { $Observer } = useNuxtApp()
    import { inView, animate,stagger } from "motion";
    import ImageKit from "imagekit";
    
    definePageMeta({ })

    const imageSources = ref([]);


//   const imageSources = [
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/70b2d3a9-59dd-49df-aa93-ec0020b33c82.png?tr=w-1920,q-75&alt=media&pr-true", author:"David vic"},
//         {url:"https://ik.imagekit.io/freeflo/production/be204dc8-2fd6-46ff-8f4a-0bb5906f308e.png?tr=w-640,q-75&alt=media&pr-true", author:"David vic"},
//     ]
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

  const loadMoreImages = () => {
    // Increase the number of visible images
    visibleImages.value += 2; // You can change this number as needed

    // Check if all images have been loaded
    if (visibleImages.value >= totalImages.value) {
      // All images are loaded
    }
  };
  const selectedImage = ref(null);
  const openLightbox = (image) => {
        selectedImage.value = image;
 };
 const closeLightbox = () => {
  selectedImage.value = null;
};

</script>

<template>
 <section class="relative" ref="scrollContainer">
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
                            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 hero-search-input" placeholder="Search images..." required>
                        </form>
                    </div>
                    <div>
                        
                    </div>
                </div>
             </div>
        </figure> 
    </div>

    <article>
        <div class="grid xl:grid-cols-8 md:grid-cols-6 w-full">
            <div class="col-span-2 image-container" v-for="(imageSource, index) in imageSources"  :key="index" @click="openLightbox(imageSource)" >
                <div class="p-4 ">
                    <div class="image-wrapper">
                        <!-- <NuxtImg  class="w-full image-source"  :src="imageSource.url"  draggable="false" loading="lazy" decoding="async" /> -->
                        <NuxtImg  class="w-full image-source" provider="imagekit" src="/default-image.jpg" draggable="false" loading="lazy" decoding="async" />
                    </div>
                    <div class="mt-4 flex justify-between items-center image-content">
                        <div class="flex items-center">
                            <span> <NuxtImg class="h-10 w-10 flex-none rounded-full" src="https://tailwindui.com/img/avatar-3.jpg" /> </span><span class="ml-4 flex-auto">{{  }}</span>
                        </div>
                        <div class="flex items-center">
                            <SvgDownload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>

    <div class="image-preview" v-if="selectedImage" >
        <article class="">
            <div class="grid grid-cols-12 items-center image-preview-header">
                <div class="xl:col-span-2 col-span-3 image-preview-author xl:px-10 px-4 py-4">
                    <div class="flex items-center">
                        <span> <NuxtImg class="h-10 w-10 flex-none rounded-full" src="https://tailwindui.com/img/avatar-3.jpg" /> </span><span class="ml-4 flex-auto">asdasd</span>
                    </div>
                </div>
                <div class="xl:col-span-8 col-span-6 py-4 h-full flex justify-center items-center">
                    <div class="relative" @click="closeLightbox">
                        <span class="image-preview-close" >
                            <SvgClose  />
                        </span> 
                    </div>
                </div>
                <div class="xl:col-span-2 col-span-3 image-preview-download h-full xl:px-10 px-4 py-4 flex justify-center items-center">
                    <div class="flex justify-end items-center gap-4 ">
                       <span class="image-preview-svg"><SvgDownload /></span><span>Donwload</span>
                    </div>
                </div>
            </div>
            <figure class="image-preview-item mx-auto mt-14">
                <div class="flex justify-center items-center">
                     <NuxtImg :src="selectedImage.url"  draggable="false" loading="lazy" decoding="async"  />
                 </div>
                 <div class="flex pt-10 gap-10">
                    <aside class="flex flex-col"><span>Views</span><span>20,500</span></aside>
                    <aside class="flex flex-col"><span>Downloads</span><span>20,500</span></aside>
                    <aside class="flex flex-col"><span>Size</span><span>400x520</span></aside>
                 </div>
            </figure>
        </article>
    </div>
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
.image-preview-author{
    border-right: 1px solid #cdcdcd;
}
.image-preview-download{
    border-left: 1px solid #cdcdcd;
}
 .image-preview-item{
    max-width: calc((100vh - 250px) * 0.75);
 }
 .hero-search-input{
    border: 1px solid #1d1d1d;
 }
 .image-preview-close{
    position: relative;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    &::after{
        content: "";
        position: absolute;
        background-color: #cdcdcd;
        height: 100%;
        width: 100%;
        padding: 1.2rem;
        border-radius: 50%;
        z-index: -1;
    }
 }
 .image-preview{
    background-color: #1d1d1d;
    height: 100vh;
    width: 100%;
    z-index: 99;
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
 }
 .image-preview-header{
    border-bottom: 1px solid #cdcdcd;
 }
</style>
<style >
    #target .word .char {
      display: block;
      transform: translateX(-100px);
      opacity: 0;
    }
.image-preview-svg svg path {
    stroke: #fafafa;
}
</style>