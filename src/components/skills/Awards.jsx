import awards from '../../data/awards'

const Awards = () => {
  return (
    <div className="education">
      <h4 className="label">Awards</h4>
      <ul className="education-list">
        {awards.map((item, i) => (
            <li className="item" key={i}>
                <span className="year">{item.year}</span>
                <p>{item.degree} - {item.institution}</p>
            </li>
        ))}
      </ul>
  </div>
  )
}

export default Awards