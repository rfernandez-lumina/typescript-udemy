(() => {
    let avenger: any = 123;
    let exits;
    let power;

    avenger = 'Dr Strange';

    console.log((avenger as string).charAt(0));

    avenger = 150.23256415;
    console.log(avenger.toFixed(2));

    console.log(exits);
    console.log(power);
})()