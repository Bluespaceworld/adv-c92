player1=localStorage.getItem("player1_name")
player2=localStorage.getItem("player2_name")
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1+" : "
document.getElementById("player2_name").innerHTML=player2+":"
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("question_turn").innerHTML="question turn-"+player1
document.getElementById("answer_turn").innerHTML="answer turn-"+player2

function send(){
    window.location="check_page.html"
    numberr1=document.getElementById("number1").value
    numberr2=document.getElementById("number2").value
    solution=numberr1*numberr2
    console.log(solution)
    console.log(numberr1+"-number1")
    console.log(numberr2+"-number2")
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    console.log("word in lowercase="+word)
    charAt1=word.charAt(1)
    console.log(charAt1)
    length_divide_by2=Math.floor(word.length/2)
    charAtmiddle=word.charAt(length_divide_by2)
    console.log(charAtmiddle)
    length_minus1=word.length-1;
    charAtlast=word.charAt(length_minus1)
    console.log(charAtlast)

    remove_charAt1=word.replace(charAt1,"_")
    remove_charAtmiddle=remove_charAt1.replace(charAtmiddle,"_")
    remove_charAtlast=remove_charAtmiddle.replace(charAtlast,"_")
    questionword="<h4>Q."+remove_charAtlast+"</h4>"
    inputbox="<br>A.<input type='text' id='input_check_box'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
    row=questionword+inputbox+check_button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
    num1=document.getElementById("number1").value
    console.log(num1)
    

}
    numberr1=document.getElementById("number1").value
    numberr2=document.getElementById("number2").value
    solution=numberr1*numberr2
question_turn="player1"
answer_turn="player2"
function check(){
    answer=document.getElementById("answer_textbox").value
    console.log(answer)
    window.location="game_page.html"
    if(answer==solution){
        console.log("correct")
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        answer_turn="player1"
        document.getElementById('question_turn').innerHTML="question turn-"+player2
        document.getElementById('answer_turn').innerHTML="answer turn-"+player1
    }
    else{
        question_turn="player1"
        answer_turn="player2"
        document.getElementById('question_turn').innerHTML="question turn-"+player1
        document.getElementById('answer_turn').innerHTML="answer turn-"+player2
    }
}