document.addEventListener('DOMContentLoaded', function() {
    const servicesLink = document.querySelector('nav .nav-links a[href="#services"]');
    const servicesSection = document.getElementById('services');

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault();
        servicesSection.innerHTML = `
            <h2>Transform Your Business with GL Consulting</h2>
            <p>Elevate your operations to new heights with our expert Lean Management and Continuous Improvement services. At GL Consulting, we specialize in streamlining processes, enhancing efficiency, and fostering a culture of innovation. Let us help you unlock your business's full potential through tailor-made strategies that blend lean principles with cutting-edge AI technology.</p>
            <ul>
                <li><strong>Process Improvement:</strong> Streamline workflows with Value Stream Mapping and Kaizen Events. Implement 5S Systems for organized, efficient work environments.</li>
                <li><strong>Quality Management:</strong> Enhance product and service quality through Six Sigma methodologies. Conduct in-depth Root Cause Analyses for lasting solutions.</li>
                <li><strong>Supply Chain Optimization:</strong> Develop Just-In-Time (JIT) inventory systems for reduced waste. Foster robust supplier relationships for streamlined operations.</li>
                <li><strong>Technology Integration:</strong> Utilize AI-driven analytics for data-informed decisions. Automate routine processes for increased efficiency and accuracy.</li>
            </ul>
            <p>Partner with GL Consulting to shape a future where your business not only thrives but sets new benchmarks in operational excellence.</p>
        `;
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
    // About Section
    const aboutLink = document.querySelector('nav .nav-links a[href="#about"]');
    const aboutSection = document.getElementById('about');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.innerHTML = `<!-- About Content -->`;
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Contact Section
    const contactLink = document.querySelector('nav .nav-links a[href="#contact"]');
    const contactSection = document.getElementById('contact');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.innerHTML = `<!-- Contact Content -->`;
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
