//Variables
const question = document.querySelector('.question-quiz');
const textResponse = document.querySelector('.text-response');
const panelPoints = document.querySelector('.panel-points');
const panelOptions = document.querySelector('.options');
//Response buttons
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
//Button next
const nextBtn = document.querySelector('.next-btn');
//disabled next btn
nextBtn.disabled = true;
//:root
const root = document.documentElement;
//Number of pages
const numberPages = document.querySelector('.number-pages');
let number = 1;
numberPages.innerText = `${number}/7`;
//Points
let points = 0;

function level1 (){
    const level = 1

    if (level === 1){
        btn1.addEventListener('click', btn1Level1);
        btn2.addEventListener('click', btn2Level1);
        btn3.addEventListener('click', btn3Level1);
        btn4.addEventListener('click', btn4Level1);

        nextBtn.addEventListener('click', ()=>{
            level2()
        });
    }

}

function level2 (){
    const level = 2
    //update page number
    number += 1;
    numberPages.innerText = `${number}/7`;
    //Question 
    question.innerText = "What is the name of Peter Parker's aunt?";
    textResponse.innerText = "Choose the correct alternative!"
    //Btn opitons 
    btn1.innerText = "May Parker";
    btn2.innerText = "Mary Jane Watson";
    btn3.innerText = "Gwen Stacy";
    btn4.innerText = "Felicia Hardy"
    //Reset btns 
    root.style.setProperty('--color-primary', '#fafafa');
    root.style.setProperty('--background-btn-hover', '#fafafa');
    root.style.setProperty('--color-text-btn', '#000')
    btn1.classList.remove('wrong');
    btn2.classList.remove('correct')
    btn3.classList.remove('wrong');
    btn4.classList.remove('wrong');
    nextBtn.disabled = true;
    nextBtn.classList.remove('activated')
    //Actived buttons 
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.removeEventListener('click', btn1Level1);
    btn2.removeEventListener('click', btn2Level1);
    btn3.removeEventListener('click', btn3Level1);
    btn4.removeEventListener('click', btn4Level1);


    if(level === 2){
        btn1.addEventListener('click', btn1Level2)
        btn2.addEventListener('click', btn2Level2)
        btn3.addEventListener('click', btn3Level2)
        btn4.addEventListener('click', btn4Level2)

        nextBtn.addEventListener('click', ()=>{
            level3()
        });
    }

}

function level3 (){
    const level = 3
    //Question 
    question.innerText = "What is the name of the school attended by Peter Parker?";
    textResponse.innerText = "Choose the correct alternative!"
    //Btn opitons 
    btn1.innerText = "Midtown High School";
    btn2.innerText = "Empire State University";
    btn3.innerText = "Xavier's School for Gifted Youngsters";
    btn4.innerText = "Felicia Hardy"
    //Reset btns 
    root.style.setProperty('--color-primary', '#fafafa');
    root.style.setProperty('--background-btn-hover', '#fafafa');
    root.style.setProperty('--color-text-btn', '#000')
    btn1.classList.remove('correct');
    btn2.classList.remove('wrong')
    btn3.classList.remove('wrong');
    btn4.classList.remove('wrong');
    nextBtn.disabled = true;
    nextBtn.classList.remove('activated')
    //Actived buttons 
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.removeEventListener('click', btn1Level2);
    btn2.removeEventListener('click', btn2Level2);
    btn3.removeEventListener('click', btn3Level2);
    btn4.removeEventListener('click', btn4Level2);

    if(level === 3){
        btn1.addEventListener('click', btn1Level3)
        btn2.addEventListener('click', btn2Level3)
        btn3.addEventListener('click', btn3Level3)
        btn4.addEventListener('click', btn4Level3)

        nextBtn.addEventListener('click', ()=>{
            level4()
        });
    }

}

function level4 (){
    const level = 4
    //Question 
    question.innerText = "What is the name of Peter Parker's first girlfriend?";
    textResponse.innerText = "Choose the correct alternative!"
    //Btn opitons 
    btn1.innerText = "Mary Jane Watson";
    btn2.innerText = "Betty Brant";
    btn3.innerText = "Felicia Hardy";
    btn4.innerText = "Gwen Stacy"
    //Reset btns 
    root.style.setProperty('--color-primary', '#fafafa');
    root.style.setProperty('--background-btn-hover', '#fafafa');
    root.style.setProperty('--color-text-btn', '#000')
    btn1.classList.remove('wrong');
    btn2.classList.remove('wrong')
    btn3.classList.remove('wrong');
    btn4.classList.remove('correct');
    nextBtn.disabled = true;
    nextBtn.classList.remove('activated')
    //Actived buttons 
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.removeEventListener('click', btn1Level3);
    btn2.removeEventListener('click', btn2Level3);
    btn3.removeEventListener('click', btn3Level3);
    btn4.removeEventListener('click', btn4Level3);

    if(level === 4){
        btn1.addEventListener('click', btn1Level4)
        btn2.addEventListener('click', btn2Level4)
        btn3.addEventListener('click', btn3Level4)
        btn4.addEventListener('click', btn4Level4)

        nextBtn.addEventListener('click', ()=>{
            level5()
        });
    }

}


function level5(){
    const level = 5
    //Question 
    question.innerText = "What is the name of the villain known as the Green Goblin?";
    textResponse.innerText = "Choose the correct alternative!"
    //Btn opitons 
    btn1.innerText = "Adrian Toomes";
    btn2.innerText = "Wilson Fisk";
    btn3.innerText = "Norman Osborn";
    btn4.innerText = "Otto Octavius"
    //Reset btns 
    root.style.setProperty('--color-primary', '#fafafa');
    root.style.setProperty('--background-btn-hover', '#fafafa');
    root.style.setProperty('--color-text-btn', '#000');
    btn1.classList.remove('correct');
    btn2.classList.remove('wrong')
    btn3.classList.remove('wrong');
    btn4.classList.remove('wrong');
    nextBtn.disabled = true;
    nextBtn.classList.remove('activated')
    //Actived buttons 
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.removeEventListener('click', btn1Level4);
    btn2.removeEventListener('click', btn2Level4);
    btn3.removeEventListener('click', btn3Level4);
    btn4.removeEventListener('click', btn4Level4);

    if(level === 5){
        btn1.addEventListener('click', btn1Level5)
        btn2.addEventListener('click', btn2Level5)
        btn3.addEventListener('click', btn3Level5)
        btn4.addEventListener('click', btn4Level5)

        nextBtn.addEventListener('click', ()=>{
            level6()
        });
    }

}

function level6(){
    const level = 6
    //Question 
    question.innerText = "What is the name of Peter Parker's company where he works as a photographer?";
    textResponse.innerText = "Choose the correct alternative!"
    //Btn opitons 
    btn1.innerText = "Stark Industries";
    btn2.innerText = "Daily Bugle";
    btn3.innerText = "Oscorp";
    btn4.innerText = "Parker Industries"
    //Reset btns 
    root.style.setProperty('--color-primary', '#fafafa');
    root.style.setProperty('--background-btn-hover', '#fafafa');
    root.style.setProperty('--color-text-btn', '#000');
    btn1.classList.remove('wrong');
    btn2.classList.remove('wrong')
    btn3.classList.remove('correct');
    btn4.classList.remove('wrong');
    nextBtn.disabled = true;
    nextBtn.classList.remove('activated')
    //Actived buttons 
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.removeEventListener('click', btn1Level5);
    btn2.removeEventListener('click', btn2Level5);
    btn3.removeEventListener('click', btn3Level5);
    btn4.removeEventListener('click', btn4Level5);

    if(level === 6){
        btn1.addEventListener('click', btn1Level6)
        btn2.addEventListener('click', btn2Level6)
        btn3.addEventListener('click', btn3Level6)
        btn4.addEventListener('click', btn4Level6)

        nextBtn.addEventListener('click', ()=>{
            quizScore()
        });
    }

}

function quizScore (){
    question.innerText = "Congratulations, you've completed the Spider-Man Quiz.";

    panelOptions.style.display = 'none'
    panelPoints.style.display = 'inline'

    panelPoints.innerHTML = ''

    const h2 = document.createElement('h2');
    h2.innerText = `You got ${points} out of 6 questions right!`
    h2.classList.add('text-points');
    panelPoints.appendChild(h2);

    nextBtn.disabled = false;
    nextBtn.classList.add('activated')    

    nextBtn.innerText = "Restart";

    if(points <= 2){
        textResponse.innerText = "You don't know anything about Spider-Man😡";
    } else if (points <= 4){
        textResponse.innerText = "You are not really a fan😥";
    } else if (points === 5){
        textResponse.innerText = "You are very good, you got almost all the questions right😳";
    } else if (points === 6){
        textResponse.innerText = "Are you really a fan of Spider-Man🥳";
    }

    nextBtn.addEventListener('click', () => {
        location.reload();
    })
}

level1();

//Group Functions level 1
function btn1Level1(){
    //Wrong Btn
    btn1.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');    
}

function btn2Level1(){
    //Btn correct
    btn2.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1
}

function btn3Level1(){
    //Wrong Btn
    btn3.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
}

function btn4Level1(){
    //Wrong Btn
    btn4.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
}

//Group Functions level 2
function btn1Level2(){
    //Btn correct
    btn1.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1
}

function btn2Level2(){
    //Wrong Btn
    btn2.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}


function btn3Level2(){
    //Wrong Btn
    btn3.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn4Level2(){
    //Wrong Btn
    btn4.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

//Group Functions level 3
function btn1Level3(){
    //Btn correct
    btn1.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1    
}

function btn2Level3(){
    //Wrong Btn
    btn2.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}


function btn3Level3(){
    //Wrong Btn
    btn3.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn4Level3(){
    //Wrong Btn
    btn4.classList.add('wrong');
    //Correct Btn
    btn1.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

//Group Functions level 4
function btn1Level4(){
    //Wrong Btn
    btn1.classList.add('wrong');
    //Correct Btn
    btn4.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn2Level4(){
    //Wrong Btn
    btn2.classList.add('wrong');
    //Correct Btn
    btn4.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn3Level4(){
    //Wrong Btn
    btn3.classList.add('wrong');
    //Correct Btn
    btn4.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn4Level4(){
    //Btn correct
    btn4.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1
}

//Group Functions level 5
function btn1Level5(){
    //Wrong Btn
    btn1.classList.add('wrong');
    //Correct Btn
    btn3.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn2Level5(){
    //Wrong Btn
    btn2.classList.add('wrong');
    //Correct Btn
    btn3.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn3Level5(){
    //Btn correct
    btn3.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1  
}

function btn4Level5(){
    //Wrong Btn
    btn4.classList.add('wrong');
    //Correct Btn
    btn3.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn2.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

//Group Functions level 6
function btn1Level6(){
    //Wrong Btn
    btn1.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn2Level6(){
    //Btn correct
    btn2.classList.add('correct');
    //Text Correct answer
    textResponse.innerText = "Correct answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    //Disabled buttons
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated');
    //Point
    points += 1
}

function btn3Level6(){
    //Wrong Btn
    btn3.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn1.disabled = true;
    btn4.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}

function btn4Level6(){
    //Wrong Btn
    btn4.classList.add('wrong');
    //Correct Btn
    btn2.classList.add('correct');
    //Text Wrong answer
    textResponse.innerText = "Wrong answer!"
    //:root custom
    root.style.setProperty('--color-primary', '#ff000094');
    root.style.setProperty('--background-btn-hover', '#fafafa00');
    root.style.setProperty('--color-text-btn', '#fafafa');
    ////Disabled buttons
    btn2.disabled = true;
    btn3.disabled = true;
    btn1.disabled = true;
    //Add next btn
    nextBtn.disabled = false;
    nextBtn.classList.add('activated'); 
}