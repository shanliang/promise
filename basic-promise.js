const setTimeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
    // resolve(1)
  }, 1000)
})

setTimeoutPromise.then((v) => {
  console.log(v, 'resolve')
}, (v) => {
  console.log(v, 'reject')
})

console.log(setTimeoutPromise)