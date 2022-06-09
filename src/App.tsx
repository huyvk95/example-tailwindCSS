import React from "react";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex md:mt-8">
        {Array(10)
          .fill("")
          .map((o, i) => (
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "black",
                margin: 10,
              }}
            ></div>
          ))}
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
