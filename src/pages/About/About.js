import { connect } from 'react-redux';

const About = ({ about, skills }) => {
  return (
    <article className="resume">
      <h2 className="title resume__title">About me</h2>
      <p className="warning">The page is under construction</p>
    </article>
    // <>
    //   <section style={{ backgroundColor: 'rgb(245,245,245)' }}>
    //     <h2 className="title">
    //       <span>Мой стек</span>
    //     </h2>
    //     <div className="card-container">
    //
    //       {skills &&
    //         skills.map((skill) => (
    //           <div key={skill.title} className="skill-card">
    //             <h3>
    //               <div>
    //                 <img src={skill.icon} alt="icon" />
    //               </div>
    //               <span>{skill.title}</span>
    //             </h3>
    //             <ul className="list">
    //               {skill.list.map((item) => (
    //                 <li key={item} className="list-item">
    //                   {item}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //     </div>
    //   </section>
    //   {/* <section>
    //     <h2 className="title">
    //       <span>Обо мне</span>
    //     </h2>
    //     {!about && <Skeleton height={'10rem'} width={'100%'} count={1} />}
    //     {about && <p>{about}</p>}
    //   </section> */}
    // </>
  );
};

const mapStateToProps = (state) => ({
  about: state.data?.about,
  skills: state.data?.skills,
});

export default connect(mapStateToProps)(About);
