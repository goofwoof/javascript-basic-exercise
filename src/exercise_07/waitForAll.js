export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
 
  //throw new Error('Please delete this line and implement the function');
  var status = true;
  promises.forEach(function(promise){
    if(!isPromise(promise)){
      throw new Error('Not all elements are promises.');
    }
  });
  return promiseAll_wait(promises);
}

function isPromise(obj) {
  return !!obj  //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
  	&& (typeof obj === 'object' || typeof obj === 'function') // 初始promise 或 promise.then返回的
  	&& typeof obj.then === 'function';
}


function promiseAll_wait(promises){
	return new Promise(function(resolve,reject){
		if(!Array.isArray(promises)){
			return reject(new TypeError("argument must be anarray"))
		}
		var countNum=0;
		var promiseNum=promises.length;
    var resolvedvalue=new Array(promiseNum);
    var flag = 0;
		for(var i=0;i<promiseNum;i++){
            (function(i){
            	Promise.resolve(promises[i]).then(function(value){
            		countNum++;
            		resolvedvalue[i]=value;
            		if(countNum===promiseNum){
            			return resolve(resolvedvalue);
                }
                if(countNum+flag===promiseNum){
                  return reject("reason");
                }
            	},function(reason){
                flag++;
            	})
 
            })(i)
      }
	})
}
