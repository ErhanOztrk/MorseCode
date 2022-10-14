const textInput = document.getElementById('text-input');
const translatedOutput = document.getElementById("translated-output")

const morseObject = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
    g: "--.",h: "....", i: "..", j: ".---", k: "-.-",l: ".-..",
    m: "--", n: "_.", o: "---",p: ".--.",q: "--.-",r: ".-.",
    s: "...",t: "-",u: "..-",v: "...-",w: ".--",x: "-..-",
    y: "-.--", z: "--..",  " ": "",  "": " ",
  };


  export const translateEnglish = (englisWord) => {
    englishWord = englisWord.split("");
    for (let i = 0; i < englisWord.length; i++) {
      englisWord[i] = englishWord[i].toLowerCase().split("");
      englisWord[i].forEach((letter, j) => {
        englisWord[i][j] = morseObject[letter];
      });
      englisWord[i] = englisWord[i].join(" ");
    }
    translatedOutput.innerHTML = englisWord.join(" ");
  };