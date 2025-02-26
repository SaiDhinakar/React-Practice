import PropTypes from 'prop-types';

const ChildCompoenent = (props) => {
  return (
    <div>
      <h2>These are child compoenents</h2>
      <div>{props.children}</div>
    </div>
  )
}

export default ChildCompoenent;

ChildCompoenent.propTypes={
    children:PropTypes.array,
};
