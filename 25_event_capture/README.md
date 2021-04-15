# Event Capture, Propagation, Bubbling and Once

## 4/15/2021
Always enjoy improving my knowledge of JavaScript events. Wasn't familiar with either `capture` or `once`
  - `capture`
    - different kind of event propagation
	- event trickles down as it goes from the outer most element to the inner most
	  - as if it reverses event bubbling, though it's an entirely seperate process
  - `once`
    - Removes the event listener after it runs. As the name implies, it only runs once
    - Can still propagate events to its parents

## Future Improvements
- Add buttons that will set flags for
  - Turning event propagation on/off
  - Turning event capturing on/off
  - Turning once on/off

- Easier display of relevant info in the DOM as opposed to the console