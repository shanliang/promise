/*
 * @Author: liangshanshan liangshanshan@erayt.com
 * @Date: 2024-07-27 20:30:37
 * @LastEditors: liangshanshan liangshanshan@erayt.com
 * @LastEditTime: 2024-07-27 22:04:35
 * @FilePath: \study\promise-study\multiple-promise.js
 * @Description: promise复合场景应用
 * 
 */
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
      resolve('data')
    }, 1000)
  }).then((data) => {
    console.log('resolve1', data, new Date())
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('resolve2', new Date())
        resolve(data)
      }, 2000)
    })
  }).then((v) => {
    console.log('resolve3', v, new Date())
  })

}

Promise.all([first()]).then(() => {
  console.log('finish', new Date())
})