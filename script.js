document.querySelectorAll('.learn-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Изучено ✅';
    btn.disabled = true;

    const xpFill = document.getElementById('xp-fill');
    const xpText = document.getElementById('xp-text');

    let currentXP = parseInt(xpText.textContent.split('/')[0]);
    currentXP += 100;
    if (currentXP > 1000) currentXP = 1000;

    xpText.textContent = `${currentXP}/1000 XP`;
    xpFill.style.width = `${currentXP / 10}%`;
  });
});
