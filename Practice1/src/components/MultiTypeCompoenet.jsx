import PropTypes from 'prop-types';

const MultiTypeCompoenet = (props) => {
  return (
    <div>
      <div>
        <p>The value is : {props.value}</p>
      </div>
    </div>
  )
}

export default MultiTypeCompoenet

MultiTypeCompoenet.propTypes ={
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}