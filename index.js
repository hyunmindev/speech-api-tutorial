const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'ko-KR';
recognition.interimResults = false;
recognition.maxAlternatives = 0;

const output = document.querySelector('#output');
const button = document.querySelector('#button');
const body = document.body;

button.onclick = () => {
  recognition.start();
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  output.textContent = `Result received: ${color}.`;
  body.style.backgroundColor = color;
}

recognition.onspeechend = () => {
  recognition.stop();
}

recognition.onnomatch = () => {
  output.textContent = "I didn't recognize that color.";
}
