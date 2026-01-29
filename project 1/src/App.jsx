import Data from "./data";
import Listofdata from "./components/Listofdata";
import Header from "./components/Header";
import Example from "./components/Examplse";
import { useState } from "react";

function App() {
  const [selectedExample, setselectedExample] = useState(
    "Please click a button",
  );
  function handleSelect(Nameofbutton) {
    setselectedExample(Nameofbutton);
    console.log(selectedExample);
  }
  let tabContent = <p>Please Click a button</p>;
  if (selectedExample) {
    tabContent = (
      <div id="tab-content">
        {selectedExample && (
          <p>
            {selectedExample} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sed maiores nobis itaque porro. Iure optio,
            similique veniam nulla quae enim sunt. Distinctio nemo laborum quos
            dolore, porro aperiam autem quod.{" "}
          </p>
        )}
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>List of Data</h2>
          <ul>
            {Data.map((data) => (
              <Listofdata key ={data.title} {...data} />
            ))}
            {/* <Listofdata
              // image={Data[0].img}
              // title={Data[0].title}
              // description={Data[0].desciption}
              {...Data[0]}
            />
            <Listofdata
              // image={Data[1].img}
              // title={Data[1].title}
              // description={Data[1].desciption}
              {...Data[1]}
            />
            <Listofdata
              // image={Data[2].img}
              // title={Data[2].title}
              // description={Data[2].desciption}
              {...Data[2]}
            />
            <Listofdata
              // image={Data[3].img}
              // title={Data[3].title}
              // description={Data[3].desciption}
              {...Data[3]}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <Example
              description="Example 1"
              onSelect={() => handleSelect("Example 1")}
              isSelected={selectedExample === "Example 1"}
            />
            <Example
              description="Example 2"
              onSelect={() => handleSelect("Example 2")}
              isSelected={selectedExample === "Example 2"}
            />
            <Example
              description="Example 3"
              onSelect={() => handleSelect("Example 3")}
              isSelected={selectedExample === "Example 3"}
            />
            <Example
              description="Example 4"
              onSelect={() => handleSelect("Example 4")}
              isSelected={selectedExample === "Example 4"}
            />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
