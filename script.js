const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const charCountWithSpaces = document.getElementById("charCountWithSpaces");
const charCountNoSpaces = document.getElementById("charCountNoSpaces");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const readingTime = document.getElementById("readingTime");

textInput.addEventListener("input", updateCounts);

function updateCounts(){

const text = textInput.value;

const words = text.trim().split(/\s+/).filter(w => w.length>0);

wordCount.textContent = words.length;

charCountWithSpaces.textContent = text.length;

charCountNoSpaces.textContent = text.replace(/\s/g,"").length;

const sentences = text.split(/[.!?]+/).filter(s=>s.trim().length>0);
sentenceCount.textContent = sentences.length;

const paragraphs = text.split(/\n+/).filter(p=>p.trim().length>0);
paragraphCount.textContent = paragraphs.length;

const readingMinutes = Math.ceil(words.length/200);
readingTime.textContent = readingMinutes + " min";
}

document.getElementById("copyBtn").onclick = ()=>{
navigator.clipboard.writeText(textInput.value);
};

document.getElementById("clearBtn").onclick = ()=>{
textInput.value="";
updateCounts();
};
