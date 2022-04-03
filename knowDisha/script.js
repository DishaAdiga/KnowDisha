function check(){
    var qstn1=document.quiz.qstn1.value;
    var qstn2=document.quiz.qstn2.value;
    var qstn3=document.quiz.qstn3.value;
    var qstn4=document.quiz.qstn4.value;
    var qstn5=document.quiz.qstn5.value;

    var count=0;

    if(qstn1=='November'){
        count++;
    }

    if(qstn2=='Photography'){
        count++;
    }

    if(qstn3=='IndianRaga'){
        count++;
    }

    if(qstn4=='Mountains'){
        count++;
    }

    if(qstn5=='fear2'){
        count++;
    }

    var messages = ['Wohiooo! You know Disha really well!!',
                    'Not bad!',
                    'Oops! Start interacting with Disha to know more about her!'];

    var pictures =['img/yayy.gif','img/meh.gif','img/lose.gif'];

    var range
    if (count==0 || count==1 || count==2){
        range=2;
    }
    if (count==3){
        range=1;
    }
    if (count==4 || count==5){
        range=0;
    }

    //get element by id
    document.getElementById("on_submit").style.visibility="visible";
    document.getElementById("number_correct").innerHTML="Your score is "+count;
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("picture").src=pictures[range];
}

