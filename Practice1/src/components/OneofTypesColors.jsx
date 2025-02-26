import PropTypes from 'prop-types';

const OneofTypesColors = (props) => {

  const {color} = props;
  return (
    <div style={{backgroundColor:color, padding:"10px", color:"#ccc"}}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quidem quibusdam sint, sunt voluptates, facilis eveniet molestiae, earum voluptatem quod sapiente explicabo autem. Accusamus voluptas numquam ea ab, consectetur delectus?</p>
    </div>
  )
}

OneofTypesColors.propTypes={
    color:PropTypes.oneOf(["red","blue","green"]).isRequired,
};

export default OneofTypesColors;

