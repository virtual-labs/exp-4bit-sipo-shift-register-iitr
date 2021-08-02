/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "A register that can be used to provide data movements ________________",  ///// Write the question inside double quotes
      answers: {
        a: "Parallel Register",                  ///// Write the option 1 inside double quotes
        b: "Simple Register",                  ///// Write the option 2 inside double quotes
        c: "Serial Register",                  ///// Write the option 3 inside double quotes
        d: "Shift Register"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "A n-bit register has a group of _________ flip-flops and some logic gates.",  ///// Write the question inside double quotes
      answers: {
        a: "n",                  ///// Write the option 1 inside double quotes
        b: "p",                  ///// Write the option 2 inside double quotes
        c: "10",                  ///// Write the option 3 inside double quotes
        d: "01"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "Shifting a register content to left by one position is equivalent to ____________",  ///// Write the question inside double quotes
      answers: {
        a: "division by 2",                  ///// Write the option 1 inside double quotes
        b: "addition by 2",                  ///// Write the option 2 inside double quotes
        c: "multiplication by 2",                  ///// Write the option 3 inside double quotes
        d: "subtraction by 2"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
     question: "To serially shift a nibble(4 bits) of data into a shift register,there must be __________",  ///// Write the question inside double quotes
      answers: {
        a: "1 clock pulse",                  ///// Write the option 1 inside double quotes
        b: "8 clock pulses",                  ///// Write the option 2 inside double quotes
        c: "4 clock pulses",                  ///// Write the option 3 inside double quotes
        d: "1 clock pulse for each 1 in the data"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
     question: "What is meant by parallel load of a shift register?",  ///// Write the question inside double quotes
      answers: {
        a: "Parallel shifting of data",                  ///// Write the option 1 inside double quotes
        b: "Each flip-flop is loaded with data one at a time",                  ///// Write the option 2 inside double quotes
        c: "All flip-flops are preset with data",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////