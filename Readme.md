# DCIT 202 ASSIGNMENT

## Description - "arrayManipulation.js"

A javasript file is created namely, "arrayManipulation.js". it includes a JavaScript function named "processArray" that takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled and a  JavaScript function named "formatArrayStrings" that takes two arrays as arguments An array of stringsand An array of numbers processed by processArray. The function modifies each string based on its corresponding number,capitalizes the entire string if the number is even and converts the string to lowercase if the number is odd

## Task ONE (1)

### "processArray"

The "processArray"  function processes an array of numbers. For each number in the array, if the number is even, it squares the number. If the number is odd, it triples the number. The processed numbers are then stored in a new array which is returned at the end of the function.

### Usage for task 1

It starts by creating an empty array called endresult to store the final results.It uses a for loop to go through each number in the input array numbers. Checks for even or odd: For each number (num), it checks if it's even using the modulo operator (%). If the number is even, it squares the number using Math.pow(num, 2). If it's odd, it cubes the number using Math.pow(num, 3).
Adds the result to the output array: The calculated square or cube is then added to the endresult array.
Returns the output array: After processing all numbers in the input array, the function returns the endresult array, which now contains the squared or cubed values of the original numbers depending on whether they were even or odd.

## Task TWO (2)

### "formatArrayStrings"

The JavaScript code defines a function "formatArrayStrings" that takes two arrays as input:strings: An array of strings and numbers: An array of numbers processed by processArray. The function modifies each string based on its corresponding number,capitalizes the entire string if the number is even and converts the string to lowercase if the number is odd.

### Usage for task 2

It uses a for loop to go through each element in the strings array, using the index i. For each index, it also accesses the corresponding element in the numbers array. For each number in numbers, it checks if it's even using the modulo operator (%).
Formats strings based on numbers:
If the corresponding number is even, it converts the string to uppercase using .toUpperCase().
If the corresponding number is odd, it converts the string to lowercase using .toLowerCase().
After processing all strings, the function returns the strings array, which now contains the modified strings based on the even/odd status of the corresponding numbers.

## Accessibility

In the arrayManipulation file:
module.exports = { testOne, modifiedNames }; This line exports the variables testOne and modifiedNames as part of an object. This makes them accessible from other files that import this module.
In the userInfo file:

const { testOne, modifiedNames } = require('./arrayManipulation'); This line imports the testOne and modifiedNames variables from the arrayManipulation file using the require function.

## Description - "userInfo.js"

A javasript file is created namely, "userInfo.js".ir contains task three.

## Task THREE (3)

The JavaScript code defines a function "createUserProfiles" that takes an array of names and the array of modified names from Task 2. Returns an array of objects, each containing originalName, modifiedName and id (auto-incremented starting from 1).

### Usage for task 3

It starts by creating an empty array called endresult to store the user profile objects. It uses a for loop to go through each element in the testOne array (which presumably contains names). For each name in testOne, it creates a new object with the following properties;
originalName: The original name from testOne.
modifiedName: The corresponding modified name from the modifiedNames array (which was likely created by the formatArrayStrings function).
id: A unique ID for the user, starting from 1 and incrementing for each profile.
Adds the object to the endresult array: The newly created user profile object is then added to the endresult array.
Returns the array of user profiles: After processing all names, the function returns the endresult array, which now contains a list of user profile objects.

### Installation and Setup

Create a GitHub account using your student email (<...@st.ug.edu.gh>). If you already
have an account, you can add your student email to your account.

1. Create a repository named js-for-react-native-ID (e.g., js-for-react-native-1129884).
2. Clone it to your local machine.
3. Commit each task separately.

### Author

Beatrice Sophia Nhyira Yawson - 11151818
