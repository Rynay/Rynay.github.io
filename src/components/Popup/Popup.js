import { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const Popup = ({ portfolio }) => {
  const params = useParams()
  const [project, setProject] = useState({})

  useLayoutEffect(() => {
    if (!portfolio) return
    const target = portfolio.find((project) => project.name === params.name)
    setProject(target)
  }, [params.name])

  return (
    <section className="popup__container">
      <div className="popup__imageContainer">
        <img src={project.image} alt="" />
      </div>
      <div className="popup__contentContainer">
        <h2 className="popup__title">{project.title}</h2>
        <p className="popup__description">{project.description}</p>
        <div className="popup__technologies"></div>
        <a
          href={project.link}
          rel="noreferrer"
          target="_blank"
          className="popup__link">
          Visit Website
        </a>
      </div>
      <button aria-label="close">X</button>
    </section>
  )
}

const mapStateToProps = (state) => ({
  portfolio: state.data?.portfolio,
})

export default connect(mapStateToProps)(Popup)
