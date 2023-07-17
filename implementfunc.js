//1)prime numbers
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false

//2) factorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
//3)Fibonacci number.
function fff(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  let fff = [0, 1];

  for (let i = 2; i <= num; i++) {
    fff[i] = fff[i - 1] + fff[i - 2];
  }
  return fff[num];
}
//example
console.log(fff(0)); // 0
console.log(fff(1)); // 1
console.log(fff(10)); // 55
console.log(fff(20)); // 6765

//4)isSorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isSorted([])); // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
console.log(isSorted([3, 9, -3, 10])); // false

//5)reverse
function reverseStr(str) {
  var reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}
//example
console.log(reverseStr("")); // ''
console.log(reverseStr("abcdef")); // 'fedcba'

//7)plaindrome
function isPalindrome(arr) {
  const n = arr.toLowerCase();
  const m = n.split("").reverse().join("");
  return n === m;
}
//example
console.log(isPalindrome("")); // true
console.log(isPalindrome("abcdcba")); // true
console.log(isPalindrome("abcd")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true

//8)Missing
function missing(arr) {
  const n = arr.length + 1; // Определение ожидаемой длины последовательности
  let expectedSum = (n * (n + 1)) / 2; // Расчет суммы последовательности

  for (let i = 0; i < arr.length; i++) {
    expectedSum -= arr[i]; // Вычитаем каждый элемент из ожидаемой суммы
  }

  if (expectedSum >= 1 && expectedSum <= n) {
    return expectedSum; // Возвращаем отсутствующее число, если оно находится в допустимом диапазоне
  } else {
    return undefined; // Возвращаем undefined, если отсутствуют числа или отсутствующее число находится вне допустимого диапазона
  }
}

//example

console.log(missing([])); // undefined
console.log(missing([1, 4, 3])); // 2
console.log(missing([2, 3, 4])); // 1
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined

//9)isBalanced
function isBalanced(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "{") {
      stack.push(char);
    } else if (char === "}") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
//example
console.log(isBalanced("}{")); // false
console.log(isBalanced("{{}")); // false
console.log(isBalanced("{}{}")); // false
console.log(isBalanced("foo { bar { baz } boo }")); // true
console.log(isBalanced("foo { bar { baz }")); // false
console.log(isBalanced("foo { bar } }")); // false
