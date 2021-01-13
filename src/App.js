import React from "react";
import "./styles.css";

function Player(props) {
  const stylePlayer = {
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    top: props.top + "px",
    left: props.left + "px",
    position: "absolute"
  };
  return <div style={stylePlayer}></div>;
}

class GameArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 40,
      left: 30
    };
    // putem inregistra aici keydown
  }

  componentDidMount() {
    // putem inregistra aici keydown
    document.addEventListener("keydown", (event) => {
      console.log(event.code);
      let nextTop = this.state.top;
      let nextLeft = this.state.left;
      switch (event.code) {
        case "ArrowUp":
          nextTop -= 10;
          break;
        case "ArrowDown":
          nextTop += 10;

          break;
        case "ArrowLeft":
          nextLeft -= 10;
          break;

        case "ArrowRight":
          nextLeft += 10;
          break;
        default:
      }

      console.log("nextTop", nextTop);
      console.log("nextLeft", nextLeft);

      this.setState({ top: nextTop, left: nextLeft });
    });
  }

  render() {
    const styleAera = {
      width: "400px",
      height: "400px",
      backgroundColor: "grey"
    };
    return (
      <div style={styleAera}>
        <Player top={this.state.top} left={this.state.left} />
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <GameArea />
    </div>
  );
}
