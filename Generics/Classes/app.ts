var array : number[] = [1, 2, 3];
var array2 : Array<Number> = [1, 2, 3];
console.log(array);
console.log(array2);

class KeyValuePair<Tkey, TValue> {
    constructor(
        public key : Tkey,
        public value : TValue
    ){}
}

let pair1 = new KeyValuePair<number, string>(1, "First");
let pair2 = new KeyValuePair<string, Date>("Second", new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, "Third");

class KeyValuePairPrinter<T, U> {
    constructor(private pairs : KeyValuePair<T , U>[]) {
    }

    print() {
        for(let p of this.pairs) {
            console.log(`${p.key} : ${p.value}`)
        }
    }
}

//cannot add 'pair2' here because type of key and value is different
let pairs = new KeyValuePairPrinter([pair1, pair3]);
pairs.print()