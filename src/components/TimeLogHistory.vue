<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row bg-gray-200 font-bold py-2">
      <div class="w-full px-2">Name</div>
      <div class="w-full px-2">Notes</div>
      <div class="w-full px-2">Timestamp</div>
      <div class="w-full px-2">Duration</div>
    </div>
    <div class="flex flex-row bg-gray-50 py-2" v-for="log of timeLogs">
      <div class="w-full px-2">{{ log.name }}</div>
      <div class="w-full px-2">{{ log.notes }}</div>
      <div class="w-full px-2">{{ new Date(log.timestamp).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}}</div>
      <div class="w-full px-2">
        {{ getHours(log.durationInSeconds) }}:{{ getMinutes(log.durationInSeconds) }}:{{ getSeconds(log.durationInSeconds) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
import {TimeLog} from "@/models/requests/TimeLog";
import {getElapsedTime, prependZero} from "@/services/TimeTrackingService";

export default defineComponent({
  name: 'TimeLogHistory',
  props: {
    timeLogs: {
      type: Array as PropType<TimeLog[]>
    }
  },
  setup() {
    // I know this is inefficient. Get over it.
    function getHours(timeInSeconds: number): string {
      return prependZero(getElapsedTime(timeInSeconds).hours);
    }

    function getMinutes(timeInSeconds: number): string {
      return prependZero(getElapsedTime(timeInSeconds).minutes);
    }

    function getSeconds(timeInSeconds: number): string {
      return prependZero(getElapsedTime(timeInSeconds).seconds);
    }

    return {getHours, getMinutes, getSeconds};
  }
})
</script>

<style scoped lang="scss">

</style>