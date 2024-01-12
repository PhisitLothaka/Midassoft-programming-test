function minEnergy(
  start: number,
  shop: number[],
  bus: number[],
  end: number
): number {
  const me: {
    where: number;
    shop: [number, boolean][];
    power: number[];
  } = { where: 0, shop: [], power: [] };

  me.where = start;

  shop.forEach((number) => {
    me.shop.push([number, false]);
  });
  let road: number[] = [];
  for (let i = start; i <= end; i++) {
    road.push(i);
  }

  shop.forEach((shop, idx) => {
    if (me.shop[idx][1] === false) {
      // ถ้า bus ใกล้กว่าเดิน
      if (
        Math.abs(me.where - bus[idx]) +
          Math.abs(bus[idx + 1] - me.shop[idx][0]) <
        Math.abs(me.where - me.shop[idx][0])
      ) {
        let busToShop: number[] = [];
        let meToBus: number[] = [];

        bus.forEach((bus) => {
          meToBus.push(Math.abs(me.where - bus));
          busToShop.push(Math.abs(me.shop[idx][0] - bus));
        });
        me.power.push(Math.min(...meToBus));
        me.where = me.shop[idx][0] - Math.min(...busToShop);
      }
      me.power.push(Math.abs(me.where - shop));
      me.where = me.shop[idx][0];
      me.shop[idx][1] = true;
    }
  });

  me.power.push(Math.abs(me.where - end));
  me.where = end;

  let result: number = 0;
  me.power.forEach((power) => {
    result += power;
  });

  return result;
}

minEnergy(0, [4, 9], [3, 6, 8], 11);
