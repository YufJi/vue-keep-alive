<template>
  <div class="about">
    <h1>This is an my page</h1>
    <div>{{time}}</div>
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: 'bb',
  data: {

  },
  computed: {
    time() {
      return new Date().toString()
    }
  },
  mounted() {
    console.log('about', new Date().toString());
  },
  methods: {

  }
}
</script>
