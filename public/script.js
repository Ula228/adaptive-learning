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

function addMessage(text, sender) {
  const chat = document.getElementById('chat');
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}