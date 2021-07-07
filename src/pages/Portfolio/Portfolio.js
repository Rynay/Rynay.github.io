import { connect } from 'react-redux';
import { forwardRef, useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Project = forwardRef((props, ref) => {
  return (
    <li ref={ref} className="project">
      <a
        className="project__link"
        href={props.link}
        rel="noreferrer"
        target="_blank">
        <div className="project__imageContainer">
          <img src={props.image} alt="Site example" />
        </div>
        {/* <div className="project__info">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__description">{props.description}</p>
        </div> */}
      </a>
    </li>
  );
});
const ProjectsList = ({ projects = [], options = [], dependencies }) => {
  const sortedAndFilteredProjects = [...projects]
    .filter(options.filter(dependencies))
    .sort(options.sort)
    .map((project) => <Project key={project.id} {...project} />);

  return (
    <FlipMove typeName="ul" className="projects-list">
      {sortedAndFilteredProjects.length ? (
        sortedAndFilteredProjects
      ) : (
        <li className="projects-list__message">
          Нет проектов по заданным фильтрам
        </li>
      )}
    </FlipMove>
  );
};

const Portfolio = ({ portfolio }) => {
  const [filterDependencies, setFilterDependencies] = useState([]);
  const [options, setOptions] = useState({
    sortedIn: 'Asc',
    sort: (a, b) => b.date - a.date,
    filter: (dependencies) => (t) =>
      dependencies.every((dep) => t.technologies.includes(dep)),
  });
  const [listOfPossibleTechnologies, setListOfPossibleTechnologies] = useState(
    []
  );
  const sortDesc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Desc',
      sort: (a, b) => a.date - b.date,
    }));
  };
  const sortAsc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Asc',
      sort: (a, b) => b.date - a.date,
    }));
  };
  const toggleFilterDependencies = (dependency) => {
    if (filterDependencies.includes(dependency)) {
      setFilterDependencies((list) => list.filter((dep) => dep !== dependency));
    } else {
      setFilterDependencies((list) => [...list, dependency]);
    }
  };

  useEffect(() => {
    if (!portfolio) return;

    setListOfPossibleTechnologies([
      ...new Set(portfolio.flatMap((item) => item.technologies)),
    ]);
  }, [portfolio]);

  return (
    <>
      <section className="portfolio">
        <h2 className="title">
          <span>Portfolio</span>
        </h2>
        <div className="options">
          <div className="options__left">
            <button
              className={`options__sort ${
                options.sortedIn === 'Asc'
                  ? 'options__sort--1'
                  : 'options__sort--2'
              }`}
              onClick={options.sortedIn === 'Asc' ? sortDesc : sortAsc}>
              <span>Date</span>{' '}
              <span className="options__sort-icon">
                {options.sortedIn === 'Asc' ? <FaArrowUp /> : <FaArrowDown />}
              </span>
            </button>
          </div>
          <div className="options__right">
            <button
              onClick={() => setFilterDependencies([])}
              style={{
                cursor: filterDependencies.length ? 'pointer' : 'default',
              }}
              className={`options__filter ${
                filterDependencies.length
                  ? 'options__filter--2'
                  : 'options__filter--1'
              }`}>
              All
            </button>
            {listOfPossibleTechnologies.map((tech) => (
              <button
                className={`options__filter ${
                  filterDependencies.includes(tech)
                    ? 'options__filter--1'
                    : 'options__filter--2'
                }`}
                key={tech}
                onClick={() => {
                  toggleFilterDependencies(tech);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toggleFilterDependencies(tech);
                  }
                }}>
                {tech}
              </button>
            ))}
          </div>
        </div>
        <ProjectsList
          projects={portfolio}
          options={options}
          dependencies={filterDependencies}
        />
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  portfolio: state.data?.portfolio,
});

export default connect(mapStateToProps)(Portfolio);
