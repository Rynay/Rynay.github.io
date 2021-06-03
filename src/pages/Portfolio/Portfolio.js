import { forwardRef, useState } from 'react';
import FlipMove from 'react-flip-move';

const projects = [
  {
    id: 1,
    title: 'abc',
    description: 'dfghjk',
    technologies: ['React', 'Redux', 'Firebase'],
  },
  {
    id: 2,
    title: '123',
    description: 'dfghjk',
    technologies: ['React', 'Redux', 'TypeScript'],
  },
  {
    id: 3,
    title: '789',
    description: 'dfghjk',
    technologies: ['React', 'Firebase', 'TypeScript'],
  },
  {
    id: 4,
    title: '123456',
    description: 'dfghjk',
    technologies: ['React', 'Redux', 'Firebase'],
  },
  {
    id: 5,
    title: '789456',
    description: 'dfghjk',
    technologies: ['React', 'Redux', 'TypeScript'],
  },
];

const Project = forwardRef((props, ref) => <li ref={ref}>{props.title}</li>);

const ProjectsList = ({ projects, options, dependencies }) => {
  return (
    <ul>
      <FlipMove>
        {projects
          .filter(options.filter(dependencies))
          .sort(options.sort)
          .map((project) => (
            <Project key={project.id} {...project} />
          ))}
      </FlipMove>
    </ul>
  );
};

const Portfolio = () => {
  const [filterDependencies, setFilterDependencies] = useState([]);
  const [options, setOptions] = useState({
    sortedIn: 'Asc',
    sort: (a, b) => a.id - b.id,
    filter: (dependencies) => (t) =>
      dependencies.every((dep) => t.technologies.includes(dep)),
  });
  const sortDesc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Desc',
      sort: (a, b) => b.id - a.id,
    }));
  };
  const sortAsc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Asc',
      sort: (a, b) => a.id - b.id,
    }));
  };
  const toggleFilterDependencies = (dependency) => {
    if (filterDependencies.includes(dependency)) {
      setFilterDependencies((list) => list.filter((dep) => dep !== dependency));
    } else {
      setFilterDependencies((list) => [...list, dependency]);
    }
  };

  const listOfPossibleTechnologies = [
    'React',
    'Redux',
    'TypeScript',
    'Styled Components',
    'Material UI',
    '[CSS / SCSS] Modules',
    'Firebase',
  ];

  return (
    <>
      <section>
        <h2 className="title">
          <span>Portfolio</span>
        </h2>
        <div>
          <button onClick={options.sortedIn === 'Asc' ? sortDesc : sortAsc}>
            Sort By Date {options.sortedIn === 'Asc' ? '\u2191' : '\u2193'}
          </button>
          {listOfPossibleTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => {
                toggleFilterDependencies(tech);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toggleFilterDependencies(tech);
                }
              }}
            >
              {filterDependencies.includes(tech) ? '-' : '+'} {tech}
            </button>
          ))}
        </div>
        <ProjectsList
          projects={projects}
          options={options}
          dependencies={filterDependencies}
        />
      </section>
    </>
  );
};

export default Portfolio;
