
function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('d-none'));
    document.getElementById(id).classList.remove('d-none');

    document.querySelectorAll('audio').forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    const audio = document.getElementById('audio-' + id);
    if (audio) {
        audio.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function togglePlay(audioId, button) {
    const audio = document.getElementById(audioId);
    if (!audio) return;

    if (audio.paused) {
        audio.play();
        button.textContent = "⏸️ Pausar";
    } else {
        audio.pause();
        button.textContent = "▶️ Tocar";
    }
}

function toggleMute(audioId, button) {
    const audio = document.getElementById(audioId);
    if (!audio) return;

    audio.muted = !audio.muted;
    button.textContent = audio.muted ? "🔇 Sem Som" : "🔊 Som";
}

document.getElementById('polaroidPhoto').addEventListener('click', function () {
    this.classList.add('revealed');
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';

    const container = document.querySelector('.floating-hearts-container');
    if (!container) return;

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100%';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }
