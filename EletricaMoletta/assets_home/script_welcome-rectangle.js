// Função que será chamada sempre que o scroll acontecer
window.addEventListener("scroll", function() {
    const welcomeText = document.querySelector('.welcome-rectangle p');
    const rect = welcomeText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcula a posição do texto em relação ao topo da janela
    if (rect.top < windowHeight * 1.2) { 
        welcomeText.style.transform = "translateY(0)";  // Faz o texto subir
        welcomeText.style.opacity = "1";  // Torna o texto visível
    } else {
        welcomeText.style.transform = "translateY(100px)";  // Posição inicial (fora da tela)
        welcomeText.style.opacity = "0";  // Invisível novamente
    }
});
// script.js

window.addEventListener("scroll", function() {
    const rectangleBottom = document.querySelector('.rectangle-bottom');
    const scrollPosition = window.scrollY; // Posição do scroll
    const triggerPosition = 550; // Posição do scroll para ativar a animação

    // Verifica se o scroll já passou da posição do trigger
    if (scrollPosition > triggerPosition) {
        rectangleBottom.classList.add('active'); // Adiciona a classe 'active' quando o scroll passar da posição
    } else {
        rectangleBottom.classList.remove('active'); // Remove a classe 'active' caso contrário
    }
});

// Função para ativar a animação quando o elemento estiver visível
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // A animação ocorre quando 50% do elemento é visível

// Selecionando os elementos a serem observados
const elements = document.querySelectorAll('.quotation-rectangle, .retangulo_branco');

elements.forEach(element => {
    observer.observe(element);
});

window.addEventListener("scroll", function() {
    const welcomeText = document.querySelector('.after p');
    const rect = welcomeText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcula a posição do texto em relação ao topo da janela
    if (rect.top < windowHeight * 1.2) { 
        welcomeText.style.transform = "translateY(0)";  // Faz o texto subir
        welcomeText.style.opacity = "1";  // Torna o texto visível
    } else {
        welcomeText.style.transform = "translateY(100px)";  // Posição inicial (fora da tela)
        welcomeText.style.opacity = "0";  // Invisível novamente
    }
});

window.addEventListener("scroll", function() {
    const rectangleBottom = document.querySelector('.retangulo-bottom');
    const scrollPosition = window.scrollY; // Posição do scroll
    const triggerPosition = 5000; // Posição do scroll para ativar a animação

    // Verifica se o scroll já passou da posição do trigger
    if (scrollPosition > triggerPosition) {
        rectangleBottom.classList.add('active'); // Adiciona a classe 'active' quando o scroll passar da posição
    } else {
        rectangleBottom.classList.remove('active'); // Remove a classe 'active' caso contrário
    }
});