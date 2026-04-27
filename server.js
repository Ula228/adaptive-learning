require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'https://ваш-сайт.com'], credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: 'Вопрос не может быть пустым' });
  }
  if (!process.env.OPENAI_API_KEY) {
    console.error('GEMINI_API_KEY не настроен');
    return res.status(500).json({ error: 'Сервер не настроен для AI-запросов. Проверьте .env файл.' });
  }
  try {
    const GEMINI_API_KEY = process.env.OPENAI_API_KEY;
    // 🔁 Можно менять на любую доступную модель:
    const GEMINI_MODEL = "gemini-2.5-flash"; // или "gemma-3-1b-it"
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const response = await axios.post(
      GEMINI_URL,
      {
        "contents": [{
          "parts": [{"text": question}]
        }],
        "systemInstruction": {
          "parts": [{"text": "Ты — AI-помощник образовательной платформы «Умное обучение». Отвечай кратко, по делу и на русском языке."}]
        }
      },
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: 15000
      }
    );

    const answer = response.data.candidates[0].content.parts[0].text;
    res.json({ answer });
  } catch (error) {
    console.error('Ошибка Gemini API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Ошибка при обращении к Gemini API. Проверьте ключ или попробуйте позже.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Сервер запущен на http://localhost:${PORT}`));