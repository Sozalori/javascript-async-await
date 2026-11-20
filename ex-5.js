// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
const forAsyncFuct = async () => {
  try{
    const forJohn = await getJohnProfile();
    console.log(forJohn)

  } catch (error) {
    console.log({
  errorCode: 500,
  message: '👿 Failed to request data from server'
})
  }
}
forAsyncFuct();