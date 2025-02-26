const Header = () => {
  let error = 'error';
  let success = 'success'
  const userLogin = true;
  const greet = userLogin ?  <h2>Welcome to React Learning!</h2> : <h2>Please Login to continoue</h2>
  const items = ['item1', 'item2', 'item3','item4'];
  return <>
    <div>
        {greet}
        <div  className="header">React Learning</div>
        <p className="para" style={{fontSize:'25px',fontStyle:'italic'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem voluptates soluta ea ex alias sequi iusto voluptatibus molestiae eaque voluptas hic nostrum ratione modi odit a, laboriosam consectetur excepturi.</p>
        
        {/* JavaScript Expressions */}
        <p className={success}>10 + 10 = {10+10}</p>
        <p className={error}>10 + 10 = {10+20}</p>


        {/* JSX with list   */}
        <ul>
            {items.map((item,idx)=>(<li key={item}>{item}</li>))}
        </ul>
    </div>
  </>
}

export default Header
