import {SimpleEventDispatcher} from 'strongly-typed-events';
import {computed, ComputedRef} from "vue";

export class TimeTrackingService {
  private static elapsedTime = 0;
  private static tracking = false;
  private static intervalInstance: NodeJS.Timeout

  private static onTickEvent = new SimpleEventDispatcher<ElapsedTime>();

  public static get Tracking(): boolean {
    return this.tracking;
  }

  public static get ElapsedTime(): number {
    return this.elapsedTime;
  }

  public static StartTimeTracking() {
    this.tracking = true;
    this.intervalInstance = setInterval(() => {
      this.elapsedTime += 1;
      this.onTickEvent.dispatch(this.getElapsedTime());
    }, 1000)
  }

  /** Stops the timer, resets the elapsed time value, and returns the overall elapsed amount of time. */
  public static StopTimeTracking(): number {
    const elapsedCopy = TimeTrackingService.elapsedTime;
    this.tracking = false;
    this.elapsedTime = 0;
    clearInterval(this.intervalInstance);
    return elapsedCopy;
  }

  public static get OnTickEvent() {
    return this.onTickEvent.asEvent();
  }

  private static getElapsedTime(): ElapsedTime {
    const sec = this.ElapsedTime;
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    // add 0 if value < 10; Example: 2 => 02
    return {
      allSeconds: this.ElapsedTime,
      hours,
      minutes,
      seconds
    }
  }
}

export type ElapsedTime = {
  allSeconds: number;
  seconds: number;
  minutes: number;
  hours: number;
}