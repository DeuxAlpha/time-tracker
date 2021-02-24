<template>
  <div class="mb-4">
    <button v-if="!tracking" @click="onStartTracking"
            class="bg-blue-400 text-white hover:shadow hover:bg-blue-300 py-2 px-4">
      Start
    </button>
    <button v-else @click="onStopTracking"
            class="bg-yellow-400 text-white hover:shadow hover:bg-yellow-300 py-2 px-4">
      Stop
    </button>
  </div>
  <div class="bg-red-400 py-2 px-4 flex flex-row space-x-1 text-white font-bold my-2" v-if="tracking">
    <span>{{ prependZero(elapsedTime.hours) }}</span>
    <span>:</span>
    <span>{{ prependZero(elapsedTime.minutes) }}</span>
    <span>:</span>
    <span>{{ prependZero(elapsedTime.seconds) }}</span>
  </div>
  <div class="flex flex-col" v-if="tracking">
    <div class="flex flex-col my-2">
      <label for="name">Name</label>
      <input class="border" id="name" v-model="name">
    </div>
    <div class="flex flex-col my-2">
      <label for="notes">Notes</label>
      <textarea class="border w-80 h-24" id="notes" v-model="notes"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onUnmounted, Ref, ref} from 'vue';
import {ElapsedTime, TimeTrackingService} from "@/services/TimeTrackingService";
import {SaveTimeLog} from "@/api/TimeApi";

export default defineComponent({
  name: 'TimeTracker',
  async setup() {
    const tracking = ref(TimeTrackingService.Tracking);
    const elapsedTime = ref(null) as Ref<null | ElapsedTime>;
    const name = ref('');
    const notes = ref('');
    const timestamp = ref(new Date());

    function onStartTracking() {
      timestamp.value = new Date();
      TimeTrackingService.StartTimeTracking();
      tracking.value = TimeTrackingService.Tracking;
    }

    async function onStopTracking() {
      if (!name) return;
      await SaveTimeLog({
        durationInSeconds: TimeTrackingService.ElapsedTime,
        name: name.value,
        notes: notes.value,
        timestamp: timestamp.value
      });
      TimeTrackingService.StopTimeTracking();
      tracking.value = TimeTrackingService.Tracking;
    }

    TimeTrackingService.OnTickEvent.subscribe(updateTime);

    onUnmounted(() => {
      TimeTrackingService.OnTickEvent.unsubscribe(updateTime);
    })

    function updateTime(time: ElapsedTime) {
      elapsedTime.value = time;
    }

    function prependZero(number: number): string {
      if (number < 9) return "0" + number;
      return number.toString();
    }

    return {
      tracking,
      onStartTracking,
      onStopTracking,
      elapsedTime,
      name,
      notes,
      prependZero,
    }
  }
})
</script>

<style scoped lang="scss">

</style>