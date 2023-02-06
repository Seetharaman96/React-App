import { useState } from "react"; //named import

function Msgtwo() {
  let person = [
    {
      name: "Natasha",
      pic: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      name: "Joey",
      pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Emma",
      pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div>
      {person.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}
    </div>
  );
}
function CounterLike() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>
    </div>
  );
}
// //using destructuring
function Msg({ pic, name }) {
  return (
    <div>
      <img className="pic" src={pic} alt={name} />
      <h1>
        Hello all, This is <span className="username">{name}</span>😍😎
      </h1>
      <CounterLike />
    </div>
  );
}
// ------------------------------------------------------
// // //using props(properties(arguments called as props in react))
// function Msg(props) {
//   // console.log(props);
//   // let names = props.name;
//   return (
//     <div>
//       <img className="pic" src={props.pic} alt={props.name} />
//       <h1>
//         Hello all, This is <span className="username">{props.name}</span>😍😎
//       </h1>
//     </div>
//   );
// }

// ----------------------------ColorGame-------------------------------------

function ColorGame() {
  let [colors, setColors] = useState(["crimson", "orange", "aqua"]);
  let [color, setColor] = useState("");
  // let [color, setColor] = useState("purple");
  let styles = {
    background: color,
  };
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr) => (
        <ColorChange col={clr} />
      ))}
    </div>
  );
}

function ColorChange({ col }) {
  let styling = {
    width: "177px",
    height: "25px",
    background: col,
    marginTop: "5px",
    marginBottom: "5px",
  };
  return <div style={styling}></div>;
}

export { Msgtwo, ColorGame }; //multiple named export
