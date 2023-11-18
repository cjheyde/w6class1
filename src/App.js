import "./App.css";
import FunctionalComponenet from "./FunctionalComponent";
import Name from "./Name";
import ClassComponent from "./ClassComponent";
import MyClassComponent from "./MyClassComponent";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div class="box">
      <FunctionalComponenet />
      <Name />
      <ClassComponent />
      <MyClassComponent compProp="Here is the value of the prop of the Class Component" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
