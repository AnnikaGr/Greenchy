
function resolvePromise(promiseToResolve, promiseState, notifyACB) {

    if (promiseToResolve == null) return;
    promiseState.promise = promiseToResolve;
    promiseState.data = null;       // UI update! The user does not keep seeing results from previous search
    promiseState.error = null;
    if(notifyACB) notifyACB();    // notify every time promise, data, or error change

    function saveDataACB(result) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.data = result; // triggers UI update because of changing state
        /* TODO notify */
        if(notifyACB) notifyACB(); 
        
    }

    function saveErrorACB(err) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.error = err;   // triggers UI update because of changing state
        /* TODO save err in promiseState, as before */
        /* TODO notify */
        if(notifyACB) notifyACB(); 
    }

    promiseToResolve.then(saveDataACB).catch(saveErrorACB);

}

export default resolvePromise;