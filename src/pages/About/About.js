import { FaCode, FaDatabase, FaCodeBranch } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <section>
        <h2 className="title">
          <span>About me</span>
        </h2>
        <p>
          Started earnest brother believe an exposed so. Me he believing
          daughters if forfeited at furniture. Age again and stuff downs spoke.
          Late hour new nay able fat each sell. Nor themselves age introduced
          frequently use unsatiable devonshire get. They why quit gay cold rose
          deal park. One same they four did ask busy. Reserved opinions fat him
          nay position. Breakfast as zealously incommode do agreeable furniture.
          One too nay led fanny allow plate.
        </p>
      </section>
      <section style={{ backgroundColor: 'rgb(245,245,245)' }}>
        <h2 className="title">
          <span>My Skills</span>
        </h2>
        <div className="card-container">
          <div className="skill-card">
            <h3>
              <FaCode /> <span>Front-end</span>
            </h3>
            <ul className="list">
              <li className="list-item">React</li>
              <li className="list-item">Redux</li>
              <li className="list-item">JavaScript</li>
              <li className="list-item">HTML</li>
              <li className="list-item">CSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>
              <FaDatabase /> <span>Databases</span>
            </h3>
            <ul className="list">
              <li className="list-item">Firebase</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>
              <FaCodeBranch /> <span>Source Control</span>
            </h3>
            <ul className="list">
              <li className="list-item">Git</li>
              <li className="list-item">GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
