// let string = true

// string = String(string)

// alert(string);

// const func = ()=>{

// }

// const func2 = function(){

// }

// const name = 'Malika'

// alert(name);

// let obj = {
//   name:"Malika"
// }

// let array = ['Java','Aka Nodir','Shoxa']

// // array.push('dfgh')
// array.pop('')

// alert(array);

// let =123

// alert(;// alert(
// let =prompt('Enter ,0

// alert(
// let isAge = confirm('Is your age 18')

// -----------------------------------------------------------------------
// let ='123gsdjada'

// =
// alert(;
// '123dsf' to isNan = not
//let =''

// =Boolean(
// alert(;
// 1 = operand += operator
// Binarniy
// alert(1 + 1);
// Unarniy
// alert(+1);

// alert(i % 2 == 0);
// alert(2**2);

// let s = "моя" + " строка";
// alert(s); // моястрока

// alert(1 + 1 - '2');

// let apples = "2";
// let oranges = "3";

// alert( +apples + +oranges );

// let n = 5
// n = n + 5 //n+=5
// n = n * 2 //n*=2
// alert(n);

// let a = 32
// let b = 13
// let c = a++ // a++ постфикс сперва присваеваеться а потом увличиваеться
// let d = ++b // ++b префикс сперва увеличиться а потом присвоеться

// alert(a);
// alert(b);
// alert(c);
// alert(d);

// alert(2>=2);

// alert(2 === '2'); //false
// alert(2 == '2'); //true

// alert( 'Сонный' > 'сон' )

// function sayHi() { }

// sayHi()

// const sayHi = function () {

// }
// sayHi()

// const sayHi = () => {

// }

// sayHi()

// let user = 'Malika'

// sayHi(user)

// function sayHi(name){
//   alert(`Hello ${name}`);
// }

// let user = {
//   name: 'Malika',
//   age: 17,
//   isHuman: true
// }
// alert(user.name);kkkjkjkjkjkjkj

// let users = ['malika','java','shoxa']
// users[1] = 'Malika'

// alert(users);

// let name = 'Dilshod'
// const surname = 'Zoirov'

// name = 'Shoxa'
// // surname = 'Shoxa'

// alert(name);
// alert(surname);

// let numeber = 123
// let string = 'Dilshod'
// let boolean = true
// let bigInt = 123242412412333124214n
// let undefind
// let nullSome = null

// alert(typeof numeber);
// alert(typeof string);
// alert(typeof boolean);
// alert(typeof bigInt);
// alert(typeof undefind);
// alert(typeof nullSome);
// numeber 123
//string 'Dilshod'
//boolean true false
//bigInt 1.3123123123123n
//undefind
//null
//object

// let obj ={
//   name:'Malika'
// }

// obj.name = 'Shoxa'

// alert(obj);

// let login = document.querySelector('.login')
// let password = document.querySelector('.password')
// let button = document.querySelector('.button')
// let title = document.querySelector('.title')

// button.addEventListener('click', () => {
//   if (login.value == 'admin' && password.value == 'admin') {
//     title.innerHTML = 'Welcome'
//     title.style.color = 'green'
//   }else if(login.value !== 'admin'){
//     title.innerHTML = 'Login Wrong'
//     title.style.color = 'red'
//   }else if(password.value !== 'admin'){
//     title.innerHTML = 'Password Wrong'
//     title.style.color = 'red'
//   }else{
//     title.innerHTML = 'Login and Password Wrong'
//     title.style.color = 'red'
//   }
// })

// let user = {
//   name: 'Shoxa',
//   age: 19,
//   isHuman: true,
//   'what age': 19,
// }

// delete user.name
// user.newKey = true

// alert(user['what age']);

// const makeUser = (name, age) => {
//   return {
//     name: name,
//     age: age,
//     isHuman: true
//   }
// }

// let userDilmurod = makeUser('Dilmurod', 15)
// alert(userDilmurod);

// let userName = prompt('Enter your name')

// alert(userName);

// let some = 'It is some text'

// alert(some)

// let isHuman = confirm('Are you human ?')

// alert(isHuman)

// let string = 1

// string = Boolean(string)

// alert(string);

// let users = [
//   { id: 1, message: 'Blabla', likeCount: 23 }
// ]

// let addPost = (message) => {
//   let newPost = {
//     id: 5, message, likeCount: 0
//   }

//   users.push(newPost)
// }

// addPost('asdasd')

// alert(users);

// let s = "моя" + ' ' +"строка";
// alert(s);

// alert(+'2' + +'2' + +'2');

// alert('asd' * 'ads');

// let a = 2
// let b = 2
// let c = a++
// let d = ++b

// alert(a);
// alert(b);
// alert(c);
// alert(d);

// const Fibanachi = (n) => {
//   if (n == 0) {
//     return 0
//   } else if (n == 1) {
//     return 1
//   }
//   return Fibanachi(n - 1) + Fibanachi(n - 2)
// }

// let fib1 = Fibanachi(3)
// let fib2 = Fibanachi(5)
// let fib3 = Fibanachi(10)

// alert(fib1);
// alert(fib2);
// alert(fib3);

// const Fibanachi = (n) => {
//   let array = [n + 1]

//   array[0] = 0
//   array[1] = 1

//   for (let i = 2; i <= n; i++) {
//     array[i] = array[i - 1] + array[i - 2]
//   }

//   return array[n]
// }

// let some = Fibanachi(100)
// alert(1 >= 1);
// alert(2 === '2'); //false
// alert(2=='2');//true
// alert(true == 1);
// alert(false == 0);

// alert(null > 0); //false
// alert(null >= 0); //true
// alert(null == 0);//false

// let =prompt('Are you +18')

// if (<18){
//   alert('You cant enter')
// }else{
//   alert('You can enter')
// }

// let =confirm('Are you 18+')

// if({//   alert('Welcome')
// }else{
//   alert('You cant enter')
// }

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

// let userAge = +prompt('Enter your age')

// if (userAge > 18) {
//   alert('You are older 18')
// } else if (userAge > 16) {
//   alert('You are older 16')
// } else if (userAge > 12) {
//   alert('You are older 12')
// }else{
//   alert('You are younger 12')
// }

// let =+prompt("Enter )
// if (>0) {
//   alert('1')
// } else if (<0) {
//   alert('-1')
// } else {
//   alert('0')
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let a = prompt('enter num')
// let b = prompt('enter num')

// let result = (a + b < 4) ? alert('Malo') : alert('Mnogo')

// alert(result);

// let message = (login == 'Sotrudnik') ?
//   'Privet' : (login == 'Direktor') ?
//     'Hello' : (login == '') ?
//       'Net logina' : ''

// alert(''||''||null||undefined||'Log');
// alert('null' && 'Dilshod');
// alert(!false);

// let hour = 15;

// if (hour < 10 || hour > 18) {
//   alert('Офис закрыт.');
// } else {
//   alert('Офис открыт.');
// }

// alert('' || 'Helo' || undefined || 'null');
// alert('Hello' && 'undefined');
// alert(!'');
// alert();

// let a = true
// let b = 2

// a &&= b

// alert(a);

// let users = []

// let user = {
//   name:'Aka Nodir'
// }

// users.push(user)
// alert(users);

// alert(undefined || '' || null);
// alert('undefined' && "asda" && null);
// alert(!true);

// let a = null
// let b = 1
// a &&= b
// alert(a);

// let name = 0

// alert(name || 'Admin');

// for () { }
// while () { }
// do { } while ()

// let i = 10
// while (i < 10) {
//   alert(i);
//   i++
// }

// do {
//   alert(i);
//   i++
// } while (i < 10)

// for (let i = 0; i < 10; i++) {
//   alert(i);
// }

// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// let i = 10

// while (i <= 10) {
//   alert(i);
//   i++
// }

// do {
//   alert(i);
//   i++
// } while (i < 10)

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 1) continue
//     alert(i);
// }
// for (let i = 10; i < 11; i--) {
//   if (i == 0) break
//     alert(i);
// }

// let x = +prompt('enter ')
// switch (x) {
//   case 0:
//     alert(0);
//     break
//   case 1:
//     alert(1);
//     break
//   case 2:
//     alert(2);
//     break
//   default:
//     alert('No variants');
// }

// let userJava = 'Java'
// let userShoxa = 'Shoxa'

// function logUserName(name = 'DefaultName', age = 0) {
//   console.log(`Hello ${name} and your age is ${age}`)
// }

// logUserName()
// logUserName(userShoxa, 16)

// function twoSums(a, b, operator) {
//   return eval(a + operator + b)
// }

// let result = twoSums('1', '1', '*')
// console.log(result);

// let userZoir = 'Zoir'

// function SayHi(name) {
//   console.log(`Hello ${name}`);
// }

// SayHi(userZoir)

// function calc(a, b) {
//   console.log(a + b);
// }

// calc(1,2)

// let result = calc(2, 1)

// console.log(result);

// function calc(a = 0, b = 0) {
//   console.log(a + b);

// function getName(){

// }

// getName()

// const getName = ()=>{

// }

// getName()

// const getName = function(){

// }

// getName()

// let userDilshod = {
//   name: 'Dilshod',
//   age: 16
// }

// console.log(userDilshod.name);

// function makeUsers(name,age){
//   return{
//     name,
//     age
//   }
// }

// let Dilshod = makeUsers('dilshod',16)
// // console.log(Dilshod);

// for(let key in Dilshod ){
//   // console.log(key);
//   console.log(Dilshod[key]);
//   // console.log(Dilshod);
// }

// function sayHi() {

// }

// sayHi()

// const sayHi = function () {

// }

// sayHi()

// const sayHi = () => {

// }

// sayHi()

// const userZoir = {
//   name: 'Zoir',
//   age: 16,
//   isHuman: true,
// }

// userZoir['name'] = 'Shoxa'

// console.log(userZoir['age']);

// let userZoir = createUser('Zoir', 14, true, 15)
// let userShoxa = createUser('Shoxa', 16, true)

// function createUser(name, age, isHuman) {
//   return {
//     name,
//     age,
//     isHuman,
//   }
// }

// console.log(userZoir);
// console.log(userShoxa);

// for(let key in userShoxa){
// console.log(key);
// console.log(userShoxa[key]);
// }

// const user = {
//   name: 'Dilshod',
//   age: 16,
//   isHuman: true,
// }

// console.log(user);

// function makeUser(name, age, isHuman) {
//   return {
//     name,
//     age,
//     isHuman
//   }
// }

// let userDilshod = makeUser('Dilshod', 16, !true)
// console.log(userDilshod);

// const users = {
// 	userShoxa: {
// 		name: 'Shoxa',
// 	},
// 	userZoir: {
// 		name: 'Zoir',
// 	},
// }

// const userZoir = users.userZoir

// userZoir.name = 'Shoxa'
// console.log(users)
// console.log(userZoir)

// function makeUsers(name, age, isHuman) {
// 	return {
// 		name,
// 		age,
// 		isHuman,
// 	}
// }

// const userZoir = makeUsers('Zoir', 14, true)
// const userZoir2 = makeUsers('Zoir', 14, true)
// const userShoxa = makeUsers('Shoxa', 16, true)
// console.log(userZoir === userZoir2);
// console.log(userShoxa);

// const userZoir = {
// 	name:"zoir"
// }

// const userZoir2 = userZoir
// console.log(userZoir == userZoir2);

// let userZoir = {
// 	name: 'Zoir',
// 	age: 14,
// 	isHuman: true,
// 	address: {
// 		city: 'Bukhara',
// 	},
// }

// let userZoir2 = structuredClone(userZoir)
// for (let key in userZoir) {
// 	userZoir2[key] = userZoir[key]
// }

// userZoir2.address.city = 'Moscow'
// console.log(userZoir)

// const twoSum = function (nums, target) {
// 	const numIndex = {}

// 	for (let i = 0; i < nums.length; i++) {
// 		const sums = target - nums[i]
// 		// console.log(sums);
// 		if (numIndex.hasOwnProperty(sums)) {
// 			return [numIndex[sums], i]
// 		}
// 		console.log(numIndex[nums[i]] = i)
// 		numIndex[nums[i]] = i
// 	}
// }

// let result = twoSum([1, 2, 4, 5, 6], 11)
// console.log(result)

// function Person(first, last, age, gender) {
// 	this.name = {
// 		first: first,
// 		last: last,
// 	}
// 	this.age = age
// 	this.gender = gender
// }
// Person.prototype.hello = function () {
// 	alert(this.name.first + ' has left the building. Bye for now!')
// }
// const person1 = new Person('Bob', 'Smith', 32, 'male')
// const person2 = Object.create(person1)
// const person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', [
// 	'playing drums',
// 	'mountain climbing',
// ])
// console.log(person1)
// console.log(person2)
// console.log(person3)
// function Test() {
// 	this.a = []
// 	this.b = []
// }

// Test.prototype = {
// 	addA(a) {
// 		this.a.push(a)
// 	},
// 	addB(b) {
// 		this.b.push(b)
// 	},
// }

// const a = new Test()
// const b = Object.create(a)
// const c = new Test()
// b.prototype = {
// 	addA(a) {
// 		this.a.push(a)
// 	},
// }
// a.addA('test')
// a.addB('b')
// b.addA('b')
// c.addA('test')
// console.log(a)
// console.log(b)
// console.log(c)

// const userDilshod = {
// 	name: 'Dilshod',
// 	age: 16,
// 	isHuman: true,
// 	address: {
// 		city: 'Bukhara',
// 	},
// }

// const clone = {
// 	name: 'Dilshod',
// 	age: 16,
// 	isHuman: true,
// }

// let clone = {}

// for (let key in userDilshod) {
// 	// console.log(key);
// 	// console.log(userDilshod);
// 	// console.log(userDilshod[key]);
// 	clone[key] = userDilshod[key]
// }

// let clone = structuredClone(userDilshod)

// let clone = Object.assign({}, userDilshod)

// clone.address.city = 'Shoxa'
// console.log(userDilshod)
// console.log(clone)

// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.next = null
// 	}
// }

// class Queue {
// 	constructor() {
// 		this.first = null
// 		this.last = null
// 		this.size = 0
// 	}

// 	enqueue(val) {
// 		var newNode = new Node(val)
// 		if (!this.first) {
// 			this.first = newNode
// 			this.last = newNode
// 		} else {
// 			this.last.next = newNode
// 			this.last = newNode
// 		}
// 		return ++this.size
// 	}
// 	dequeue() {
// 		if (!this.first) return null

// 		var temp = this.first

// 		if (this.first === this.last) {
// 			this.last = null
// 		}
// 		this.first = this.first.next
// 		this.size--
// 		return temp.value
// 	}
// }
// const quickQueue = new Queue()

// quickQueue.enqueue('value 1')
// quickQueue.enqueue('value 2')
// quickQueue.enqueue('value 3')
// // quickQueue.dequeue()

// console.log(quickQueue)

// var a = new Array(4);
// for (i = 0; i < 4; i++) {
//   a[i] = new Array(4);
//   for (j = 0; j < 4; j++) {
//     a[i][j] = "[" + i + "," + j + "]";
//   }
// }

// console.log(a);

// const map = new Map()

// map.set(1, '123')
// map.set('12', 123)
// map.set(true, 123)

// console.log(map.size)

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // попробуем использовать объект

// visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
// visitsCountObj[john] = 123;

// console.log(visitsCountObj);

// const obj = {
// 	name: 'ka4ok',
// 	age: 16,
// }

// const map = new Map(Object.entries(obj))

// console.log(map.get('age'));

// let set = new Set(["апельсин", "яблоко", "банан"]);

// // for (let value of set) console.log(value);

// // то же самое с forEach:
// set.forEach((value, valueAgain, set) => {
//   console.log(value,set);
// });

// function unique(arr) {
// 	const array = new Set(arr)
// 	array.forEach(arrItem => {
// 		array.add(arrItem)
// 	})
// 	return array
// }

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
// 	'Hare',
// 	'Krishna',
// 	'Hare',
// 	'Krishna',
// 	'Krishna',
// 	'Krishna',
// 	'Hare',
// 	'Hare',
// 	':-O',
// ]

// console.log(unique(values)) // Hare,Krishna,:-O

// const user = {
// 	name: 'Zoir',
// 	age: 15,
// 	isHuman: true,
// 	sayHi() {
// 		console.log(`Hello ${this.name} your age is ${this.age}`)
// 	},
// }

// user.sayHi()

// function makeUser(name, age, isHuman) {
// 	return{
// 		name, age, isHuman
// 	}
// }

// let userZoir = makeUser('Zoir',15,true)

// console.log(userZoir);

// function MakeUser(name, age, isHuman) {
// 	this.name = name
// 	this.age = age
// 	this.isHuman = isHuman
// }

// let userZoir = new MakeUser('Zoir', 15, true)
// let userShoxa = new MakeUser('Shoxa', 16, true)
// console.log(userZoir)
// console.log(userShoxa)

// let user = {

// }

// console.log(user?.name);

// let key = 'firstName'

// let user1 = {
// 	firstName: 'John',
// }

// let user2 = null

// console.log(user1?.[key]) // John
// console.log(user2?.[key]) // undefinedg

// let john = { name: 'John' }

// let weakMap = new WeakMap()
// weakMap.set(john, john)

// john = null;

// console.log(weakMap.get(john))

// let john = { name: "John" };

// let map = new Map();
// map.set(john);

// john = null;

// console.log(map.keys('john'));
// console.log(john);

// function sumSalaries(obj) {
// 	let sums = 0

// 	for (let salary of Object.values(obj)) {
// 		sums += salary
// 	}
// 	return sums
// }

// function sumSalaries(obj) {
// 	return Object.keys(obj).length
// }

// let user = {
// 	name: 'John',
// 	age: 30,
// }

// console.log(sumSalaries(user))

// const hello = {
// 	name: 'Dislshod',
// 	age: 16,
// 	isHuman: true,
// 	sayHi() {
// 		console.log(`Hello ${this.name}`)
// 	},
// }

// hello.sayHi()

// function makeUser(name, age, isHuman, city) {
// 	this.name = name
// 	this.age = age
// 	this.isHuman = isHuman
// 	this.address = {
// 		city,
// 	}
// }

// let userDilshod = new makeUser('Dilshod', 16, true)

// console.log(userDilshod)
// console.log(userDilshod.address?.city)

// function makeUser(name) {
// 	this.name = name
// }

// let userDilshod = new makeUser('Dilshod')

// console.log(userDilshod)

// let obj = {
// 	name: 'Dilshod',
// 	sayHi(){
// 		console.log(`Hello ${this.name}`);
// 	}
// }

// obj.sayHi()

// let array = ['Dilshod', 'Shoxa', 'Firik']

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// array[0] = 'Shoxa'
// console.log(array);
// let array = [
// 	{
// 		name: 'Dilshod',
// 		age: 16,
// 	},
// 	{
// 		name: 'Shoxa',
// 		age: 16,
// 	},
// 	{
// 		name: 'Firik',
// 		age: 16,
// 	},
// ]

// console.log(array[0].name);

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// let array = ['Dilshod', 'Shoxa', 'Firik']

// array.push('Apple')
// console.log(array);
// array.pop()
// console.log(array);

// array.shift()
// console.log(array);

// function sayHi() {
// 	alert('Hi')
// }
// console.log(sayHi.name);

// let sayHi = function() {
//   alert("Hi");
// };

// console.log(sayHi.name);

// const commentaries = 'This website is for losers LOL!'

// let result = commentaries.split(' ').filter(el=> el.split('').join('').!['a','e','i','o','u','y'].includes(el))

// let result = commentaries.split(' ').join(' ').split(' ').join('').split('').filter(el=>!['a','e','i','o','u','y'].includes(el.toLowerCase())).join(' ')

// let result = commentaries.split('').filter(el => !['a','e','i','o','u','y'].includes(el.toLowerCase())).join('')

// console.log(result)

// function disemvowel(el) {
// 	return el
// 		.split('')
// 		.filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el.toLowerCase()))
// 		.join('')
// }

// let result = disemvowel('This website is for losers LOL!')
// console.log(result)

// class Clock {
// 	constructor({ template }) {
// 		this.template = template
// 	}

// 	render() {
// 		let date = new Date()

// 		let hours = date.getHours()
// 		if (hours < 10) hours = '0' + hours

// 		let mins = date.getMinutes()
// 		if (mins < 10) mins = '0' + mins

// 		let secs = date.getSeconds()
// 		if (secs < 10) secs = '0' + secs

// 		let output = this.template
// 			.replace('h', hours)
// 			.replace('m', mins)
// 			.replace('s', secs)

// 		console.log(output)
// 	}

// 	stop() {
// 		clearInterval(this.timer)
// 	}

// 	start() {
// 		this.render()
// 		this.timer = setInterval(() => this.render(), 1000)
// 	}
// }

// let clock = new Clock({ template: 'h:m:s' })
// clock.start()

// let sayHello = () => {
// 	console.log('Hello')
// }
// sayHello()

// check.forEach(el => {
// 	console.log(el);
// })

// check.addEventListener('click', (el) => {
// 	console.log(el);
// })

// let userZoir = {
// 	name: 'Zoir',
// 	sayHi: () => {
// 		console.log(`Hello ${this.name}`)
// 	},
// }

// userZoir.sayHi()

// function MakeUser(name, age, isHuman) {
// 	this.name = name
// 	this.age = age
// 	this.isHuman = isHuman
// }

// let userZoir = new MakeUser('Zoir', 14, true)
// let userShoxa = new MakeUser('Shoxa', 16, true)
// console.log(userZoir)
// console.log(userShoxa)

// function MakeUser(name, age) {
// 	return {
// 		name,
// 		age,
// 	}
// }

// let hello = MakeUser('Zoir', 14)

// console.log(hello.address?.street)

// let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello')

// socket.onopen = function (e) {
// 	alert('[open] Соединение установлено')
// 	alert('Отправляем данные на сервер')
// 	socket.send('Меня зовут Джон')
// }

// socket.onmessage = function (event) {
// 	alert(`[message] Данные получены с сервера: ${event.data}`)
// }

// socket.onclose = function (event) {
// 	if (event.wasClean) {
// 		alert(
// 			`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
// 		)
// 	} else {
// 		// например, сервер убил процесс или сеть недоступна
// 		// обычно в этом случае event.code 1006
// 		alert('[close] Соединение прервано')
// 	}
// }

// socket.onerror = function (error) {
// 	alert(`[error]`)
// }

// console.log(2 === '2')

// let obj = {
// 	name: 'Alex',
// 	age: 12,
// 	isHuman: false,
// }

// let clone = structuredClone(obj)
// console.log(clone);
// for (let key in obj) {
// 	clone[key] = obj[key]
// }
// console.log(clone)

// let obj={

// }

// console.log(obj.userNames?.name);

// function sayHi() {}

// sayHi()

// const sayHi = function () {}
// sayHi()

// const sayHi = () => {}
// sayHi()

// let user = {
// 	name: 'Zoir',
// 	address:{
// 		city:'Bukhara'
// 	}
// }

// let clone = user
// clone.name = 'Shoxa'
// let clone = structuredClone(user)

// console.log(user['name']);

// for (let key in user) {
// 	// console.log(user);
// 	// console.log(key);
// 	// console.log(user[key])
// 	clone[key] = user[key]
// }
// clone.name = 'Shoxa'
// clone.address.city = 'Moscow'
// console.log(clone)
// console.log(user);

// let user = {
// 	name: 'Zoir',
// 	age: 14,
// 	sayHi: () => {
// 		console.log(`Hello ${this.name}`)
// 	},
// }

// user.sayHi()

// function MakeUser(name,age,isHuman){
// 	this.name = name
// 	this.age = age
// 	this.isHuman = isHuman
// }

// let userZoir = new MakeUser('Zoir',14,true)
// console.log(userZoir.name?.age);

// let array = ['Shoxa', 'Dilshod', 'Java']

// let arr = ["Я", "изучаю", "JavaScript"];

// let check = arr.splice(3,0,'Hello')

// console.log(check);
// console.log(arr);

// let arr = ["t", "e", "s", "t"];
// let check = arr.slice(1,4)
// console.log(check);

