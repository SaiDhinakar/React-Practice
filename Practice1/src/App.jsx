import ChildCompoenent from "./components/ChildCompoenent"
import Student from "./components/Student"

import FunctionSample from "./components/FunctionSample";
import MultiTypeCompoenet from "./components/MultiTypeCompoenet";

import ArraySample from "./components/ArraySample"
import OneofTypesColors from "./components/OneofTypesColors";

import LearnComponents from "./components/LearnComponents"
import Header from "./components/Header"

function App() {
  const fruits = [
    {id:1,  name:'Apple'},
    {id:2,  name:'Mango'},
    {id:3,  name:'Orange'},
    {id:4,  name:'Watermelon'},
  ];

  const handleButton = () => {
    alert('Button Clicked!')
  }

  return (
    <>
    <LearnComponents />
    <Header />
     <h2>Student Data</h2>
     <Student  name='Sai' age={19} year='II'/>
     <Student  name='Sabari' age={19} year='II'/>
     <Student  name='Arun' age={19} year='II'/>

     <ChildCompoenent>
        <p>This sample para in Childcomponent</p>
        <p>This sample para in Childcomponent</p>
        <p>This sample para in Childcomponent</p>
     </ChildCompoenent> 
     <ArraySample items={fruits}/>
     

      <OneofTypesColors color="black"/>
      <OneofTypesColors color="brown"/>
      <MultiTypeCompoenet  value="hii"/>
      <MultiTypeCompoenet  value={11}/>
      <MultiTypeCompoenet  value={true}/>
      <FunctionSample handle={handleButton}/>
    </>
  )
}

export default App
