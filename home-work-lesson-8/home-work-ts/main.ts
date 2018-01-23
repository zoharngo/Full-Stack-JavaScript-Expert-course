

import {exeOperation} from "./operations";


console.log(exeOperation(undefined, 8.5, 7.9, 3.1));

console.log(exeOperation((num: number) => {
    return Math.pow(num, 2);
}, 8));
