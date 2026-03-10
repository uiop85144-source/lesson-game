const questions=[

{
battle:"niso",
question:"Niso jangida Jaloliddinning asosiy maqsadi nima edi?",
correct:"Qo‘shinini saqlab qolish",
wrong:[
"Dushman ortidan uzoq quvish",
"Shaharni egallash",
"Faqat bayroq olish"
]
},

{
battle:"valiyon",
question:"Valiyon jangida qaysi joy ustunlik beradi?",
correct:"Baland joy",
wrong:[
"Past botqoqli joy",
"Yopiq vodiy",
"Daryo ichidagi maydon"
]
},

{
battle:"parvon",
question:"Parvon jangida tor hudud nimaga yordam berdi?",
correct:"Dushman harakatini cheklash",
wrong:[
"Qo‘shinni bo‘lish",
"Dushman ko‘payishiga",
"Otlarni tezlashtirish"
]
}

]

let q=0
let score1=0
let score2=0

function loadQuestion(){

let data=questions[q]

document.getElementById("qnum1").innerText="Savol "+(q+1)
document.getElementById("qnum2").innerText="Savol "+(q+1)

document.getElementById("qtext1").innerText=data.question
document.getElementById("qtext2").innerText=data.question

document.getElementById("map1").src="images/"+data.battle+".jpg"
document.getElementById("map2").src="images/"+data.battle+".jpg"

let answers=[data.correct,...data.wrong]
answers.sort(()=>Math.random()-0.5)

createAnswers(1,answers,data.correct)
createAnswers(2,answers,data.correct)

}

function createAnswers(team,answers,correct){

let box=document.getElementById("answers"+team)
box.innerHTML=""

answers.forEach(a=>{

let btn=document.createElement("button")
btn.innerText=a

btn.onclick=function(){

if(a==correct){
document.getElementById("announcement").innerText="VICTORY!"
playSound("audio/victory-male.mp3")

if(team==1) score1++
else score2++

}else{
document.getElementById("announcement").innerText="TRY AGAIN"
playSound("audio/try-again.mp3")
}

updateScore()

setTimeout(next,2000)

}

box.appendChild(btn)

})

}

function updateScore(){

document.getElementById("score1").innerText=score1
document.getElementById("score2").innerText=score2

}

function playSound(src){

let s=document.getElementById("sound")
s.src=src
s.play()

}

function next(){

document.getElementById("announcement").innerText=""

q++

if(q>=questions.length){
alert("O‘yin tugadi")
return
}

loadQuestion()

}

loadQuestion()

document.getElementById("bgmusic").volume=0.1
document.getElementById("bgmusic").play()