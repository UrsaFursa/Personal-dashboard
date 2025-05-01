const SELECTORS = {
  section: '[data-section]',
  scrollTo: '[data-scroll-to]',
  scrollDir: '[data-scroll-dir]' };

const sectionsArray = Array.from(document.querySelectorAll(SELECTORS.section));
const scrollToElements = document.querySelectorAll(SELECTORS.scrollTo);
const scrollDirElements = document.querySelectorAll(SELECTORS.scrollDir);

let currentSectionIndex = 0;

const getScrollTarget = dir => {
  if (dir === 'prev' && currentSectionIndex > 0) {
    currentSectionIndex--;
    return sectionsArray[currentSectionIndex];
  }
  if (dir === 'next' && currentSectionIndex < sectionsArray.length - 1) {
    currentSectionIndex++;
    return sectionsArray[currentSectionIndex];
  }
  return false;
};

scrollDirElements.forEach(el => {
  el.addEventListener('click', () => {
    const direction = el.dataset.scrollDir;
    const target = getScrollTarget(direction);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

scrollToElements.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const targetId = el.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      sectionsArray.forEach((section, index) => {
        if (section.id === targetId.replace('#', '')) {
          currentSectionIndex = index;
        }
      });
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
//cock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "";

    // Tentukan session berdasarkan jam
    if (h >= 12 && h <= 14) {
        session = "Siang";
    } else if (h >= 15 && h <= 18) {
        session = "Sore";
    } else if (h >= 19 && h <= 23) {
        session = "Malam";
    } else {
        session = "Pagi";
    }

    // Format jam dan menit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

//arrow nav button
  const buttons = document.querySelectorAll(".btn--next");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentContainer = btn.parentElement;
      const currentBox = currentContainer.querySelector(".shortcut-box");
      const currentArrow = btn.querySelector(".arrow");
      const isOpen = currentBox.classList.contains("show");
      document.querySelectorAll(".shortcut-box").forEach(box => box.classList.remove("show"));
      document.querySelectorAll(".arrow").forEach(arrow => arrow.classList.remove("down"));
      if (!isOpen) {
        currentBox.classList.add("show");
        currentArrow.classList.add("down");
      }
    });
  });