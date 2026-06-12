// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// Fetch and display projects
const projectsGrid = document.getElementById('projectsGrid');

async function fetchProjects() {
  try {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    projectsGrid.innerHTML = '<p class="loading-spinner">Failed to load projects. Please try again later.</p>';
  }
}

function renderProjects(projects) {
  if (!projects.length) {
    projectsGrid.innerHTML = '<p class="loading-spinner">No projects available yet.</p>';
    return;
  }

  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <i class="${project.icon || 'fas fa-code'}"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-description">${escapeHtml(project.description)}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <a href="${escapeHtml(project.link)}" class="project-link" target="_blank" rel="noopener noreferrer">
          View project <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// Helper function to prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
  submitBtn.disabled = true;
  
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim()
  };
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      formStatus.innerHTML = '<span style="color: #10b981;">✓ Message sent successfully! I\'ll get back to you soon.</span>';
      contactForm.reset();
    } else {
      formStatus.innerHTML = `<span style="color: #ef4444;">✗ ${result.error || 'Failed to send message'}</span>`;
    }
  } catch (error) {
    console.error('Contact form error:', error);
    formStatus.innerHTML = '<span style="color: #ef4444;">✗ Network error. Please try again.</span>';
  } finally {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    setTimeout(() => {
      if (formStatus.innerHTML) formStatus.innerHTML = '';
    }, 5000);
  }
});

// Initialize
fetchProjects();

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});