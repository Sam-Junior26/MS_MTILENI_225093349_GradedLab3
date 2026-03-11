document.getElementById("Execute").addEventListener("click", function(){
    let sentence = document.getElementById("sentence").value;
    let splitSentence = sentence.split(" ");
    //let countSentence = splitSentence.length;
    let countSentence = 0;
    for(let i = 0;i < splitSentence.length; i++){
        if(splitSentence[i] == "," || splitSentence[i] == "!" || splitSentence[i] == "@" || splitSentence[i] == "*" || splitSentence[i] == ":"){
            countSentence = countSentence
        }
        else{
            countSentence++;
        }
    }

    let underlineSentence = "";
    for(let i = 0; i < splitSentence.length; i++){
        underlineSentence += "<u>" + splitSentence[i] + "</u> ";
    }
    document.getElementById("words").innerHTML = underlineSentence;

    /*let count = 0;
    splitSentence.forEach(element => {
        if(element == "," )
        {
            count = count
        }
        else{
            count++;
        }*/

    document.getElementById("count").innerHTML = countSentence;
    document.getElementById("sent-count").value = countSentence;
    
});

    
    
