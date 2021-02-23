const correctAnswer=(index,dataGlobal)=>{
    $("#quizQuestions").children().not(":first").empty()
    buildTemplateQuestions(dataGlobal,index)

}

const wrongAnswer=(correctAnswer,score)=>{
    const name = $('#txt_userName').val()
    let ctAn = correctAnswer ? correctAnswer :  0
    let ctSr = score ? score :  0
    blockPanel()
    $('#myModal').modal('toggle')
    $("#p_textEndGame").text(`O Jogo Acabou ${name}, Deseja um Novo Jogo  ou ver o Placar  ? `)
    $("#p_scoreEndGame").text(` Sua Pontuação:  ${ctSr}`)
    $("#p_correctAnswersEndGame").text(` Número de Perguntas que Você Acertou:  ${ctAn}`)
    
 
}


const markTheAnswers=()=>{
    $("[answersBox] a").each(function(index,element){
        if($(element).find("[hiddenValue]").val() == "false"){
            $(element).css("background-color","tomato")
        }else{
            $(element).css("background-color","yellowgreen")
        }
    })
}

const blockPanel = () =>{
    $("body").find("[contentPanel]").not(":last").each((index,element)=>{
        $(element).css("pointer-events","none")
    })

    $(".modal").css("pointer-events","none")
}