import PropTypes from 'prop-types';

const ArraySample = (props) => {
    const {items} = props;
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
            ))}
      </ul>
    </div>
  )
}

export default ArraySample;

ArraySample.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired,
}