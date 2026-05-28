const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const icon = toggleBtn.querySelector("i");

  if(document.body.classList.contains("light-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});