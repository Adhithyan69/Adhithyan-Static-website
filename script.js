
document.querySelectorAll('.skill').forEach(skill => {
  const percent = skill.getAttribute('data-percent');
  const fill = skill.querySelector('.skill-fill');
  fill.style.setProperty('--skill-level', percent + '%');
});


document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
  
});
