import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './HomePage.css';
// import file from './files/resume.pdf';

const HomePage = () => {
  const Heading = () => {
    const onResumeClick = () => {
      window.open(
        'https://drive.google.com/file/d/15Vi5fd2f1ECaC0n3a73iHpV9iD17SA0o/view?usp=sharing'
      );
    };
    return (
      <div id='heading' class='row'>
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

  const Education = () => {
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

  return (
    <div id='page'>
      <Heading />
      <Education />
    </div>
  );
};

export default HomePage;
