# pervertBox

So this project is actually really fun I think. It's similar to my shock game but with a little twist. The hardware is exactly the same, it uses a particle argon to trigger a relay to trigger a TENS unit to shock someone but this time instead of math problems being incorrect, it only does so when you look somewhere inappropiate. 

If you looked up one of those images I am so sorry lol. But this project uses webgazer to track your eyes with the computer's webcam and when you look somewhere inappropiate on the image that's when the shock occurs. Webgazer maps the screen into xy coordinates, all I had to do to determine a shock worthy area was get the correct xy values and if the eye tracker falls within that range, the page submits a form that will call a particle api and trigger the relay. Also it should be noted that the only thing that would be necessary to change in this repo for the project to work would be the url where the form submits. I did not want to make my device information public.

Again like last time, I do not want to teach others how to shock people, but this was a really fun project to do
