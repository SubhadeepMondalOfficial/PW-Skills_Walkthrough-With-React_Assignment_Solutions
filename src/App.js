import "./App.css";

// Question-1
import Person from "./Question-1/Person";
// Question-2
import { Button } from "./Question-2/Button";
// Question-3
import Header from "./Question-3/Header";
// Question-4
import List from "./Question-4/List";

function App() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  const listItems = {
    item1: "Biscuits",
    item2: "Chocolets",
    item3: "Soft-Drinks",
    item4: "Maggie",
  };

  return (
    <div>
      {/* Question-1 */}
      <Person name="Amit Gupta" age="33"></Person>

      {/* Question-2 */}
      <Button text="Click Me" onClick={handleClick}></Button>

      {/* Question-3 */}
      <Header title="You are under Header tag"></Header>

      {/* Question-4 */}
      <List items={listItems}></List>
    </div>
  );
}

export default App;
