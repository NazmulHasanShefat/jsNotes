let texts = document.querySelector(".container p")
console.log(texts)

let match_text = texts.innerText.replace(/lorem/gi);
match_text.style.color = "red"
// match_text.style.color = "red"
console.log(match_text)