for(x = 0; x < 5; x++) {
    var counterVar = x;
    let counterLet = x;
    console.log("CounterLet : ", counterLet);
    const counterConst = x;
    console.log("CounterConst : ", counterConst);

    /**
     * constant variables Cannot be re-initialized
     */
    //counterConst = 10;
    //console.log("CounterConst : ", counterConst);
}

console.log("CounterVar : ", counterVar);
/**
 * Not accessible outside block scope
 */
//console.log(counterLet);
//console.log("CounterConst : ", counterConst);