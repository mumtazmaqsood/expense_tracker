  
export function register() {

  let swDev = `${process.env.PUBLIC_URL}/service-worker.js`
  navigator.serviceWorker.register(swDev).then((result) => {
    console.log("Result", result);
  })
}



