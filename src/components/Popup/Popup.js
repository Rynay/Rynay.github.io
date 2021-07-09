import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

const Popup = ({ setTargetProjectName, project }) => {
  const params = useParams()

  useLayoutEffect(() => {
    setTargetProjectName('')
  }, [])

  useLayoutEffect(() => {
    setTargetProjectName(params.name)
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

export default Popup
