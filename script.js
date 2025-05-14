// Конфигурация
const CONFIG = {
    initialLevel: 1,
    xpPerTest: 100,
    xpPerMaterial: 50,
    nextLevelFactor: 1.5,
    maxLevel: 50
};

// Материалы для обучения
const MATERIALS = [
    { 
        id: 1,
        title: "Основы Python", 
        topic: "programming", 
        level: "beginner",
        description: "Введение в программирование на Python. Изучите базовые концепции и синтаксис языка.",
        icon: "fa-code"
    },
    { 
        id: 2,
        title: "Алгебра для начинающих", 
        topic: "math", 
        level: "beginner",
        description: "Основные понятия алгебры: уравнения, неравенства, функции и графики.",
        icon: "fa-square-root-alt"
    },
    { 
        id: 3,
        title: "Квантовая физика", 
        topic: "science", 
        level: "advanced",
        description: "Введение в квантовую механику: принципы, уравнения и эксперименты.",
        icon: "fa-atom"
    },
    { 
        id: 4,
        title: "JavaScript продвинутый", 
        topic: "programming", 
        level: "advanced",
        description: "Сложные концепции JavaScript: замыкания, прототипы, асинхронность.",
        icon: "fa-js"
    },
    { 
        id: 5,
        title: "Линейная алгебра", 
        topic: "math", 
        level: "intermediate",
        description: "Матрицы, векторы, линейные преобразования и их применение.",
        icon: "fa-vector-square"
    },
    { 
        id: 6,
        title: "Биология клетки", 
        topic: "science", 
        level: "intermediate",
        description: "Строение и функции клетки, процессы клеточного деления.",
        icon: "fa-microscope"
    },
    { 
        id: 7,
        title: "HTML и CSS", 
        topic: "programming", 
        level: "beginner",
        description: "Основы веб-разработки: создание структуры и стилей сайта.",
        icon: "fa-html5"
    },
    { 
        id: 8,
        title: "Статистика", 
        topic: "math", 
        level: "intermediate",
        description: "Основы статистики: распределения, тесты, анализ данных.",
        icon: "fa-chart-bar"
    },
    { 
        id: 9,
        title: "Основы алгоритмов", 
        topic: "programming", 
        level: "beginner",
        description: "Изучение базовых алгоритмов и структур данных.",
        icon: "fa-project-diagram"
    },
    { 
        id: 10,
        title: "Дифференциальные уравнения", 
        topic: "math", 
        level: "advanced",
        description: "Решение обыкновенных дифференциальных уравнений.",
        icon: "fa-infinity"
    },
    { 
        id: 11,
        title: "Органическая химия", 
        topic: "science", 
        level: "intermediate",
        description: "Основные классы органических соединений и их свойства.",
        icon: "fa-flask"
    },
    { 
        id: 12,
        title: "Базы данных SQL", 
        topic: "programming", 
        level: "intermediate",
        description: "Проектирование баз данных и язык запросов SQL.",
        icon: "fa-database"
    },
    { 
        id: 13,
        title: "Теория вероятностей", 
        topic: "math", 
        level: "intermediate",
        description: "Основные понятия теории вероятностей и статистики.",
        icon: "fa-dice"
    },
    { 
        id: 14,
        title: "Генетика", 
        topic: "science", 
        level: "advanced",
        description: "Основные законы наследственности и изменчивости.",
        icon: "fa-dna"
    },
    { 
        id: 15,
        title: "Веб-разработка", 
        topic: "programming", 
        level: "beginner",
        description: "Создание современных веб-приложений.",
        icon: "fa-globe"
    },
    { 
        id: 16,
        title: "Математический анализ", 
        topic: "math", 
        level: "advanced",
        description: "Дифференциальное и интегральное исчисление.",
        icon: "fa-calculator"
    },
    { 
        id: 17,
        title: "Английский для IT", 
        topic: "language", 
        level: "beginner",
        description: "Основные термины и фразы для работы в IT-сфере.",
        icon: "fa-language"
    }
];

// Тесты
const TESTS = [
    {
        id: 1,
        title: "Основы Python",
        topic: "programming",
        level: "beginner",
        description: "Проверьте свои знания базового синтаксиса Python",
        questionsCount: 10,
        icon: "fa-python"
    },
    {
        id: 2,
        title: "Алгебра: начальный уровень",
        topic: "math",
        level: "beginner",
        description: "Тест по основам алгебры для начинающих",
        questionsCount: 8,
        icon: "fa-square-root-alt"
    },
    {
        id: 3,
        title: "Продвинутый JavaScript",
        topic: "programming",
        level: "advanced",
        description: "Сложные концепции JavaScript",
        questionsCount: 15,
        icon: "fa-js"
    },
    {
        id: 4,
        title: "Квантовая физика",
        topic: "science",
        level: "advanced",
        description: "Тест по основам квантовой механики",
        questionsCount: 12,
        icon: "fa-atom"
    }
];

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

// Загрузка состояния
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

// Сохранение состояния
function saveState() {
    localStorage.setItem('learning-app-state', JSON.stringify(state));
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение темы
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Кнопки уровней
    document.getElementById('beginner').addEventListener('click', () => setLevel('beginner'));
    document.getElementById('intermediate').addEventListener('click', () => setLevel('intermediate'));
    document.getElementById('advanced').addEventListener('click', () => setLevel('advanced'));
    
    // Фильтры
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.topic));
    });
    
    // Поиск
    document.getElementById('search-btn').addEventListener('click', searchMaterials);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchMaterials();
    });
    
    // AI-чат
    document.getElementById('ask-ai').addEventListener('click', askAI);
    document.getElementById('ai-question').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') askAI();
    });
}

// Переключение темы
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.documentElement.toggleAttribute('data-theme');
    const icon = state.darkMode ? 'sun' : 'moon';
    document.getElementById('theme-toggle').innerHTML = `<i class="fas fa-${icon}"></i> ${state.darkMode ? 'Светлая' : 'Темная'} тема`;
    saveState();
}

// Установка уровня
function setLevel(level) {
    state.currentLevel = level;
    renderMaterials();
    renderTests();
    updateUI();
    saveState();
}

// Установка фильтра
function setFilter(topic) {
    state.currentTopic = topic;
    renderMaterials();
    renderTests();
    saveState();
}

// Поиск материалов
function searchMaterials() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    renderMaterials(query);
}

// Рендер материалов
function renderMaterials(searchQuery = '') {
    const container = document.getElementById('materials');
    container.innerHTML = '';

    const filtered = MATERIALS.filter(material => {
        const matchesTopic = state.currentTopic === 'all' || material.topic === state.currentTopic;
        const matchesLevel = material.level === state.currentLevel;
        const matchesSearch = searchQuery === '' || 
            material.title.toLowerCase().includes(searchQuery) || 
            material.description.toLowerCase().includes(searchQuery);
        
        return matchesTopic && matchesLevel && matchesSearch;
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
            <div class="material-header">
                <i class="fas ${material.icon} material-icon"></i>
                <h3 class="material-title">${material.title}</h3>
            </div>
            <p class="material-description">${material.description}</p>
            <div class="material-meta">
                <span class="material-topic">${getTopicName(material.topic)}</span>
                <span class="material-level ${material.level}">${getLevelName(material.level)}</span>
            </div>
            <button class="study-btn ${isStudied ? 'studied' : ''}" data-id="${material.id}">
                <i class="fas ${isStudied ? 'fa-check' : 'fa-book'}"></i>
                ${isStudied ? 'Изучено' : 'Изучить'}
            </button>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.study-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const materialId = parseInt(btn.dataset.id);
            toggleMaterialStudy(materialId);
        });
    });
}

// Переключение состояния изучения материала
function toggleMaterialStudy(materialId) {
    const material = MATERIALS.find(m => m.id === materialId);
    if (!material) return;
    
    const index = state.studiedMaterials.indexOf(materialId);
    if (index === -1) {
        state.studiedMaterials.push(materialId);
        addXp(CONFIG.xpPerMaterial);
        showNotification(`Материал "${material.title}" изучен!`, 'success');
    } else {
        state.studiedMaterials.splice(index, 1);
        showNotification(`Материал "${material.title}" удален из изученных`, 'info');
    }
    
    updateProgress();
    renderMaterials();
    saveState();
}

// Рендер тестов
function renderTests() {
    const container = document.getElementById('tests');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtered = TESTS.filter(test => {
        return (state.currentTopic === 'all' || test.topic === state.currentTopic) &&
               (test.level === state.currentLevel);
    });
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-question-circle"></i><p>Тесты не найдены</p></div>';
        return;
    }
    
    filtered.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <div class="test-title">
                <i class="fab ${test.icon} test-icon"></i>
                <span>${test.title}</span>
            </div>
            <p class="test-description">${test.description}</p>
            <div class="test-meta">
                <span class="test-difficulty ${test.level}">${getLevelName(test.level)}</span>
                <span class="test-questions">${test.questionsCount} вопросов</span>
            </div>
            <button class="start-test-btn" data-test-id="${test.id}">
                <i class="fas fa-play"></i>
                Начать тест
            </button>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.start-test-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const testId = parseInt(btn.dataset.testId);
            startTest(testId);
        });
    });
}

// Запуск теста
function startTest(testId) {
    const test = TESTS.find(t => t.id === testId);
    if (!test) return;
    
    showTestModal(test);
    addXp(10);
    showNotification(`Тест "${test.title}" начат!`, 'info');
}

// Обновление прогресса
function updateProgress() {
    const totalMaterials = MATERIALS.filter(m => m.level === state.currentLevel).length;
    const studiedCount = MATERIALS.filter(m => 
        m.level === state.currentLevel && 
        state.studiedMaterials.includes(m.id)
    ).length;
    
    state.progress = totalMaterials > 0 ? Math.round((studiedCount / totalMaterials) * 100) : 0;
    updateUI();
    updateChart();
}

// Добавление XP
function addXp(amount) {
    state.xp += amount;
    if (state.xp >= state.nextLevelXp && state.level < CONFIG.maxLevel) {
        state.level++;
        state.xp -= state.nextLevelXp;
        state.nextLevelXp = Math.floor(state.nextLevelXp * CONFIG.nextLevelFactor);
        showNotification(`🎉 Уровень ${state.level}!`, 'success');
    }
    updateUI();
    saveState();
}

// Обновление интерфейса
function updateUI() {
    document.getElementById('progress-value').textContent = `${state.progress}%`;
    document.getElementById('progress-fill').style.width = `${state.progress}%`;
    
    document.getElementById('level-value').textContent = state.level;
    document.getElementById('current-xp').textContent = state.xp;
    document.getElementById('max-xp').textContent = state.nextLevelXp;
    
    const xpPercent = Math.min(100, (state.xp / state.nextLevelXp) * 100);
    document.getElementById('xp-fill').style.width = `${xpPercent}%`;
    
    document.querySelectorAll('.difficulty-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById(state.currentLevel).classList.add('active');
    
    document.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-tab[data-topic="${state.currentTopic}"]`).classList.add('active');
}

// Показать уведомление
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.className = `notification ${type} show`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// AI-чат
function askAI() {
    const input = document.getElementById('ai-question');
    const question = input.value.trim();
    if (!question) return;
    
    addMessage(question, 'user');
    input.value = '';
    
    setTimeout(() => {
        const responses = [
            `По вашему запросу "${question}" рекомендую материалы для ${state.currentLevel} уровня.`,
            "Интересный вопрос! Проверьте раздел 'Программирование' в фильтрах.",
            "Я нашел несколько подходящих материалов по вашей теме."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        addMessage(response, 'ai');
    }, 1000);
}

function addMessage(text, sender) {
    const chat = document.getElementById('chat-messages');
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    message.innerHTML = `<strong>${sender === 'user' ? 'Вы' : 'AI'}:</strong> ${text}`;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

// График прогресса
let progressChart;

function initChart() {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateWeekDates(),
            datasets: [{
                label: 'Прогресс обучения',
                data: generateProgressData(),
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function generateWeekDates() {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const today = new Date();
    return days.map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - 6 + i);
        return `${days[date.getDay()]} ${date.getDate()}`;
    });
}

function generateProgressData() {
    const base = state.progress || 10;
    return [
        Math.max(5, base - 15),
        Math.max(10, base - 10),
        Math.max(15, base - 5),
        base,
        Math.min(95, base + 5),
        Math.min(100, base + 15),
        Math.min(100, base + 25)
    ];
}

function updateChart() {
    if (progressChart) {
        progressChart.data.datasets[0].data = generateProgressData();
        progressChart.update();
    }
}

// Вспомогательные функции
function getTopicName(topic) {
    const topics = {
        'math': 'Математика',
        'programming': 'Программирование',
        'science': 'Наука',
        'language': 'Языки'
    };
    return topics[topic] || topic;
}

function getLevelName(level) {
    const levels = {
        'beginner': 'Новичок',
        'intermediate': 'Средний',
        'advanced': 'Продвинутый'
    };
    return levels[level] || level;
}

// Модальное окно теста
function showTestModal(test) {
    const modal = document.getElementById('test-modal');
    const title = document.getElementById('test-modal-title');
    const questionsContainer = document.getElementById('test-questions');
    const currentQuestion = document.getElementById('current-question');
    const totalQuestions = document.getElementById('total-questions');
    const nextBtn = document.getElementById('next-question-btn');
    
    title.textContent = test.title;
    totalQuestions.textContent = test.questionsCount;
    
    const questions = generateTestQuestions(test);
    let currentQuestionIndex = 0;
    let score = 0;
    
    function displayQuestion() {
        questionsContainer.innerHTML = '';
        currentQuestion.textContent = currentQuestionIndex + 1;
        
        const question = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'question-container';
        questionElement.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="answers-container"></div>
        `;
        
        const answersContainer = questionElement.querySelector('.answers-container');
        question.answers.forEach((answer, index) => {
            const answerElement = document.createElement('button');
            answerElement.className = 'answer-option';
            answerElement.textContent = answer.text;
            answerElement.dataset.index = index;
            answerElement.addEventListener('click', () => selectAnswer(answerElement, index));
            answersContainer.appendChild(answerElement);
        });
        
        questionsContainer.appendChild(questionElement);
        nextBtn.disabled = true;
        
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Завершить тест';
        } else {
            nextBtn.innerHTML = 'Следующий вопрос <i class="fas fa-arrow-right"></i>';
        }
    }
    
    function selectAnswer(answerElement, answerIndex) {
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        answerElement.classList.add('selected');
        nextBtn.disabled = false;
    }
    
    function handleNextQuestion() {
        const selectedAnswer = document.querySelector('.answer-option.selected');
        if (selectedAnswer) {
            const answerIndex = parseInt(selectedAnswer.dataset.index);
            if (questions[currentQuestionIndex].answers[answerIndex].correct) {
                score++;
            }
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            finishTest(score, questions.length);
        }
    }
    
    nextBtn.addEventListener('click', handleNextQuestion);
    document.getElementById('close-test-modal').addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    displayQuestion();
    modal.classList.add('show');
}

function generateTestQuestions(test) {
    const questions = [];
    for (let i = 1; i <= test.questionsCount; i++) {
        const correctAnswer = Math.floor(Math.random() * 4);
        const answers = [];
        
        for (let j = 0; j < 4; j++) {
            answers.push({
                text: `Вариант ответа ${j + 1} для вопроса ${i}`,
                correct: j === correctAnswer
            });
        }
        
        questions.push({
            text: `Пример вопроса ${i} по теме "${test.title}"?`,
            answers: answers
        });
    }
    return questions;
}

function finishTest(score, totalQuestions) {
    const modal = document.getElementById('test-modal');
    modal.classList.remove('show');
    
    const percentage = Math.round((score / totalQuestions) * 100);
    let message, type;
    
    if (percentage >= 80) {
        message = `Отлично! Вы набрали ${score} из ${totalQuestions} (${percentage}%)`;
        type = 'success';
        addXp(50);
    } else if (percentage >= 50) {
        message = `Хорошо! Вы набрали ${score} из ${totalQuestions} (${percentage}%)`;
        type = 'info';
        addXp(30);
    } else {
        message = `Попробуйте еще раз! Вы набрали ${score} из ${totalQuestions} (${percentage}%)`;
        type = 'error';
        addXp(10);
    }
    
    showNotification(message, type);
}