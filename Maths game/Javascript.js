var playing=false;
var score;
var timeremaining;
var action;
var correctanswer;
// if we click on start\reset button
document.getElementById("startreset").onclick=
function(){
    //if we are playing
    if(playing==true){
        
        location.reload(); //reload page
    }
    else
    {
       //changing mode to playing
        playing=true;
        
        //set score to 0
        score=0;
document.getElementById("scorevalue").innerHTML=score;

//show countdown box
show("timeremaining");
    timeremaining=15;
    hide("gameover");
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
//change button to reset
document.getElementById("startreset").innerHTML="Reset Game";
    startcountdown();
    //generate new Q&A
    generateQA();
    } 

} 
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    if(playing==true){
        if(this.innerHTML==correctanswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                    hide("correct");
            },1000);
            generateQA();
        }
        else{
            show("wrong");
            hide("correct");
            setTimeout(function(){
                    hide("wrong");
            },1000);
        
        }
    }
}
}




//functions
    //startCounter                
function startcountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
           stopcountdown();
           show("gameover");
           document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your Score is: "+ score +"</p>";
            hide("timeremaining");
            hide("wrong");
            hide("correct");
            document.getElementById("startreset").innerHTML="Start Game";
        }
    }, 1000);
}
//stopCounter
function stopcountdown(){
    clearInterval(action);
}
//Show Content set to display:none
function show(Id){
    document.getElementById(Id).style.display="block";

}
//hide content
function hide(Id){
    document.getElementById(Id).style.display="none";

}
//generate question and multiple answer:
function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x +"x"+ y;
    //randomly selecting the position[one-box] for the correct answer
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    //fill other boxes with wrong answers
    var answers=[correctanswer];
    for(i=1;i<5;i++){
        if(i!==correctposition){
            var wronganswer;
            do{wronganswer=(1+Math.round(9*Math.random())*(1+Math.round(9*Math.random())));
            }
            while(answers.indexOf(wronganswer)>-1){
                
            }
            document.getElementById("box"+i).innerHTML=wronganswer;
                answers.push(wronganswer);
                
        }
    }
}