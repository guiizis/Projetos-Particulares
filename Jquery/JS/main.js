//global variables
let checkedAnswer
let index = 0
let dataGlobal
let numberOfQuestion = 1
let timePoints = 16 // add um segundo por conta da demora do primeiro load das perguntas
let timerStart
let score = 0
let correctAnswers = 0


$('document').ready(() => {
    console.log("hey there :)")
})

//on click's
$("#btn_login").on("click", () => {
    verifyUserName()
})

$("#btn_confirm").on("click", () => {
    index++
    verifyAnswer(checkedAnswer,index,dataGlobal,timerStart)
})



// caputrar resultado da api
const startQuiz = async () => {
    removeLogin()
    const { results: data } = await requisitionData()
    dataGlobal=data
    buildTemplateQuestions(data, index)
}

//verificar se o nome do usario esta vazio e dar start no quiz
const verifyUserName = () => {
    const userName = $("#txt_userName").val()
    if (userName.trim().length == 0) {
        $("#div_AlertNickName").removeClass("dsNone")
    } else {
        
        startQuiz()
    }
}

//remover o card de login com fades para dar uma transição mais suave
const removeLogin = () => {

    $("#cardLogin").fadeOut("slow")

    //timeout para melhorar estetica
    setTimeout(() => {

        $("#loginScreen").attr("hidden", true)
        $("#loginScreen").removeClass("d-flex")

        $("#questionScreen").fadeIn("slow")
        $("#questionScreen").removeClass("dsNone")
        $("#questionScreen").addClass("d-flex")

    }, 1500)
}
 


// montando lista de perguntas e adicionando listener para o click, metodo de reset para timer e etc
const buildTemplateQuestions = (data, index) => {
    const questionCard = $("#quizQuestions")
    let currentQuestion = buildQuestion(data[index])
    let question = $("#h6_titleQuestion")
    let questionText=""
    const placar = $("#h6_placar")
    

    currentQuestion.map((question, index) => {
         questionText += `
            <a class="list-group-item list-group-item-action" checkAnswer>
                ${question.answer}
                <input type="hidden" value="${question.isCorrect}" hiddenValue> 
            </a>
                  
        `
    })

    questionCardContent=`
    <div class="list-group" answersBox> ${questionText} 
        <h6 class="text-center mt-2" id="h6_timePoints" name="h6_timePoints">${timePoints}</h6>
        <div class="progress mt-1">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>`

    $(question).html(data[index].question)

    $(questionCard).append(questionCardContent)

    $(placar).text(`${numberOfQuestion}/${data.length}`)

    markAnswer()

    clearInterval(timerStart)
    
    resetTimer()

    startCount(".progress-bar")

    

    numberOfQuestion++
}

// montar perguntas  e retornar elas embaralhadas
const buildQuestion = (question) => {
    let answers = []
    const correctAnswer = { isCorrect: true, answer:question["correct_answer"]}
    console.log(question["correct_answer"])

    question["incorrect_answers"].map((answer,index)=>{
        answers.push({
            isCorrect:false,
            answer
        })
    })

    console.log(answers)
    answers.push(correctAnswer)
    
    return shuffle(answers)

}

// embaralhar o array 

function shuffle(Array) {
    var j, x, i;
    var shuffleArray = Array;
    for (i = shuffleArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = shuffleArray[i];
        shuffleArray[i] = shuffleArray[j];
        shuffleArray[j] = x;
    }
    return shuffleArray;
}

//marcar respostas
function markAnswer(){
    $('[checkAnswer]').on("click",function(event){
        
        removeAnotherCheckedAnswer(this)

        $(this).addClass('selectedItem')
        
        checkedAnswer = $(this).find('[hiddenvalue]').val()
        
    })
}


//remover outras marcadas
const removeAnotherCheckedAnswer=(element)=>{
    $(element).parent().find(".selectedItem").each((index,element)=>{
        $(element).removeClass("selectedItem")
    })
}

const verifyAnswer = (answer,index,dataGlobal,timerStart)=>{
    
     
    clearInterval(timerStart)
    markTheAnswers()

    if(answer == 'true'){
        score += Number($('#h6_timePoints').text())
        correctAnswers++
        correctAnswer(index,dataGlobal)
    }else{
        wrongAnswer(correctAnswers,score)
    }
}

const startCount=(classElement)=>{
    let widthOfProgress= 100
    
     timerStart = setInterval(()=>{
        
        timePoints--
        widthOfProgress -= 6.66
        
        $(classElement).css("width",`${widthOfProgress}%`)
        attTime(timePoints)

        if(timePoints == 0){
            clearInterval(timerStart)
            wrongAnswer()
        }
    
    },1000)
}

const resetTimer =() =>{
    
    timePoints=16
}

const attTime =(time)=>{
    $('#h6_timePoints').text(time)
}
 