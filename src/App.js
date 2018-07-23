import React, { Component } from 'react';

import resumeData from './data/resume';
import codingProjectsData from './data/coding_projects';
import musicProjectsData from './data/music_projects';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Mitchell',
      title: 'Front-end Developer',
      resume: resumeData,
      codingProjects: codingProjectsData,
      musicProjects: musicProjectsData
    }
  }

  renderBullet(bullet) {
    const bulletArr = bullet.split(' ');
    const lastItem = bulletArr.slice(-1)[0];
    const allButLast = bulletArr.slice(0, -1).join(' ');

    if (lastItem.startsWith('http')) {
      return (<a target="_blank" rel="noopener noreferrer" href={lastItem}>{allButLast}</a>);
    } else {
      return bullet;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          <div className="Main-header Main-header--name">
            {this.state.name}
          </div>
          <div className="Main-body Main-body--title">
            {this.state.title}
          </div>
        </div>
        <div className="Main">
          <div className="Main-header">
            My name is John Mitchell, and I am based out of Raleigh, NC.  I am a front-end developer passionate about UI/UX design, open source, and music technology.
            <br />
            <br />
            If you are interested in working with me or want to talk about technology, you can find me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/jlmitch5">github</a> and can contact me at <a href="mailto:jlmitch5dev@gmail.com">jlmitch5dev -at- gmail -dot- com</a>.
            <br />
            <br />
            You can find my resume below (or <a href="#" onClick={window.print}>print</a>):
          </div>
          <div className="Main-body Resume">
            <div className="Section Resume-printHeader">
              John Mitchell<br />
              <div className="Resume-printTitle">
                Front-end Developer
              </div>
            </div>
            <div className="Section Resume-printContact">
              205 W. Davie St.<br />
              Apt. 410<br />"
              Raleigh, NC 27601<br />
              919-394-6667<br />
              jlmitch5dev@gmail.com
            </div>
            <div className="Section Resume-jobs">
              <div className="Section-header">
                Jobs
              </div>
              <div className="Section-body">
                {this.state.resume.jobs.map((job, i) => (
                  <div className="Section-item" key={i}>
                    <div className="Section-itemHeader">
                      {job.company_name}
                    </div>
                    <div className="Section-itemTitle">
                      {job.job_title}
                    </div>
                    <div className="Section-itemDate">
                      {job.start_date + (job.end_date ? ` - ${job.end_date}` : ` - Present`)}
                    </div>
                    <ul className="Section-itemBody">
                      {job.bullet_points.map((bullet, i) => (
                        <li key={i}>
                          {this.renderBullet(bullet)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="Section Resume-schools">
              <div className="Section-header">
                Education
              </div>
              <div className="Section-body">
                {this.state.resume.schools.map((school, i) => (
                  <div className="Section-item" key={i}>
                    <div className="Section-itemHeader">
                      {school.school_name}
                    </div>
                    <div className="Section-itemTitle">
                      {school.degree}
                    </div>
                    <div className="Section-itemDate">
                      {school.start_date + (school.end_date ? ` - ${school.end_date}` : ``)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Section Resume-skills">
              <div className="Section-header">
                Skills
              </div>
              <div className="Section-body">
                <div className="Section-item">
                  <ul className="Section-itemBody">
                    {this.state.resume.technical_experience.map((experience, i) => (
                      <li key={i}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
              <div className="Section Resume-projects">
                <div className="Section-header">
                  Other Coding Projects
                </div>
                <div className="Section-body CodingProjects">
                  {this.state.codingProjects.map((project, i) => (
                    <div className="Section-item" key={i}>
                      <div className="Section-itemHeader">
                        {project.link ? <a target="_blank" rel="noopener noreferrer" href={project.link}>{project.title}</a> : project.title}
                      </div>
                      <div className="Section-itemDate">
                        {project.date}
                      </div>
                      <div className="Section-itemBody">
                        {project.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
        <div className="Main Main--music">
          <div className="Main-header">
            I currently make ambient synth music under the name midcentury modular.  You can find videos of patches on <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/midcenturymodular">instagram</a> and one-off recordings on <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/midcentury">soundcloud</a>.  In addition, I do recording, mixing, and "mastering", mostly for my own music and occasionally others. For booking and press inquiries for midcentury modular or to talk about recording/audio engineering, please email <a href="mailto:midcenturymodular@gmail.com">midcenturymodular -at- gmail -dot- com</a>.
            <br />
            <br />
            I also currently play guitar and synth with the shoegaze-y band Less Western.  You can contact Kevin Sweeney about performance and press inquiries for Less Western at <a href="mailto:lesswesterncoolrockband@gmail.com">lesswesterncoolrockband -at- gmail -dot- com</a>.
            <br />
            <br />
            Below are some releases I've worked on:
          </div>
          <div className="Main-body MusicProjects">
            {this.state.musicProjects.map((project, i) => (
              <div className="MusicProjects-project" key={i}>
                <div className="MusicProjects-embed" dangerouslySetInnerHTML={{__html: project.embed}}></div>
                <div className="MusicProjects-text">
                    <div className="Section-item">
                      <div className="Section-itemHeader">
                        {project.artist_name} - {project.release_name}
                      </div>
                      <div className="Section-itemDate">
                        {project.release_date}
                      </div>
                      <div className="Section-itemBody">
                        {project.description}
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Footer">© 2018 <a href="mailto:jlmitch5dev@gmail.com">John Mitchell</a></div>
      </div>
    );
  }
}

export default App;
