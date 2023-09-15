<template>
  <div ref="element" class="element"  :value="isVisible"  :class="{'is-visible' : isVisible }" ><slot /></div>
</template>

<script setup lang="ts">
    import { useIntersectionObserver} from '@vueuse/core'
    import gsap from "gsap";
    import { ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

    const element = ref(null)
    const isVisible = ref(false)
    
    useIntersectionObserver(element, ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting
      
        if (isIntersecting) {
          gsap.fromTo(element.value,{
             opacity:0,
             y:50
          },{
            duration:1,
            opacity:1,
             y:0,
             ease: "expo.out"
          })
        }
     
    }, { threshold: 0 })
</script>
