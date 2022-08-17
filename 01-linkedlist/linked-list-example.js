const Node = require('./Node');
const LinkedList = require('./LinkedList');

let numberList = new LinkedList();
numberList.push(new Node(101));
numberList.push(new Node(102));
numberList.push(new Node(103));
numberList.print();