server.js

console.log('3000:', process.env.PORT);
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Настройки безопасности
app.use(cors({ origin: ['https://ваш-сайт.com', 'http://localhost:3000'] }));
app.use(express.json());

// AI Endpoint
app.post('/ask', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: req.body.question }],
        max_tokens: 150
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Статика для фронтенда
app.use(express.static('public'));
// Обработчик для корневого пути (GET /)
app.get('/', (req, res) => {
  res.send(`
    <h1>Сервер работает!</h1>
    <p>Используйте <b>/ask</b> для запросов к OpenAI</p>
    <p>Пример POST-запроса:</p>
    <pre>{ "question": "Ваш вопрос" }</pre>
  `);
});
app.listen(process.env.PORT, () => 
  console.log(`Сервер запущен на http://localhost:${process.env.PORT}`));
