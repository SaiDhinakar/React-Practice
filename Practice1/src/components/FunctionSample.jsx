import PropTypes from 'prop-types';

const FunctionSample = (props) => {
  const {handle} = props;
  return (
    <div>
        <h2>Function Sample</h2>
      <button className="button" onClick={handle}>Click me</button>
    </div>
  )
}

export default FunctionSample

FunctionSample.propTypes={
    handle:PropTypes.func.isRequired,
}