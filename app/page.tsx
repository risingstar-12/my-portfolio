import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="home">
        <h1>Hi, I'm Jibi Aneesh</h1>

        <h2>Junior Front-End Developer</h2>

        <p>
          I am a B.Tech Computer Science graduate and an aspiring
          Front-End Developer. I enjoy building clean, responsive
          and user-friendly web applications.
        </p>

      <div>
        <a href="#projects">
          <button>View My Projects</button>
        </a>

        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>
      </section>
     
      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech Computer Science graduate with a strong interest
          in web development. I am currently improving my skills in
          front-end development and building practical projects.
        </p>

        <p>
          I enjoy creating responsive and user-friendly websites using
          modern web technologies. My goal is to start my career as a
          Junior Front-End Developer and continue learning and growing
          as a developer.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>Bachelor of Technology (B.Tech) - Computer Science</h3>

          <p className="education-college">
            Royal College of Engineering and Technology
          </p>

          <p className="education-location">
            Akkikavu, Thrissur, Kerala
          </p>

          <p className="education-date">
            2007 - 2011
          </p>
        </div>
      </section>
            

            {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Python</p>
            <p>Django</p>
            <p>REST API</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitLab</p>
            <p>VS Code</p>
          </div>
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="projects-section">
        <h2>Projects</h2>

        <div className="projects-container">

     
          <div className="project-card">
            <h3>Snake Game</h3>

            <p>
              An interactive Snake Game built with React, featuring keyboard and
              mobile controls, score tracking, pause and resume, difficulty levels,
              and sound effects.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> React, JavaScript, CSS, Vite
            </p>

            <a
              href="https://snake-game-amber-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Play Game
            </a>
          </div>

          <div className="project-card">
            <h3>Ecommerce Web Application</h3>

            <p>
              A full-stack eCommerce application with product listing,
              product details, authentication, cart and checkout features.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> React, Redux Toolkit, Python,
              Django REST Framework, PostgreSQL
            </p>

            <a
              href="https://ecommerce-fullstack-theta-coral.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >Check it Out</a>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>

            <p>
              A responsive personal portfolio website to showcase my skills,
              education, experience and projects.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> Next.js, React, TypeScript, CSS
            </p>

            <a
              href="https://my-portfolio-rho-six-51.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Check it Out</a>
          </div>

        </div>
</section>

      {/* Experience Section */}
   
      <section id="experience" className="experience-section">
        <h2>Experience</h2>

        {/* Current Training */}
        <div className="experience-card">
          <h3>Python Full Stack Development Training</h3>

          <p className="experience-date">
            October 2025 - Present
          </p>

          <p>
            Currently undergoing Python Full Stack Development training,
            gaining practical experience in both front-end and back-end
            web development.
          </p>

          <ul>
            <li>Developing web applications using HTML, CSS and JavaScript.</li>
            <li>Building user interfaces using React and Next.js.</li>
            <li>Learning Python and Django for back-end development.</li>
            <li>Working with REST APIs and database concepts.</li>
            <li>Using Git and GitLab for version control.</li>
            <li>Working on a team-based CRM web application.</li>
          </ul>
        </div>

        {/* Internship */}
        <div className="experience-card">
          <h3>Python Full Stack Developer (Internship)</h3>

          <p className="experience-company">
            Quest Innovative Solutions Pvt. Ltd. — Kochi, Kerala
          </p>

          <p className="experience-date">
            February 2020 - February 2021
          </p>

          <ul>
            <li>
              Developed clean and error-free code following internal
              quality standards.
            </li>
            <li>
              Engaged with clients to understand software requirements
              and suggest suitable solutions.
            </li>
          </ul>
        </div>

        {/* Administrative Experience */}
        <div className="experience-card">
          <h3>Administrative Assistant</h3>

          <p className="experience-company">
            EEA Consultants FZC — Sharjah, UAE
          </p>

          <p className="experience-date">
            November 2012 - March 2014
          </p>

          <ul>
            <li>Planned and scheduled meetings.</li>
            <li>Maintained office files and documents.</li>
            <li>
              Contributed ideas to improve company operations and
              business performance.
            </li>
            <li>
              Helped identify solutions to overcome workplace challenges.
            </li>
            <li>
              Communicated regularly with staff members, including the
              technical department.
            </li>
            <li>
              Observed staff performance and provided feedback when required.
            </li>
          </ul>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>

        <p>
          I am currently looking for opportunities as a Junior Front-End
          Developer. Feel free to contact me for any opportunities or
          collaboration.
        </p>

          <div className="contact-details">
            <h3>Get In Touch</h3>

            <p>
              <strong>Email:</strong> jibianeesh12@gmail.com
            </p>

            <p>
              <strong>Phone:</strong> +971 501808485
            </p>

            <p>
              <strong>LinkedIn:</strong> www.linkedin.com/in/jibi-aneesh-010447293
            </p>
          </div>
      </section>

    </main>
  );
}