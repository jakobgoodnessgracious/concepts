const shopForBeans = () => {
    return new Promise(function promFunc(resolve) {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
      setTimeout(function timeoutFunc() {
        let randomIndex = Math.floor(Math.random() * beanTypes.length);
        let beanType = beanTypes[randomIndex];
        console.log(`2. I bought ${beanType} beans because they were on sale.`);
        resolve(beanType);
      }, 1000);
    });
  }
   
  async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
  
  getBeans();
  console.log("Describe what happens with this `console.log()` statement as well.");

// 0. global method and its context including variables and references to the heap is added to the call stack - is removed
// 1. (19) getBeans gets added to the call stack, begins execution
// 2. (14) console.log() gets added to the callstack, ran, popped off
// 3. (15) shopForBeans() gets added to the callstack, ran
// 4. (2) promFunc() is added to the callstack
// 5. (4) setTimeout() added to the callstack, runs, timer is created with webapi for the timeoutFunc callback, handed over to web api, settimeout is complete, popped off **TODO better understand settimeout added to callstack
// 6. (10) promFunc(), shopForBeans(), getBeans() popped off stack
// 7. (20) console.log gets added to callstack, runs, popped off
// 8. event loop checks event queue and finds getBeans() ready to run, checks for empty callstack
// 9. (4) getBeans()shopForBeans()promFunc()[timeout()]timeoutFunc() is ran
// 10. (7) console.log() gets added to the callstack, ran, popped off
// 11. (8) getBeans()shopForBeans()promFunc()[timeout()]timeoutFunc() resolves its value and returns it
// 12. (11) timeoutFunc is popped off stack, timeout is popped off stack, promFunc is popped off stack, shopForBeans is popped off stack
// 13. (16) console.log() gets added to the callstack, ran, popped off
// 14. (17) getBeans() is popped off stack
// 15. done