# Dev Tools Domination / 14 Must Know Dev Tools Tricks

### 11/13/2017

**Thoughts**: I learned a ton of tips for the dev tool today! I really enjoyed this tutorial and I will be implementing much of what I learned into my development workflow.

Things I learned:

- Break on attribute modifications

  - You can add a break when an element gets modified to see what changes have occurred.

    - I can see this proving extremely useful tool for debugging! I will definitely be using this.

- Interpolating within a `console.log()`

  - Pass `%s` into a `console.log` and you can pass in variables

    - This is actually really cool trick

  - When I can't use ES6 template literals, I will use this

- Adding styled text to the Console

  - I always wondered how other devs styled their console text on certain websites, and now I know how!

  - `%c` in a `console.log()` followed by the CSS declarations you want to add.

- `console.warn()` and `console.error()`

  - I don't often use these, but I may start to gain access to the stack trace. I need to make better use of that when debugging.

- `console.info()`

  - Interesting, not really sure where I would use it, perhaps to provide myself more information about callbacks / promises when developing, but not too sure. Something I'll have to play around with.

- `console.assert()`

  - Will only fire if the statement is false.

  - I really like this method. I could see myself using it to see if the variable I am checking does not equal what I thought it would or if the element I thought I selected is actually selected. I want to play around with this and get better with it.

- `console.clear()`

  - Not too sure why I'd use this versus `cmd + k`, but it is nice to see that a message tells you that the console was actually cleared.

- `console.dir()`

  - I will definitely be using this. I like that you can see all of the properties of a particular element. This will help with selecting a desired element and also manipulating it.

- `console.group()` / `console.groupCollapsed()` / `console.groupEnd()`

  - I really liked the use of this and could see myself using it in a similar scenario as the example of going through an array or an object and grouping the logs together. This is a nifty trick.

- `console.count()`

  - Not too sure where I'd use this aside from tracking the iterator, but it might be useful to see how many times something is being updated if you are receiving an unexpected error.

- `console.time()` / `console.timeEnd()`

  - I could see myself using this to track how long more intensive tasks are taking and figure out if there is a better/faster manner to accomplish that task.

  - This could also illustrate where potential bottlenecks are occurring.

- `console.table()`

  - I really like this for displaying data from an array. It makes the appearance nicer and easier to read.

### Future Improvements

I will continue to play with the console and learn as many methods as I can that optimize my workflow.

I also really like this article on [Mastering the Dev Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console).
