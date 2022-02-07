# Threads & Concurrency

- [**Notes**](#threads--concurrency---notes)
- [**Resources**](#threads--concurrency---resources)

## Threads & Concurrency - Notes

A ***thread*** is a program that runs in the same **address space** with other ***threads***.

***Threading*** allows for processes to run in parallel *(but not really)* in the same **address space**.

Example for the use of ***threads***:

    Let's say we have a text editor.
    Had we used only 1 thread, it would be impossible to take input from the keyboard as the editor auto-saves our changes.
    Just using independent processes would not solve this issue as each process would belong to a different address space.
Thankfully, ***C#*** is said to have excellent multithreading capabilities.

## Process Management - Resources

- [Wiki](https://en.wikipedia.org/wiki/Process_management_(computing))

## Threads & Concurrency - Resources

- [Applied Programming notes](https://applied-programming.github.io/Operating-Systems-Notes/3-Threads-and-Concurrency/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#threads--concurrency)
