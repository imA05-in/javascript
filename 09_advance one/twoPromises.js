const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("task compeleted")
    resolve();
    reject();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("then task compeleted");
});

promiseOne.catch(function () {
  // console.log("oops operation failed. ):")
});

//passing data to then
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "abhishek",
      email: "pta@nahi.com",
    });
  }, 1000);
});

promiseTwo.then(function (userData) {
  // console.log(userData );
});

//
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        userName: "abhishek",
        password: "danger!!",
      });
    } else {
      reject("Error: something went wrong ji");
    }
  }, 1000);
});

promiseThree
  .then(function (user) {
    // console.log(user)
    return user.userName;
  })
  .catch(function (error) {
    // console.log(error)
    return "no name: error occured";
  })
  .then(function (username) {
    // console.log(username)
  })
  .finally(function () {
    // console.log("promise exited");
  });

//promise four

const promiseFour = new Promise(function (resolve, reject) {
  error = true;
  if (!error) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});


// promiseFour.then(function(user){
//     console.log(user)
// })

async function promiseFourHandling() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

promiseFourHandling();
