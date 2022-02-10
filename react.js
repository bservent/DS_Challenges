/** 
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

/**
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

/**
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

/* two way dat binding */

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
