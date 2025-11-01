// Хранение прогресса в localStorage
let progress = JSON.parse(localStorage.getItem('progress')) || {
  subjectsCount: 0,
  xp: 0
};

const countEl = document.getElementById('subjectsCount');
const xpEl = document.getElementById('xpPoints');

function updateUI() {
  countEl.textContent = progress.subjectsCount;
  xpEl.textContent = progress.xp;
}
updateUI();

// Открытие урока
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('study-btn')) {
    const subject = e.target.getAttribute('data-subject');
    openLesson(subject);
    addProgress();
  }
});

function openLesson(subject) {
  const modal = document.getElementById('lessonModal');
  const content = document.getElementById('lessonContent');

  fetch(`lessons/${subject}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
      modal.classList.add('show');
      modal.classList.remove('hidden');
    })
    .catch(() => {
      content.innerHTML = "<p>Материал пока недоступен.</p>";
      modal.classList.add('show');
      modal.classList.remove('hidden');
    });
}

// Закрытие окна
document.querySelector('.close-btn').onclick = () => {
  document.getElementById('lessonModal').classList.remove('show');
  document.getElementById('lessonModal').classList.add('hidden');
};

function addProgress() {
  progress.subjectsCount += 1;
  progress.xp += 50;
  localStorage.setItem('progress', JSON.stringify(progress));
  updateUI();
}
