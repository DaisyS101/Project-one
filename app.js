const emojis = ['🥹', '😭'];
const emojiButton = document.querySelector('.emoji');
let currentEmoji = 0;

emojiButton.addEventListener('click', () => {
  currentEmoji = (currentEmoji + 1) % emojis.length;
  emojiButton.textContent = emojis[currentEmoji];
});