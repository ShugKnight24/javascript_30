# Fun with HTML5 Canvas

### 11/11/2017

**Thoughts**: I use HTML5 canvas fairly often at my job, but I enjoyed going through this tutorial as I learned a few cool things.

Things I learned:

- You can set the value of multiple variables via [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

  - I definitely want to look into this more, I'm not too sure where come in handy, but `...rest` looks pretty nifty.

- I never heard of `hsl()` before, so I found that to be pretty neat.

  - [Mother-Effing HSL](http://mothereffinghsl.com/) is a cool website that explains how HSL works.

  - Not too sure where it would be practical to use that as opposed to `rgb()` / `rgba()` but I'll have to do some more research

    - It does look like `hsl()` would make lightening / darkening colors much simpler than using hex or rgb value, but not too sure outside of that

      - I typically use [coolors](https://coolors.co/) for alternate shades

- I never heard of the canvas context property [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

  - I want to look more into this because the blending functionality seems pretty awesome.

### Future Improvements

- Add the ability for a user to clear the canvas without refreshing.

- Add the ability for a user to select a color of the stroke using a color picker as opposed to incrementing / decrementing the HSL value

- Allow user to select thickness of brush as opposed to just incrementing and decrementing the size.

- Play with different values of `globalCompositeOperation` of canvas context to see if there is one that works best.

  - Allow different values to be set with a dropdown.

  - Allow it to be turned off and on.

- Learn how to properly use resize events in canvas if screen size is changed.

- Add Eraser / White color to fix errors.

  - Add Undo / Redo functionality.
