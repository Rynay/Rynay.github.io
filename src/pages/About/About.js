import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const About = ({ about, skills }) => {
  return (
    <>
      <section style={{ backgroundColor: 'rgb(245,245,245)' }}>
        <h2 className="title">
          <span>Мой стек</span>
        </h2>
        <div className="card-container">
          {!skills && (
            <>
              <Skeleton width={'20rem'} height={'20rem'} count={1} />
              <Skeleton width={'20rem'} height={'20rem'} count={1} />
              <Skeleton width={'20rem'} height={'20rem'} count={1} />
            </>
          )}
          {skills &&
            skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <h3>
                  <div>
                    <img src={skill.icon} alt="icon" />
                  </div>
                  <span>{skill.title}</span>
                </h3>
                <ul className="list">
                  {skill.list.map((item) => (
                    <li key={item} className="list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>
      {/* <section>
        <h2 className="title">
          <span>Обо мне</span>
        </h2>
        {!about && <Skeleton height={'10rem'} width={'100%'} count={1} />}
        {about && <p>{about}</p>}
      </section> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  about: state.data?.about,
  skills: state.data?.skills,
});

export default connect(mapStateToProps)(About);
