import PropTypes from 'prop-types';

const UserData = [
  {
    name: "Jon Doe",
    city: "New York",
    description: "Front-end Developer",
    skills: ["UI / UX", "HTML", "CSS", "JavaScritp", "React", "Node"],
    online: true,
    profile: "images/pic1.webp",
  },
  {
    name: "Alice Bob",
    city: "Quees",
    description: "Cyber Security Expert",
    skills: ["Networking", "Thread Management", "Network Management"],
    online: false,
    profile: "images/pic2.webp",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const UserCard = () => {
  return (
    <>
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};

export default UserCard;

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
