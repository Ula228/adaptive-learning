// Конфигурация
const CONFIG = {
    initialLevel: 1,
    xpPerTest: 100,
    xpPerMaterial: 50,
    nextLevelFactor: 1.5,
    maxLevel: 50
};

// ================== МАТЕРИАЛЫ ==================
const MATERIALS = [
    // ---------- ПРОГРАММИРОВАНИЕ ----------
    {
        id: 1,
        title: "Основы Python",
        topic: "programming",
        level: "beginner",
        description: "Введение в программирование на Python. Базовый синтаксис и первые программы.",
        icon: "fa-code",
        content: `<h3>Введение в Python</h3><p>Python — это интерпретируемый, объектно-ориентированный, высокоуровневый язык программирования с динамической семантикой. Он отлично подходит для начинающих благодаря простому синтаксису.</p><h4>Основные особенности:</h4><ul><li>Простой и легкий для изучения синтаксис</li><li>Поддержка структурного, объектно-ориентированного и функционального программирования</li><li>Динамическая типизация</li><li>Автоматическое управление памятью</li></ul><h4>Пример программы:</h4><pre><code># Это комментарий\nprint("Hello, World!")\nx = 1\nif x == 1:\n    print("x равно 1")</code></pre><h4>Переменные и типы данных:</h4><pre><code># Числа\nx = 5\ny = 3.14\n\n# Строки\nname = "Python"\n\n# Списки\nfruits = ["apple", "banana", "cherry"]\n\n# Словари\nperson = {"name": "John", "age": 30}</code></pre>`
    },
    {
        id: 2,
        title: "Переменные и типы данных в Python",
        topic: "programming",
        level: "beginner",
        description: "Числа, строки, списки, словари и другие структуры данных.",
        icon: "fa-code",
        content: `<h3>Типы данных в Python</h3><p>Python автоматически определяет тип переменной при присваивании. Основные типы:</p><ul><li><strong>int</strong> – целые числа (5, -3, 1000)</li><li><strong>float</strong> – числа с плавающей точкой (3.14, -0.001)</li><li><strong>str</strong> – строки ("Привет", 'Python')</li><li><strong>list</strong> – списки ([1, 2, 3], ["a", "b"])</li><li><strong>dict</strong> – словари ({"ключ": "значение"})</li><li><strong>bool</strong> – логические значения True/False</li></ul><pre><code># Примеры\nage = 25                # int\npi = 3.14159            # float\nmessage = "Привет"      # str\nnumbers = [1, 2, 3]     # list\nuser = {"name": "Анна"} # dict\nis_student = True       # bool</code></pre><p>Функция <code>type()</code> позволяет узнать тип переменной.</p>`
    },
    {
        id: 3,
        title: "Условные операторы и циклы",
        topic: "programming",
        level: "beginner",
        description: "if/else, for, while — управление потоком выполнения.",
        icon: "fa-code",
        content: `<h3>Условные операторы</h3><p>Конструкция <code>if/elif/else</code> позволяет выполнять разный код в зависимости от условия.</p><pre><code>temperature = 20\nif temperature > 25:\n    print("Жарко")\nelif temperature > 15:\n    print("Тепло")\nelse:\n    print("Холодно")</code></pre><h3>Циклы</h3><p><strong>for</strong> используется для перебора последовательностей (списки, строки, range).</p><pre><code>for i in range(5):\n    print(i)   # 0 1 2 3 4\n\nfor fruit in ["яблоко", "банан"]:\n    print(fruit)</code></pre><p><strong>while</strong> выполняется, пока условие истинно.</p><pre><code>count = 0\nwhile count < 3:\n    print(count)\n    count += 1</code></pre>`
    },
    {
        id: 4,
        title: "Функции в Python",
        topic: "programming",
        level: "intermediate",
        description: "Создание функций, аргументы, возврат значений.",
        icon: "fa-cogs",
        content: `<h3>Функции</h3><p>Функции позволяют организовать код в переиспользуемые блоки. Определяются с помощью ключевого слова <code>def</code>.</p><pre><code>def greet(name):\n    return f"Привет, {name}!"\n\nprint(greet("Мир"))  # Привет, Мир!</code></pre><h4>Параметры и аргументы</h4><ul><li>Позиционные аргументы</li><li>Аргументы по умолчанию</li><li>Именованные аргументы</li></ul><pre><code>def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))      # 9\nprint(power(2, 10))  # 1024</code></pre>`
    },
    {
        id: 5,
        title: "Работа с файлами",
        topic: "programming",
        level: "intermediate",
        description: "Чтение и запись текстовых файлов, менеджеры контекста.",
        icon: "fa-file-alt",
        content: `<h3>Работа с файлами</h3><p>Python предоставляет простой интерфейс для чтения и записи файлов. Рекомендуется использовать менеджер контекста <code>with</code>, который автоматически закрывает файл.</p><h4>Чтение файла:</h4><pre><code>with open('example.txt', 'r', encoding='utf-8') as file:\n    content = file.read()\n    print(content)</code></pre><h4>Запись в файл:</h4><pre><code>lines = ["Первая строка", "Вторая строка"]\nwith open('output.txt', 'w', encoding='utf-8') as file:\n    for line in lines:\n        file.write(line + '\\n')</code></pre><p>Режимы открытия: 'r' – чтение, 'w' – запись (перезапись), 'a' – добавление.</p>`
    },
    {
        id: 6,
        title: "ООП: классы и объекты",
        topic: "programming",
        level: "advanced",
        description: "Основы объектно-ориентированного программирования в Python.",
        icon: "fa-cube",
        content: `<h3>Классы и объекты</h3><p>Класс – это шаблон для создания объектов. Объекты объединяют данные (атрибуты) и поведение (методы).</p><pre><code>class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f"{self.name} говорит гав!"\n\nmy_dog = Dog("Шарик", 3)\nprint(my_dog.bark())  # Шарик говорит гав!</code></pre><h4>Наследование</h4><p>Класс-наследник получает все методы и атрибуты родительского класса.</p><pre><code>class Puppy(Dog):\n    def play(self):\n        return f"{self.name} играет с мячиком"\n\npuppy = Puppy("Бобик", 1)\nprint(puppy.bark())  # наследованный метод</code></pre>`
    },
    {
        id: 7,
        title: "Исключения и обработка ошибок",
        topic: "programming",
        level: "intermediate",
        description: "try/except, создание собственных исключений.",
        icon: "fa-exclamation-triangle",
        content: `<h3>Обработка исключений</h3><p>Блок <code>try/except</code> перехватывает ошибки и предотвращает аварийное завершение программы.</p><pre><code>try:\n    number = int(input("Введите число: "))\n    print(10 / number)\nexcept ValueError:\n    print("Это не число!")\nexcept ZeroDivisionError:\n    print("На ноль делить нельзя")\nexcept Exception as e:\n    print(f"Произошла ошибка: {e}")</code></pre><p>Блок <code>finally</code> выполняется всегда, независимо от исключений.</p>`
    },
    {
        id: 8,
        title: "Модули и пакеты",
        topic: "programming",
        level: "intermediate",
        description: "Импорт библиотек, создание собственных модулей.",
        icon: "fa-puzzle-piece",
        content: `<h3>Модули</h3><p>Модуль — это файл с расширением .py, содержащий функции, классы и переменные. Для использования в другом файле применяется <code>import</code>.</p><pre><code>import math\nprint(math.sqrt(16))  # 4.0\n\nfrom datetime import datetime\nprint(datetime.now())</code></pre><p>Пакет — это директория с модулями и файлом __init__.py. Он позволяет организовать код в иерархию.</p><h4>Создание собственного модуля</h4><p>Создайте файл mymodule.py:</p><pre><code>def hello():\n    return "Привет из модуля!"</code></pre><p>Затем импортируйте в главном скрипте:</p><pre><code>import mymodule\nprint(mymodule.hello())</code></pre>`
    },
    {
        id: 9,
        title: "Работа с API",
        topic: "programming",
        level: "advanced",
        description: "Отправка HTTP-запросов, работа с JSON.",
        icon: "fa-cloud",
        content: `<h3>API и HTTP-запросы</h3><p>API позволяет программам общаться друг с другом.</p><pre><code>import requests\n\nresponse = requests.get('https://api.github.com')\nif response.status_code == 200:\n    data = response.json()\n    print(data['current_user_url'])</code></pre>`
    },
    {
        id: 10,
        title: "Введение в JavaScript",
        topic: "programming",
        level: "beginner",
        description: "Основы языка JavaScript для веб-разработки.",
        icon: "fa-js",
        content: `<h3>JavaScript</h3><p>Язык, выполняющийся в браузере.</p><pre><code>let name = "Анна";\nconst age = 25;\n\nfunction greet(user) {\n    return 'Привет, ' + user;\n}\nconsole.log(greet(name));</code></pre>`
    },
    {
        id: 11,
        title: "HTML и CSS (базовый)",
        topic: "programming",
        level: "beginner",
        description: "Структура веб-страниц и базовые стили.",
        icon: "fa-html5",
        content: `<h3>HTML</h3><p>Язык разметки.</p><pre><code>&lt;h1&gt;Заголовок&lt;/h1&gt;\n&lt;p&gt;Абзац&lt;/p&gt;</code></pre><h3>CSS</h3><p>Стилизация.</p><pre><code>h1 {\n    color: blue;\n}</code></pre>`
    },
    {
        id: 12,
        title: "Продвинутый JavaScript",
        topic: "programming",
        level: "advanced",
        description: "Замыкания, Promise, async/await.",
        icon: "fa-js-square",
        content: `<h3>Асинхронность</h3><pre><code>async function fetchData() {\n    const response = await fetch(url);\n    return response.json();\n}</code></pre>`
    },
    {
        id: 13,
        title: "Основы SQL и баз данных",
        topic: "programming",
        level: "intermediate",
        description: "SELECT, INSERT, JOIN.",
        icon: "fa-database",
        content: `<h3>SQL</h3><pre><code>SELECT * FROM users WHERE age > 18;</code></pre>`
    },
    {
        id: 14,
        title: "Алгоритмы и структуры данных",
        topic: "programming",
        level: "advanced",
        description: "Сортировки, поиск, связные списки, деревья.",
        icon: "fa-project-diagram",
        content: `<h3>Алгоритмы</h3><p>Бинарный поиск, быстрая сортировка.</p>`
    },
    {
        id: 15,
        title: "Основы машинного обучения",
        topic: "programming",
        level: "advanced",
        description: "Введение в ML, линейная регрессия, scikit-learn.",
        icon: "fa-brain",
        content: `<h3>Машинное обучение</h3><p>Обучение с учителем, регрессия.</p>`
    },
    // ---------- МАТЕМАТИКА ----------
    {
        id: 16,
        title: "Алгебра для начинающих",
        topic: "math",
        level: "beginner",
        description: "Уравнения, неравенства, функции и графики.",
        icon: "fa-square-root-alt",
        content: `<h3>Основы алгебры</h3><p>Линейные и квадратные уравнения.</p>`
    },
    {
        id: 17,
        title: "Геометрия: площадь и объём",
        topic: "math",
        level: "beginner",
        description: "Основные фигуры и формулы.",
        icon: "fa-draw-polygon",
        content: `<h3>Геометрия</h3><p>Площадь круга: πr². Объём шара: 4/3πr³.</p>`
    },
    {
        id: 18,
        title: "Тригонометрия",
        topic: "math",
        level: "intermediate",
        description: "Синус, косинус, тангенс.",
        icon: "fa-chart-line",
        content: `<h3>Тригонометрия</h3><p>sin²α + cos²α = 1.</p>`
    },
    {
        id: 19,
        title: "Логарифмы и степени",
        topic: "math",
        level: "intermediate",
        description: "Свойства логарифмов, показательные уравнения.",
        icon: "fa-superscript",
        content: `<h3>Логарифмы</h3><p>log_a(b) = c ⇔ a^c = b.</p>`
    },
    {
        id: 20,
        title: "Вероятность и статистика",
        topic: "math",
        level: "intermediate",
        description: "Случайные события, средние, дисперсия.",
        icon: "fa-dice",
        content: `<h3>Теория вероятностей</h3><p>P(A) = благоприятные исходы / все исходы.</p>`
    },
    {
        id: 21,
        title: "Матрицы и линейная алгебра",
        topic: "math",
        level: "advanced",
        description: "Операции с матрицами, определители.",
        icon: "fa-border-all",
        content: `<h3>Линейная алгебра</h3><p>Умножение матриц.</p>`
    },
    {
        id: 22,
        title: "Дифференциальное исчисление",
        topic: "math",
        level: "advanced",
        description: "Производные, правила дифференцирования.",
        icon: "fa-chart-area",
        content: `<h3>Производные</h3><p>f'(x) = lim (f(x+h)-f(x))/h.</p>`
    },
    {
        id: 23,
        title: "Интегралы",
        topic: "math",
        level: "advanced",
        description: "Неопределённый и определённый интеграл.",
        icon: "fa-integral",
        content: `<h3>Интегралы</h3><p>∫x dx = x²/2 + C.</p>`
    },
    {
        id: 24,
        title: "Комбинаторика",
        topic: "math",
        level: "intermediate",
        description: "Перестановки, сочетания, размещения.",
        icon: "fa-random",
        content: `<h3>Комбинаторика</h3><p>Число перестановок: n!</p>`
    },
    {
        id: 25,
        title: "Теория чисел",
        topic: "math",
        level: "advanced",
        description: "Простые числа, алгоритм Евклида, сравнения.",
        icon: "fa-calculator",
        content: `<h3>Теория чисел</h3><p>НОД алгоритм Евклида.</p>`
    },
    // ---------- НАУКА ----------
    {
        id: 26,
        title: "Основы физики",
        topic: "science",
        level: "beginner",
        description: "Законы Ньютона, энергия, движение.",
        icon: "fa-atom",
        content: `<h3>Физика</h3><p>F = ma.</p>`
    },
    {
        id: 27,
        title: "Химия элементов",
        topic: "science",
        level: "beginner",
        description: "Периодическая таблица, атомы, молекулы.",
        icon: "fa-flask",
        content: `<h3>Химия</h3><p>Атом состоит из протонов, нейтронов и электронов.</p>`
    },
    {
        id: 28,
        title: "Биология клетки",
        topic: "science",
        level: "intermediate",
        description: "Строение и функции клеток, органеллы.",
        icon: "fa-microscope",
        content: `<h3>Биология</h3><p>Клетка — элементарная единица жизни.</p>`
    },
    {
        id: 29,
        title: "Генетика",
        topic: "science",
        level: "advanced",
        description: "Законы Менделя, ДНК, мутации.",
        icon: "fa-dna",
        content: `<h3>Генетика</h3><p>Гены, аллели, мутации.</p>`
    },
    {
        id: 30,
        title: "Экология",
        topic: "science",
        level: "intermediate",
        description: "Экосистемы, цепи питания, биосфера.",
        icon: "fa-leaf",
        content: `<h3>Экология</h3><p>Биогеоценоз.</p>`
    },
    {
        id: 31,
        title: "Астрономия",
        topic: "science",
        level: "intermediate",
        description: "Планеты, звёзды, галактики.",
        icon: "fa-globe",
        content: `<h3>Астрономия</h3><p>Солнечная система.</p>`
    },
    {
        id: 32,
        title: "Квантовая физика",
        topic: "science",
        level: "advanced",
        description: "Кванты, волновая функция, принцип неопределённости.",
        icon: "fa-atom",
        content: `<h3>Квантовая механика</h3><p>Δx·Δp ≥ ℏ/2.</p>`
    },
    {
        id: 33,
        title: "Органическая химия",
        topic: "science",
        level: "advanced",
        description: "Углеводороды, функциональные группы.",
        icon: "fa-vial",
        content: `<h3>Органическая химия</h3><p>Алканы, алкены, спирты.</p>`
    },
    {
        id: 34,
        title: "Анатомия человека",
        topic: "science",
        level: "intermediate",
        description: "Системы органов.",
        icon: "fa-user-md",
        content: `<h3>Анатомия</h3><p>Нервная, сердечно-сосудистая системы.</p>`
    },
    {
        id: 35,
        title: "Эволюция и естественный отбор",
        topic: "science",
        level: "advanced",
        description: "Теория Дарвина, видообразование.",
        icon: "fa-tree",
        content: `<h3>Эволюция</h3><p>Естественный отбор.</p>`
    },
    // ---------- ЯЗЫКИ ----------
    {
        id: 36,
        title: "Английский для IT",
        topic: "language",
        level: "beginner",
        description: "Техническая лексика, фразы для общения.",
        icon: "fa-language",
        content: `<h3>English for IT</h3><p>API, bug, debug, framework, deployment.</p>`
    },
    {
        id: 37,
        title: "Английский: времена глаголов",
        topic: "language",
        level: "beginner",
        description: "Present Simple, Past Simple, Future Simple.",
        icon: "fa-language",
        content: `<h3>Времена</h3><p>I work, I worked, I will work.</p>`
    },
    {
        id: 38,
        title: "Деловой английский",
        topic: "language",
        level: "intermediate",
        description: "Письма, переговоры, презентации.",
        icon: "fa-briefcase",
        content: `<h3>Business English</h3><p>Dear Sir/Madam, I am writing to inquire...</p>`
    },
    {
        id: 39,
        title: "Немецкий для начинающих",
        topic: "language",
        level: "beginner",
        description: "Первые слова и фразы.",
        icon: "fa-language",
        content: `<h3>Deutsch A1</h3><p>Hallo! Wie geht's?</p>`
    },
    {
        id: 40,
        title: "Французский базовый",
        topic: "language",
        level: "beginner",
        description: "Приветствия, числительные.",
        icon: "fa-language",
        content: `<h3>Français</h3><p>Bonjour! Comment ça va?</p>`
    }
];

// ================== ТЕСТЫ ==================
const TESTS = [
    {
        id: 1,
        title: "Основы Python",
        topic: "programming",
        level: "beginner",
        description: "Переменные, типы данных, print",
        questions: [
            { text: "Как вывести текст на экран в Python?", answers: [{ text: "console.log()", correct: false }, { text: "print()", correct: true }, { text: "echo()", correct: false }, { text: "printf()", correct: false }] },
            { text: "Что вернёт 5 // 2?", answers: [{ text: "2.5", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }, { text: "Ошибка", correct: false }] },
            { text: "Как создать список?", answers: [{ text: "{}", correct: false }, { text: "[]", correct: true }, { text: "()", correct: false }, { text: "<>", correct: false }] },
            { text: "Тип данных True:", answers: [{ text: "int", correct: false }, { text: "str", correct: false }, { text: "bool", correct: true }, { text: "float", correct: false }] }
        ],
        icon: "fa-python"
    },
    {
        id: 2,
        title: "Алгебра (новичок)",
        topic: "math",
        level: "beginner",
        description: "Линейные уравнения",
        questions: [
            { text: "2x + 3 = 7, x = ?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }, { text: "4", correct: false }] },
            { text: "3x - 6 = 0, x = ?", answers: [{ text: "2", correct: true }, { text: "6", correct: false }, { text: "-2", correct: false }, { text: "0", correct: false }] }
        ],
        icon: "fa-square-root-alt"
    },
    {
        id: 3,
        title: "Физика: Законы Ньютона",
        topic: "science",
        level: "beginner",
        description: "Первый, второй и третий законы",
        questions: [
            { text: "Формула второго закона Ньютона:", answers: [{ text: "F = ma", correct: true }, { text: "E = mc²", correct: false }, { text: "F = mv", correct: false }, { text: "F = kx", correct: false }] },
            { text: "Сила тяжести действует:", answers: [{ text: "Всегда вниз", correct: true }, { text: "В сторону движения", correct: false }, { text: "Только на движущиеся тела", correct: false }, { text: "Не действует в вакууме", correct: false }] }
        ],
        icon: "fa-atom"
    },
    {
        id: 4,
        title: "Английский: времена",
        topic: "language",
        level: "beginner",
        description: "Present Simple, Past Simple, Future Simple",
        questions: [
            { text: "She ___ to school every day.", answers: [{ text: "go", correct: false }, { text: "goes", correct: true }, { text: "went", correct: false }, { text: "going", correct: false }] },
            { text: "They ___ football yesterday.", answers: [{ text: "play", correct: false }, { text: "played", correct: true }, { text: "plays", correct: false }, { text: "playing", correct: false }] },
            { text: "I ___ visit my grandparents next week.", answers: [{ text: "am", correct: false }, { text: "will", correct: true }, { text: "did", correct: false }, { text: "do", correct: false }] }
        ],
        icon: "fa-language"
    },
    {
        id: 5,
        title: "Продвинутый JavaScript",
        topic: "programming",
        level: "advanced",
        description: "Замыкания, async/await",
        questions: [
            { text: "Замыкание — это:", answers: [{ text: "Функция внутри функции с доступом к её переменным", correct: true }, { text: "Ошибка в коде", correct: false }, { text: "Способ скрыть код", correct: false }, { text: "Анонимная функция", correct: false }] },
            { text: "typeof null возвращает:", answers: [{ text: "'null'", correct: false }, { text: "'object'", correct: true }, { text: "'undefined'", correct: false }, { text: "'boolean'", correct: false }] }
        ],
        icon: "fa-js"
    },
    {
        id: 6,
        title: "Матрицы и линейная алгебра",
        topic: "math",
        level: "advanced",
        description: "Умножение матриц, определители",
        questions: [
            { text: "Результат умножения матриц 2x2 на 2x2 имеет размер:", answers: [{ text: "2x2", correct: true }, { text: "2x1", correct: false }, { text: "1x2", correct: false }, { text: "4x4", correct: false }] },
            { text: "Определитель [[2,0],[0,3]] равен:", answers: [{ text: "6", correct: true }, { text: "5", correct: false }, { text: "0", correct: false }, { text: "1", correct: false }] }
        ],
        icon: "fa-border-all"
    },
    {
        id: 7,
        title: "Биология: клетка",
        topic: "science",
        level: "intermediate",
        description: "Строение и функции органелл",
        questions: [
            { text: "Митохондрии отвечают за:", answers: [{ text: "Синтез белка", correct: false }, { text: "Энергию", correct: true }, { text: "Хранение ДНК", correct: false }, { text: "Защиту", correct: false }] },
            { text: "Ядро клетки содержит:", answers: [{ text: "Рибосомы", correct: false }, { text: "Генетический материал", correct: true }, { text: "Митохондрии", correct: false }, { text: "Цитоплазму", correct: false }] }
        ],
        icon: "fa-microscope"
    },
    {
        id: 8,
        title: "SQL и базы данных",
        topic: "programming",
        level: "intermediate",
        description: "SELECT, JOIN, WHERE",
        questions: [
            { text: "Команда для выборки данных:", answers: [{ text: "INSERT", correct: false }, { text: "SELECT", correct: true }, { text: "UPDATE", correct: false }, { text: "DELETE", correct: false }] },
            { text: "Для фильтрации строк используется:", answers: [{ text: "ORDER BY", correct: false }, { text: "GROUP BY", correct: false }, { text: "WHERE", correct: true }, { text: "HAVING", correct: false }] },
            { text: "JOIN нужен для:", answers: [{ text: "Объединения таблиц", correct: true }, { text: "Удаления дубликатов", correct: false }, { text: "Сортировки", correct: false }, { text: "Создания таблицы", correct: false }] }
        ],
        icon: "fa-database"
    }
];

// ================== СОСТОЯНИЕ ==================
const state = {
    currentLevel: 'beginner',
    currentTopic: 'all',
    progress: 0,
    darkMode: false,
    xp: 0,
    level: CONFIG.initialLevel,
    nextLevelXp: 1000,
    studiedMaterials: []
};

// ================== ИНИЦИАЛИЗАЦИЯ ==================
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
            updateThemeButton(true);
        }
    }
}

function saveState() {
    localStorage.setItem('learning-app-state', JSON.stringify(state));
}

// ================== ОБРАБОТЧИКИ ==================
function setupEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('beginner').addEventListener('click', () => setLevel('beginner'));
    document.getElementById('intermediate').addEventListener('click', () => setLevel('intermediate'));
    document.getElementById('advanced').addEventListener('click', () => setLevel('advanced'));
    document.querySelectorAll('.filter-tab').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.topic)));
    document.getElementById('search-btn').addEventListener('click', searchMaterials);
    document.getElementById('search-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') searchMaterials(); });
    document.getElementById('ask-ai').addEventListener('click', askAI);
    document.getElementById('ai-question').addEventListener('keypress', (e) => { if (e.key === 'Enter') askAI(); });
    document.getElementById('close-material-modal').addEventListener('click', closeMaterialModal);
    document.getElementById('close-material-btn').addEventListener('click', closeMaterialModal);
    document.getElementById('mark-studied-btn').addEventListener('click', markMaterialAsStudied);
}

// ================== ТЕМА ==================
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.documentElement.toggleAttribute('data-theme');
    updateThemeButton(state.darkMode);
    saveState();
}

function updateThemeButton(isDark) {
    const icon = isDark ? 'sun' : 'moon';
    const text = isDark ? 'Светлая тема' : 'Темная тема';
    document.getElementById('theme-toggle').innerHTML = `<i class="fas fa-${icon}"></i> ${text}`;
}

// ================== УРОВЕНЬ И ФИЛЬТР ==================
function setLevel(level) {
    state.currentLevel = level;
    document.querySelectorAll('.difficulty-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById(level).classList.add('active');
    renderMaterials();
    renderTests();
    saveState();
}

function setFilter(topic) {
    state.currentTopic = topic;
    document.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-tab[data-topic="${topic}"]`).classList.add('active');
    renderMaterials();
    renderTests();
    saveState();
}

function searchMaterials() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    renderMaterials(query);
}

// ================== РЕНДЕР МАТЕРИАЛОВ ==================
function renderMaterials(searchQuery = '') {
    const container = document.getElementById('materials');
    container.innerHTML = '';
    const filtered = MATERIALS.filter(m => {
        const topicMatch = state.currentTopic === 'all' || m.topic === state.currentTopic;
        const levelMatch = m.level === state.currentLevel;
        const searchMatch = !searchQuery || m.title.toLowerCase().includes(searchQuery) || m.description.toLowerCase().includes(searchQuery);
        return topicMatch && levelMatch && searchMatch;
    });
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-book-open"></i><p>Материалы не найдены</p></div>';
        return;
    }
    filtered.forEach(material => {
        const studied = state.studiedMaterials.includes(material.id);
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `<div class="material-header"><i class="fas ${material.icon} material-icon"></i><h3 class="material-title">${material.title}</h3></div><p class="material-description">${material.description}</p><div class="material-meta"><span class="material-topic">${getTopicName(material.topic)}</span><span class="material-level ${material.level}">${getLevelName(material.level)}</span></div><button class="study-btn ${studied ? 'studied' : ''}" data-id="${material.id}"><i class="fas ${studied ? 'fa-check' : 'fa-book'}"></i> ${studied ? 'Изучено' : 'Изучить'}</button>`;
        container.appendChild(card);
    });
    document.querySelectorAll('.study-btn').forEach(btn => btn.addEventListener('click', () => showMaterialModal(parseInt(btn.dataset.id))));
}

// ================== МОДАЛЬНОЕ ОКНО МАТЕРИАЛА ==================
let currentMaterialId = null;
function showMaterialModal(materialId) {
    const material = MATERIALS.find(m => m.id === materialId);
    if (!material) return;
    currentMaterialId = materialId;
    document.getElementById('material-modal-title').textContent = material.title;
    document.getElementById('material-content').innerHTML = material.content || `<p>${material.description}</p>`;
    const studied = state.studiedMaterials.includes(materialId);
    const markBtn = document.getElementById('mark-studied-btn');
    markBtn.innerHTML = studied ? '<i class="fas fa-check"></i> Уже изучено' : '<i class="fas fa-check"></i> Отметить как изученное';
    markBtn.disabled = studied;
    document.getElementById('material-modal').classList.add('show');
}
function closeMaterialModal() { document.getElementById('material-modal').classList.remove('show'); currentMaterialId = null; }
function markMaterialAsStudied() { if (currentMaterialId) { toggleMaterialStudy(currentMaterialId); closeMaterialModal(); } }
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
        showNotification(`Материал "${material.title}" удалён из изученных`, 'info');
    }
    updateProgress();
    renderMaterials();
    saveState();
}

// ================== РЕНДЕР ТЕСТОВ ==================
function renderTests() {
    const container = document.getElementById('tests');
    container.innerHTML = '';
    const filtered = TESTS.filter(t => (state.currentTopic === 'all' || t.topic === state.currentTopic) && t.level === state.currentLevel);
    if (filtered.length === 0) { container.innerHTML = '<div class="empty-state"><i class="fas fa-question-circle"></i><p>Тесты не найдены</p></div>'; return; }
    filtered.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `<div class="test-title"><i class="fab ${test.icon} test-icon"></i><span>${test.title}</span></div><p class="test-description">${test.description}</p><div class="test-meta"><span class="test-difficulty ${test.level}">${getLevelName(test.level)}</span><span class="test-questions">${test.questions.length} вопросов</span></div><button class="start-test-btn" data-id="${test.id}"><i class="fas fa-play"></i> Начать тест</button>`;
        container.appendChild(card);
    });
    document.querySelectorAll('.start-test-btn').forEach(btn => btn.addEventListener('click', () => startTest(parseInt(btn.dataset.id))));
}
function startTest(testId) {
    const test = TESTS.find(t => t.id === testId);
    if (!test) return;
    showTestModal(test);
    addXp(10);
    showNotification(`Тест "${test.title}" начат!`, 'info');
}

// ================== МОДАЛЬНОЕ ОКНО ТЕСТА ==================
function showTestModal(test) {
    const modal = document.getElementById('test-modal');
    document.getElementById('test-modal-title').textContent = test.title;
    document.getElementById('total-questions').textContent = test.questions.length;
    const questions = test.questions;
    let currentIndex = 0, score = 0;
    const nextBtn = document.getElementById('next-question-btn');
    const closeBtn = document.getElementById('close-test-modal');
    function displayQuestion() {
        document.getElementById('current-question').textContent = currentIndex + 1;
        const container = document.getElementById('test-questions');
        container.innerHTML = '';
        const q = questions[currentIndex];
        const div = document.createElement('div');
        div.className = 'question-container';
        div.innerHTML = `<div class="question-text">${q.text}</div><div class="answers-container"></div>`;
        const answersDiv = div.querySelector('.answers-container');
        q.answers.forEach((ans, i) => {
            const btn = document.createElement('button');
            btn.className = 'answer-option';
            btn.textContent = ans.text;
            btn.dataset.index = i;
            btn.addEventListener('click', () => selectAnswer(btn, i));
            answersDiv.appendChild(btn);
        });
        container.appendChild(div);
        nextBtn.disabled = true;
        nextBtn.innerHTML = currentIndex === questions.length - 1 ? '<i class="fas fa-check"></i> Завершить тест' : 'Следующий вопрос <i class="fas fa-arrow-right"></i>';
    }
    function selectAnswer(btn) { document.querySelectorAll('.answer-option').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); nextBtn.disabled = false; }
    function handleNext() {
        const selected = document.querySelector('.answer-option.selected');
        if (selected) { const idx = parseInt(selected.dataset.index); if (questions[currentIndex].answers[idx].correct) score++; }
        currentIndex++;
        if (currentIndex < questions.length) displayQuestion();
        else finishTest(score, questions.length);
    }
    nextBtn.addEventListener('click', handleNext);
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    displayQuestion();
    modal.classList.add('show');
}
function finishTest(score, total) {
    document.getElementById('test-modal').classList.remove('show');
    const percent = Math.round((score / total) * 100);
    let msg, type;
    if (percent >= 80) { msg = `Отлично! ${score}/${total} (${percent}%)`; type = 'success'; addXp(50); }
    else if (percent >= 50) { msg = `Хорошо! ${score}/${total} (${percent}%)`; type = 'info'; addXp(30); }
    else { msg = `Попробуйте ещё раз. ${score}/${total} (${percent}%)`; type = 'error'; addXp(10); }
    showNotification(msg, type);
}

// ================== ПРОГРЕСС И XP ==================
function updateProgress() {
    const total = MATERIALS.filter(m => m.level === state.currentLevel).length;
    const studied = MATERIALS.filter(m => m.level === state.currentLevel && state.studiedMaterials.includes(m.id)).length;
    state.progress = total ? Math.round((studied / total) * 100) : 0;
    updateUI();
    updateChart();
}
function addXp(amount) {
    state.xp += amount;
    while (state.xp >= state.nextLevelXp && state.level < CONFIG.maxLevel) {
        state.level++;
        state.xp -= state.nextLevelXp;
        state.nextLevelXp = Math.floor(state.nextLevelXp * CONFIG.nextLevelFactor);
        showNotification(`🎉 Уровень ${state.level}!`, 'success');
    }
    updateUI();
    saveState();
}
function updateUI() {
    document.getElementById('progress-value').textContent = `${state.progress}%`;
    document.getElementById('progress-fill').style.width = `${state.progress}%`;
    document.getElementById('level-value').textContent = state.level;
    document.getElementById('current-xp').textContent = state.xp;
    document.getElementById('max-xp').textContent = state.nextLevelXp;
    document.getElementById('xp-fill').style.width = `${Math.min(100, (state.xp / state.nextLevelXp) * 100)}%`;
}

// ================== УВЕДОМЛЕНИЯ ==================
function showNotification(message, type) {
    const notif = document.getElementById('notification');
    notif.className = `notification ${type} show`;
    notif.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i> ${message}`;
    setTimeout(() => notif.classList.remove('show'), 3000);
}

// ================== AI-ПОМОЩНИК ==================
async function askAI() {
    const input = document.getElementById('ai-question');
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    input.value = '';
    const loadingMsg = addMessage('...', 'ai loading');
    try {
        const response = await fetch('/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
        const data = await response.json();
        if (loadingMsg) loadingMsg.remove();
        if (data.answer) addMessage(data.answer, 'ai');
        else if (data.error) addMessage(`Ошибка: ${data.error}`, 'ai error');
        else addMessage('Извините, не могу ответить.', 'ai error');
    } catch (error) {
        console.error('Ошибка AI:', error);
        if (loadingMsg) loadingMsg.remove();
        addMessage('Ошибка соединения с сервером.', 'ai error');
    }
}
function addMessage(text, sender) {
    const chat = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    let display = text;
    if (sender === 'user') display = `<strong>Вы:</strong> ${text}`;
    else if (sender === 'ai') display = `<strong>AI:</strong> ${text}`;
    else if (sender === 'ai loading') display = `<strong>AI:</strong> <em>${text}</em>`;
    else if (sender === 'ai error') display = `<strong>AI:</strong> <span style="color: var(--error-color)">${text}</span>`;
    msg.innerHTML = display;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
    return msg;
}

// ================== ГРАФИК ==================
let progressChart;
function initChart() {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'line',
        data: { labels: generateWeekLabels(), datasets: [{ label: 'Прогресс', data: generateProgressData(), borderColor: '#3498db', backgroundColor: 'rgba(52,152,219,0.1)', tension: 0.3 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });
}
function generateWeekLabels() {
    const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    const today = new Date();
    return Array.from({length:7}, (_,i) => { const d = new Date(today); d.setDate(today.getDate() - 6 + i); return `${days[d.getDay()]} ${d.getDate()}`; });
}
function generateProgressData() {
    const base = state.progress || 10;
    return [base-15, base-10, base-5, base, base+5, base+15, base+25].map(v => Math.min(100, Math.max(0, v)));
}
function updateChart() { if (progressChart) { progressChart.data.datasets[0].data = generateProgressData(); progressChart.update(); } }

// ================== ВСПОМОГАТЕЛЬНЫЕ ==================
function getTopicName(topic) { const names = { math: 'Математика', programming: 'Программирование', science: 'Наука', language: 'Языки' }; return names[topic] || topic; }
function getLevelName(level) { const names = { beginner: 'Новичок', intermediate: 'Средний', advanced: 'Продвинутый' }; return names[level] || level; }
