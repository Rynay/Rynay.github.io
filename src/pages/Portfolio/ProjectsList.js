import { Project } from './Project'
import FlipMove from 'react-flip-move'

export const ProjectsList = ({ projects = [], options = [], dependencies }) => {
  const sortedAndFilteredProjects = [...projects]
    .filter(options.filter(dependencies))
    .sort(options.sort)
    .map((project) => <Project key={project.id} {...project} />)

  return (
    <FlipMove typeName="ul" className="projects-list opacity">
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
