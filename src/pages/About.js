import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="grid-middle-one ">
          <h1>Creature Sim Project - Raymond Davies</h1>
          <h2>About Me</h2>
          <p>
            Hello, I&apos;m <b>Raymond Davies</b>, a software engineer /
            engineering manager from Edinburgh, Scotland. I work at{' '}
            <a
              href="https://www.skyscanner.net/"
              target="_blank"
              rel="noreferrer"
            >
              Skyscanner
            </a>
            .
          </p>
          <p>
            If you want to know more about me, please take a look at my:
            <ul>
              <li>
                <a
                  href="https://www.radavies.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Personal website
                </a>
              </li>
              <li>
                <a
                  href="https://radavies.wordpress.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Technical blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/radavies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/raymonddavies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile
                </a>
              </li>
            </ul>
          </p>
          <p>
            Also if you are interested in photography take a look at my{' '}
            <a
              href="https://www.photo.radavies.net/"
              target="_blank"
              rel="noreferrer"
            >
              photography website
            </a>
            {'. '}
            If you like rock music check out my band{' '}
            <a
              href="https://fightrobotsfight.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Fight Robots Fight
            </a>
            .
          </p>
          <h2>About This Project</h2>
          <p>
            This project, Creature Sim, is based on an idea I&apos;ve played
            with a lot over the years. The first iteration of the idea was
            actually my final year project at university.
          </p>
          <p>
            The core of the idea is combine a MMO game concept with a
            predator-prey simulation. Users of the system can create, and to a
            small extent manage, creatures within a virtual world. My hope is
            that within the virtual world there will be emergent properties that
            will be interesting to observe and interact with.
          </p>
          <h3>Project Purpose</h3>
          <p>
            The main purpose of the project, aside from being an enjoyable
            challenge, is to allow me to play with, learn and explore different
            technologies. As such the tech choices I&apos;ve made have been
            primarily driven by one of those factors.
          </p>
          <p>
            I would also like the project to be a portfolio item that can
            demonstrate my hands-on expertise with a variety of technologies.
          </p>
          <h3>Tech Stack</h3>
          <h4>Front End</h4>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
              </a>
            </li>
            <li>
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noreferrer"
              >
                Material UI
              </a>
            </li>
            <li>
              <a
                href="https://reach.tech/router"
                target="_blank"
                rel="noreferrer"
              >
                Reach Router
              </a>
            </li>
            <li>
              <a
                href="https://github.com/axios/axios"
                target="_blank"
                rel="noreferrer"
              >
                Axios
              </a>
            </li>
            <li>
              <a href="https://parceljs.org/" target="_blank" rel="noreferrer">
                Parcel Bundler
              </a>
            </li>
          </ul>
          <h4>Back End</h4>
          <ul>
            <li>
              <a
                href="https://www.dropwizard.io/en/latest/"
                target="_blank"
                rel="noreferrer"
              >
                Dropwizard
              </a>
            </li>
            <li>
              <a href="https://gradle.org/" target="_blank" rel="noreferrer">
                Gradle
              </a>
            </li>
          </ul>
          <h4>Infrastructure</h4>
          <ul>
            <li>
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                Docker
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/dynamodb/"
                target="_blank"
                rel="noreferrer"
              >
                DynamoDB
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
