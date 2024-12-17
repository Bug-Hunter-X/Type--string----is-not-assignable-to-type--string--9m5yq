# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: assigning an array of strings to a function expecting a single string.

## The Bug
The `greeter` function expects a single string as input. However, the code attempts to pass an array of strings (`user`) to the function, resulting in a type error.

## The Solution
The solution involves either modifying the function to accept an array of strings or modifying the input to provide a single string.