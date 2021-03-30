# Dev Tools Domination / 14 Must Know Dev Tools Tricks

## 3/30/2021
- Always good to review, I forget techniques I don't repeatedly use and there were a ton of things I don't regularly use in this video
  - Relearned some techniques that will improve my experience as a developer and increase my speed and efficiency especially while debugging

- Refactor README.md

## 11/13/2017

**Thoughts**: I learned a ton of dev tool tips. Really enjoyed this tutorial and I will be implementing much of what I learned into my development workflow.

Things I learned:

- Break on attribute modifications
  - You can add a break when an element gets modified to see what changes have occurred.
    - I can see this proving extremely useful tool for debugging! I will definitely be using this.

- Interpolating within a `console.log()`

  - Pass `%s` into a `console.log` and you can pass in variables

    - This is a cool trick, as Wes mentions, I tend to use template literals to achieve the same thing

- Adding styled text to the Console
  - `%c` in a `console.log()` followed by the CSS declarations you want to add.

  - I use this on a couple of personal websites now

- `console.warn()` and `console.error()`

  - I don't often use these, I should start to leverage the stack trace. Will make debugging a better time

- `console.info()`

  - Not really sure where I would use it, perhaps to provide myself more information about callbacks / promises when developing

- `console.assert()`

  - Will only fire if the statement inside is false.

  - Really like this method. Can see myself using it to check if a variable I am checking does not equal what I thought it would or if the element I thought I selected is actually selected. I will play around with this and get better with it.

- `console.clear()`

  - Not too sure why I'd use this versus `cmd + k`, but it is nice to see that a message tells you that the console was actually cleared.
  - This tripped me up when reviewing this lesson... 😂😂😂 

- `console.dir()`

  - Will definitely be using this, it exposes all of the properties of an element. This will help with selecting a desired element and also manipulating it.
    - I'm used to this type of logging from my time w/ jQuery

- `console.group()` / `console.groupCollapsed()` / `console.groupEnd()`

  - Really liked this use case and could see myself using it in a similar scenario as the example of going through an array or an object and grouping logs together. This is a nifty trick.

- `console.count()`

  - Not too sure where I'd use this aside from tracking an iterator. Might prove useful to see how many times something is being updated if you are receiving an unexpected error.
    - Perhaps use it to track how many times a function is called if you are seeing unexpected behavior

- `console.time()` / `console.timeEnd()`

  - Can see myself using this to track how long more intensive tasks are taking and figure out if there is a better/faster manner to accomplish that task.

  - This could also illustrate where potential bottlenecks are occurring.

- `console.table()`

  - I really like this for displaying data from an array. It makes the message easier to read.

### Future Improvements

I will continue to play with the console and learn as many methods as I can that optimize my workflow.

I also really like this article on [Mastering the Dev Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console).
