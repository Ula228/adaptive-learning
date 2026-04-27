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
        content: `
            <h3>Введение в Python</h3>
            <p>Python — это интерпретируемый, объектно-ориентированный, высокоуровневый язык программирования с динамической семантикой. Он отлично подходит для начинающих благодаря простому синтаксису.</p>
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
        title: "Переменные и типы данных в Python",
        topic: "programming",
        level: "beginner",
        description: "Числа, строки, списки, словари и другие структуры данных.",
        icon: "fa-code",
        content: `
            <h3>Типы данных в Python</h3>
            <p>Python автоматически определяет тип переменной при присваивании. Основные типы:</p>
            <ul>
                <li><strong>int</strong> – целые числа (5, -3, 1000)</li>
                <li><strong>float</strong> – числа с плавающей точкой (3.14, -0.001)</li>
                <li><strong>str</strong> – строки ("Привет", 'Python')</li>
                <li><strong>list</strong> – списки ([1, 2, 3], ["a", "b"])</li>
                <li><strong>dict</strong> – словари ({"ключ": "значение"})</li>
                <li><strong>bool</strong> – логические значения True/False</li>
            </ul>
            <pre><code># Примеры
age = 25                # int
pi = 3.14159            # float
message = "Привет"      # str
numbers = [1, 2, 3]     # list
user = {"name": "Анна"} # dict
is_student = True       # bool</code></pre>
            <p>Функция <code>type()</code> позволяет узнать тип переменной.</p>
        `
    },
    {
        id: 3,
        title: "Условные операторы и циклы",
        topic: "programming",
        level: "beginner",
        description: "if/else, for, while — управление потоком выполнения.",
        icon: "fa-code",
        content: `
            <h3>Условные операторы</h3>
            <p>Конструкция <code>if/elif/else</code> позволяет выполнять разный код в зависимости от условия.</p>
            <pre><code>temperature = 20
if temperature > 25:
    print("Жарко")
elif temperature > 15:
    print("Тепло")
else:
    print("Холодно")</code></pre>
            <h3>Циклы</h3>
            <p><strong>for</strong> используется для перебора последовательностей (списки, строки, range).</p>
            <pre><code>for i in range(5):
    print(i)   # 0 1 2 3 4

for fruit in ["яблоко", "банан"]:
    print(fruit)</code></pre>
            <p><strong>while</strong> выполняется, пока условие истинно.</p>
            <pre><code>count = 0
while count < 3:
    print(count)
    count += 1</code></pre>
        `
    },
    {
        id: 4,
        title: "Функции в Python",
        topic: "programming",
        level: "intermediate",
        description: "Создание функций, аргументы, возврат значений.",
        icon: "fa-cogs",
        content: `
            <h3>Функции</h3>
            <p>Функции позволяют организовать код в переиспользуемые блоки. Определяются с помощью ключевого слова <code>def</code>.</p>
            <pre><code>def greet(name):
    return f"Привет, {name}!"

print(greet("Мир"))  # Привет, Мир!</code></pre>
            <h4>Параметры и аргументы</h4>
            <ul>
                <li>Позиционные аргументы</li>
                <li>Аргументы по умолчанию</li>
                <li>Именованные аргументы</li>
            </ul>
            <pre><code>def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9
print(power(2, 10))  # 1024</code></pre>
        `
    },
    {
        id: 5,
        title: "Работа с файлами",
        topic: "programming",
        level: "intermediate",
        description: "Чтение и запись текстовых файлов, менеджеры контекста.",
        icon: "fa-file-alt",
        content: `
            <h3>Работа с файлами</h3>
            <p>Python предоставляет простой интерфейс для чтения и записи файлов. Рекомендуется использовать менеджер контекста <code>with</code>, который автоматически закрывает файл.</p>
            <h4>Чтение файла:</h4>
            <pre><code>with open('example.txt', 'r', encoding='utf-8') as file:
    content = file.read()
    print(content)</code></pre>
            <h4>Запись в файл:</h4>
            <pre><code>lines = ["Первая строка", "Вторая строка"]
with open('output.txt', 'w', encoding='utf-8') as file:
    for line in lines:
        file.write(line + '\\n')</code></pre>
            <p>Режимы открытия: 'r' – чтение, 'w' – запись (перезапись), 'a' – добавление.</p>
        `
    },
    {
        id: 6,
        title: "ООП: классы и объекты",
        topic: "programming",
        level: "advanced",
        description: "Основы объектно-ориентированного программирования в Python.",
        icon: "fa-cube",
        content: `
            <h3>Классы и объекты</h3>
            <p>Класс – это шаблон для создания объектов. Объекты объединяют данные (атрибуты) и поведение (методы).</p>
            <pre><code>class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} говорит гав!"

my_dog = Dog("Шарик", 3)
print(my_dog.bark())  # Шарик говорит гав!</code></pre>
            <h4>Наследование</h4>
            <p>Класс-наследник получает все методы и атрибуты родительского класса.</p>
            <pre><code>class Puppy(Dog):
    def play(self):
        return f"{self.name} играет с мячиком"

puppy = Puppy("Бобик", 1)
print(puppy.bark())  # наследованный метод</code></pre>
        `
    },
    {
        id: 7,
        title: "Исключения и обработка ошибок",
        topic: "programming",
        level: "intermediate",
        description: "try/except, создание собственных исключений.",
        icon: "fa-exclamation-triangle",
        content: `
            <h3>Обработка исключений</h3>
            <p>Блок <code>try/except</code> перехватывает ошибки и предотвращает аварийное завершение программы.</p>
            <pre><code>try:
    number = int(input("Введите число: "))
    print(10 / number)
except ValueError:
    print("Это не число!")
except ZeroDivisionError:
    print("На ноль делить нельзя")
except Exception as e:
    print(f"Произошла ошибка: {e}")</code></pre>
            <p>Блок <code>finally</code> выполняется всегда, независимо от исключений.</p>
        `
    },
    {
        id: 8,
        title: "Модули и пакеты",
        topic: "programming",
        level: "intermediate",
        description: "Импорт библиотек, создание собственных модулей.",
        icon: "fa-puzzle-piece",
        content: `
            <h3>Модули</h3>
            <p>Модуль — это файл с расширением .py, содержащий функции, классы и переменные. Для использования в другом файле применяется <code>import</code>.</p>
            <pre><code>import math
print(math.sqrt(16))  # 4.0

from datetime import datetime
print(datetime.now())</code></pre>
            <p>Пакет — это директория с модулями и файлом __init__.py. Он позволяет организовать код в иерархию.</p>
            <h4>Создание собственного модуля</h4>
            <p>Создайте файл mymodule.py:</p>
            <pre><code>def hello():
    return "Привет из модуля!"</code></pre>
            <p>Затем импортируйте в главном скрипте:</p>
            <pre><code>import mymodule
print(mymodule.hello())</code></pre>
        `
    },
    {
        id: 9,
        title: "Работа с API",
        topic: "programming",
        level: "advanced",
        description: "Отправка HTTP-запросов, работа с JSON.",
        icon: "fa-cloud",
        content: `
            <h3>API и HTTP-запросы</h3>
            <p>API (Application Programming Interface) позволяет программам общаться друг с другом. Чаще всего используют HTTP-запросы к веб-серверам.</p>
            <p>Библиотека <code>requests</code> упрощает отправку запросов.</p>
            <pre><code>import requests

response = requests.get('https://api.github.com')
if response.status_code == 200:
    data = response.json()
    print(data['current_user_url'])</code></pre>
            <h4>Передача параметров</h4>
            <pre><code>params = {'q': 'python', 'sort': 'stars'}
resp = requests.get('https://api.github.com/search/repositories', params=params)
print(resp.json()['total_count'])</code></pre>
            <h4>POST-запрос с JSON</h4>
            <pre><code>payload = {'name': 'myname', 'email': 'user@example.com'}
r = requests.post('https://httpbin.org/post', json=payload)
print(r.json())</code></pre>
        `
    },
    {
        id: 10,
        title: "Введение в JavaScript",
        topic: "programming",
        level: "beginner",
        description: "Основы языка JavaScript для веб-разработки.",
        icon: "fa-js",
        content: `
            <h3>JavaScript</h3>
            <p>JavaScript — язык программирования, который выполняется в браузере и делает страницы интерактивными.</p>
            <pre><code>// Переменные
let name = "Анна";
const age = 25;

// Функция
function greet(user) {
    return 'Привет, ' + user;
}
console.log(greet(name));</code></pre>
            <h4>Работа с DOM</h4>
            <p>DOM (Document Object Model) — представление HTML-страницы в виде дерева объектов.</p>
            <pre><code>let heading = document.querySelector('h1');
heading.textContent = 'Новый заголовок';</code></pre>
            <h4>События</h4>
            <pre><code>let button = document.getElementById('myBtn');
button.addEventListener('click', () => {
    alert('Кнопка нажата!');
});</code></pre>
        `
    },
    {
        id: 11,
        title: "HTML и CSS (базовый)",
        topic: "programming",
        level: "beginner",
        description: "Структура веб-страниц и базовые стили.",
        icon: "fa-html5",
        content: `
            <h3>HTML</h3>
            <p>HTML (HyperText Markup Language) — язык разметки. Каждый элемент обозначается тегами.</p>
            <pre><code>&lt;h1&gt;Заголовок&lt;/h1&gt;
&lt;p&gt;Абзац текста&lt;/p&gt;
&lt;a href="https://example.com"&gt;Ссылка&lt;/a&gt;</code></pre>
            <h3>CSS</h3>
            <p>CSS (Cascading Style Sheets) задаёт внешний вид элементов.</p>
            <pre><code>h1 {
    color: blue;
    font-size: 24px;
}
p {
    line-height: 1.5;
}</code></pre>
            <h4>Селекторы</h4>
            <ul>
                <li><code>element</code> — по тегу</li>
                <li><code>.class</code> — по классу</li>
                <li><code>#id</code> — по идентификатору</li>
            </ul>
        `
    },
    {
        id: 12,
        title: "Продвинутый JavaScript",
        topic: "programming",
        level: "advanced",
        description: "Замыкания, Promise, async/await.",
        icon: "fa-js-square",
        content: `
            <h3>Асинхронность в JavaScript</h3>
            <p>Асинхронные операции позволяют не блокировать интерфейс. Пример: запрос к серверу.</p>
            <h4>Колбэки (прошлое)</h4>
            <pre><code>setTimeout(() => console.log('Прошла секунда'), 1000);</code></pre>
            <h4>Промисы (Promise)</h4>
            <pre><code>fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));</code></pre>
            <h4>async/await</h4>
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
        id: 13,
        title: "Основы SQL и баз данных",
        topic: "programming",
        level: "intermediate",
        description: "SELECT, INSERT, JOIN и проектирование БД.",
        icon: "fa-database",
        content: `
            <h3>Реляционные базы данных и SQL</h3>
            <p>SQL (Structured Query Language) — язык запросов к реляционным БД (MySQL, PostgreSQL, SQLite).</p>
            <h4>Таблица и первые запросы</h4>
            <pre><code>-- Создание таблицы
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER
);

-- Вставка данных
INSERT INTO users (name, age) VALUES ('Анна', 25);

-- Выборка
SELECT * FROM users WHERE age > 18;</code></pre>
            <h4>Соединение таблиц (JOIN)</h4>
            <pre><code>SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id;</code></pre>
        `
    },
    {
        id: 14,
        title: "Алгоритмы и структуры данных",
        topic: "programming",
        level: "advanced",
        description: "Сортировки, поиск, связные списки, деревья.",
        icon: "fa-project-diagram",
        content: `
            <h3>Алгоритмы</h3>
            <p>Алгоритм — последовательность шагов для решения задачи. Важна эффективность (сложность O-большое).</p>
            <h4>Бинарный поиск (O(log n))</h4>
            <pre><code>def binary_search(arr, target):
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1</code></pre>
            <h4>Быстрая сортировка (O(n log n))</h4>
            <pre><code>def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)</code></pre>
        `
    },
    {
        id: 15,
        title: "Основы машинного обучения",
        topic: "programming",
        level: "advanced",
        description: "Введение в ML, линейная регрессия, scikit-learn.",
        icon: "fa-brain",
        content: `
            <h3>Машинное обучение (Machine Learning)</h3>
            <p>ML — раздел ИИ, в котором модели обучаются на данных, выявляя закономерности без явного программирования.</p>
            <h4>Типы задач:</h4>
            <ul>
                <li><strong>Обучение с учителем</strong> — есть размеченные данные (регрессия, классификация).</li>
                <li><strong>Без учителя</strong> — кластеризация, поиск аномалий.</li>
            </ul>
            <h4>Пример линейной регрессии (scikit-learn)</h4>
            <pre><code>from sklearn.linear_model import LinearRegression
import numpy as np

# Данные: площадь -> цена
X = np.array([[30], [50], [70], [100]])
y = np.array([150, 250, 350, 480])

model = LinearRegression()
model.fit(X, y)
prediction = model.predict([[80]])
print(prediction)  # ≈ 390</code></pre>
        `
    },    // ========== МАТЕМАТИКА (16-25) ==========
    {
        id: 16,
        title: "Алгебра для начинающих",
        topic: "math",
        level: "beginner",
        description: "Уравнения, неравенства, функции и графики.",
        icon: "fa-square-root-alt",
        content: `
            <h3>Основы алгебры</h3>
            <p>Алгебра — раздел математики, изучающий операции и отношения. Основные объекты: числа, переменные, выражения, уравнения.</p>
            <h4>Линейное уравнение</h4>
            <p>Вид: <code>ax + b = 0</code>. Решение: <code>x = -b/a</code>.</p>
            <pre><code>2x + 3 = 7
2x = 7 - 3
2x = 4
x = 2</code></pre>
            <h4>Квадратное уравнение</h4>
            <p>Вид: <code>ax² + bx + c = 0</code>. Дискриминант: <code>D = b² - 4ac</code>.</p>
            <p>Корни: <code>x = (-b ± √D) / 2a</code>.</p>
            <pre><code>x² - 5x + 6 = 0
D = 25 - 24 = 1
x = (5 ± 1)/2 → x₁=3, x₂=2</code></pre>
        `
    },
    {
        id: 17,
        title: "Геометрия: площадь и объём",
        topic: "math",
        level: "beginner",
        description: "Основные фигуры и формулы площадей/объёмов.",
        icon: "fa-draw-polygon",
        content: `
            <h3>Планиметрия и стереометрия</h3>
            <h4>Площади плоских фигур</h4>
            <ul>
                <li>Прямоугольник: <code>S = a × b</code></li>
                <li>Круг: <code>S = πr²</code></li>
                <li>Треугольник: <code>S = ½×основание×высота</code></li>
            </ul>
            <h4>Объёмы тел</h4>
            <ul>
                <li>Куб: <code>V = a³</code></li>
                <li>Шар: <code>V = 4/3πr³</code></li>
                <li>Цилиндр: <code>V = πr²h</code></li>
            </ul>
            <p>Эти формулы применяются в строительстве, упаковке, физике.</p>
        `
    },
    {
        id: 18,
        title: "Тригонометрия",
        topic: "math",
        level: "intermediate",
        description: "Синус, косинус, тангенс и единичная окружность.",
        icon: "fa-chart-line",
        content: `
            <h3>Тригонометрические функции</h3>
            <p>В прямоугольном треугольнике:</p>
            <ul>
                <li><code>sin(α) = противолежащий / гипотенуза</code></li>
                <li><code>cos(α) = прилежащий / гипотенуза</code></li>
                <li><code>tan(α) = противолежащий / прилежащий</code></li>
            </ul>
            <h4>Основное тождество</h4>
            <p><code>sin²α + cos²α = 1</code></p>
            <h4>Формулы двойного угла</h4>
            <ul><li><code>sin(2α) = 2sinα·cosα</code></li></ul>
            <p>Тригонометрия широко используется в физике (колебания, волны) и компьютерной графике.</p>
        `
    },
    {
        id: 19,
        title: "Логарифмы и степени",
        topic: "math",
        level: "intermediate",
        description: "Свойства логарифмов, показательные уравнения.",
        icon: "fa-superscript",
        content: `
            <h3>Логарифмы</h3>
            <p>Логарифм числа b по основанию a — это степень, в которую нужно возвести a, чтобы получить b: <code>log_a(b) = c ⇔ a^c = b</code>.</p>
            <h4>Свойства</h4>
            <ul>
                <li><code>log_a(xy) = log_a(x) + log_a(y)</code></li>
                <li><code>log_a(x/y) = log_a(x) - log_a(y)</code></li>
                <li><code>log_a(x^n) = n·log_a(x)</code></li>
            </ul>
            <h4>Натуральный логарифм</h4>
            <p>Основание e ≈ 2.718. Обозначается <code>ln(x)</code>.</p>
        `
    },
    {
        id: 20,
        title: "Вероятность и статистика",
        topic: "math",
        level: "intermediate",
        description: "Случайные события, средние, дисперсия.",
        icon: "fa-dice",
        content: `
            <h3>Теория вероятностей</h3>
            <p>Вероятность события A: <code>P(A) = благоприятные исходы / все возможные исходы</code>.</p>
            <h4>Пример</h4>
            <p>Бросок кубика: вероятность выпадения 6 = 1/6.</p>
            <h4>Статистические характеристики</h4>
            <ul>
                <li>Среднее (математическое ожидание): сумма значений / количество.</li>
                <li>Медиана: значение, разделяющее выборку пополам.</li>
                <li>Дисперсия: мера разброса.</li>
            </ul>
        `
    },
    {
        id: 21,
        title: "Матрицы и линейная алгебра",
        topic: "math",
        level: "advanced",
        description: "Операции с матрицами, определители, собственные значения.",
        icon: "fa-border-all",
        content: `
            <h3>Матрицы</h3>
            <p>Матрица — прямоугольная таблица чисел. Размер m×n (строки × столбцы).</p>
            <h4>Умножение матриц</h4>
            <p>Произведение A (m×n) и B (n×p) даёт матрицу C (m×p). Элемент C[i][j] = сумма A[i][k]*B[k][j].</p>
            <pre><code>A = [[1,2],[3,4]]; B = [[5,6],[7,8]]
C = [[1*5+2*7, 1*6+2*8], [3*5+4*7, 3*6+4*8]] = [[19,22],[43,50]]</code></pre>
            <h4>Определитель</h4>
            <p>Для 2×2: <code>det([[a,b],[c,d]]) = ad - bc</code>.</p>
        `
    },
    {
        id: 22,
        title: "Дифференциальное исчисление",
        topic: "math",
        level: "advanced",
        description: "Производные, правила дифференцирования.",
        icon: "fa-chart-area",
        content: `
            <h3>Производная</h3>
            <p>Производная функции f(x) в точке — скорость изменения функции. Обозначается f'(x).</p>
            <h4>Основные правила</h4>
            <ul>
                <li>(c)' = 0</li>
                <li>(xⁿ)' = n·xⁿ⁻¹</li>
                <li>(f+g)' = f' + g'</li>
                <li>(f·g)' = f'·g + f·g'</li>
            </ul>
            <pre><code>f(x) = 3x² + 2x
f'(x) = 6x + 2</code></pre>
            <p>Физический смысл: скорость — производная координаты.</p>
        `
    },
    {
        id: 23,
        title: "Интегралы",
        topic: "math",
        level: "advanced",
        description: "Неопределённый и определённый интеграл, площадь под кривой.",
        icon: "fa-integral",
        content: `
            <h3>Интегрирование</h3>
            <p>Неопределённый интеграл — обратная операция к дифференцированию. ∫f(x)dx = F(x) + C.</p>
            <h4>Основные формулы</h4>
            <ul>
                <li>∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n≠-1)</li>
                <li>∫1/x dx = ln|x| + C</li>
            </ul>
            <p>Определённый интеграл ∫ₐᵇ f(x)dx равен площади под графиком f(x) от a до b.</p>
            <pre><code>∫₀² x dx = [x²/2]₀² = 2</code></pre>
        `
    },
    {
        id: 24,
        title: "Комбинаторика",
        topic: "math",
        level: "intermediate",
        description: "Перестановки, сочетания, размещения.",
        icon: "fa-random",
        content: `
            <h3>Комбинаторика</h3>
            <p>Раздел математики, изучающий способы выбора и расположения объектов.</p>
            <ul>
                <li>Перестановки n элементов: n!</li>
                <li>Размещения из n по k: n!/(n-k)!</li>
                <li>Сочетания: C(n,k) = n!/(k!(n-k)!)</li>
            </ul>
            <h4>Пример</h4>
            <p>Сколькими способами можно выбрать 2 фрукта из 4? C(4,2)=6.</p>
        `
    },
    {
        id: 25,
        title: "Теория чисел",
        topic: "math",
        level: "advanced",
        description: "Простые числа, алгоритм Евклида, сравнения.",
        icon: "fa-calculator",
        content: `
            <h3>Теория чисел</h3>
            <p>Изучает свойства целых чисел.</p>
            <h4>Алгоритм Евклида (НОД)</h4>
            <pre><code>def gcd(a, b):
    while b:
        a, b = b, a % b
    return a</code></pre>
            <p>Взаимно простые числа — НОД = 1.</p>
            <h4>Сравнения по модулю</h4>
            <p>a ≡ b (mod m), если a-b кратно m. Часы — пример арифметики по модулю 12.</p>
        `
    },    // ========== НАУКА (26-35) ==========
    {
        id: 26,
        title: "Основы физики",
        topic: "science",
        level: "beginner",
        description: "Законы Ньютона, энергия, движение.",
        icon: "fa-atom",
        content: `
            <h3>Классическая механика</h3>
            <p>Физика изучает законы природы. Механика описывает движение тел и силы, вызывающие его.</p>
            <h4>Законы Ньютона</h4>
            <ol>
                <li><strong>Инерция:</strong> тело сохраняет скорость, если на него не действуют силы.</li>
                <li><strong>F = ma</strong> — ускорение пропорционально силе и обратно пропорционально массе.</li>
                <li><strong>Действие = противодействие:</strong> силы двух тел друг на друга равны по модулю и противоположны по направлению.</li>
            </ol>
            <h4>Энергия</h4>
            <p>Кинетическая: E = ½mv². Потенциальная: E = mgh (вблизи земли).</p>
            <p>Закон сохранения энергии: в замкнутой системе сумма кинетической и потенциальной энергии постоянна.</p>
        `
    },
    {
        id: 27,
        title: "Химия элементов",
        topic: "science",
        level: "beginner",
        description: "Периодическая таблица, атомы, молекулы.",
        icon: "fa-flask",
        content: `
            <h3>Строение атома</h3>
            <p>Атом состоит из ядра (протоны + нейтроны) и электронных оболочек. Протоны определяют химический элемент.</p>
            <h4>Периодическая система Менделеева</h4>
            <p>Элементы упорядочены по возрастанию заряда ядра. Группы (вертикали) объединяют элементы со сходными свойствами.</p>
            <ul>
                <li><strong>Металлы</strong> — отдают электроны, проводят ток.</li>
                <li><strong>Неметаллы</strong> — принимают электроны, изоляторы.</li>
            </ul>
            <h4>Химическая связь</h4>
            <p>Ковалентная (общая пара электронов), ионная (притяжение противоположных ионов), металлическая.</p>
        `
    },
    {
        id: 28,
        title: "Биология клетки",
        topic: "science",
        level: "intermediate",
        description: "Строение и функции клеток, органеллы.",
        icon: "fa-microscope",
        content: `
            <h3>Клеточная теория</h3>
            <p>Все живые организмы состоят из клеток. Клетка — элементарная единица жизни.</p>
            <h4>Основные органеллы</h4>
            <ul>
                <li><strong>Ядро</strong> — хранит ДНК, управляет клеткой.</li>
                <li><strong>Митохондрии</strong> — производят энергию (АТФ).</li>
                <li><strong>Рибосомы</strong> — синтез белка.</li>
                <li><strong>ЭПС</strong> — транспорт веществ.</li>
                <li><strong>Аппарат Гольджи</strong> — упаковка и сортировка белков.</li>
            </ul>
            <h4>Деление клетки</h4>
            <p>Митоз — деление соматических клеток (2n → 2n). Мейоз — образование половых клеток (2n → n).</p>
        `
    },
    {
        id: 29,
        title: "Генетика",
        topic: "science",
        level: "advanced",
        description: "Законы Менделя, ДНК, мутации.",
        icon: "fa-dna",
        content: `
            <h3>Основы генетики</h3>
            <p>Ген — участок ДНК, кодирующий определённый белок. Аллели — различные формы одного гена.</p>
            <h4>Законы Менделя</h4>
            <ol>
                <li>Единообразие гибридов первого поколения (все F1 одинаковы).</li>
                <li>Расщепление признаков во втором поколении (3:1 при моногибридном скрещивании).</li>
            </ol>
            <h4>ДНК</h4>
            <p>Двойная спираль, состоящая из нуклеотидов (A,T,G,C). Репликация — удвоение перед делением.</p>
            <p>Мутации — изменения последовательности ДНК, могут быть полезными, нейтральными или вредными.</p>
        `
    },
    {
        id: 30,
        title: "Экология",
        topic: "science",
        level: "intermediate",
        description: "Экосистемы, цепи питания, биосфера.",
        icon: "fa-leaf",
        content: `
            <h3>Экология</h3>
            <p>Наука о взаимодействии организмов между собой и с окружающей средой.</p>
            <h4>Экосистема</h4>
            <p>Совокупность живых организмов (биоценоз) и среды их обитания (биотоп).</p>
            <h4>Пищевые цепи</h4>
            <p>Продуценты (растения) → консументы (травоядные, хищники) → редуценты (бактерии, грибы).</p>
            <h4>Биосфера</h4>
            <p>Оболочка Земли, заселённая живыми организмами. Учение Вернадского.</p>
            <p>Антропогенное воздействие: загрязнение, вырубка лесов, изменение климата.</p>
        `
    },
    {
        id: 31,
        title: "Астрономия",
        topic: "science",
        level: "intermediate",
        description: "Планеты, звёзды, галактики, Вселенная.",
        icon: "fa-globe",
        content: `
            <h3>Астрономия</h3>
            <p>Наука о небесных телах. Изучает планеты, звёзды, галактики и эволюцию Вселенной.</p>
            <h4>Солнечная система</h4>
            <p>Состоит из Солнца и 8 планет. Делятся на земную группу (Меркурий, Венера, Земля, Марс) и газовые гиганты (Юпитер, Сатурн, Уран, Нептун).</p>
            <h4>Звёзды</h4>
            <p>Светящиеся газовые шары, источник энергии — термоядерный синтез. Жизненный цикл зависит от массы.</p>
            <h4>Галактики</h4>
            <p>Млечный Путь — спиральная галактика, содержащая около 200 млрд звёзд.</p>
        `
    },
    {
        id: 32,
        title: "Квантовая физика",
        topic: "science",
        level: "advanced",
        description: "Кванты, волновая функция, принцип неопределённости.",
        icon: "fa-atom",
        content: `
            <h3>Квантовая механика</h3>
            <p>Описывает поведение микрочастиц. Основана на идее дискретности (квантования) физических величин.</p>
            <h4>Основные принципы</h4>
            <ul>
                <li><strong>Корпускулярно-волновой дуализм</strong> — частицы проявляют свойства волн и наоборот.</li>
                <li><strong>Принцип неопределённости Гейзенберга</strong> — невозможно одновременно точно измерить координату и импульс: Δx·Δp ≥ ℏ/2.</li>
                <li><strong>Волновая функция Ψ</strong> — описывает состояние частицы, определяет вероятности.</li>
            </ul>
            <h4>Уравнение Шрёдингера</h4>
            <p>iℏ ∂Ψ/∂t = ĤΨ — основное уравнение нерелятивистской квантовой механики.</p>
        `
    },
    {
        id: 33,
        title: "Органическая химия",
        topic: "science",
        level: "advanced",
        description: "Углеводороды, функциональные группы, реакции.",
        icon: "fa-vial",
        content: `
            <h3>Органическая химия</h3>
            <p>Изучает соединения углерода. Углерод способен образовывать цепи и циклы, создавая миллионы веществ.</p>
            <h4>Углеводороды</h4>
            <ul>
                <li><strong>Алканы</strong> (C-C одинарные связи) — метан CH₄.</li>
                <li><strong>Алкены</strong> (C=C) — этилен C₂H₄.</li>
                <li><strong>Алкины</strong> (C≡C) — ацетилен C₂H₂.</li>
                <li><strong>Арены</strong> (ароматические) — бензол C₆H₆.</li>
            </ul>
            <h4>Функциональные группы</h4>
            <p>ОН — спирты, COOH — карбоновые кислоты, NH₂ — амины. Они определяют химические свойства.</p>
        `
    },
    {
        id: 34,
        title: "Анатомия человека",
        topic: "science",
        level: "intermediate",
        description: "Системы органов, их строение и функции.",
        icon: "fa-user-md",
        content: `
            <h3>Анатомия человека</h3>
            <p>Организм человека состоит из систем органов, каждая выполняет определённую функцию.</p>
            <h4>Основные системы</h4>
            <ul>
                <li><strong>Нервная</strong> — головной и спинной мозг, нервы. Регуляция и реакция на раздражители.</li>
                <li><strong>Сердечно-сосудистая</strong> — сердце и сосуды. Транспорт крови, кислорода, питательных веществ.</li>
                <li><strong>Дыхательная</strong> — лёгкие, бронхи. Газообмен O₂ и CO₂.</li>
                <li><strong>Пищеварительная</strong> — желудок, кишечник. Переваривание пищи и всасывание.</li>
                <li><strong>Опорно-двигательная</strong> — кости и мышцы. Движение и защита внутренних органов.</li>
            </ul>
        `
    },
    {
        id: 35,
        title: "Эволюция и естественный отбор",
        topic: "science",
        level: "advanced",
        description: "Теория Дарвина, видообразование, доказательства эволюции.",
        icon: "fa-tree",
        content: `
            <h3>Эволюционная биология</h3>
            <p>Эволюция — процесс изменения наследственных признаков в популяциях на протяжении поколений.</p>
            <h4>Теория естественного отбора</h4>
            <p>Особи с полезными в данных условиях признаками имеют больше шансов выжить и оставить потомство.</p>
            <h4>Видообразование</h4>
            <p>Новые виды возникают при изоляции популяций (географической, экологической).</p>
            <h4>Доказательства эволюции</h4>
            <ul><li>Палеонтологические (ископаемые переходные формы)</li><li>Сравнительно-анатомические (гомологичные органы)</li><li>Молекулярно-генетические (сходство ДНК)</li></ul>
        `
    },    // ========== ЯЗЫКИ (36-40) ==========
    {
        id: 36,
        title: "Английский для IT",
        topic: "language",
        level: "beginner",
        description: "Техническая лексика, фразы для общения в IT-командах.",
        icon: "fa-language",
        content: `
            <h3>English for IT</h3>
            <p>Знание английского критично для программиста: документация, статьи, общение в open-source проектах.</p>
            <h4>Основные термины</h4>
            <ul>
                <li><strong>API</strong> – Application Programming Interface</li>
                <li><strong>bug</strong> – ошибка в коде</li>
                <li><strong>debug</strong> – отладка (исправление багов)</li>
                <li><strong>framework</strong> – каркас для приложений (React, Django)</li>
                <li><strong>deployment</strong> – развёртывание приложения</li>
                <li><strong>commit</strong> – сохранение изменений в Git</li>
            </ul>
            <h4>Полезные фразы</h4>
            <ul>
                <li>Could you please clarify the requirements?</li>
                <li>I need to debug this issue.</li>
                <li>Let me check the documentation.</li>
                <li>The build failed due to a missing dependency.</li>
            </ul>
        `
    },
    {
        id: 37,
        title: "Английский: времена глаголов",
        topic: "language",
        level: "beginner",
        description: "Present Simple, Past Simple, Future Simple.",
        icon: "fa-language",
        content: `
            <h3>Времена в английском</h3>
            <p>Базовые времена для повседневного общения.</p>
            <h4>Present Simple (настоящее)</h4>
            <p>Действие происходит регулярно или является фактом.</p>
            <pre><code>I work every day.
She works at a hospital.</code></pre>
            <h4>Past Simple (прошедшее)</h4>
            <p>Завершённое действие в прошлом.</p>
            <pre><code>I worked yesterday.
They visited London last summer.</code></pre>
            <h4>Future Simple (будущее)</h4>
            <p>Действие произойдёт в будущем.</p>
            <pre><code>I will work tomorrow.
She will call you later.</code></pre>
        `
    },
    {
        id: 38,
        title: "Деловой английский",
        topic: "language",
        level: "intermediate",
        description: "Письма, переговоры, презентации.",
        icon: "fa-briefcase",
        content: `
            <h3>Business English</h3>
            <p>Формальный стиль для профессиональной переписки и встреч.</p>
            <h4>Структура делового письма</h4>
            <ul>
                <li>Subject (тема)</li>
                <li>Salutation (Dear Mr./Ms. …)</li>
                <li>Body (цель письма)</li>
                <li>Closing (Sincerely, Best regards)</li>
            </ul>
            <h4>Пример</h4>
            <pre><code>Dear Ms. Johnson,

I am writing to inquire about the project timeline.
Could you please provide an update?

Thank you for your time.
Sincerely,
Alex</code></pre>
        `
    },
    {
        id: 39,
        title: "Немецкий для начинающих",
        topic: "language",
        level: "beginner",
        description: "Первые слова и фразы, произношение.",
        icon: "fa-language",
        content: `
            <h3>Deutsch A1</h3>
            <p>Немецкий язык — официальный в Германии, Австрии, Швейцарии.</p>
            <h4>Приветствия</h4>
            <ul>
                <li>Hallo! — Привет!</li>
                <li>Guten Morgen — Доброе утро.</li>
                <li>Guten Tag — Добрый день.</li>
                <li>Auf Wiedersehen — До свидания.</li>
            </ul>
            <h4>Основные фразы</h4>
            <ul>
                <li>Wie geht's? — Как дела?</li>
                <li>Danke, gut. — Спасибо, хорошо.</li>
                <li>Ich heiße Anna. — Меня зовут Анна.</li>
                <li>Wie viel kostet das? — Сколько это стоит?</li>
            </ul>
        `
    },
    {
        id: 40,
        title: "Французский базовый",
        topic: "language",
        level: "beginner",
        description: "Приветствия, числительные, простые диалоги.",
        icon: "fa-language",
        content: `
            <h3>Français de base</h3>
            <p>Французский — язык международного общения, искусства и кулинарии.</p>
            <h4>Приветствия</h4>
            <ul>
                <li>Bonjour — Здравствуйте (днём).</li>
                <li>Bonsoir — Добрый вечер.</li>
                <li>Salut — Привет (неформально).</li>
            </ul>
            <h4>Числительные 1-10</h4>
            <p>un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.</p>
            <h4>Простые фразы</h4>
            <ul>
                <li>Comment ça va? — Как дела?</li>
                <li>Ça va bien, merci. — Хорошо, спасибо.</li>
                <li>Je m'appelle Marie. — Меня зовут Мари.</li>
            </ul>
        `
    }
];// ================== ТЕСТЫ ==================
const TESTS = [
    {
        id: 1,
        title: "Основы Python",
        topic: "programming",
        level: "beginner",
        description: "Переменные, типы данных, print",
        questions: [
            { text: "Как вывести текст на экран в Python?", answers: [
                { text: "console.log()", correct: false },
                { text: "print()", correct: true },
                { text: "echo()", correct: false },
                { text: "printf()", correct: false }
            ]},
            { text: "Что вернёт 5 // 2?", answers: [
                { text: "2.5", correct: false },
                { text: "2", correct: true },
                { text: "3", correct: false },
                { text: "Ошибка", correct: false }
            ]},
            { text: "Как создать список?", answers: [
                { text: "{}", correct: false },
                { text: "[]", correct: true },
                { text: "()", correct: false },
                { text: "<>", correct: false }
            ]},
            { text: "Тип данных True:", answers: [
                { text: "int", correct: false },
                { text: "str", correct: false },
                { text: "bool", correct: true },
                { text: "float", correct: false }
            ]}
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
            { text: "2x + 3 = 7, x = ?", answers: [
                { text: "1", correct: false },
                { text: "2", correct: true },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ]},
            { text: "3x - 6 = 0, x = ?", answers: [
                { text: "2", correct: true },
                { text: "6", correct: false },
                { text: "-2", correct: false },
                { text: "0", correct: false }
            ]}
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
            { text: "Формула второго закона Ньютона:", answers: [
                { text: "F = ma", correct: true },
                { text: "E = mc²", correct: false },
                { text: "F = mv", correct: false },
                { text: "F = kx", correct: false }
            ]},
            { text: "Сила тяжести действует:", answers: [
                { text: "Всегда вниз", correct: true },
                { text: "В сторону движения", correct: false },
                { text: "Только на движущиеся тела", correct: false },
                { text: "Не действует в вакууме", correct: false }
            ]}
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
            { text: "She ___ to school every day.", answers: [
                { text: "go", correct: false },
                { text: "goes", correct: true },
                { text: "went", correct: false },
                { text: "going", correct: false }
            ]},
            { text: "They ___ football yesterday.", answers: [
                { text: "play", correct: false },
                { text: "played", correct: true },
                { text: "plays", correct: false },
                { text: "playing", correct: false }
            ]},
            { text: "I ___ visit my grandparents next week.", answers: [
                { text: "am", correct: false },
                { text: "will", correct: true },
                { text: "did", correct: false },
                { text: "do", correct: false }
            ]}
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
            { text: "Замыкание — это:", answers: [
                { text: "Функция внутри функции с доступом к её переменным", correct: true },
                { text: "Ошибка в коде", correct: false },
                { text: "Способ скрыть код", correct: false },
                { text: "Анонимная функция", correct: false }
            ]},
            { text: "typeof null возвращает:", answers: [
                { text: "'null'", correct: false },
                { text: "'object'", correct: true },
                { text: "'undefined'", correct: false },
                { text: "'boolean'", correct: false }
            ]}
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
            { text: "Результат умножения матриц 2x2 на 2x2 имеет размер:", answers: [
                { text: "2x2", correct: true },
                { text: "2x1", correct: false },
                { text: "1x2", correct: false },
                { text: "4x4", correct: false }
            ]},
            { text: "Определитель [[2,0],[0,3]] равен:", answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "0", correct: false },
                { text: "1", correct: false }
            ]}
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
            { text: "Митохондрии отвечают за:", answers: [
                { text: "Синтез белка", correct: false },
                { text: "Энергию", correct: true },
                { text: "Хранение ДНК", correct: false },
                { text: "Защиту", correct: false }
            ]},
            { text: "Ядро клетки содержит:", answers: [
                { text: "Рибосомы", correct: false },
                { text: "Генетический материал", correct: true },
                { text: "Митохондрии", correct: false },
                { text: "Цитоплазму", correct: false }
            ]}
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
            { text: "Команда для выборки данных:", answers: [
                { text: "INSERT", correct: false },
                { text: "SELECT", correct: true },
                { text: "UPDATE", correct: false },
                { text: "DELETE", correct: false }
            ]},
            { text: "Для фильтрации строк используется:", answers: [
                { text: "ORDER BY", correct: false },
                { text: "GROUP BY", correct: false },
                { text: "WHERE", correct: true },
                { text: "HAVING", correct: false }
            ]},
            { text: "JOIN нужен для:", answers: [
                { text: "Объединения таблиц", correct: true },
                { text: "Удаления дубликатов", correct: false },
                { text: "Сортировки", correct: false },
                { text: "Создания таблицы", correct: false }
            ]}
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
        card.innerHTML = `
            <div class="material-header"><i class="fas ${material.icon} material-icon"></i><h3 class="material-title">${material.title}</h3></div>
            <p class="material-description">${material.description}</p>
            <div class="material-meta">
                <span class="material-topic">${getTopicName(material.topic)}</span>
                <span class="material-level ${material.level}">${getLevelName(material.level)}</span>
            </div>
            <button class="study-btn ${studied ? 'studied' : ''}" data-id="${material.id}">
                <i class="fas ${studied ? 'fa-check' : 'fa-book'}"></i> ${studied ? 'Изучено' : 'Изучить'}
            </button>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.study-btn').forEach(btn => {
        btn.addEventListener('click', () => showMaterialModal(parseInt(btn.dataset.id)));
    });
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
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-question-circle"></i><p>Тесты не найдены</p></div>';
        return;
    }
    filtered.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <div class="test-title"><i class="fab ${test.icon} test-icon"></i><span>${test.title}</span></div>
            <p class="test-description">${test.description}</p>
            <div class="test-meta">
                <span class="test-difficulty ${test.level}">${getLevelName(test.level)}</span>
                <span class="test-questions">${test.questions.length} вопросов</span>
            </div>
            <button class="start-test-btn" data-id="${test.id}"><i class="fas fa-play"></i> Начать тест</button>
        `;
        container.appendChild(card);
    });
    document.querySelectorAll('.start-test-btn').forEach(btn => {
        btn.addEventListener('click', () => startTest(parseInt(btn.dataset.id)));
    });
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
    let currentIndex = 0;
    let score = 0;

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
        nextBtn.innerHTML = currentIndex === questions.length - 1
            ? '<i class="fas fa-check"></i> Завершить тест'
            : 'Следующий вопрос <i class="fas fa-arrow-right"></i>';
    }

    function selectAnswer(btn, idx) {
        document.querySelectorAll('.answer-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        nextBtn.disabled = false;
    }

    function handleNext() {
        const selected = document.querySelector('.answer-option.selected');
        if (selected) {
            const idx = parseInt(selected.dataset.index);
            if (questions[currentIndex].answers[idx].correct) score++;
        }
        currentIndex++;
        if (currentIndex < questions.length) {
            displayQuestion();
        } else {
            finishTest(score, questions.length);
        }
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
        const response = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });
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
        data: {
            labels: generateWeekLabels(),
            datasets: [{
                label: 'Прогресс',
                data: generateProgressData(),
                borderColor: '#3498db',
                backgroundColor: 'rgba(52,152,219,0.1)',
                tension: 0.3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });
}

function generateWeekLabels() {
    const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    const today = new Date();
    return Array.from({length:7}, (_,i) => {
        const d = new Date(today);
        d.setDate(today.getDate() - 6 + i);
        return `${days[d.getDay()]} ${d.getDate()}`;
    });
}

function generateProgressData() {
    const base = state.progress || 10;
    return [base-15, base-10, base-5, base, base+5, base+15, base+25].map(v => Math.min(100, Math.max(0, v)));
}

function updateChart() {
    if (progressChart) {
        progressChart.data.datasets[0].data = generateProgressData();
        progressChart.update();
    }
}

// ================== ВСПОМОГАТЕЛЬНЫЕ ==================
function getTopicName(topic) {
    const names = { math: 'Математика', programming: 'Программирование', science: 'Наука', language: 'Языки' };
    return names[topic] || topic;
}

function getLevelName(level) {
    const names = { beginner: 'Новичок', intermediate: 'Средний', advanced: 'Продвинутый' };
    return names[level] || level;
}
