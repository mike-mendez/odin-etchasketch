#Current Goal

1. When drawing mode is changed (classic -> modern -> psychedelic):
   1. Remove old event listeners
   2. Add new event listeners:
      1. Classic: grid squares changes background color to #707070 when moused over
      2. Modern: grid squares changes background color to #9E9E9E when moused over the first time then 10% darker every additonal time until the 10th time where the background color will be #000
         1. Times moused over should be tracked via a counter
      3. Psychedelic: grid squares changes background color to a random color when moused over. The 10th time the square is moused over will change and keep the background color #000
         1. Times moused over should be tracked via a counter
   3. Grid should not be re-rendered when modes change
2. 
