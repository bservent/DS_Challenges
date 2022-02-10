/**1. 
  Challenge: Display `JSX is cool!` as an output
  
  Solution: https://codepen.io/angelo_jin/pen/xxXrZLd
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
/* function App() {
  return (
    <div>
      <h1>JSX is cool!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

console.log(App()) */

/**2.
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
  
  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

/* const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);
function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); */

/**3.
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
/* function App() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
      {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      {show && <div>Toggle Challenge</div>}
    </>
  );
} */

/* ReactDOM.render(<App />, document.getElementById("root")); */

/* 4. two way dat binding */

/* function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); */

/*5. disable button */
/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
/* function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <button disabled={value.length < 1}>Submit</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root")); */