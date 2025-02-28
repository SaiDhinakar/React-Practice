
function User() {
    return (
        <div className="card-container">
            <span className="pro">ONLINE</span>
            <img src="images/pic1.webp" className="img" alt="" />
            <h3>Full Name</h3>
            <h3>Tiruppur</h3>
            <p>front-end developer</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div>
                <h6 className="skills">Skills</h6>
                <ul>
                </ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
            </div>
        </div>
    )
}

const UserCard = () => {
  return (
    <User />
  )
}

export default UserCard
