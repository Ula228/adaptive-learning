script.js
document.getElementById('ask-btn').addEventListener('click', sendQuestion);

async function sendQuestion() {
  const question = document.getElementById('question').value;
  if (!question) return;

  addMessage(question, 'user');
  document.getElementById('question').value = '';

  try {
    const response = await fetch('/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const { answer } = await response.json();
    addMessage(answer, 'ai');
  } catch (error) {
    addMessage("Ошибка соединения с сервером", 'error');
  }
}
