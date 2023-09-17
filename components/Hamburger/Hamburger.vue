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
    <div ref="menuItems" class="menu-items">
      <div class="mr-4 py-3 px-4"> 
        <NuxtLink to="/" @click="toggleMenu"><SvgLogo /></NuxtLink>
      </div>
      <ul class="menu-items-list px-4">
        <li class="menu-item"><NuxtLink to="/about" class="menu-item-link" @click="toggleMenu">About</NuxtLink></li>
        <li class="menu-item"><NuxtLink to="/about" class="menu-item-link"  @click="toggleMenu">About</NuxtLink></li>
        <li class="menu-item"><NuxtLink to="/about" class="menu-item-link" @click="toggleMenu">Contact</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Add your CSS styles here */
.toggle-menu{
  color:#1d1d1d;
}
.mobile-menu {
  /* Your menu styles */
  display: flex;
  align-items: center;
  .toggle-menu{
    z-index: 88;
    position: relative;
  }
}

.menu-open {
  /* Your open menu styles */
}
.menu-items-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.menu-item-link{
  font-size: 10rem;
  line-height: .8;
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