const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = [
  "Who was the first American woman in space? " ,
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride", 
  "true",
  "40",
  "Trajectory", 
  "3"
];
let candidateAnswers = [];
let question;
let correctAnswer;
let candidateAnswer;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("candidate's name: "); 


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i = 0; i < 5; i++) {

    candidateAnswers[i] = input.question(`${i+1}) ${questions[i]}`);

    candidateAnswer = candidateAnswers[i] ; 
    correctAnswer = correctAnswers[i];

    console.log(`your answer: ${candidateAnswer}`); 
    console.log(`correct answer: ${correctAnswer}`); 
      if(candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) 
        {
         console.log("that is correct!"); 
        }
      else {
        console.log("incorrect");
      }
  
  } // end of loop

} // end of askQuestion function

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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