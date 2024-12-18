# Unexpected 'undefined' Return Value in Node.js Function

This repository demonstrates a common, yet subtle, error in JavaScript functions: unexpected undefined return values when arguments are not explicitly handled.  The function `doSomething` correctly handles null input, but fails to explicitly return a value when both parameters are valid numbers, resulting in an unintended `undefined`.

## Problem

The `doSomething` function is intended to perform an operation on two input parameters.  It correctly handles cases where either parameter is null. However, if both parameters are numbers, it does not explicitly return a value, leading to an `undefined` return value. This is unexpected behavior and may cause issues in larger applications.

## Solution

The solution involves adding a default return statement to explicitly define the behavior of the function when both parameters are valid numbers. 