import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Welcome to [Your App Name]</h2>
        <p>
          At [Your App Name], we’re dedicated to bringing you the latest and most relevant news right to your fingertips. Our goal is to keep you informed with timely updates and a user-friendly experience.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a comprehensive news experience by curating articles from various trusted sources. We aim to deliver content that matters to you, whether it’s breaking news, in-depth analysis, or the latest trends.
        </p>
        <h2>Features</h2>
        <ul>
          <li><strong>Real-Time Updates:</strong> Get the latest headlines and breaking news as it happens.</li>
          <li><strong>Personalized News Feed:</strong> Customize your news experience based on your interests and preferences.</li>
          <li><strong>User-Friendly Interface:</strong> Navigate seamlessly with our intuitive and easy-to-use design.</li>
          <li><strong>Bookmark & Share:</strong> Save articles and share them with friends and family effortlessly.</li>
        </ul>
        <h2>How It Works</h2>
        <ol>
          <li><strong>Browse:</strong> Explore the latest news and trending topics.</li>
          <li><strong>Customize:</strong> Tailor your feed to match your interests.</li>
          <li><strong>Stay Informed:</strong> Receive updates and notifications about important news.</li>
        </ol>
        <h2>Our Team</h2>
        <p>
          We are a passionate team of developers and news enthusiasts committed to delivering high-quality content. Our team works tirelessly to ensure that you get accurate and timely information.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or suggestions, feel free to reach out to us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@yourapp.com">support@yourapp.com</a></li>
          <li><strong>Social Media:</strong> Follow us on <a href="https://www.facebook.com/yourapp">Facebook</a>, <a href="https://twitter.com/yourapp">Twitter</a>, and <a href="https://www.instagram.com/yourapp">Instagram</a></li>
          <li><strong>Address:</strong> [Your Office Address]</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
