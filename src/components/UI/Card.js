import './Card.css'

const Card = props => {
  const dynamicClassNames = 'dummyName ' + props.className

  return (
    <div className={dynamicClassNames}>
      {props.children}
    </div>
  )
}

export default Card
