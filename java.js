const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  const card = this;
  card.classList.add('flipped');
  flippedCards.push(card);
  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    const letter1 = card1.dataset.letter;
    const letter2 = card2.dataset.letter;
    if (letter1 === letter2) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedCards.push(card1, card2);
    } else {

      setTimeout(() => {
        if (!card1.classList.contains('matched')) {
          card1.classList.remove('flipped');
        }
        if (!card2.classList.contains('matched')) {
          card2.classList.remove('flipped');
        }

      }, 1000);
    }
    flippedCards = [];
  }
}
