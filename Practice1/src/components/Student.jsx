import PropTypes from 'prop-types';


const Student = (props) => {
  return (
    <div className='student'>
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Year</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.year}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    year: PropTypes.string
}

// Student.defaultProps={
//     name: "No name",
//     age: 18,
//     year: 'I'
// }