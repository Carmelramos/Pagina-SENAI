document.addEventListener("DOMContentLoaded", function () {
  // Redireciona para login ao clicar no botão
  document.querySelector(".btn-danger").addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "login.html";
  });

  // Rolagem suave para os links do menu
  document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: "smooth"
              });
          }
      });
  });

  // Destacar o menu ativo conforme a rolagem
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
      let current = "";
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
              link.classList.add("active");
          }
      });
  });

  // Ajusta o carrossel para melhor responsividade
  const carouselImages = document.querySelectorAll(".carousel-box img");
  function adjustCarouselImages() {
      carouselImages.forEach(img => {
          if (window.innerWidth < 768) {
              img.style.maxHeight = "300px";
          } else {
              img.style.maxHeight = "700px";
          }
      });
  }

  window.addEventListener("resize", adjustCarouselImages);
  adjustCarouselImages();
});
