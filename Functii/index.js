console.log("Hello world");

// Ex 1
// Create a function that takes two numbers
// and an operator (+, -, *, /) as input
// and performs the coressponding operation.

// function calculator(num1, num2){
// const sum = num1 + num2
// const substract = num1 - num2
// const times = num1 * num2
// const divide = num1 / num2

//     const output = 'Solution' + sum +";" + substract +";" times +";" divide

//     return output;

// }

// console.log(calculator(1,2))

// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 + num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Invalid operator";
//   }
// }


// Objects : examples

const firstBook = {
  id: 1,
  title: 'Harry Potter',
  date: '15.11.1990',
  getThis: function(){
    console.table(this);
  },
  getBookDetails: function()
{
    return console.log("Book this ID:" + this.id + this.title+this.date);
}
}

// Arrow function should only be used when you want to call an element from outside the function

const seccondBook = {
  id: 2,
  title: 'Doctor WHO',
  date: '15.11.1980',
  arrowFnDetails: () => 
    // normalFnDetails: function(){
  //   console.log(this)
  // },
  // callInsideFn: function(){
  //   this.normalFnDetails()
  
  {
    console.log(this.title);  
  },
     updateReadingTime: function(newTime){
      this.readingTime = newTime
     

    console.log('Calling updateReadingTime, that now is:', this.readingTime)
  },


   read: function(){
    console.log('Calling read')

    this.updateReadingTime(150)
  }  
}

const theOtherBook = {
  id: 1,
  title: 'Harry Potter',
  date: '15.11.1990'
}