<template>
  <div class="testimonial flex col justify-center">
    <div class="testimonial-content">{{ testimonial.content }}</div>
    <div class="flex sign">
      <div class="img-container">
        <img class="test-img" :src="testimonial.img" />
      </div>
      <div class="flex col test-name">
        <div class="testimonial-name">{{ testimonial.name }}</div>
        <div class="testimonial-position">{{ testimonial.position }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimonial"],
  components: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
