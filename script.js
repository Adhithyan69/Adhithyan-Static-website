// Animate Skills
document.querySelectorAll('.skill').forEach(skill => {
  const percent = skill.getAttribute('data-percent');
  const fill = skill.querySelector('.skill-fill');
  fill.style.setProperty('--skill-level', percent + '%');
});

// Toggle mobile nav
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
  
});
