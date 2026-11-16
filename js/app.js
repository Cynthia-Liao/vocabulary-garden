"use strict";

const categoryNames = {
  daily: "日常英文 · Daily English",
  academic: "學術英文 · Academic English",
  technology: "科技英文 · Technology English",
  business: "商業英文 · Business English",
};

const categorySelect = document.querySelector("#category");
const flashcard = document.querySelector("#flashcard");
const answer = document.querySelector("#answer");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const progress = document.querySelector("#progress");
const statusMessage = document.querySelector("#status");

let vocabulary = [];
let currentCards = [];
let currentIndex = 0;
let isFlipped = false;

function renderSide() {
  answer.hidden = !isFlipped;
  flashcard.setAttribute("aria-pressed", String(isFlipped));
  const card = currentCards[currentIndex];
  flashcard.setAttribute("aria-label", isFlipped
    ? `${card.word}，${card.partOfSpeech}，${card.meaning}。例句：${card.example}。點擊回到單字面。`
    : `${card.word}，點擊查看答案。`);
  document.querySelector("#card-face").textContent = isFlipped ? "單字解答" : "英文單字";
  document.querySelector("#flip-hint").textContent = isFlipped ? "點一下卡片，回到單字面" : "點一下卡片，查看答案";
}

function renderCard() {
  const card = currentCards[currentIndex];
  isFlipped = false;
  flashcard.hidden = !card;
  statusMessage.hidden = Boolean(card);
  previousButton.disabled = !card || currentIndex === 0;
  nextButton.disabled = !card || currentIndex === currentCards.length - 1;
  progress.textContent = `第 ${card ? currentIndex + 1 : 0} / ${currentCards.length} 張`;

  if (!card) {
    statusMessage.textContent = "這座花園還沒有單字，之後再來看看吧！";
    return;
  }

  document.querySelector("#word").textContent = card.word;
  document.querySelector("#part-of-speech").textContent = card.partOfSpeech;
  document.querySelector("#meaning").textContent = card.meaning;
  document.querySelector("#example").textContent = card.example;
  renderSide();
}

function changeCategory() {
  currentCards = vocabulary.filter((card) => card.category === categorySelect.value);
  currentIndex = 0;
  renderCard();
}

function moveCard(offset) {
  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= currentCards.length) return;
  currentIndex = nextIndex;
  renderCard();
}

flashcard.addEventListener("click", () => {
  if (!currentCards.length) return;
  isFlipped = !isFlipped;
  renderSide();
});
categorySelect.addEventListener("change", changeCategory);
previousButton.addEventListener("click", () => moveCard(-1));
nextButton.addEventListener("click", () => moveCard(1));

async function loadVocabulary() {
  try {
    const response = await fetch("data/vocabulary.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    vocabulary = await response.json();
    // Keep the initial categories available even when one has no entries.
    const categories = new Set([...Object.keys(categoryNames), ...vocabulary.map((card) => card.category)]);
    for (const category of categories) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = categoryNames[category] || category;
      categorySelect.append(option);
    }
    categorySelect.disabled = false;
    changeCategory();
  } catch (error) {
    statusMessage.hidden = false;
    statusMessage.textContent = "暫時無法載入單字，請稍後重新整理頁面。";
    console.error("Unable to load vocabulary:", error);
  }
}

loadVocabulary();
