require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

// Безопасность
app.use(cors({
  origin: ['http://localhost:3000', 'https://ваш-сайт.com'],
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));

// Статика из текущей папки (index.html, style.css, script.js)
app.use(express.static(__dirname));

// AI Endpoint
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  
  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: 'Вопрос не может быть пустым' });
  }
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY не настроен');
    return res.status(500).json({ error: 'Сервер не настроен для AI-запросов' });
  }
  
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Ты — AI-помощник образовательной платформы «Умное обучение». Отвечай кратко, по делу, на русском языке. Помогай с учебными вопросами."
          },
          { role: "user", content: question }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 секунд
      }
    );
    
    const answer = response.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error('Ошибка OpenAI:', error.response?.data || error.message);
    
    if (error.code === 'ECONNABORTED') {
      return res.status(504).json({ error: 'Превышено время ожидания ответа от AI' });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({ error: 'Превышен лимит запросов к AI. Попробуйте позже.' });
    }
    
    res.status(500).json({ error: 'Ошибка при обращении к AI-сервису' });
  }
});

// Маршрут по умолчанию отдаёт index.html (уже обрабатывается статикой)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
