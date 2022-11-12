const nouns = "https://raw.githubusercontent.com/hugsy/stuff/main/random-word/english-nouns.txt"
const verbs = "https://raw.githubusercontent.com/verachell/English-word-lists-parts-of-speech-approximate/main/verbs/mostly-verbs-infinitive.txt"

   const generate = () =>{

    fetch(nouns)
   .then( r => r.text() )
   .then( t => {
    const arr = t.split(/\r?\n/);
    const noun1 = arr[Math.floor(Math.random()*arr.length)]
    document.getElementById("noun").textContent = noun1
    const noun2 = arr[Math.floor(Math.random()*arr.length)]
    document.getElementById("noun2").textContent = noun2
    })

    fetch(verbs)
   .then( r => r.text() )
   .then( t => {
    const arr = t.split(/\r?\n/);
    const verb = arr[Math.floor(Math.random()*arr.length)]
    document.getElementById("verb").textContent = verb
    })

   }