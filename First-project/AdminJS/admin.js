const buttons = document.querySelectorAll('aside nav button');
const sections = document.querySelectorAll('main section');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

// Section switching
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset states
    buttons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    });
    sections.forEach(s => {
      s.classList.remove('active');
      s.setAttribute('hidden', 'true');
    });

    // Activate clicked section
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    const sectionId = btn.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    section.removeAttribute('hidden');

    // Close sidebar on mobile after click
    if (window.innerWidth <= 900) {
      sidebar.classList.remove('open');
      toggleSidebar.setAttribute('aria-expanded', 'false');
    }
  });
});

// Sidebar toggle (for mobile)
toggleSidebar.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  toggleSidebar.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Default first section active
buttons[0].classList.add('active');
buttons[0].setAttribute('aria-expanded', 'true');
sections[0].classList.add('active');
sections[0].removeAttribute('hidden');
