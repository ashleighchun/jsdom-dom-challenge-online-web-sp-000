let seconds = 0;
let x = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}

/*  - A Counter that increases by 1 each second
        brainstorming:
        h1 id = "counter"
        for loop most likely with higher order function

    - Plus Minus buttons that increment or decrement the counter
        if else statement within the counter loop that listens for a click on the plus or minus and changes "counter" integer
        button id = minus
        button id = plus

    - a 'like' button that adds a like for the number that is currently displayed by the timer
        use event.preventDefault() method + increments the number of likes by 1 aka +=
        an if statement that occurs when the like button is clicked for the number counted

    - a comment box that adds comments when submitted
        use event.preventDefault() method + adds text to the page 

    - pause the counter
        within the counter loop, create a function that stops the counter from increasing
        the function also disables all buttons exept the pause button. 
        the text of the button should be "resume" when the pause button is clicked 
        when the 'resume' button is clicked, the button should read "pause" and the other buttons should stop being disabled

*/