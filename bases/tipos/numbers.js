"use strict";
(() => {
    let avengers = 10;
    console.log({ avengers });
    let villians = 20;
    console.log({ villians });
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123');
    console.log(avengers);
})();
