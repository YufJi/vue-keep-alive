<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{time}}</div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'about',
  computed: {
    time() {
      return new Date().toString()
    },
  },
  mounted() {
    console.log('about', new Date().toString());
  }
}
</script>
