// Quiz data
const quizData = [
    {
      question: "What's the current version of Java?",
      options: ["Java 8", "Java 17", "Java 21", "Java 24"],
      answer: "Java 24"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hypertext Machine Language", "Hypertext Markup Link", "Hypertext Machine Link"],
      answer: "Hypertext Markup Language"
    }
  ];
  
  // DOM elements
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  
  // Quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Load a question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option");
      optionsElement.appendChild(button);
  
      button.addEventListener("click", () => {
        checkAnswer(option);
      });
    });
  }
  
  // Check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      feedbackElement.innerText = "Correct!";
      score++;
    } else {
      feedbackElement.innerText = `Wrong! The correct answer is ${currentQuestion.answer}.`;
    }
    scoreElement.innerText = `Score: ${score}`;
    disableOptions();
  }
  
  // Disable options after selection
  function disableOptions() {
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(button => {
      button.disabled = true;
    });
  }
  
  // Move to the next question
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      feedbackElement.innerText = "";
    } else {
      alert(`Quiz finished! Your final score is ${score}/${quizData.length}`);
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
    }
  });
  
  // Load the first question
  loadQuestion();