document.addEventListener('DOMContentLoaded', () => {
  const readMoreBtn = document.querySelector('.read_more');
  const aboutText = document.querySelector('.about_text');

  if (!readMoreBtn || !aboutText) return; // защита

  const shortText = aboutText.innerHTML.trim();
  const fullTextContent = `Eveniet similique laborum quia atque beatae expedita quae quaerat ex veniam corporis ea, aliquam explicabo. Itaque deserunt omnis, aspernatur quae nihil nemo.`;

  aboutText.innerHTML = `
    <span class="short-text">${shortText}</span>
    <span class="full-text">${fullTextContent}</span>
  `;

  let isExpanded = false;

  const toggleRead = (e) => {
    e.preventDefault(); // предотвращаем стандартное поведение
    aboutText.classList.toggle('expanded');
    isExpanded = !isExpanded;
    readMoreBtn.textContent = isExpanded ? 'Read Less' : 'Read More';
  };

  // Используем только touchstart для мобильных или click для десктопа
  if ('ontouchstart' in window) {
    readMoreBtn.addEventListener('touchstart', toggleRead, { passive: false });
  } else {
    readMoreBtn.addEventListener('click', toggleRead);
  }
});

// ABOUT.JS — ONLY THIS (Read More + Scroll Scrubbing — ZERO FREEZES)

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  const container = document.querySelector('.about-container');
  const readMoreBtn = document.querySelector('.read_more');
  const aboutText = document.querySelector('.about_text');

  // READ MORE
  if (readMoreBtn && aboutText) {
    const short = aboutText.innerHTML.trim();
    const more = `Eveniet similique laborum quia atque beatae expedita quae quaerat ex veniam corporis ea, aliquam explicabo. Itaque deserunt omnis, aspernatur quae nihil nemo.`;

    aboutText.innerHTML = `<span class="short">${short}</span><span class="long">${more}</span>`;
    readMoreBtn.onclick = () => {
      aboutText.classList.toggle('expanded');
      readMoreBtn.textContent = aboutText.classList.contains('expanded') ? 'Read Less' : 'Read More';
    };
  }

  // SCROLL-TO-VIDEO SCRUBBING (NO FREEZE EVER)
  if (!video || !container) return;

  let ticking = false;
  const update = () => {
    const rect = container.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1,
      (-rect.top + innerHeight * 0.5) / (container.offsetHeight - innerHeight)
    ));
    video.currentTime = progress * video.duration;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });

  update(); // first frame
});

 document.addEventListener('DOMContentLoaded', function () {
      const button = document.querySelector('.read_more');
      const hiddenText = document.querySelector('.hidden-text');

      button.addEventListener('click', function () {
        if (hiddenText.classList.contains('show')) {
          // Close
          hiddenText.classList.remove('show');
          button.textContent = 'Read More';
        } else {
          // Open
          hiddenText.classList.add('show');
          button.textContent = 'Read Less';
        }
      });
    });

  
  window.addEventListener('scroll', () => {
    document.querySelector('.split-header').classList.toggle('scrolled', window.scrollY > 50);
  });
