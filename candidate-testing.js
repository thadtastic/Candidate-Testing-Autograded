const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? " 
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let numOfQuizQuestions = 5;

let status;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// Replace with loop that asks each question.
  //candidateAnswer = input.question(question);//
  for (let i=0; i < questions.length; i++){
     candidateAnswers.push(input.question(questions[i]));
     console.log(`Your Answer: ${candidateAnswers[i]}
     Correct Answer: ${correctAnswers[i]}`);
  }
}

function gradeQuiz(candidateAnswers) {
  let numOfCorrectAns = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// *PART 2* Replace with a template literal that displays each of the candidate's responses and the corresponding correct answers//
// if (candidateAnswer === correctAnswer){
//   console.log("Your Answer is Correct");
// } else {
//   console.log("Wrong!");
// }
for (let i = 0; i < correctAnswers.length; i++){
 
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numOfCorrectAns += 1
  }
      if (numOfCorrectAns >= 4){
         status = "Passed";
  }   else {
          status = "failed"
  }
  
}
let grade;
console.log(numOfCorrectAns, numOfQuizQuestions, grade);

 grade = (numOfCorrectAns / numOfQuizQuestions) * 100 ;  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(`>>>>> Overall Grade: ${grade} <<<<< 
  Status: ${status}`);

  
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Welcome ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};