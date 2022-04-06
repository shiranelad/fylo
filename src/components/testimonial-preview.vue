<template>
<div class="testimonial flex col space-between">
        <div class="img-container">
          <img :src="testimonial.img" />
        </div>
        <div class="testimonial-title">{{testimonial.content}}</div>
        <div class="testimonial-subtext">{{testimonial.name}}</div>
        <div class="testimonial-subtext">{{testimonial.position}}</div>
      </div>
</template>

<script>

export default {
  props: ['testimonial'],
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>