# Custom HTML5 Video Player

## 4/1/2021
- Refactored
  - Added fullscreen button
  - Update play / pause to icons
  - Added icon for volume & playback speed
  - Update playback speed icon on speed change
  - Update misc styles
- Updated README

## 11/19/2017

**Thoughts**: Enjoyed refactoring this

Things I learned:

- This video built on topics covered in previous lessons.

  - Ternarys being used to set variables
    - Gives a lot of flexibility and can be easier to update other values

    - Similar to flags in previous lessons, this type of thought process and approach is one I will adopt to improve. A byproduct is it makes my code more readable easier to refactor in the future. 
      - Will refine my development process, and the increased readibility will transfer to easier collaboration

- The `video` element has a bunch different properties and events. Cool seeing how these can be utilized to update the UI.
  - Examples: Video playing, updating the progress bar, speed changes, video time
  - [Video Events Resource](https://www.w3.org/2010/05/video/mediaevents.html)

## Future Improvements
- Implement a loop button, replay video when it is finished if
  - Use a flag, update if button is hit
  - On video end, replay if flag is set 

- Mute volume if you hit the volume button
  - update icon based off volume like playback rate

- I will look at some other video sites and see how I can improve this player.

## Implemented
- ~~Add fullscreen button~~ - ✅
  - Hitting the button again returns video to its original size. -> The browser handles this by default in fullscreen
- ~~Progress bar starts at zero~~ - ✅
