function getClockAngle(hh_mm: string): number {
  let time: string[] = hh_mm.split(":");
  let hr: number = parseInt(time[0]);
  let min: number = parseInt(time[1]);
  let value: number = 30 * hr - 5.5 * min;

  if (value > 180) {
    value = 360 - value;
  }

  return Math.abs(value);
}

getClockAngle("09:00");
getClockAngle("17:30");
