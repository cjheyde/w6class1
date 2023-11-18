import "./App.css";
import FunctionalComponenet from "./FunctionalComponent";
import Name from "./Name";
import ClassComponent from "./ClassComponent";
import MyClassComponent from "./MyClassComponent";

function App() {
  return (
    <div class="box">
      <FunctionalComponenet />
      <Name />
      <ClassComponent />
      <MyClassComponent compProp="Here is the value of the prop of the Class Component" />
    </div>
  );
}

export default App;
