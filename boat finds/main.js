document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Handle login form submission
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Handle register form submission
        });
    }

    const jobList = document.getElementById('jobList');
    if (jobList) {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => {
                data.forEach(job => {
                    const jobElement = document.createElement('div');
                    jobElement.innerHTML = `
                        <h3>${job.title}</h3>
                        <p>${job.description}</p>
                        <p><strong>${job.company}</strong></p>
                        <p>${job.location}</p>
                    `;
                    jobList.appendChild(jobElement);
                });
            });
    }

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
            // Optionally, you can add animation to the answer's display here
        });
    });

    // Example: Load dashboard content dynamically based on user role
    const userRole = 'jobseeker'; // This would be dynamically set based on the logged-in user

    const contentArea = document.querySelector('.dashboard-content');

    if (userRole === 'employer') {
        contentArea.innerHTML = `
            <h2>Welcome, Employer!</h2>
            <p>Post new job listings, manage your current listings, and review applications.</p>
        `;
    } else if (userRole === 'jobseeker') {
        contentArea.innerHTML = `
            <h2>Welcome, Job Seeker!</h2>
            <p>Browse job postings, apply for positions, and track your applications.</p>
        `;
    }
});
