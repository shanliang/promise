/*
 * @Author: liangshanshan liangshanshan@erayt.com
 * @Date: 2024-07-27 16:22:04
 * @LastEditors: liangshanshan liangshanshan@erayt.com
 * @LastEditTime: 2024-07-27 16:32:28
 * @FilePath: \study\fetch-promise.js
 * @Description: 
 * 
 */
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
fetchPromise
  .then((response) => {
    console.log(`已收到响应：${response.status}`);
  }, (error) => {
    console.log(`发生了错误then：${error}`);
  })
  .catch(error => {
    console.log(`发生了错误catch：${error}`); 
  });
  
  console.log("已发送请求……");