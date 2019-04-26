<template>
  <div class="layout-container">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {}
  }
}
</script>
