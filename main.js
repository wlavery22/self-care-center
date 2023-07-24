var affirms = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
];

var currentMessage;

// querySelectors:
var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var receiveButton = document.querySelector(".submit");
var meditator = document.querySelector("#meditator");
var messageView = document.querySelector(".message-view");
var messageSelect = document.querySelector(".message-select");
var suggestedMessage = document.querySelector(".suggested-message");
var wrapSuggestedMessage = document.querySelector(".wrap-suggested-message");
var resetButton = document.querySelector(".reset");

// eventListeners:
receiveButton.addEventListener('click', showMessage);
resetButton.addEventListener('click', clearForm);

// functions / eventHandlers:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };

function showMessage(event) {
  event.preventDefault();
  wrapSuggestedMessage.classList.remove('hidden');
  resetButton.hidden = false;
    if (affirmationButton.checked) {
      resetButton.hidden = false;
      meditator.classList.add('hidden');
      currentMessage = affirms[getRandomIndex(affirms)];
      suggestedMessage.innerText = currentMessage;
    } else if (mantraButton.checked) {
      resetButton.hidden = false;
      meditator.classList.add('hidden');
      currentMessage = mantras[getRandomIndex(mantras)];
      suggestedMessage.innerText = currentMessage; 
    }
}
function clearForm() {
  suggestedMessage.innerText = "";
  meditator.classList.remove('hidden');
  showresetButton()
  // resetButton.classList.add('hidden');
  // resetButton.hidden = true;
}

function showresetButton() {
  resetButton.hidden = false;
}