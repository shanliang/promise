function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved0');
    }, 2000);
  });
}
const first = async () => {
  const result = await resolveAfter2Seconds()
  console.log(result, new Date())
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve()
    }, 1000)
  }).then(() => {
    console.log('resolve1', new Date())
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('resolve2', new Date())
        resolve('done')
      }, 2000)
    }).then((v) => {
      console.log('finish', v)
    })
  })
}

Promise.all([first()]).then(() => {
  console.log('resolve3', new Date())
})