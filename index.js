
const section1Percentage = document.getElementById("section1label")
const section1Slider = document.getElementById("section1slider")

const section2Percentage = document.getElementById("section2label")
const section2Slider = document.getElementById("section2slider")

const section3Percentage = document.getElementById("section3label")
const section3Slider = document.getElementById("section3slider")

const section4Percentage = document.getElementById("section4label")
const section4Slider = document.getElementById("section4slider")


const calculateBtn = document.getElementById("calculate")

const resultsP = document.getElementById("prediction")

calculateBtn.addEventListener("click", CalculateScore)

function OnSlider1Changed()
{
    section1Percentage.innerHTML = `${section1slider.value}%`
}

function OnSlider2Changed()
{
    section2Percentage.innerHTML = `${section2slider.value}%`
}

function OnSlider3Changed()
{
    section3Percentage.innerHTML = `${section3slider.value}%`
}

function OnSlider4Changed()
{
    section4Percentage.innerHTML = `${section4slider.value}%`
}


function CalculateScore()
{
    let finalScore = 0;

    let section1Score = (section1Slider.value / 100) * 400

    finalScore+= section1Score
    
    let section2Score = (section2Slider.value / 100) * 400

    finalScore += section2Score

    let section3Score = (section3Slider.value / 100) * 400

    finalScore += section3Score

    let section4Score = (section4Slider.value / 100) * 400

    finalScore += section4Score

    resultsP.innerHTML = "Your predicted SAT score is: " + finalScore
}