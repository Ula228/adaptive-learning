// База материалов
const materials = {
    beginner: [
        { 
            title: "Основы арифметики", 
            type: "📚 Статья", 
            link: "https://ru.khanacademy.org/math/cc-1st-grade-math",
            points: 10,
            tags: ["математика", "начальный"]
        },
        { 
            title: "HTML и CSS для начинающих", 
            type: "🎥 Видеокурс", 
            link: "https://youtu.be/DOEtVdkKwcU",
            points: 15,
            tags: ["программирование", "веб"]
        },
        { 
            title: "Физика: механика", 
            type: "📖 Учебник", 
            link: "https://physbook.ru/index.php/С.В._Громов,_Н.А._Родина_Физика_7",
            points: 20,
            tags: ["физика", "наука"]
        },
        { 
            title: "Английский: базовые фразы", 
            type: "📱 Приложение", 
            link: "https://www.duolingo.com",
            points: 10,
            tags: ["языки", "начальный"]
        },
        { 
            title: "Как работает интернет", 
            type: "📊 Инфографика", 
            link: "https://habr.com/ru/post/310460/",
            points: 15,
            tags: ["технологии"]
        }
    ],
    intermediate: [
        { 
            title: "Алгебра: уравнения", 
            type: "📚 Учебник", 
            link: "https://ru.khanacademy.org/math/algebra",
            points: 20,
            tags: ["математика"]
        },
        { 
            title: "Python: функции и классы", 
            type: "🎥 Видео", 
            link: "https://youtu.be/Ej_02ICOIgs",
            points: 25,
            tags: ["программирование"]
        },
        { 
            title: "Химия: основы", 
            type: "📖 Курс", 
            link: "https://stepik.org/course/551/promo",
            points: 20,
            tags: ["наука"]
        },
        { 
            title: "Как писать эссе", 
            type: "📄 Гайд", 
            link: "https://4brain.ru/writing/",
            points: 15,
            tags: ["письмо"]
        },
        { 
            title: "Электроника для начинающих", 
            type: "🛠 Практикум", 
            link: "https://alexgyver.ru/lessons/",
            points: 30,
            tags: ["техника"]
        }
    ],
    advanced: [
        { 
            title: "Математический анализ", 
            type: "📚 Курс MIT", 
            link: "https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/",
            points: 40,
            tags: ["математика"]
        },
        { 
            title: "Нейронные сети", 
            type: "🎥 Лекция", 
            link: "https://youtu.be/aircAruvnKk",
            points: 50,
            tags: ["искусственный интеллект"]
        },
        { 
            title: "Квантовая физика", 
            type: "📖 Книга", 
            link: "https://arxiv.org/abs/quant-ph/0508125",
            points: 45,
            tags: ["наука"]
        },
        { 
            title: "Продвинутый Python", 
            type: "💻 Практика", 
            link: "https://realpython.com/",
            points: 35,
            tags: ["программирование"]
        },
        { 
            title: "Астрофизика за час", 
            type: "🎧 Подкаст", 
            link: "https://www.youtube.com/watch?v=un2nD7vQqY8",
            points: 30,
            tags: ["наука", "космос"]
        }
    ]
};

// Тесты
const tests = {
    beginner: [
        {
            question: "Чему равно 5 × 7?",
            options: ["25", "35", "42", "30"],
            answer: 1,
            explanation: "Правильный ответ: 35 (5 × 7 = 35)"
        },
        {
            question: "Какой тег HTML используется для создания ссылки?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1,
            explanation: "Правильный ответ: <a> (anchor)"
        },
        {
            question: "Что измеряется в ваттах?",
            options: ["Сила тока", "Напряжение", "Мощность", "Сопротивление"],
            answer: 2,
            explanation: "Правильный ответ: Мощность"
        }
    ],
    intermediate: [
        {
            question: "Решите уравнение: 2x + 5 = 15",
            options: ["x = 5", "x = 7.5", "x = 10", "x = 12"],
            answer: 0,
            explanation: "Правильный ответ: x = 5 (2*5 + 5 = 15)"
        },
        {
            question: "Что выведет код: print('Hello'[::-1])?",
            options: ["Hello", "olleH", "Error", "H"],
            answer: 1,
            explanation: "Правильный ответ: olleH (разворот строки)"
        },
        {
            question: "Формула воды:",
            options: ["HO", "H2O", "H2O2", "H3O"],
            answer: 1,
            explanation: "Правильный ответ: H₂O"
        }
    ],
    advanced: [
        {
            question: "Чему равен ∫(x²)dx от 0 до 3?",
            options: ["6", "9", "12", "27"],
            answer: 1,
            explanation: "Правильный ответ: 9 (∫x²dx = x³/3 → 27/3 = 9)"
        },
        {
            question: "Что такое backpropagation в нейросетях?",
            options: [
                "Метод оптимизации",
                "Алгоритм обучения",
                "Тип архитектуры",
                "Функция активации"
            ],
            answer: 1,
            explanation: "Правильный ответ: Алгоритм обучения (метод обратного распространения ошибки)"
        },
        {
            question: "Какой принцип описывает уравнение Шрёдингера?",
            options: [
                "Квантовая суперпозиция",
                "Теория относительности",
                "Термодинамика",
                "Электромагнетизм"
            ],
            answer: 0,
            explanation: "Правильный ответ: Квантовая суперпозиция"
        }
    ]
};

// Достижения
const achievements = {
    first_step: {
        title: "Первый шаг",
        desc: "Просмотр первого материала",
        earned: false
    },
    test_master: {
        title: "Мастер тестов",
        desc: "Правильно ответить на все вопросы теста",
        earned: false
    },
    material_explorer: {
        title: "Исследователь",
        desc: "Изучить 5 материалов",
        earned: false
    },
    bookworm: {
        title: "Книжный червь",
        desc: "Прочитать 10 материалов",
        earned: false
    },
    genius: {
        title: "Гений",
        desc: "Набрать 200 очков",
        earned: false
    }
};

// Состояние приложения
let state = {
    points: 0,
    materialsViewed: 0,
    currentLevel: 'beginner',
    darkMode: false
};

// Элементы DOM
const materialsContainer = document.getElementById('materials');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const pointsElement = document.getElementById('points');
const achievementsElement = document.getElementById('achievements');
const achievementPopup = document.getElementById('achievements-popup');
const achievementTitle = document.getElementById('achievement-title');
const achievementDesc = document.getElementById('achievement-desc');

// Инициализация
function init() {
    loadState();
    renderMaterials(state.currentLevel);
    setupEventListeners();
    updateUI();
}

// Загрузка состояния из localStorage
function loadState() {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
        state = JSON.parse(savedState);
        if (state.darkMode) {
            document.body.classList.add('dark-mode');
        }
    }
}

// Сохранение состояния в localStorage
function saveState() {
    localStorage.setItem('appState', JSON.stringify(state));
}

// Обновление интерфейса
function updateUI() {
    progressBar.style.width = `${calculateProgress()}%`;
    progressText.textContent = `${calculateProgress()}% изучено`;
    pointsElement.textContent = state.points;
    
    const earnedAchievements = Object.values(achievements).filter(a => a.earned).length;
    achievementsElement.textContent = `${earnedAchievements}/5`;
}

// Расчет прогресса
function calculateProgress() {
    const totalMaterials = Object.values(materials).reduce((acc, level) => acc + level.length, 0);
    return Math.min(Math.floor((state.materialsViewed / totalMaterials) * 100), 100);
}

// Отображение материалов
function renderMaterials(level) {
    materialsContainer.innerHTML = '';
    state.currentLevel = level;
    
    materials[level].forEach(material => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `
            <h3>${material.title}</h3>
            <p>${material.type}</p>
            <a href="${material.link}" target="_blank">Открыть</a>
            <span class="material-points">${material.points} очков</span>
        `;
        
        card.addEventListener('click', () => {
            addPoints(material.points);
            trackMaterialViewed();
            checkAchievement('first_step');
            if (state.materialsViewed >= 5) checkAchievement('material_explorer');
            if (state.materialsViewed >= 10) checkAchievement('bookworm');
            if (state.points >= 200) checkAchievement('genius');
        });
        
        materialsContainer.appendChild(card);
    });
    
    saveState();
    updateUI();
}

// Отображение теста
function renderTest(level) {
    materialsContainer.innerHTML = '';
    const test = tests[level];
    
    let html = `
        <div class="test-card">
            <h2>Тест: ${level.toUpperCase()}</h2>
            <div class="test-progress">Вопрос 1 из ${test.length}</div>
    `;
    
    test.forEach((question, index) => {
        html += `
            <div class="question" id="q${index}" ${index > 0 ? 'style="display:none"' : ''}>
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map((option, i) => `
                    <label class="test-option">
                        <input type="radio" name="q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
                ${index === test.length - 1 ? 
                    '<button id="submit-test">Завершить</button>' : 
                    '<button class="next-question">Далее</button>'}
                <div class="explanation hidden"></div>
            </div>
        `;
    });
    
    html += `</div>`;
    materialsContainer.innerHTML = html;

    // Обработчики для теста
    let currentQuestion = 0;
    const questions = document.querySelectorAll('.question');
    const nextButtons = document.querySelectorAll('.next-question');
    
    nextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            questions[currentQuestion].style.display = 'none';
            currentQuestion++;
            questions[currentQuestion].style.display = 'block';
            document.querySelector('.test-progress').textContent = 
                `Вопрос ${currentQuestion + 1} из ${test.length}`;
        });
    });
    
    document.getElementById('submit-test')?.addEventListener('click', () => {
        checkTestAnswers(level);
    });
}

// Проверка ответов теста
function checkTestAnswers(level) {
    const test = tests[level];
    let score = 0;
    let resultsHtml = '<div class="test-results"><h3>Результаты теста</h3>';
    
    test.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const isCorrect = selected && parseInt(selected.value) === q.answer;
        if (isCorrect) score++;
        
        resultsHtml += `
            <div class="question-result ${isCorrect ? 'correct' : 'wrong'}">
                <p><strong>Вопрос ${i + 1}:</strong> ${q.question}</p>
                <p>Ваш ответ: ${selected ? q.options[selected.value] : 'Нет ответа'}</p>
                <p class="explanation">${q.explanation}</p>
            </div>
        `;
    });
    
    resultsHtml += `
        <p class="score">Вы ответили правильно на ${score} из ${test.length}</p>
        <button id="back-to-materials">К материалам</button>
        </div>
    `;
    
    materialsContainer.innerHTML = resultsHtml;
    
    document.getElementById('back-to-materials').addEventListener('click', () => {
        renderMaterials(level);
    });
    
    if (score === test.length) {
        addPoints(50);
        checkAchievement('test_master');
    }
}

// Добавление очков
function addPoints(amount) {
    state.points += amount;
    saveState();
    updateUI();
}

// Отслеживание просмотренных материалов
function trackMaterialViewed() {
    state.materialsViewed++;
    saveState();
    updateUI();
}

// Проверка достижений
function checkAchievement(achievementId) {
    if (!achievements[achievementId].earned) {
        achievements[achievementId].earned = true;
        showAchievementPopup(achievements[achievementId]);
        saveState();
        updateUI();
    }
}

// Показ попапа достижения
function showAchievementPopup(achievement) {
    achievementTitle.textContent = achievement.title;
    achievementDesc.textContent = achievement.desc;
    achievementPopup.classList.remove('hidden');
    achievementPopup.classList.add('show');
    
    setTimeout(() => {
        achievementPopup.classList.remove('show');
        setTimeout(() => achievementPopup.classList.add('hidden'), 300);
    }, 3000);
}

// Переключение темы
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode');
    saveState();
}

// Поиск материалов
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.material-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Кнопки уровней
    document.getElementById('beginner').addEventListener('click', () => renderMaterials('beginner'));
    document.getElementById('intermediate').addEventListener('click', () => renderMaterials('intermediate'));
    document.getElementById('advanced').addEventListener('click', () => renderMaterials('advanced'));
    
    // Кнопка теста
    document.getElementById('test-btn').addEventListener('click', () => renderTest(state.currentLevel));
    
    // Кнопка темы
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    
    // Поиск
    setupSearch();
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);