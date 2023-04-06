let query =  document.getElementsByClassName('query')[0];
let choices = Array.from(document.querySelectorAll('.option'));
let progress = document.getElementById("progress-bar-full");
let quiz_board = document.getElementsByClassName("quiz-board")[0]; 
let status_bar = document.getElementById('statusText');
let bodyTag = document.getElementsByTagName('body')[0];
let attempts = 0;
let score = 0;

let questions = [
    {
        question : 'WHEN IS GANDHI JAYANTHI?',
        choice1:'1st october',
        choice2:'2nd october',
        choice3:'1st september',
        choice4:'2nd september',
        answer:'2nd october',
        qStatus: ''
    },
    {
        question :'WHO IS THE FIRST INDIAN WOMEN TO SPACE?',
        choice1:'Kalpana chawla',
        choice2:'Sirisha Bandla',
        choice3:'Swati Mohan',
        choice4:'Yogita Shah',
        answer:'Kalpana chawla',
        qStatus: '' 
    },
    {
        question :'WHICH COUNTRY HAS THE HIGHEST POPULATION?',
        choice1:'India',
        choice2:'South Korea',
        choice3:'Japan',
        choice4:'China',
        answer:'China',
        qStatus: '' 
    },
    {
        question : 'WHAT IS THE VALUE OF (5*5)+8',
        choice1:45,
        choice2:33,
        choice3:20,
        choice4:18,
        answer:33,
        qStatus: '' 
    },
    {
        question :'THE ENGLISH ALPHABETS CONSISTS OF ___ LETTERS',
        choice1:28,
        choice2:23,
        choice3:25,
        choice4:26,
        answer:26,
        qStatus: '' 
    },
]
let time = 0;
const total_score = 100;
const no_of_questions = 5;
let i = 0;
questionStatus = [0,0,0,0,0]

function result(){

            quiz_board.classList.add("total");
            quiz_board.innerHTML = `
                <h1>${score}</h1>
                
            `;
            bodyTag.classList.add('set');
            
        
}
startGame();
function startGame(){
   query.innerText = questions[i].question;
   choices[0].innerText = questions[i].choice1;
   choices[1].innerText = questions[i].choice2;
   choices[2].innerText = questions[i].choice3;
   choices[3].innerText = questions[i].choice4;
   status_bar.innerText = questions[i].qStatus;
   if(i>=1){
    document.getElementsByClassName("pre")[0].style.visibility = "visible";
   }
   else{
        document.getElementsByClassName("pre")[0].style.visibility = "hidden";
   }
   if(i == (no_of_questions-1)){
    document.getElementsByClassName("next")[0].style.visibility = "hidden";
   }
   else{
    document.getElementsByClassName("next")[0].style.visibility = "visible";
   }
   if(questionStatus[i] == 0){
        validate();
    }
}




function validate(){
    
    choices.forEach(choice =>{
        
        choice.addEventListener("click",e =>{
            
               if(questionStatus[i] == 0){

                if(e.target.innerText == questions[i].answer){
                    questionStatus[i] = 1;
                    score +=20;
                    e.target.parentElement.classList.add('correct');
                    setTimeout(()=>{
                        e.target.parentElement.classList.remove('correct');
                    },1000)
                    attempts++;
                    questions[i].qStatus = 'CORRECT';
                    
                }
                else{
                    questionStatus[i] = -1;
                    e.target.parentElement.classList.add('incorrect');
                    setTimeout(()=>{
                        e.target.parentElement.classList.remove('incorrect');
                    },1000);
                    attempts++;
                    questions[i].qStatus = 'WRONG';
                }
                progress.style.width = `${(attempts/5)*500}px`;
                
               }
               
            
        })
        
        
    })
}


function nextQ(){
        i++;
        startGame();
}

function preQ(){
    i--;
    startGame();
}


