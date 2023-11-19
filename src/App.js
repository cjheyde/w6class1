import "./App.css";
import Header from "./Header";
import FunctionalComponenet from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import MyClassComponent from "./MyClassComponent";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div class="box">
      <Header />
      <FunctionalComponenet />
      <ClassComponent />
      <MyClassComponent compProp="Here is the value of the prop of the Class Component" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
