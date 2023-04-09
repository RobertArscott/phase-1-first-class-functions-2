function receivesAFunction(callback) {
    return callback();
}

const returnsANamedFunction = () => {
    const namedFunction = () => {console.log("hi")};
    return namedFunction;
}

const returnsAnAnonymousFunction = () => {
    return function () {console.log("pizza")};
}
