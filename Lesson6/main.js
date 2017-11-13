// // usual example
// function sayHello(name) {
//     var text = 'Hello ' + name;
//     var say = function(text) { console.log(text); }
//     say();
// }
// sayHello('Joe');
//
// // usual example
// function sayHello(name) {
//     var text = 'Hello ' + name;
//     var say = function() { console.log(text); }
//     say();
// }
// sayHello('Joe');
//
//
// // // reference to a function - variables are accessible
// function sayHello2(name) {
//     var text = 'Hello ' + name; // Local variable
//     var say = function() { console.log(text); }
//     return say;
// }
// var say2 = sayHello2('Bob');
// say2();
//
//
//
// // hoisting; ()()
// function sayAlice() {
//     var say = function() { console.log(alice); }
//     // Local variable that ends up within closure
//     var alice = 'Hello Alice';
//     return say;
// }
// sayAlice()();
//
//
//
// //local variables are not copied into function — they are kept by reference
// function say667() {
//     var num = 42;
//     var say = function() { console.log(num); }
//     num++;
//     return say;
// }
// var sayNumber = say667();
// sayNumber();
//
//
// //you cant create closure within new Function constructor
// function say667() {
//     var num = 42;
//     var say = new Function('console.log(num)') }
//     num++;
//     return say;
// }
// var sayNumber = say667();
// sayNumber();
//
//
//
// //common reference to the same closure;  inside function(s) is/are recreated again each time the outside function is called.
// var gLogNumber, gIncreaseNumber, gSetNumber;
// function setupSomeGlobals() {
//     var num = 42;
//     gLogNumber = function() { console.log(num); }
//     gIncreaseNumber = function() { num++; }
//     gSetNumber = function(x) { num = x; }
// }
//
// setupSomeGlobals();
// gIncreaseNumber();
// gLogNumber(); // 43
// gSetNumber(5);
// gLogNumber(); // 5
//
// var oldLog = gLogNumber;
//
// setupSomeGlobals();
// gLogNumber();
//
// oldLog()
//
//
//
// //defining a function within a loop
// function buildList(list) {
//     var result = [];
//     for (var i = 0; i < list.length; i++) {
//         var item = 'item' + i;
//         result.push( function() {console.log(item + ' ' + list[i])} );
//     }
//     return result;
// }
//
// function testList() {
//     var fnlist = buildList([1,2,3]);
//     for (var j = 0; j < fnlist.length; j++) {
//         fnlist[j]();
//     }
// }
//
// testList()
//
//
//
// // There is not a single closure per function declaration. There is a closure for each call to a function
// function newClosure(someNum, someRef) {
//     // Local variables that end up within closure
//     var num = someNum;
//     var anArray = [1,2,3];
//     var ref = someRef;
//     return function(x) {
//         num += x;
//         anArray.push(num);
//         console.log('num: ' + num +
//             '; anArray: ' + anArray.toString() +
//             '; ref.someVar: ' + ref.someVar + ';');
//     }
// }
// obj = {someVar: 4};
// fn1 = newClosure(4, obj);
// fn2 = newClosure(5, obj);
// fn1(1);
// fn2(1);
// obj.someVar++;
// fn1(2);
// fn2(2);
//
//
//
//
//
//
//
//
//
// var Calculator = {
//
//     setNumber: function(givenNumber) {
//         var max = 100,
//             min = 0;
//
//         this.number = (givenNumber) ? givenNumber : (Math.floor(Math.random() * (max - min + 1)) + min);
//         return this;
//     },
//
//     divideBy: function(_divider) {
//         this.number = (this.number / _divider);
//         return this;
//     },
//
//     multiplyBy: function(_multi) {
//         this.number = (this.number * _multi);
//         return this;
//     },
//
//     add: function(_add) {
//         this.number = (this.number + _add);
//         return this;
//     },
//
//     subtract: function(_sub) {
//         this.number = (this.number - _sub);
//         return this;
//     },
//
//     result: function () {
//         return this.number;
//     },
//     custom: function (cb) {
//         this.cb = cb.bind(this)
//         return cb
//     }
// }
//
// console.log(Calculator
//     .setNumber(2)
//     .divideBy(2)
//     .add(5)
//     .multiplyBy(3)
//     .subtract(10)
//     .result());
// console.log(Calculator.setNumber(4).divideBy(2).add(5).multiplyBy(3).subtract(10).number);
// console.log(Calculator.setNumber().divideBy(2).add(5).multiplyBy(3).subtract(10).result());

