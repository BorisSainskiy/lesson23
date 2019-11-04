// // Task 1 - start
// let userYear = parseInt(prompt("Enter your age"));
// if (isNaN(userYear)) {
//   alert("invalid date");
// } else if (userYear >= 0 && userYear < 12) {
//   alert("Child");
// } else if (userYear < 18) {
//   alert("Teenager");
// } else if (userYear < 60) {
//   alert("Adult");
// } else {
//   alert("Pensioner");
// }
// // Task 1 - end

// //Task 2 - start
// let number = parseInt(prompt("Enter number in diapason from 0 to 9"));
// if (isNaN(number)) {
//   alert("invalid date");
// } else if (number == 0) {
//   alert(")");
// } else if (number == 1) {
//   alert("!");
// } else if (number == 2) {
//   alert("@");
// } else if (number == 3) {
//   alert("#");
// } else if (number == 4) {
//   alert("$");
// } else if (number == 5) {
//   alert("%");
// } else if (number == 6) {
//   alert("^");
// } else if (number == 7) {
//   alert("&");
// } else if (number == 8) {
//   alert("*");
// } else if (number == 9) {
//   alert("(");
// } else {
//   alert("Please, enter number in diapason from 0 to 9");
// }
// //Task 2 - end

// //Task 3 - start
// let threeDigitNumber = parseInt(prompt("Enter number"));
// if (isNaN(threeDigitNumber)) {
//   alert("invalid date");
// } else if (threeDigitNumber > 999) {
//   alert("Please, enter 3 digit number");
// } else {
//   let firstNumber = threeDigitNumber % 10;
//   threeDigitNumber = Math.floor(threeDigitNumber / 10);
//   let secondNumber = threeDigitNumber % 10;
//   threeDigitNumber = Math.floor(threeDigitNumber / 10);
//   let thirdNumber = threeDigitNumber % 10;
//   if (
//     firstNumber == secondNumber ||
//     secondNumber == thirdNumber ||
//     firstNumber == thirdNumber
//   ) {
//     alert("There odn numbers");
//   } else {
//     alert("There no odn numbers");
//   }
// }

// //Task 4 - start
// let year = parseInt(prompt("Enter year"));
// if (isNaN(year)) {
//   alert("invalid date");
// } else if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
//   alert("Visokosniy");
// } else {
//   alert("Nevisokosniy");
// }
// //Task 4 - start

// //5 task - start
// let palindrom = parseInt(prompt("Enter number"));
// let temp = palindrom;
// let newNumber = 0;
// while (temp != 0) {
//   newNumber = newNumber * 10 + (temp % 10);
//   temp = Math.trunc(temp / 10);
// }
// if (newNumber == palindrom) {
//   alert("True");
// } else {
//   alert("False");
// }
// //5 task - end

// //6 task - start
// let currency = prompt(
//   "In what currency you want to get your money EUR, UAN, AZN"
// );
// let cash = parseFloat(prompt("Enter your cash"));
// if (isNaN(cash)) {
//   alert("invalid date");
// } else if (currency == "EUR") {
//   cash *= 0.9;
//   alert(cash);
// } else if (currency == "UAN") {
//   cash *= 25;
//   alert(cash);
// } else if (currency == "AZN") {
//   cash *= 1.70002;
//   alert(cash);
// } else {
//   alert("Please, enter currency such  as EUR, UAN, AZN");
// }
// //6 task - end

// //7 task - start
// let cashOfPurchase = parseFloat(prompt("Enter cash"));
// if (isNaN(cashOfPurchase)) {
//   alert("invalid date");
// } else if (cashOfPurchase >= 200 && cashOfPurchase < 300) {
//   cashOfPurchase -= cashOfPurchase * 0.03;
//   alert(cashOfPurchase);
// } else if (cashOfPurchase >= 300 && cashOfPurchase < 500) {
//   cashOfPurchase -= cashOfPurchase * 0.05;
//   alert(cashOfPurchase);
// } else if (cashOfPurchase >= 500) {
//   cashOfPurchase -= cashOfPurchase * 0.07;
//   alert(cashOfPurchase);
// } else {
//   alert("There is no discount for you");
// }
// //7 task - end

// //8 task - start
// let lengthOfCycle = parseFloat(prompt("Enter length of cycle"));
// let perimeterOfSquare = parseFloat(prompt("Enter perimeter of square"));
// if (isNaN(lengthOfCycle) || isNaN(perimeterOfSquare)) {
//   alert("invalid date");
// } else {
//   let d = lengthOfCycle / 3.14;
//   let s = perimeterOfSquare / 4;
//   if (s >= d) {
//     alert("True");
//   } else {
//     alert("False");
//   }
// }

// //8 task - end

// //9 task - start
// let q1 = parseInt(prompt("When Worls War started?"));
// let b = 0;
// if (q1 == 1939) {
//   b++;
// }
// let q2 = parseInt(prompt("What year is now&"));
// if (q2 == 2019) {
//   b++;
// }
// q3 = parseInt(prompt("2*2 = ?"));
// if (q3 == 4) {
//   b++;
// }
// alert(b);
// //9 task - end

//10 task - start
let day = parseInt(prompt("Enter the day"));
let month = parseInt(prompt("Enter the month"));
let Year = parseInt(prompt("Enter the year"));
if (isNaN(day) || isNaN(month) || isNaN(Year)) {
  alert("invalid date");
} else if (
  (month % 2 != 0 || month == 8 || month == 12 || month == 10) &&
  month != 9 &&
  month != 11
) {
  if (day == 31) {
    day = 1;
    if (month == 12) {
      month = 1;
      Year++;
    } else {
      month++;
    }
  } else {
    day++;
  }
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  if (day == 30) {
    day = 1;
    month++;
  } else {
    day++;
  }
} else if (month == 2) {
  if ((Year % 400 == 0 || Year % 4 == 0) && Year % 100 != 0) {
    if (day == 29) {
      day = 1;
      month++;
    } else {
      day++;
    }
  } else {
    if (day == 28) {
      day = 1;
      month++;
    } else {
      day++;
    }
  }
}
alert(`${day}.${month}.${Year}`);
//10 task - end
