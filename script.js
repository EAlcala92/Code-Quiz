//Q&A
const Questions = [{
    id: 0,
    q: "Commonly used types DO NOT include?",
    a: [{ text: "strings", isCorrect: false},
        { text: "boolean", isCorrect: false},
        { text: "alerts", isCorrect: false},
        { text: "numbers", isCorrect: true}]
},
{
    id: 1,
    q: "The condition of an IF/ELSE statement is enclosed within ___",
    a: [{ text: "quotes", isCorrect: false},
        { text: "curly brackets", isCorrect: false},
        { text: "paranthesis", isCorrect: true},
        { text: "square brackets", isCorrect: false}]
},
{
    id: 2,
    q: "Arrays in Javascript can be used to store ____",
    a: [{ text: "numbers and strings", isCorrect: false},
        { text: "other arrays", isCorrect: false},
        { text: "booleans", isCorrect: false},
        { text: "all the above", isCorrect: true}]
},
{
    id: 3,
    q:"String values must be enclosed within ____ when being assigned to variabes.",
    a: [{ text: "commas",isCorrect: false},
        { text: "curly brackets", isCorrect: false},
        { text: "quotes", isCorrect: true},
        { text: "paranthesis", isCorrect: false}]
},
{   
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a: [{text: "Javascript", isCorrect: false},
        {text: "terminal/bash", isCorrect: false},
        {text: "for loops", isCorrect: false},
        {text: "console log", isCorrect: true}]
}]

//start quiz
var start = true;

//run through question
function iterate(id){
    //diplay results
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    //asks the question
    const question = document.getElementById("question");
    question.innerText = question[id].q;

    //displays the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    //assigning the true or false value
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";
    
}