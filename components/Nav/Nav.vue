<script setup>


</script>

<template>
  <nav class="menu">
    <div class="flex justify-between py-3 px-4">
      <div class="flex items-center w-full">
          <div class="mr-4"> <NuxtLink to="/"><SvgLogo /></NuxtLink></div>
          <div class="search-menu">
              <form class="search-menu-form">   
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                  <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 nav-search" placeholder="Search images..." required>
                      <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
                  </div>
              </form>
          </div>
      </div>
      <div class="flex"><Hamburger /></div>
    </div>
    <form class="search-menu-form--mobile px-4 pb-3">   
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                  <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 nav-search" placeholder="Search images..." required>
                      <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
                  </div>
    </form>
  </nav>
</template>

<style lang="scss" scoped>
.menu{
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: aliceblue;
  border-bottom: 1px solid #000;
}
.search-menu-form{
  @media screen and (max-width: 768px) {
    display:none ;
  }
  width: 35rem;
  input{
    &:focus-visible{
      outline: none;
    }
  }
}
.search-menu-form--mobile{ 
  @media screen and (min-width: 768px) {
    display:none ;
  }
}
.nav-search{
  border: 1px solid #1d1d1d;
}
</style>