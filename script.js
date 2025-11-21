// Конфигурация
const CONFIG = {
    initialLevel: 1,
    xpPerTest: 100,
    xpPerMaterial: 50,
    nextLevelFactor: 1.5,
    maxLevel: 50
};

// Материалы для обучения с полным контентом
const MATERIALS = [
    { 
        id: 1,
        title: "Основы Python", 
        topic: "programming", 
        level: "beginner",
        description: "Введение в программирование на Python. Изучите базовые концепции и синтаксис языка.",
        icon: "fa-code",
        content: `
            <h3>Введение в Python</h3>
            <p>Python — это интерпретируемый, объектно-ориентированный, высокоуровневый язык программирования с динамической семантикой.</p>
            
            <h4>Основные особенности:</h4>
            <ul>
                <li>Простой и легкий для изучения синтаксис</li>
                <li>Поддержка структурного, объектно-ориентированного и функционального программирования</li>
                <li>Динамическая типизация</li>
                <li>Автоматическое управление памятью</li>
            </ul>
            
            <h4>Пример программы:</h4>
            <pre><code># Это комментарий
print("Hello, World!")
x = 1
if x == 1:
    print("x равно 1")</code></pre>
            
            <h4>Переменные и типы данных:</h4>
            <pre><code># Числа
x = 5
y = 3.14

# Строки
name = "Python"

# Списки
fruits = ["apple", "banana", "cherry"]

# Словари
person = {"name": "John", "age": 30}</code></pre>
        `
    },
    { 
        id: 2,
        title: "Алгебра для начинающих", 
        topic: "math", 
        level: "beginner",
        description: "Основные понятия алгебры: уравнения, неравенства, функции и графики.",
        icon: "fa-square-root-alt",
        content: `
            <h3>Основы алгебры</h3>
            <p>Алгебра — это раздел математики, который изучает математические операции и отношения.</p>
            
            <h4>Алгебраические выражения:</h4>
            <p>Выражение, состоящее из переменных, констант и операций:</p>
            <p><strong>Пример:</strong> 3x + 2y - 5</p>
            
            <h4>Линейные уравнения:</h4>
            <p>Уравнение вида: ax + b = 0</p>
            <p><strong>Пример:</strong> 2x + 3 = 7</p>
            <p>Решение: 2x = 7 - 3 → 2x = 4 → x = 2</p>
            
            <h4>Квадратные уравнения:</h4>
            <p>Уравнение вида: ax² + bx + c = 0</p>
            <p>Решение через дискриминант: D = b² - 4ac</p>
            <p>x = (-b ± √D) / 2a</p>
        `
    },
    { 
        id: 3,
        title: "Квантовая физика", 
        topic: "science", 
        level: "advanced",
        description: "Введение в квантовую механику: принципы, уравнения и эксперименты.",
        icon: "fa-atom",
        content: `
            <h3>Основы квантовой механики</h3>
            <p>Квантовая механика — это фундаментальная теория в физике, описывающая поведение материи на атомном и субатомном уровнях.</p>
            
            <h4>Основные принципы:</h4>
            <ul>
                <li><strong>Квантование:</strong> Энергия принимает дискретные значения</li>
                <li><strong>Дуализм волна-частица:</strong> Объекты проявляют свойства и волн, и частиц</li>
                <li><strong>Принцип неопределенности Гейзенберга:</strong> Невозможно точно измерить одновременно положение и импульс частицы</li>
            </ul>
            
            <h4>Уравнение Шрёдингера:</h4>
            <p>iℏ∂Ψ/∂t = ĤΨ</p>
            <p>где:</p>
            <ul>
                <li>Ψ — волновая функция</li>
                <li>Ĥ — оператор Гамильтона</li>
                <li>ℏ — приведенная постоянная Планка</li>
            </ul>
        `
    },
    { 
        id: 4,
        title: "JavaScript продвинутый", 
        topic: "programming", 
        level: "advanced",
        description: "Сложные концепции JavaScript: замыкания, прототипы, асинхронность.",
        icon: "fa-js",
        content: `
            <h3>Продвинутый JavaScript</h3>
            <p>Изучение сложных концепций JavaScript для создания мощных веб-приложений.</p>
            
            <h4>Замыкания (Closures):</h4>
            <p>Замыкание — это функция, которая имеет доступ к переменным из внешней функции даже после того, как внешняя функция завершила выполнение.</p>
            
            <pre><code>function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2</code></pre>
            
            <h4>Асинхронное программирование:</h4>
            <p>Использование async/await для работы с асинхронными операциями:</p>
            
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}</code></pre>
        `
    },
    { 
        id: 5,
        title: "Линейная алгебра", 
        topic: "math", 
        level: "intermediate",
        description: "Матрицы, векторы, линейные преобразования и их применение.",
        icon: "fa-vector-square",
        content: `
            <h3>Линейная алгебра</h3>
            <p>Раздел математики, изучающий векторы, векторные пространства, линейные преобразования и системы линейных уравнений.</p>
            
            <h4>Векторы:</h4>
            <p>Вектор — это математический объект, характеризующийся величиной и направлением.</p>
            <p><strong>Пример:</strong> v = (3, 4, 5)</p>
            
            <h4>Матрицы:</h4>
            <p>Матрица — это прямоугольный массив чисел, символов или выражений, расположенных в строках и столбцах.</p>
            
            <pre><code>A = | 1  2  3 |
    | 4  5  6 |
    | 7  8  9 |</code></pre>
            
            <h4>Умножение матриц:</h4>
            <p>Умножение выполняется по правилу "строка на столбец".</p>
        `
    },
    { 
        id: 6,
        title: "Биология клетки", 
        topic: "science", 
        level: "intermediate",
        description: "Строение и функции клетки, процессы клеточного деления.",
        icon: "fa-microscope",
        content: `
            <h3>Биология клетки</h3>
            <p>Изучение структуры и функций клеток — фундаментальных единиц жизни.</p>
            
            <h4>Основные компоненты клетки:</h4>
            <ul>
                <li><strong>Ядро:</strong> Содержит генетический материал (ДНК)</li>
                <li><strong>Митохондрии:</strong> Энергетические станции клетки</li>
                <li><strong>Рибосомы:</strong> Синтез белка</li>
                <li><strong>Эндоплазматический ретикулум:</strong> Транспорт и синтез</li>
                <li><strong>Аппарат Гольджи:</strong> Модификация и упаковка белков</li>
            </ul>
            
            <h4>Клеточное деление:</h4>
            <p><strong>Митоз:</strong> Деление соматических клеток</p>
            <p><strong>Мейоз:</strong> Образование половых клеток</p>
        `
    },
    { 
        id: 7,
        title: "HTML и CSS", 
        topic: "programming", 
        level: "beginner",
        description: "Основы веб-разработки: создание структуры и стилей сайта.",
        icon: "fa-html5",
        content: `
            <h3>HTML и CSS для начинающих</h3>
            <p>HTML (HyperText Markup Language) и CSS (Cascading Style Sheets) — основные технологии для создания веб-страниц.</p>
            
            <h4>Структура HTML документа:</h4>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Моя страница&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Заголовок&lt;/h1&gt;
    &lt;p&gt;Абзац текста&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            
            <h4>Основы CSS:</h4>
            <pre><code>/* Селектор по тегу */
p {
    color: blue;
    font-size: 16px;
}

/* Селектор по классу */
.header {
    background-color: #f0f0f0;
    padding: 20px;
}

/* Селектор по ID */
#main-content {
    width: 80%;
    margin: 0 auto;
}</code></pre>
        `
    },
    { 
        id: 8,
        title: "Статистика", 
        topic: "math", 
        level: "intermediate",
        description: "Основы статистики: распределения, тесты, анализ данных.",
        icon: "fa-chart-bar",
        content: `
            <h3>Основы статистики</h3>
            <p>Статистика — это наука о сборе, анализе, интерпретации и представлении данных.</p>
            
            <h4>Основные понятия:</h4>
            <ul>
                <li><strong>Среднее значение:</strong> Сумма всех значений, деленная на их количество</li>
                <li><strong>Медиана:</strong> Среднее значение в упорядоченном наборе данных</li>
                <li><strong>Мода:</strong> Наиболее часто встречающееся значение</li>
                <li><strong>Дисперсия:</strong> Мера разброса данных</li>
                <li><strong>Стандартное отклонение:</strong> Квадратный корень из дисперсии</li>
            </ul>
            
            <h4>Нормальное распределение:</h4>
            <p>Также известно как распределение Гаусса. Характеризуется симметричной колоколообразной кривой.</p>
        `
    },
    { 
        id: 9,
        title: "Основы алгоритмов", 
        topic: "programming", 
        level: "beginner",
        description: "Изучение базовых алгоритмов и структур данных.",
        icon: "fa-project-diagram",
        content: `
            <h3>Основы алгоритмов и структур данных</h3>
            <p>Алгоритм — это последовательность шагов для решения задачи. Структуры данных — способы организации данных.</p>
            
            <h4>Основные алгоритмы:</h4>
            <ul>
                <li><strong>Поиск:</strong> Линейный поиск, бинарный поиск</li>
                <li><strong>Сортировка:</strong> Пузырьковая, быстрая, слиянием</li>
                <li><strong>Рекурсия:</strong> Решение задач путем их разбиения на меньшие подзадачи</li>
            </ul>
            
            <h4>Структуры данных:</h4>
            <ul>
                <li><strong>Массивы:</strong> Упорядоченная коллекция элементов</li>
                <li><strong>Связные списки:</strong> Элементы, связанные указателями</li>
                <li><strong>Стеки:</strong> LIFO (последний вошел, первый вышел)</li>
                <li><strong>Очереди:</strong> FIFO (первый вошел, первый вышел)</li>
            </ul>
        `
    },
    { 
        id: 10,
        title: "Дифференциальные уравнения", 
        topic: "math", 
        level: "advanced",
        description: "Решение обыкновенных дифференциальных уравнений.",
        icon: "fa-infinity",
        content: `
            <h3>Дифференциальные уравнения</h3>
            <p>Дифференциальное уравнение — это уравнение, которое связывает функцию с ее производными.</p>
            
            <h4>Типы дифференциальных уравнений:</h4>
            <ul>
                <li><strong>Обыкновенные дифференциальные уравнения (ОДУ):</strong> Содержат производные по одной переменной</li>
                <li><strong>Уравнения с разделяющимися переменными:</strong> dy/dx = f(x)g(y)</li>
                <li><strong>Линейные дифференциальные уравнения:</strong> a(x)y' + b(x)y = c(x)</li>
            </ul>
            
            <h4>Методы решения:</h4>
            <ul>
                <li>Метод разделения переменных</li>
                <li>Интегрирующий множитель</li>
                <li>Метод вариации постоянных</li>
            </ul>
        `
    },
    { 
        id: 11,
        title: "Органическая химия", 
        topic: "science", 
        level: "intermediate",
        description: "Основные классы органических соединений и их свойства.",
        icon: "fa-flask",
        content: `
            <h3>Органическая химия</h3>
            <p>Раздел химии, изучающий соединения углерода, их структуру, свойства и реакции.</p>
            
            <h4>Основные классы органических соединений:</h4>
            <ul>
                <li><strong>Алканы:</strong> Насыщенные углеводороды (C-C одинарные связи)</li>
                <li><strong>Алкены:</strong> Ненасыщенные углеводороды (C=C двойные связи)</li>
                <li><strong>Алкины:</strong> Ненасыщенные углеводороды (C≡C тройные связи)</li>
                <li><strong>Арены:</strong> Ароматические углеводороды (бензольные кольца)</li>
            </ul>
            
            <h4>Основные реакции:</h4>
            <ul>
                <li>Замещения</li>
                <li>Присоединения</li>
                <li>Элиминирования</li>
            </ul>
        `
    },
    { 
        id: 12,
        title: "Базы данных SQL", 
        topic: "programming", 
        level: "intermediate",
        description: "Проектирование баз данных и язык запросов SQL.",
        icon: "fa-database",
        content: `
            <h3>Базы данных и SQL</h3>
            <p>SQL (Structured Query Language) — язык программирования для работы с реляционными базами данных.</p>
            
            <h4>Основные команды SQL:</h4>
            
            <h5>SELECT - выборка данных:</h5>
            <pre><code>SELECT * FROM users;
SELECT name, email FROM users WHERE age > 18;</code></pre>
            
            <h5>INSERT - вставка данных:</h5>
            <pre><code>INSERT INTO users (name, email, age) 
VALUES ('Иван', 'ivan@mail.com', 25);</code></pre>
            
            <h5>UPDATE - обновление данных:</h5>
            <pre><code>UPDATE users SET age = 26 WHERE name = 'Иван';</code></pre>
        `
    },
    { 
        id: 13,
        title: "Теория вероятностей", 
        topic: "math", 
        level: "intermediate",
        description: "Основные понятия теории вероятностей и статистики.",
        icon: "fa-dice",
        content: `
            <h3>Теория вероятностей</h3>
            <p>Раздел математики, изучающий случайные события, величины и их закономерности.</p>
            
            <h4>Основные понятия:</h4>
            <ul>
                <li><strong>Вероятность:</strong> Числовая характеристика возможности наступления события (0 ≤ P ≤ 1)</li>
                <li><strong>Случайное событие:</strong> Событие, которое может произойти или не произойти</li>
                <li><strong>Пространство элементарных исходов:</strong> Множество всех возможных исходов</li>
            </ul>
            
            <h4>Формулы вероятности:</h4>
            <ul>
                <li><strong>Классическое определение:</strong> P(A) = m/n, где m - благоприятные исходы, n - все исходы</li>
                <li><strong>Сложение вероятностей:</strong> P(A∪B) = P(A) + P(B) - P(A∩B)</li>
            </ul>
        `
    },
    { 
        id: 14,
        title: "Генетика", 
        topic: "science", 
        level: "advanced",
        description: "Основные законы наследственности и изменчивости.",
        icon: "fa-dna",
        content: `
            <h3>Генетика</h3>
            <p>Наука о наследственности и изменчивости организмов.</p>
            
            <h4>Основные понятия:</h4>
            <ul>
                <li><strong>Ген:</strong> Единица наследственной информации</li>
                <li><strong>Аллель:</strong> Различные формы одного гена</li>
                <li><strong>Генотип:</strong> Совокупность генов организма</li>
                <li><strong>Фенотип:</strong> Внешнее проявление генотипа</li>
            </ul>
            
            <h4>Законы Менделя:</h4>
            <ol>
                <li><strong>Закон единообразия гибридов первого поколения:</strong> Все гибриды F1 одинаковы</li>
                <li><strong>Закон расщепления:</strong> Во втором поколении признаки расщепляются в соотношении 3:1</li>
            </ol>
        `
    },
    { 
        id: 15,
        title: "Веб-разработка", 
        topic: "programming", 
        level: "beginner",
        description: "Создание современных веб-приложений.",
        icon: "fa-globe",
        content: `
            <h3>Основы веб-разработки</h3>
            <p>Создание веб-приложений с использованием современных технологий.</p>
            
            <h4>Frontend разработка:</h4>
            <ul>
                <li><strong>HTML:</strong> Структура веб-страницы</li>
                <li><strong>CSS:</strong> Стилизация и оформление</li>
                <li><strong>JavaScript:</strong> Интерактивность и логика</li>
                <li><strong>Фреймворки:</strong> React, Vue, Angular</li>
            </ul>
            
            <h4>Backend разработка:</h4>
            <ul>
                <li><strong>Серверные языки:</strong> Node.js, Python, PHP, Java</li>
                <li><strong>Базы данных:</strong> MySQL, PostgreSQL, MongoDB</li>
                <li><strong>API:</strong> REST, GraphQL</li>
            </ul>
        `
    },
    { 
        id: 16,
        title: "Математический анализ", 
        topic: "math", 
        level: "advanced",
        description: "Дифференциальное и интегральное исчисление.",
        icon: "fa-calculator",
        content: `
            <h3>Математический анализ</h3>
            <p>Раздел математики, изучающий функции, пределы, производные, интегралы и бесконечные ряды.</p>
            
            <h4>Основные понятия:</h4>
            <ul>
                <li><strong>Предел функции:</strong> lim(x→a) f(x) = L</li>
                <li><strong>Производная:</strong> f'(x) = lim(h→0) [f(x+h) - f(x)]/h</li>
                <li><strong>Интеграл:</strong> ∫f(x)dx</li>
            </ul>
            
            <h4>Правила дифференцирования:</h4>
            <ul>
                <li>Константа: d/dx [c] = 0</li>
                <li>Степень: d/dx [xⁿ] = nxⁿ⁻¹</li>
                <li>Сумма: d/dx [f(x) + g(x)] = f'(x) + g'(x)</li>
            </ul>
        `
    },
    { 
        id: 17,
        title: "Английский для IT", 
        topic: "language", 
        level: "beginner",
        description: "Основные термины и фразы для работы в IT-сфере.",
        icon: "fa-language",
        content: `
            <h3>Английский язык для IT-специалистов</h3>
            <p>Основные термины и выражения, необходимые для работы в международной IT-индустрии.</p>
            
            <h4>Основные IT-термины:</h4>
            <ul>
                <li><strong>Algorithm</strong> - алгоритм</li>
                <li><strong>API (Application Programming Interface)</strong> - программный интерфейс приложения</li>
                <li><strong>Backend</strong> - серверная часть</li>
                <li><strong>Bug</strong> - ошибка в программе</li>
                <li><strong>Database</strong> - база данных</li>
                <li><strong>Debugging</strong> - отладка</li>
            </ul>
            
            <h4>Полезные фразы для общения:</h4>
            <ul>
                <li>"Could you please clarify the requirements?" - Не могли бы вы уточнить требования?</li>
                <li>"I need to debug this issue." - Мне нужно исправить эту ошибку.</li>
                <li>"Let me check the documentation." - Позвольте мне проверить документацию.</li>
            </ul>
        `
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
    
    // Модальное окно материалов
    document.getElementById('close-material-modal').addEventListener('click', closeMaterialModal);
    document.getElementById('close-material-btn').addEventListener('click', closeMaterialModal);
    document.getElementById('mark-studied-btn').addEventListener('click', markMaterialAsStudied);
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
            showMaterialModal(materialId);
        });
    });
}

// Модальное окно для материалов
let currentMaterialId = null;

function showMaterialModal(materialId) {
    const material = MATERIALS.find(m => m.id === materialId);
    if (!material) return;
    
    currentMaterialId = materialId;
    
    const modal = document.getElementById('material-modal');
    const title = document.getElementById('material-modal-title');
    const content = document.getElementById('material-content');
    
    title.textContent = material.title;
    content.innerHTML = material.content || `<p>${material.description}</p><p>Контент для этого материала пока не добавлен.</p>`;
    
    // Обновляем кнопку в зависимости от статуса изучения
    const isStudied = state.studiedMaterials.includes(materialId);
    const markBtn = document.getElementById('mark-studied-btn');
    markBtn.innerHTML = isStudied ? 
        '<i class="fas fa-check"></i> Уже изучено' : 
        '<i class="fas fa-check"></i> Отметить как изученное';
    markBtn.disabled = isStudied;
    
    modal.classList.add('show');
}

function closeMaterialModal() {
    document.getElementById('material-modal').classList.remove('show');
    currentMaterialId = null;
}

function markMaterialAsStudied() {
    if (currentMaterialId) {
        toggleMaterialStudy(currentMaterialId);
        closeMaterialModal();
    }
}

// Переключение состояния изучения материала
function toggleMaterialStudy(materialId) {
    const material = MATERIALS.find(m => m.id === materialId);
    if (!material) return;
    
    const index = state.studiedMaterials.indexOf(materialId);
    if (index === -1) {
        state.studiedMaterials.push(materialId);
        addXp(CONFIG.xpPerMaterial);
        showNotification(`Материал "${material.title}" изучен! +${CONFIG.xpPerMaterial} XP`, 'success');
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
