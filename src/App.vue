<template>
  <div class="flex flex-col items-start mx-8 my-2">
    <Suspense>
      <template #default>
        <TimeTracker/>
      </template>
      <template #fallback>
        Loading
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref, onUnmounted, onMounted} from 'vue';
import {ElapsedTime, TimeTrackingService} from "@/services/TimeTrackingService";
import {GetTimeLogs, SaveTimeLog} from '@/api/TimeApi';
import {TimeLog} from "@/models/requests/TimeLog";
import TimeTracker from "@/components/TimeTracker.vue";

export default defineComponent({
  name: 'App',
  components: {TimeTracker},
  setup() {

  }
});
</script>

<style lang="scss">
</style>
