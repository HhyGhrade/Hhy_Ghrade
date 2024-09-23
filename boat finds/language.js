// language.js
function changeLanguage() {
    const selectedLanguage = document.getElementById("languages").value;
    localStorage.setItem("preferredLanguage", selectedLanguage);
    updateContent();
}

function updateContent() {
    const language = localStorage.getItem("preferredLanguage") || "en"; // Default to English

    const content = {
        en: {
            welcome: "Welcome to Boat Finds",
            heroTitle: "Your Gateway to Top Jobs",
            heroText: "Find and apply for your dream job with ease...",
            categoriesTitle: "Explore Job Categories",
            howItWorksTitle: "How It Works",
            testimonialsTitle: "What Our Users Say",
            newsletterTitle: "Stay Updated",
        },
        es: {
            welcome: "Bienvenido a Boat Finds",
            heroTitle: "Tu Puerta a los Mejores Empleos",
            heroText: "Encuentra y postula a tu trabajo soñado con facilidad...",
            categoriesTitle: "Explora las Categorías de Empleo",
            howItWorksTitle: "Cómo Funciona",
            testimonialsTitle: "Lo Que Dicen Nuestros Usuarios",
            newsletterTitle: "Mantente Actualizado",
        },
        // Add other languages similarly
    };

    // Update the content based on the selected language
    document.querySelector("h1").textContent = content[language].welcome;
    document.querySelector(".hero h2").textContent = content[language].heroTitle;
    document.querySelector(".hero p").textContent = content[language].heroText;
    document.querySelector(".categories h2").textContent = content[language].categoriesTitle;
    document.querySelector(".how-it-works h2").textContent = content[language].howItWorksTitle;
    document.querySelector(".testimonials h2").textContent = content[language].testimonialsTitle;
    document.querySelector(".newsletter h2").textContent = content[language].newsletterTitle;
}

// Call updateContent on page load to set the correct language
window.onload = function() {
    updateContent();
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        document.getElementById("languages").value = savedLanguage;
    }
};
// language.js
function changeLanguage() {
    const selectedLanguage = document.getElementById("languages").value;
    localStorage.setItem("preferredLanguage", selectedLanguage);
    updateContent();
}

function updateContent() {
    const language = localStorage.getItem("preferredLanguage") || "en"; // Default to English

    const content = {
        en: {
            welcome: "WELCOME CHERISHED USER!!!",
            loginPrompt: "Please log in to post and browse jobs on Boat Finds",
            benefitsTitle: "Why Choose Boat Finds?",
            testimonialsTitle: "What Our Users Say",
        },
        es: {
            welcome: "¡BIENVENIDO USUARIO QUERIDO!",
            loginPrompt: "Por favor inicie sesión para publicar y navegar trabajos en Boat Finds",
            benefitsTitle: "¿Por qué elegir Boat Finds?",
            testimonialsTitle: "Lo que dicen nuestros usuarios",
        },
        // Add other languages similarly
    };

    // Update the content based on the selected language
    document.querySelector("h1").textContent = content[language].welcome;
    document.querySelector("h2").textContent = content[language].loginPrompt;
    document.querySelector(".benefits h2").textContent = content[language].benefitsTitle;
    document.querySelector(".testimonials h2").textContent = content[language].testimonialsTitle;
}

// Call updateContent on page load to set the correct language
window.onload = function() {
    updateContent();
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        document.getElementById("languages").value = savedLanguage;
    }
};
