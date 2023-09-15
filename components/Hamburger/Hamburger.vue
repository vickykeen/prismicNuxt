<script setup>

    const { $gsap } = useNuxtApp()
 
    const menuOpen = ref(false);
    const menuItems = ref(null);


    const toggleMenu = (event) => {
      event.preventDefault();
      menuOpen.value = !menuOpen.value;
      animateMenu();
    };

    const animateMenu = () => {
      const tl =  $gsap.timeline();
      if (menuOpen.value) {
        tl.to(menuItems.value, { clipPath:"inset(0 0 0% 0)", duration: 0.5, transform: "translate(0px, 0px)", stagger: 0.1,  display:"block" });
      } else {
        tl.to(menuItems.value, { clipPath:"inset(0 0 100% 0)", transform: "translate(0px, 0px)",  duration: 0.5, stagger: -0.1,
         onComplete : () =>{
          $gsap.set(menuItems.value, {
              display:"none"
          })
         }
        });
      }
    };

    onMounted(() => {
    // Initially set the opacity to 0 for the entire menu
      $gsap.set(menuItems.value, { clipPath:"inset(0 0 100% 0)", display:"none" });
    });
</script>

<template>
  <div class="mobile-menu">
    <button class="toggle-menu" @click="toggleMenu">{{ menuOpen ? 'Close' : 'Menu' }}</button>
    <ul ref="menuItems" class="menu-items">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>

<style scoped>
/* Add your CSS styles here */
.mobile-menu {
  /* Your menu styles */
  .toggle-menu{
    z-index: 88;
    position: relative;
  }
}

.menu-open {
  /* Your open menu styles */
}
.menu-items{
  position: fixed;
  background-color: rgb(148, 96, 93);
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  clip-path: inset(0 0 100% 0);
  will-change: clip-path;
  display: none;
}
</style>