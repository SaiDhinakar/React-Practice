import ChildCompoenent from "./components/ChildCompoenent"
import Student from "./components/Student"


function App() {
  return (
    <>
    <h2>Student Data</h2>
     <Student  name='Sai' age={19} year='II'/>
     <Student  name='Sabari' age={19} year='II'/>
     <Student  name='Arun' age={19} year='II'/>
     {/* <Student  name='Sai'/> */}

     <ChildCompoenent>
        <p>This sample para in Childcomponent</p>
        <p>This sample para in Childcomponent</p>
        <p>This sample para in Childcomponent</p>
     </ChildCompoenent>
    </>
  )
}

export default App
