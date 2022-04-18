/* new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
 */

const promise = new Promise(function(resolve, reject) {
    console.log("Promise callback");
    resolve();
  }).then(function(result) {
    console.log("Promise callback (.then)");
  });
  
  setTimeout(function() {
    console.log("event-loop cycle: Promise (fulfilled)", promise)
  }, 0);
  
  console.log("Promise (pending)", promise);
  
