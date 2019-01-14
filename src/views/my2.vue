<template>
  <div class="about">
    <h1>This is an my page</h1>
    <div>{{time}}</div>
    <input type="text" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'my',
  data: {
    info: {
      list: ['1','2']
    }
  },
  computed: {
    time() {
      return new Date().toString()
    },
    key(){
      console.log(this.$route.fullPath.replace(/\/bb\/\d/g, ''), 'xxxx');
      return this.$route.fullPath.replace(/\/bb\/\d/g, '');
    }
  },
  mounted() {
    console.log('about', new Date().toString());
  },
  methods: {

  }
}
</script>
