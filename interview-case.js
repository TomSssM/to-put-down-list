function interviewCase() {

  function promiseInGame() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    Promise.resolve(3).then(a => console.log(a));

    // WTF
    // new Promise( (res, rej) => {
    //   console.log('p', 1);
    //   console.log('p', 2);
    //   throw new Error('fhdjfhsdjf');
    //   console.log('p', 3);
    // });

    // Promise { state: success }

    console.log(4);
  }

  function difficultPromiseInGame() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    Promise.resolve(3)
      .then(a => {
        console.log(a); // 3
        return a + 1; // 4
      })
      .then(a => {
        console.log(a); // 4
        return Promise.resolve(a + 1) // 5
      })
      .then(a => console.log(a)); // 5

      Promise.resolve(6)
        .then(a => console.log(a));

    console.log(7);
  }

  function trickyPromise() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    new Promise((res, rej) => {
      console.log(3);
      res(4);
    }).then(a => console.log(a));

    console.log(5);
  }

  // promiseInGame();
  // difficultPromiseInGame();
  // trickyPromise();
}

interviewCase();
