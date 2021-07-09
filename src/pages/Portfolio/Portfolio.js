import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { ProjectsList } from './ProjectsList'

const Portfolio = ({ portfolio, disableAnimation, enableAnimation }) => {
  const [filterDependencies, setFilterDependencies] = useState([])
  const [options, setOptions] = useState({
    sortedIn: 'Asc',
    sort: (a, b) => b.date - a.date,
    filter: (dependencies) => (t) =>
      dependencies.every((dep) => t.technologies.includes(dep)),
  })
  const [listOfPossibleTechnologies, setListOfPossibleTechnologies] = useState(
    []
  )
  const sortDesc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Desc',
      sort: (a, b) => a.date - b.date,
    }))
  }
  const sortAsc = () => {
    setOptions((options) => ({
      ...options,
      sortedIn: 'Asc',
      sort: (a, b) => b.date - a.date,
    }))
  }
  const toggleFilterDependencies = (dependency) => {
    if (filterDependencies.includes(dependency)) {
      setFilterDependencies((list) => list.filter((dep) => dep !== dependency))
    } else {
      setFilterDependencies((list) => [...list, dependency])
    }
  }

  useEffect(() => {
    if (!portfolio) return

    setListOfPossibleTechnologies([
      ...new Set(portfolio.flatMap((item) => item.technologies)),
    ])
  }, [portfolio])

  return (
    <>
      <section className="portfolio">
        <h2 className="title opacity">
          <span>Portfolio</span>
        </h2>
        <div className="options opacity">
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
                  toggleFilterDependencies(tech)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toggleFilterDependencies(tech)
                  }
                }}>
                {tech}
              </button>
            ))}
          </div>
        </div>
        <ProjectsList
          disableAnimation={disableAnimation}
          enableAnimation={enableAnimation}
          projects={portfolio}
          options={options}
          dependencies={filterDependencies}
        />
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  portfolio: state.data?.portfolio,
})

export default connect(mapStateToProps)(Portfolio)
