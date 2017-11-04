//      Get DOM Elements

// var el = document.getElementById('content1')
// var el = document.getElementsByClassName('container')
// var el = document.getElementsByName('input')
// var el = document.getElementsByTagName('div')
// var el = document.querySelector('div.container.second')
// var el = document.querySelectorAll('div.container')

//      Data attributes

// var el = document.getElementById('content1').getAttribute('data-name')
// var el = document.getElementById('content1').dataset.name

// console.log('DOM Element', document.getElementById('content1').hasAttribute('data-name'))



//       Work with attributes and styles

// document.getElementById('content1').setAttribute('style', 'background: red')
// document.getElementById('content1').style.backgroundColor = 'blue'
// document.getElementById('content1').classList.add('trulala')
// document.getElementById('content1').classList.remove('trulala')
// document.getElementById('content1').dataset.name = 'new-name'

// var newItem = document.createElement("h3");
// var textnode = document.createTextNode("text in h3 element");
// newItem.appendChild(textnode);
//
// document.getElementById("content3").innerHTML = '<h3>text in h3 element</h3>'
// element.insertBefore(newItem, element.childNodes[0]);

// console.log(document.getElementById('content1').hasAttribute('style'))



//      Working with DOM collection

// var DOMElements = document.querySelectorAll('div')

// DOMElements.map(function (el) {
//     console.log(el)
// })
// console.log(DOMElements.splice(0, 1))

    // NodeList.forEach()
// DOMElements.forEach(function (el) {
//     el.style.color = 'red'
// })

// Array.prototype.forEach.call(DOMElements, function (el) {
//     el.style.fontFamily = 'Comic Sans MS';
// });

// for (var i = 0; i < DOMElements.length; i++) {
//     DOMElements[i].style.fontSize = '24px';
// }



//      Events

// document.getElementById('text').addEventListener('click', function (event) {
//     event.stopPropagation()
//     console.log('text')
//     // console.log(event)
// }, false)
// document.getElementById('content2').addEventListener('click', function (event) {
//     console.log('content2')
// }, false)

// document.getElementById('text').addEventListener('contextmenu', function (event) {
//     event.preventDefault()
//     document.getElementById('content3').innerHTML = '<div>Some extra content on right click</div>'
// }, true)

// document.getElementById('text').addEventListener('mouseover', function (event) {
//     document.getElementById('text').style.color = 'pink'
//     document.getElementById('text').style.fontSize = '20px'
//     document.getElementById('text').style.transition = 'font-size 0.5s linear'
// })
// document.getElementById('text').addEventListener('mouseout', function (event) {
//     document.getElementById('text').style.color = 'black'
//     document.getElementById('text').style.fontSize = '16px'
// })

// document.getElementsByName('input')[0].addEventListener('keyup', function (event) {
//     console.log(document.getElementsByName('input')[0].value)
//     console.log(event.keyCode)
//     if (event.keyCode === 13) {
//         alert('We\'ve just send a request with this value: ' + document.getElementsByName('input')[0].value)
//     }
// })

// document.getElementsByName('input')[0].addEventListener('keydown', checkName)
// function checkName(evt) {
//     if (evt.key === evt.key.toUpperCase()) {
//         // evt.preventDefault()
//         // document.getElementById('content3').innerHTML = '<div style="color: red">"Please use lowercase letters only."</div>'
//     }
// }



//      Create the event.

// var event = document.createEvent('Event');
//
// // Define that the event name is 'build'.
// event.initEvent('build', true, true);
//
// // Listen for the event.
// document.addEventListener('build', function (e) {
//    console.log('build event', e)
// }, false);
//
// // target can be any Element or other EventTarget.
// document.getElementById('text').addEventListener('click', function () {
//     setTimeout(function () {
//         document.getElementById('text').dispatchEvent(event)
//     }, 1000)
//
// });
