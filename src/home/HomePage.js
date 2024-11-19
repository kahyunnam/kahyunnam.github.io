import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './HomePage.css';
// import file from './files/resume.pdf';
import linkedin_img from './linkedin.png';
import github_img from './github.png';
import email_img from './pics/gmail.png';

const HomePage = () => {
  const overviewSectionRef = useRef(null);

  const handleOverviewClick = () => {
    if (overviewSectionRef.current) {
      overviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Heading = () => {
    const onResumeClick = () => {
      window.open(
        'https://drive.google.com/file/d/15Vi5fd2f1ECaC0n3a73iHpV9iD17SA0o/view?usp=sharing'
      );
    };
    return (
      <div id='heading' class='row' ref={overviewSectionRef}>
        <div id='heading-text-cont' class='col-2'>
          <h1 id='big-heading'>Hi, I'm Ka-Hyun! </h1>
          <div id='smol-heading-div'>
            <h3 id='smol-heading'>
              I graduate from Cornell University with a B.S. in Computer Science
              December 2024. Post-grad, I will start work as a software engineer
              at Nvidia!
            </h3>
          </div>
          <div id='resume-div'>
            <div id='resumebutton' onClick={onResumeClick}>
              {/* <p id="resumetext"><span id="actualtext">Download Resume</span> <span id="spacer"></span> <span id="icon"><HiOutlineDownload /></span></p> */}
              <p id='resumetext'>View Resume</p>
            </div>
          </div>
        </div>
        <div id='heading-pic-cont-outer' class='col'>
          <div id='heading-pic-cont'></div>
        </div>
      </div>
    );
  };

  const Overview = () => {
    return (
      <div id='education' class='row'>
        <div id='education-content'>
          <div id='education-title'> A quick overview about me </div>
          <div id='education-summary'>
            I am currently a senior at{' '}
            <a
              id='link'
              href='https://www.cs.cornell.edu/undergrad/csmajor'
              target='_blank'
            >
              Cornell University
            </a>
            , majoring in computer science with a minor in creative writing.
            Some coursework highlights include systems programming, machine
            learning, and operating systems.
          </div>
          <div id='education-summary'>
            My past work experience includes software engineering internships at
            <a
              id='link'
              href='https://aws.amazon.com/sagemaker/autopilot/'
              target='_blank'
            >
              {' '}
              Amazon Web Services
            </a>
            , Uber, and{' '}
            <a
              id='link'
              href='https://developer.nvidia.com/cudnn'
              target='_blank'
            >
              Nvidia
            </a>
            , where I've primarily worked on backend services, machine learning
            platforms, and machine learning libraries.
          </div>
          <div id='education-summary'>
            After graduation, I will return to my internship team at Nvidia,
            starting my full-time software engineer role on the CuDNN team in
            February 2025.
          </div>
        </div>
      </div>
    );
  };

  const workSectionRef = useRef(null);

  const handleWorkExperienceClick = () => {
    console.log('work experience button clicked');
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Work = () => {
    return (
      <div id='work-cont' ref={workSectionRef}>
        <div id='work-title'> Work Experience </div>
        <div id='jobs-outer-cont'>
          {/* --------------------- NVIDIA JOB --------------  */}
          <div id='job-cont'>
            <div id='job-title'>
              <p id='company-name'> Nvidia </p>
              <p id='dates'> Jan 2024 - May 2024 </p>
            </div>
            <div id='job-desc'>
              <p id='position'> Software Engineer Intern </p>
              <p id='jobtext'>
                My team works on CuDNN, a CUDA-accelerated deep learning
                library.
              </p>
              <p id='jobtext'>
                {' '}
                I developed a new layer normalization engine for the CuDNN
                library that supports fusions with other operations at runtime.{' '}
              </p>
              <p id='jobtext'>
                {' '}
                This brings performance benefits for memory-bound kernels and
                software engineering benefits for fusion pattern support
                scalability.{' '}
              </p>
              <p id='jobtext'>
                {' '}
                This improvement is slated for release as part of the latest
                CuDNN library version; CuDNN is used by frameworks such as
                TensorFlow, PyTorch, and Caffe.{' '}
              </p>
              <div id='jobskillsbox'>
                <div id='jobskills'> C++ </div>
                <div id='jobskills'> CUDA </div>
                <div id='jobskills'> Deep Learning Libraries </div>
                <div id='jobskills'> Deep Learning Platforms </div>
              </div>
            </div>
          </div>
          {/* --------------------- Uber JOB --------------  */}
          <div id='job-cont'>
            <div id='job-title'>
              <p id='company-name'> Uber </p>
              <p id='dates'> Jan 2024 - May 2024 </p>
            </div>
            <div id='job-desc'>
              <p id='position'> Software Engineer Intern </p>
              <p id='jobtext'>
                My team worked Uber Marketplace Core, a Java Spring based
                backend service.
              </p>
              <p id='jobtext'>
                {' '}
                I implemented new logic to decrease unnecessary driver job
                re-dispatches for a core backend service.{' '}
              </p>
              <p id='jobtext'>
                {' '}
                This included improvements to existing Java Spring framework,
                data analysis of existing logic, and added observability into
                the existing re-dispatch system (a new data pipeline and
                real-time dashboard).{' '}
              </p>
              <div id='jobskillsbox'>
                <div id='jobskills'> Java </div>
                <div id='jobskills'> Java Spring </div>
                <div id='jobskills'> Backend Development </div>
                <div id='jobskills'> Observability </div>
                <div id='jobskills'> Data Visualization </div>
                <div id='jobskills'> Data Pipelines </div>
              </div>
            </div>
          </div>
          {/* --------------------- NVIDIA 1 JOB --------------  */}
          <div id='job-cont'>
            <div id='job-title'>
              <p id='company-name'> Nvidia </p>
              <p id='dates'> Jan 2023 - May 2023 </p>
            </div>
            <div id='job-desc'>
              <p id='position'> Software Engineer Intern </p>
              <p id='jobtext'>
                My team worked on MagLev, Nvidia's deep learning platform for
                Autonomous Vehicles.
              </p>
              <p id='jobtext'>
                {' '}
                My project enables convenient injection of common functionality
                into workflow tasks with task runtime hooks.{' '}
              </p>
              <p id='jobtext'>
                {' '}
                I also completed tickets as part of the team’s regular sprint
                work: implemented new API endpoints, completed dependency update
                compatibility audits, and identified and fixed user-flagged bugs
                for Maglev releases.{' '}
              </p>
              <div id='jobskillsbox'>
                <div id='jobskills'> Python </div>
                <div id='jobskills'> SDK Development </div>
                <div id='jobskills'> Deep Learning Platform </div>
              </div>
            </div>
          </div>
          {/* --------------------- AWS JOB --------------  */}
          <div id='job-cont'>
            <div id='job-title'>
              <p id='company-name'> Amazon Web Services </p>
              <p id='dates'> May 2022 - Aug 2022 </p>
            </div>
            <div id='job-desc'>
              <p id='position'> Software Engineer Intern </p>
              <p id='jobtext'>
                My team worked on Sagemaker Autopilot, part of AWS’s ML
                platform.
              </p>
              <p id='jobtext'>
                {' '}
                My project automated a performance benchmarking workflow, saving
                an average of 2 days of developer productivity for each weekly
                release cycle.{' '}
              </p>
              <p id='jobtext'>
                {' '}
                Developed python-based microservice benchmarking report
                analyzers with AWS Lambda and API Gateway, integrated with the
                team’s CDK pipeline to automate the previously manual workflow.{' '}
              </p>
              <div id='jobskillsbox'>
                <div id='jobskills'> Python </div>
                <div id='jobskills'> Machine Learning Platform </div>
                <div id='jobskills'> AWS Lambda </div>
                <div id='jobskills'> AWS S3 </div>
                <div id='jobskills'> CI/CD Benchmarking Workflows </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const educationSectionRef = useRef(null);

  const handleEducationClick = () => {
    console.log('work experience button clicked');
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Education = () => {
    return (
      <div id='work-cont' ref={educationSectionRef}>
        <div id='work-title'> Education </div>
        <div id='education-cont'>
          <div id='education-pic-cont'></div>
          <div id='education-desc-cont'>
            <div id='cornell'>Cornell University</div>
            <div id='degree'>B.S., Computer Science</div>
            <div id='degree'> Exp. Graduation Dec 2024</div>
            <br />
            <div id='school-desc-text'>
              During my time at Cornell, I took coursework related to operating
              systems, systems programming, machine learning, artificial
              intelligence, computer vision, data visualization, and more.
            </div>
            <div id='school-desc-text'>
              I participated in on campus organizations such as Cornell's space
              systems research group, entrepreneurship lab, mars rover project
              team, and women in computer science.
            </div>
          </div>
        </div>
      </div>
    );
  };

  const contactSectionRef = useRef(null);

  const handleContactClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/ka-hyun-nam/');
  };

  const onGithubClick = () => {
    window.open('https://github.com/kahyunnam');
  };

  const onGmailClick = () => {
    window.open('mailto:kahyun.nam12@gmail.com');
  };

  const Contact = () => {
    return (
      <div id='work-cont' ref={contactSectionRef}>
        <div id='contact-subheader'>
          {' '}
          Please feel welcome to reach out and connect!{' '}
        </div>
        <div id='contacts-cont'>
          <img src={email_img} alt='email' id='icon' onClick={onGmailClick} />
          <img
            src={linkedin_img}
            alt='linkedin'
            id='icon'
            onClick={onLinkedinClick}
          />
          <img
            src={github_img}
            alt='github'
            id='icon'
            onClick={onGithubClick}
          />
        </div>
      </div>
    );
  };

  const NavBar = () => {
    return (
      <div id='navbar-cont'>
        <p id='navbar-text-1' onClick={handleOverviewClick}>
          {' '}
          Overview{' '}
        </p>

        <p id='navbar-text' onClick={handleWorkExperienceClick}>
          {' '}
          Experience{' '}
        </p>
        <p id='navbar-text' onClick={handleEducationClick}>
          {' '}
          Education{' '}
        </p>
        <p id='navbar-text' onClick={handleContactClick}>
          {' '}
          Contact{' '}
        </p>
      </div>
    );
  };

  return (
    <div id='page'>
      <NavBar />
      <Heading />
      <Overview />
      <Work />
      <Education />
      <Contact />
    </div>
  );
};

export default HomePage;
