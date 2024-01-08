function send() {

    number1 = document.getElementById("number1").Value;
    number2 = document.getElementById("number2").Value;



    question_number = "<h4>" + number1 + " X "+ number2 +"/h4"




    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button =" <br><br></br></br><button class = 'btn btn-info' onclick='check()'>Check</button> ";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").Value="";
    document.getElementById("number2").Value="";


}