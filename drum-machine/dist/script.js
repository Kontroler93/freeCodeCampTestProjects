class DrumMachine extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(DrumPad, null)));


  }}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipname: '' };

    this.playSound = this.playSound.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClick);
  }
  playSound(event) {
    document.getElementById(event.target.textContent).play();
    this.setState({ clipname: event.target.id });
  }
  handleClick(e) {
    var audioId = '';
    var clip = '';
    switch (e.keyCode) {
      case 81:
        audioId = 'Q';
        clip = 'Heater-1';
        break;
      case 87:
        audioId = "W";
        clip = 'Heater-2';
        break;
      case 69:
        audioId = "E";
        clip = 'Heater-3';
        break;
      case 65:
        audioId = "A";
        clip = 'Heater-4';
        break;
      case 83:
        audioId = "S";
        clip = 'Kick-n-Hat';
        break;
      case 68:
        audioId = "D";
        clip = 'Kick-1';
        break;
      case 90:
        audioId = "Z";
        clip = 'Chord-1';
        break;
      case 88:
        audioId = "X";
        clip = 'Chord-2';
        break;
      case 67:
        audioId = "C";
        clip = 'Chord-3';}

    document.getElementById(audioId).play();
    this.setState({
      clipname: clip });

  }
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { className: "drum-place" },
      React.createElement("div", { className: "drum-pad", id: "Heater-1", onClick: this.playSound }, "Q", React.createElement("audio", { className: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Heater-2", onClick: this.playSound }, "W", React.createElement("audio", { className: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Heater-3", onClick: this.playSound }, "E", React.createElement("audio", { className: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Heter-4", onClick: this.playSound }, "A", React.createElement("audio", { className: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Kick-n-Hat", onClick: this.playSound }, "S", React.createElement("audio", { className: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Kick-1", onClick: this.playSound }, "D", React.createElement("audio", { className: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Chord-1", onClick: this.playSound }, "Z", React.createElement("audio", { className: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Chord-2", onClick: this.playSound }, "X", React.createElement("audio", { className: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" })),
      React.createElement("div", { className: "drum-pad", id: "Chord-3", onClick: this.playSound }, "C", React.createElement("audio", { className: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" }))),

      React.createElement(Display, { name: this.state.clipname })));


  }}

class Display extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "display" },
      this.props.name));


  }}

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));