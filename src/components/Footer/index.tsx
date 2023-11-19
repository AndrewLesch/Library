import React from 'react';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  const technologies = ["Next.js", "Bootstrap", "Node.js", "MySql", "TypeScript", "GitHub"];
  return (
    <footer className="container-fluid mx-auto bg-light text-center pb-2">
      <div className="row">
        <hr className="w-100"></hr>
        <div className="col-md-4 d-flex justify-content-center my-auto">
          <h5 className="my-2 mx-2">Explore my projects on GitHub:</h5>
          <button className="btn btn-success btn-lg"><FontAwesomeIcon icon={faGithub} /></button>
        </div>
        <div className="col-md-4">
          <h5>Used technologies</h5>
          <div className="row">
            {technologies.map((tech, index) => (
              <div key={index} className="col-md-4">
                <FontAwesomeIcon icon={faCheck} className="text-success" /> {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h5>I am looking for a job, my contacts:</h5>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-lg m-2"><FontAwesomeIcon icon={faLinkedin} /></button>
            <button className="btn btn-success btn-lg m-2"><FontAwesomeIcon icon={faTelegram} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
