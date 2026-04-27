// Конфигурация
const CONFIG = {
    initialLevel: 1,
    xpPerTest: 100,
    xpPerMaterial: 50,
    nextLevelFactor: 1.5,
    maxLevel: 50
};

// Материалы для обучения с полным контентом
const MATERIALS = [ /* ... весь массив MATERIALS из предыдущего ответа ... */ ];

// Тесты
const TESTS = [ /* ... весь массив TESTS из предыдущего ответа ... */ ];

// Состояние приложения
const state = {
    currentLevel: 'beginner',
    currentTopic: 'all',
    progress: 0,
    darkMode: false,
    xp: 0,
    level: CONFIG.initialLevel,
    nextLevelXp: 1000,
    studiedMaterials: [],
    chatHistory: []
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initChart();
    setupEventListeners();
    renderMaterials();
    renderTests();
    updateUI();
});

function loadState() {
    const saved = localStorage.getItem('learning-app-state');
    if (saved) {
        Object.assign(state, JSON.parse(saved));
        if (state.darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
        }
    }
}

function saveState() {
    localStorage.setItem('learning-app-state', JSON.stringify(state));
}

function setupEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('beginner').addEventListener('click', () => setLevel('beginner'));
    document.getElementById('intermediate').addEventListener('click', () => setLevel('intermediate'));
    document.getElementById('advanced').addEventListener('click', () => setLevel('advanced'));
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.topic));
    });
    document.getElementById('search-btn').addEventListener('click', searchMaterials);
    document.getElementById('search-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') searchMaterials(); });
    document.getElementById('ask-ai').addEventListener('click', askAI);
    document.getElementById('ai-question').addEventListener('keypress', (e) => { if (e.key === 'Enter') askAI(); });
    document.getElementById('close-material-modal').addEventListener('click', closeMaterialModal);
    document.getElementById('close-material-btn').addEventListener('click', closeMaterialModal);
    document.getElementById('mark-studied-btn').addEventListener('click', markMaterialAsStudied);
}

function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.documentElement.toggleAttribute('data-theme');
    const icon = state.darkMode ? 'sun' : 'moon';
    document.getElementById('theme-toggle').innerHTML = `<i class="fas fa-${icon}"></i> ${state.darkMode ? 'Светлая' : 'Темная'} тема`;
    saveState();
}

function setLevel(level) {
    state.currentLevel = level;
    document.querySelectorAll('.difficulty-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById(level).classList.add('active');
    renderMaterials(); renderTests(); updateUI(); saveState();
}

function setFilter(topic) {
    state.currentTopic = topic;
    document.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-tab[data-topic="${topic}"]`).classList.add('active');
    renderMaterials(); renderTests(); saveState();
}

function searchMaterials() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    renderMaterials(query);
}

function renderMaterials(searchQuery = '') {
    const container = document.getElementById('materials');
    container.innerHTML = '';
    const filtered = MATERIALS.filter(m => {
        return (state.currentTopic === 'all' || m.topic === state.currentTopic) &&
               m.level === state.currentLevel &&
               (searchQuery === '' || m.title.toLowerCase().includes(searchQuery) || m.description.toLowerCase().includes(searchQuery));
    });
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-book-open"></i><p>Материалы не найдены</p></div>';
        return;
    }
    filtered.forEach(material => {
        const isStudied = state.studiedMaterials.includes(material.id);
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `
            <div class="material-header"><i class="fas ${material.icon} material-icon"></i><h3 class="material-title">${material.title}</h3></div>
            <p class="material-description">${material.description}</p>
            <div class="material-meta"><span class="material-topic">${getTopicName(material.topic)}</span><span class="material-level ${material.level}">${getLevelName(material.level)}</span></div>
            <button class="study-btn ${isStudied ? 'studied' : ''}" data-id="${material.id}"><i class="fas ${isStudied ? 'fa-check' : 'fa-book'}"></i>${isStudied ? 'Изучено' : 'Изучить'}</button>
        `;
        container.appendChild(card);
    });
    document.querySelectorAll('.study-btn').forEach(btn => {
        btn.addEventListener('click', () => showMaterialModal(parseInt(btn.dataset.id)));
    });
}

let currentMaterialId = null;
function showMaterialModal(materialId) { /* ... без изменений ... */ }
function closeMaterialModal() { document.getElementById('material-modal').classList.remove('show'); currentMaterialId = null; }
function markMaterialAsStudied() { if (currentMaterialId) { toggleMaterialStudy(currentMaterialId); closeMaterialModal(); } }
function toggleMaterialStudy(materialId) { /* ... без изменений ... */ }
function renderTests() { /* ... без изменений ... */ }
function startTest(testId) { /* ... без изменений ... */ }
function updateProgress() { /* ... без изменений ... */ }
function addXp(amount) { /* ... без изменений ... */ }
function updateUI() { /* ... без изменений ... */ }
function showNotification(message, type) { /* ... без изменений ... */ }

// AI-чат (подключен к серверу)
async function askAI() {
    const input = document.getElementById('ai-question');
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    input.value = '';
    const loadingMsg = addMessage('...', 'ai loading');
    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });
        const data = await response.json();
        if (loadingMsg) loadingMsg.remove();
        if (data.answer) addMessage(data.answer, 'ai');
        else if (data.error) addMessage(`Ошибка: ${data.error}`, 'ai error');
        else addMessage('Извините, не могу ответить сейчас.', 'ai error');
    } catch (error) {
        console.error('Ошибка AI:', error);
        if (loadingMsg) loadingMsg.remove();
        addMessage('Ошибка соединения с сервером.', 'ai error');
    }
}

function addMessage(text, sender) {
    const chat = document.getElementById('chat-messages');
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    let displayText = text;
    if (sender === 'user') displayText = `<strong>Вы:</strong> ${text}`;
    else if (sender === 'ai') displayText = `<strong>AI:</strong> ${text}`;
    else if (sender === 'ai loading') displayText = `<strong>AI:</strong> <em>${text}</em>`;
    else if (sender === 'ai error') displayText = `<strong>AI:</strong> <span style="color: var(--error-color);">${text}</span>`;
    message.innerHTML = displayText;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
    return message;
}

// График прогресса (без изменений)
let progressChart;
function initChart() { /* ... */ }
function generateWeekDates() { /* ... */ }
function generateProgressData() { /* ... */ }
function updateChart() { /* ... */ }

// Вспомогательные функции
function getTopicName(topic) { /* ... */ }
function getLevelName(level) { /* ... */ }

// Модальное окно теста (без изменений)
function showTestModal(test) { /* ... */ }
function generateTestQuestions(test) { /* ... */ }
function finishTest(score, totalQuestions) { /* ... */ }
