// Variables
const nouns1 = ["Cat", "Dog", "Tree", "Car", "Book"];
const verbs = ["Run", "Jump", "Sing", "Read", "Sleep"];
const adjectives = ["Happy", "Funny", "Sad", "Smart", "Brave"];
const nouns2 = ["Moon", "Ocean", "Mountain", "City", "Forest"];
const settings = ["In the park", "On a mountain", "Under the sea", "In the city", "In a spaceship"];

let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

// Function to handle Noun 1 button click
function handleNoun1Click() {
    const chosenNoun1 = document.getElementById("chosenNoun1");
    chosenNoun1.textContent = nouns1[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1.length;
}


// Function to display the story
function handlePlaybackClick() {
    const storyParagraph = document.getElementById("story");
    const storyText = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyParagraph.textContent = storyText;
}

// Function to generate a random story
function handleRandomClick() {
    const chosenNoun1 = document.getElementById("chosenNoun1");
    const chosenVerb = document.getElementById("chosenVerb");
    const chosenAdjective = document.getElementById("chosenAdjective");
    const chosenNoun2 = document.getElementById("chosenNoun2");
    const chosenSetting = document.getElementById("chosenSetting");

    chosenNoun1.textContent = getRandomElement(nouns1);
    chosenVerb.textContent = getRandomElement(verbs);
    chosenAdjective.textContent = getRandomElement(adjectives);
    chosenNoun2.textContent = getRandomElement(nouns2);
    chosenSetting.textContent = getRandomElement(settings);
}

// Function to reset the story
function handleResetClick() {
    const chosenNoun1 = document.getElementById("chosenNoun1");
    const chosenVerb = document.getElementById("chosenVerb");
    const chosenAdjective = document.getElementById("chosenAdjective");
    const chosenNoun2 = document.getElementById("chosenNoun2");
    const chosenSetting = document.getElementById("chosenSetting");
    const storyParagraph = document.getElementById("story");

    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyParagraph.textContent = "";
}

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Set student ID
document.getElementById("studentId").textContent = "Student ID: 200544925";
