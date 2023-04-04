<template>
  <div class="flex flex-wrap justify-content-between align-items-center">
    <div>
      <Button
        icon="pi pi-bars"
        @click="visible = true"
      ></Button>
    </div>

    <div><h1 class="app-title">JS Hiroba</h1></div>
    <div><Button>Log in</Button></div>
  </div>

  <!-- SideNav -->
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <h2>Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
  </div>
</template>

<script setup>
const visible = ref(false);
</script>

<style>
.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #361c1c;
}
</style>
