export function register() {
  if ("serviceWorker" in navigator) {
    // console.log(`${process.env.PUBLIC_URL}/CustomSW.js`)
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then( (result) => {
        console.log("Result:", result);
      })
      .catch( (err) => {
        console.log("Error", err)
      })
  }
}