<template>
<div class="option flex col space-between">
        <div class="img-container">
          <img :src="option.img" />
        </div>
        <div class="option-title">{{option.title}}</div>
        <div class="option-subtext">{{option.desc}}</div>
      </div>
</template>

<script>

export default {
  props: ['option'],
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