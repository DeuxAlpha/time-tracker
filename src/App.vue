<template>
  <div class="flex flex-col items-start mx-8 my-2">
    <div class="mb-4">
      <button v-if="!tracking" class="bg-blue-400 text-white hover:shadow hover:bg-blue-300 py-2 px-4">
        Start
      </button>
      <button v-else class="bg-yellow-400 text-white hover:shadow hover:bg-yellow-300 py-2 px-4">
        Stop
      </button>
    </div>


  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const tracking = ref(false);

    return {
      tracking
    }
  }
});
</script>

<style lang="scss">
</style>
