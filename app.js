// let obj = {
//     name : "ramzan",
//     blood : "O"
// }

// let{ name , blood} = obj ;

// console.log(blood)




//   function Expressions
// let eScript =  function() {
//     document.write("hello world")
// }

// eScript()



//    Arrow Functions 

// let hello = () => {
//     console.log("this is arrow function")
// }

// hello()




//   let hello = name => {
    
//       console.log(`Muhammmad ${name}`)
//   }

//   hello("Ramzan")


// let eScript = (name1 , name2) => {
//     console.log(`welcome ${name1} and ${name2} `)
// }

// eScript("Ramzan" , "all his brother")

// let foo = () =>  "ali"

// console.log(foo())

// 


// setInterval( ()=> console.log("hello"),1000)


// let getData = (renderData) =>{
    // firebase.database().ref('/').on ("child_added" , (data)=>{

    //     renderData(data.val())
    //       })

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => {
//    console.log(renderData(data))
//   })
// }
// getData(renderData)
// let renderData = (data)=>{

//     console.log(data)
// }



// let getData = (renderData)=> {
//     setTimeout(()=>{
//         renderData("ramzan")
//     },3000)
// }

// let renderData = (name)=>{
//   console.log(name)
// }

// getData(renderData)



// Array function 


// let arr = [{name:"Ya Haq" , roll : 99},{name:"ramzan", roll:9759}]


// arr.filter((a)=> console.log(a.roll===99))


// let arr = [{name : "ramzan" ,ag:9759} , {name: "saud" , ag :9725}]


// let filter = arr.filter(a=>a.ag>9724)

// console.log(filter)

// search 
// 1= startsWith
//  2 = endsWith

// let name = "ramzan"

// let search = "r"

// if(name.startsWith(search)){
//     console.log(name)
// }


// Array Map


// let arr = [2,3,4,5]

// console.log(arr)
// let multiply = arr.map(a => a*2)


// console.log(multiply)


// let arr =[{name:"ramzan"}]

// let update = arr.map(a=>a.name = "Ramzan")

// console.log(update)




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("welcome",data))
//   .catch(err=>console.log("sorry",err))



// ES6 Classes


// constructor function
// using normal javas

// function Student(name , Email) {
//     this.name = name ;
//     this.Email = Email
    
// }

// let student1 = new Student("RamzaN" , "ramzanmubbark920@gmail.com")

// console.log(student1)

// using es6

// class Student{
// constructor(name , email){
  
//     this.name = name;
//     this.email = email
// }

// }
// let student1 = new Student("ramzan" ," ramzanmubbark920@SpeechGrammarList.com")

// console.log(student1)

// merging two classes

// 
// class Student{
//     constructor(name , email){
//         this.name = name ;
//         this .email = email
//     }
// }

// class School extends Student{
//     constructor(name , email ,school){
//         super(name , email)
//         this.school = school
//     }
// }

// let student1 = new School("ramzan" , "ramzanmubbark920@gmail.com" , "uaf")


// console.log(student1)


// let add_to_cart = {
//     let image = document.getElementById('img')
//     let price = document.getElementById('price')


// function addtocart(){
//     var image = document.getElementById('img')
//     var price = document.getElementById('price')





// var product = {
//     image ,
//     price
// }
// var arr = [];


// arr.push(product)
// localStorage.setItem("cart" ,arr)
// }




let logIN = ()=> {
    let email = document.getElementById('email')
    let password = document.getElementById('password') 


    // firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    
    // .then ((result)=>{
    //  console.log(result)
    // })
    
    // .catch(function(error) {
    //     // Handle Errors here.


    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorMessage)
    
    //   });
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    
    .then((result)=>{
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}

let SignIn=()=> {


    let email = document.getElementById('login-email')
    let password = document.getElementById('login-password')

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log("user login successfully")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}