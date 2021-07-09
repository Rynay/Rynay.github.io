import { Project } from './Project'
import FlipMove from 'react-flip-move'

export const ProjectsList = ({
  projects = [],
  options = [],
  dependencies,
  disableAnimation,
  enableAnimation,
}) => {
  const sortedAndFilteredProjects = [...projects]
    .filter(options.filter(dependencies))
    .sort(options.sort)
    .map((project) => <Project key={project.id} {...project} />)

  return (
    <FlipMove
      typeName="ul"
      className="projects-list opacity"
      onMouseEnter={disableAnimation}
      onMouseLeave={enableAnimation}>
      {sortedAndFilteredProjects.length ? (
        sortedAndFilteredProjects
      ) : (
        <li className="projects-list__message">
          Нет проектов по заданным фильтрам
        </li>
      )}
    </FlipMove>
  )
}
