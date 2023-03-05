const questions = [
  {
    prompt: "What color are bananas?\n a) red\n b) yellow\n c) green",
    answer: "b",
  },
  {
    prompt: "What color are grapes?\n a) red\n b) yellow\n c) purple",
    answer: "c",
  },
  {
    prompt: "What color are kiwis?\n a) red\n b) yellow\n c) green",
    answer: "c",
  },
  {
    prompt: "What color are strawberries?\n a) red\n b) yellow\n c) green",
    answer: "a",
  },
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong!");
  }
}

alert(`Congrats! Your got ${score}/${questions.length}`);
