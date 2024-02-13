// Write your code here
import './index.css'

const DestinationItem = props => {
  const {dDetails} = props
  const {imgUrl, name} = dDetails

  return (
    <li className="destinatoin-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
