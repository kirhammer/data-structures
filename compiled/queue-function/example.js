"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var queue = Queue_1.createQueue();
queue.push('First Item');
queue.push('Second Item');
queue.push('Third Item');
queue.print();
console.log('Popped: ', queue.pop());
queue.print();
queue.push('Fourht Item');
queue.print();
console.log('Queue head:', queue.peek());
