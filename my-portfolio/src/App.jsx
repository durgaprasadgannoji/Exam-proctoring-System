import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaArrowUp } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiOpencv,
  SiPytorch,
  SiFastapi,
} from "react-icons/si";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
       

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

<nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="font-bold text-xl text-blue-400">
      Durga Prasad
    </h1>

    <div className="space-x-6">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#education" className="hover:text-blue-400">Education</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>

  </div>
</nav>

<nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-gray-800">

  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-xl font-bold text-blue-400">
  Durga Prasad
</h1>

<div className="hidden md:flex gap-8">

  <a href="#about" className="hover:text-blue-400">About</a>

  <a href="#skills" className="hover:text-blue-400">Skills</a>

  <a href="#projects" className="hover:text-blue-400">Projects</a>

  <a href="#journey" className="hover:text-blue-400">Education</a>

  <a href="#contact" className="hover:text-blue-400">Contact</a>

</div>


  </div>

</nav>

      {/* Hero Section */}
<motion.section
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="max-w-6xl mx-auto px-6 pt-40 md:pt-32 pb-20"

>

  <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

{/* Profile Image */}
<motion.img
  src="/profile.jpg"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8 }}
  className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
/>

{/* Hero Content */}
<div className="flex-1">

 <motion.h1
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3 }}
  className="text-4xl md:text-6xl font-bold leading-tight"
>
  Gannoji Durga Prasad
</motion.h1>

  <p className="mt-4 text-xl text-blue-400">
    AI/ML Engineer • Backend Developer • Python Developer
  </p>

  <p className="mt-6 text-gray-300 max-w-2xl leading-8">
    Electronics and Communication Engineering graduate with a
    Minor in Artificial Intelligence and Machine Learning.
    Passionate about building AI-powered applications,
    scalable backend systems, machine learning solutions,
    and real-world software products.
  </p>

  {/* Social Icons */}
  <div className="flex gap-6 mt-8">

    <a
      href="https://github.com/durgaprasadgannoji"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition duration-300 hover:scale-110"
    >
      <FaGithub size={35} />
    </a>

    <a
      href="https://www.linkedin.com/in/durgaprasadgannoji"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition duration-300 hover:scale-110"
    >
      <FaLinkedin size={35} />
    </a>

    <a
      href="mailto:gannoji16@gmail.com"
      className="text-white hover:text-blue-400 transition duration-300 hover:scale-110"
    >
      <FaEnvelope size={35} />
    </a>

  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-8">

    <a
      href="#projects"
      className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500/10 transition"
    >
      Contact Me
    </a>

  </div>

</div>

  </div>
</motion.section>


      {/* About */}
     <motion.section
id="about"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="max-w-6xl mx-auto px-6 py-16"

>

        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-8">
          Electronics and Communication Engineering graduate with a
          Minor in Artificial Intelligence and Machine Learning.
          Experienced in backend development, REST APIs,
          machine learning applications, testing, debugging,
          and software engineering.
        </p>
      </motion.section>

      {/* Skills */}
     <section id="skills" className="max-w-6xl mx-auto px-6 pt-40 md:pt-32 pb-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    My Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <FaPython className="text-6xl text-yellow-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">Python</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <FaJava className="text-6xl text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">Java</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <SiJavascript className="text-6xl text-yellow-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">JavaScript</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <SiMysql className="text-6xl text-blue-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">MySQL</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <SiFastapi className="text-6xl text-green-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">FastAPI</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <SiOpencv className="text-6xl text-red-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">OpenCV</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <SiPytorch className="text-6xl text-orange-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">PyTorch</h3>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}
      className="
bg-gray-900/70
backdrop-blur-lg
border border-gray-800
p-8
rounded-2xl
text-center
shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300
">
      <FaGithub className="text-6xl text-white mx-auto mb-4" />
      <h3 className="text-lg font-semibold">GitHub</h3>
    </motion.div>

  </div>

</section>



     {/* Projects */}

<section id="projects" className="max-w-6xl mx-auto px-6 pt-40 md:pt-32 pb-20">

<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-4xl font-bold text-center mb-12"

>


Featured Projects



</motion.h2>

  <div className="grid md:grid-cols-3 gap-8">


{/* AI Study Assistant */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03, y: -10 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden"
>
  <img
    src="/projects/study-assistant.png"
    alt="AI Study Assistant"
    className="w-full h-52 object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold">
      AI Study Assistant
    </h3>

    <p className="mt-3 text-gray-400">
      AI-powered learning platform that generates summaries,
      quizzes and flashcards using Gemini API.
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
        FastAPI
      </span>

      <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
        Gemini API
      </span>

      <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
        Python
      </span>
    </div>

    <a
      href="https://github.com/durgaprasadgannoji"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300"
    >
      <FaGithub />
      View Project
    </a>

  </div>
</motion.div>

{/* Exam Proctoring */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03, y: -10 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden"
>
  <img
    src="\public\proctoring-system.png"
    alt="Exam Proctoring"
    className="w-full h-52 object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold">
      Exam Proctoring System
    </h3>

    <p className="mt-3 text-gray-400">
      AI-powered online examination monitoring system using
      OpenCV, MediaPipe and automated alerts.
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
        OpenCV
      </span>

      <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
        MediaPipe
      </span>

      <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
        Python
      </span>
    </div>

    <a
      href="https://github.com/durgaprasadgannoji"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300"
    >
      <FaGithub />
      View Project
    </a>

  </div>
</motion.div>

{/* Sentiment Analysis */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03, y: -10 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden"
>
  <img
    src="/projects/sentiment-analysis.png"
    alt="Sentiment Classification"
    className="w-full h-52 object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold">
      Sentiment Classification
    </h3>

    <p className="mt-3 text-gray-400">
      Multimodal sentiment analysis combining NLP and
      Computer Vision using RoBERTa and ResNet.
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
        PyTorch
      </span>

      <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full text-sm">
        RoBERTa
      </span>

      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
        ResNet
      </span>
    </div>

    <a
      href="https://github.com/durgaprasadgannoji"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300"
    >
      <FaGithub />
      View Project
    </a>

  </div>
</motion.div>


  </div>

</section>


      {/* Education */}
      <section id="journey" className="max-w-6xl mx-auto px-6 pt-40 md:pt-32 pb-20">

<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold text-center mb-16"

>


Education Journey


</motion.h2>

  <div className="grid md:grid-cols-2 gap-20 items-center">

  <div className="relative border-l-2 border-blue-500 ml-6 space-y-12">


{/* School */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative pl-10"
>
  <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

  <h3 className="text-2xl font-bold">2020</h3>

  <p className="text-blue-400">
    Kothakota Pupils High School
  </p>

  <p className="text-gray-400 mt-2">
    Completed SSC (CBSE) with 83%.
  </p>
</motion.div>

{/* Intermediate */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative pl-10"
>
  <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

  <h3 className="text-2xl font-bold">2020 - 2022</h3>

  <p className="text-blue-400">
    Narayana Junior College
  </p>

  <p className="text-gray-400 mt-2">
    Intermediate (MPC) - 92%.
  </p>
</motion.div>

{/* ECE */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative pl-10"
>
  <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

  <h3 className="text-2xl font-bold">2022 - 2026</h3>

  <p className="text-blue-400">
    B.Tech - Electronics & Communication Engineering
  </p>

  <p className="text-gray-400 mt-2">
    Vardhaman College of Engineering | CGPA: 7.5
  </p>
</motion.div>

{/* AIML Minor */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative pl-10"
>
  <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

  <h3 className="text-2xl font-bold">2024 - 2026</h3>

  <p className="text-blue-400">
    Minor Degree - Artificial Intelligence & Machine Learning
  </p>

  <p className="text-gray-400 mt-2">
    JNTUH | CGPA: 8.6
  </p>
</motion.div>


</div>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <img
    src="/education.png"
    className="w-80 md:w-96 floating drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
  />
</motion.div>


  </div>

</section>

{/*<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-10">
    GitHub Stats
  </h2>

  <div className="flex justify-center">
    <img
      src="https://github-readme-stats.vercel.app/api?username=durgaprasadgannoji&show_icons=true&theme=tokyonight"
      alt="GitHub Stats"
    />
  </div>

</section>*/}

{/* Achievements */}

<section id="achievements" className="max-w-6xl mx-auto px-6 py-20">

<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-4xl font-bold text-center mb-12"

>


Achievements & Activities


</motion.h2>

  <div className="grid md:grid-cols-2 gap-8">


<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6"
>
  <h3 className="text-xl font-bold text-blue-400">
    AI & ML Minor Degree
  </h3>

  <p className="mt-3 text-gray-400">
    Completed Minor Degree in Artificial Intelligence and Machine Learning under JNTUH with CGPA 8.6.
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6"
>
  <h3 className="text-xl font-bold text-blue-400">
    TriNIT Hackathon
  </h3>

  <p className="mt-3 text-gray-400">
    Participated in national-level hackathon and collaborated on innovative software solutions.
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6"
>
  <h3 className="text-xl font-bold text-blue-400">
    AKSHARAMALA Mentor
  </h3>

  <p className="mt-3 text-gray-400">
    Guided junior students through mentoring and academic support activities.
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03 }}
  className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6"
>
  <h3 className="text-xl font-bold text-blue-400">
    Technical Projects
  </h3>

  <p className="mt-3 text-gray-400">
    Developed AI Study Assistant, Exam Proctoring System, Virtual Keyboard using Hand Gestures and IoT-based Worker Safety solutions.
  </p>
</motion.div>


  </div>

</section>



      {/* Contact */}

<section id="contact" className="max-w-6xl mx-auto px-6 pt-40 md:pt-32 pb-20">

<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-4xl font-bold text-center mb-12"

>


Get In Touch


</motion.h2>

<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 text-center"

>


<h3 className="text-2xl font-semibold mb-4">
  Let's Connect
</h3>

<p className="text-gray-400 mb-8">
  I'm actively seeking opportunities in AI/ML,
  Backend Development, and Software Engineering.
</p>

<div className="flex justify-center gap-10">

  <a
    href="mailto:gannoji16@gmail.com"
    className="hover:text-blue-400 transition duration-300"
  >
    <FaEnvelope size={45} />
  </a>

  <a
    href="https://github.com/durgaprasadgannoji"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 transition duration-300"
  >
    <FaGithub size={45} />
  </a>

  <a
    href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 transition duration-300"
  >
    <FaLinkedin size={45} />
  </a>

</div>

<div className="mt-8 text-gray-400 space-y-2">
  <p>📧 gannoji16@gmail.com</p>
  <p>📍 Hyderabad, Telangana, India</p>
</div>


</motion.div>

</section>

<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
    fixed
    bottom-6
    right-6
    w-14
    h-14
    rounded-full
    bg-blue-600
    hover:bg-blue-700
    text-white
    flex
    items-center
    justify-center
    shadow-lg
    hover:scale-110
    transition-all
    duration-300
    z-50
  "
>
  <FaArrowUp />
</button>

{/* Footer */}
  <footer className="border-t border-gray-800 mt-20">
    <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">

      <p>
         Gannoji Durga Prasad
      </p>

      <p className="mt-2">
        Built with React, Tailwind CSS and Framer Motion
      </p>

    </div>
  </footer>

</div>

);
}

export default App;