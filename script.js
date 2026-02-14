document.addEventListener("DOMContentLoaded", () => {
  // ===== Holiday Popup =====
  const holidayDays = document.querySelectorAll('.day.holiday');
  const holidayPopup = document.getElementById('holiday-popup');
  const holidayTitle = document.getElementById('holiday-title');
  const holidayInfo = document.getElementById('holiday-info');
  const closeHoliday = document.getElementById('close-holiday');

  holidayDays.forEach(day => {
    day.addEventListener('click', () => {
      const holidayName = day.dataset.holiday;
      const info = day.dataset.info || ""; // optional extra info
      holidayTitle.textContent = holidayName;
      holidayInfo.textContent = info;
      holidayPopup.classList.remove('hidden');
    });
  });

  closeHoliday.addEventListener('click', () => {
    holidayPopup.classList.add('hidden');
  });

  holidayPopup.addEventListener('click', (e) => {
    if (e.target === holidayPopup) holidayPopup.classList.add('hidden');
  });

  // ===== Footer Popup =====
  const footerLinks = document.querySelectorAll('footer a[data-popup]');
  const footerPopup = document.getElementById('footer-popup');
  const footerTitle = document.getElementById('footer-title');
  const footerInfo = document.getElementById('footer-info');
  const closeFooter = document.getElementById('close-footer');

  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const content = link.dataset.popup;
      footerTitle.textContent = content;
      footerInfo.textContent = link.dataset.info || ""; // optional extra info
      footerPopup.classList.remove('hidden');
    });
  });

  closeFooter.addEventListener('click', () => {
    footerPopup.classList.add('hidden');
  });

  footerPopup.addEventListener('click', (e) => {
    if (e.target === footerPopup) footerPopup.classList.add('hidden');
  });
});


// ===== Theme Toggle =====
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
