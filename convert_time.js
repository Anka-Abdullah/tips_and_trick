// let SECONDS = 3

// setInterval(async () => {
//     SECONDS -= 1
//     if (SECONDS < 1) {
//         console.log("FINISH");
//     }else{
//     const rs = new Date(SECONDS * 1000).toISOString().substring(14, 19)
//     console.log(rs);
//     }
//   }, 1000);


  const timerFunct = (ms) => {
      let h = ms
    let timer = setInterval(() => {
        const rs = new Date(h * 1000).toISOString().substring(14, 19)
        h--;
        console.log(rs)
        if (h === 0) {
            clearInterval(timer)
        }
    }, 1000)
  }
  timerFunct(10);