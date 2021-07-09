import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

export const Project = forwardRef((props, ref) => {
  return (
    <li ref={ref} className="project">
      <div
        className="project__link"
        // href={props.link}
        // rel="noreferrer"
        // target="_blank"
      >
        <div className="project__imageContainer">
          <img src={props.image} alt="Site example" />
        </div>
        <Link
          to={`/portfolio/${props.name}`}
          className="project__togglePopup"
          aria-haspopup>
          <span>Info</span>
        </Link>
        {/* <div className="project__info">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__description">{props.description}</p>
        </div> */}
      </div>
    </li>
  )
})
