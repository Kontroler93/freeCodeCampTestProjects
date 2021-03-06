class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timer: "25:00",
      timerId: null,
      duration: null,
      timerType: true };

    this.timerReset = this.timerReset.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
    this.toggleTimerState = this.toggleTimerState.bind(this);
    this.runTimer = this.runTimer.bind(this);
    this.toggleTimerType = this.toggleTimerType.bind(this);
    this.setSessionLengthTrue = this.setSessionLengthTrue.bind(this);
    this.setBreakLengthFalse = this.setBreakLengthFalse.bind(this);
  }
  timerReset() {
    document.getElementById('start_stop').innerHTML = '<i class="fas fa-play"</i>';
    clearInterval(this.state.timerId);
    var audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: "25:00",
      duration: null,
      timerId: null,
      timerType: true });

  }
  setBreakLengthFalse(e) {
    if (e.currentTarget.id == "break-decrement" && this.state.breakLength > 1 && this.state.timerId == null) {
      this.setState({
        breakLength: this.state.breakLength - 1,
        timer: (this.state.breakLength - 1 < 10 ? '0' + (this.state.breakLength - 1) : this.state.breakLength - 1) + ":00",
        duration: null });

    } else if (
    e.currentTarget.id == "break-increment" &&
    this.state.breakLength < 60 && this.state.timerId == null)
    {
      this.setState({
        breakLength: this.state.breakLength + 1,
        timer: (this.state.breakLength + 1 < 10 ? '0' + (this.state.breakLength + 1) : this.state.breakLength + 1) + ":00",
        duration: null });

    } else {
      this.setState({
        breakLength: this.state.breakLength });

    }
  }
  setBreakLength(e) {
    if (e.currentTarget.id == "break-decrement" && this.state.breakLength > 1 && this.state.timerId == null) {
      this.setState({
        breakLength: this.state.breakLength - 1 });

    } else if (
    e.currentTarget.id == "break-increment" &&
    this.state.breakLength < 60 && this.state.timerId == null)
    {
      this.setState({
        breakLength: this.state.breakLength + 1 });

    } else {
      this.setState({
        breakLength: this.state.breakLength });

    }
  }
  setSessionLengthTrue(e) {
    if (
    e.currentTarget.id == "session-decrement" &&
    this.state.sessionLength > 1 && this.state.timerId == null) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timer: (this.state.sessionLength - 1 < 10 ? '0' + (this.state.sessionLength - 1) : this.state.sessionLength - 1) + ":00",
        duration: null });

    } else if (
    e.currentTarget.id == "session-increment" &&
    this.state.sessionLength < 60 && this.state.timerId == null) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timer: (this.state.sessionLength + 1 < 10 ? '0' + (this.state.sessionLength + 1) : this.state.sessionLength + 1) + ":00",
        duration: null });

    } else {
      this.setState({
        sessionLength: this.state.sessionLength });

    }
  }
  setSessionLength(e) {
    if (
    e.currentTarget.id == "session-decrement" &&
    this.state.sessionLength > 1 && this.state.timerId == null) {
      this.setState({
        sessionLength: this.state.sessionLength - 1 });

    } else if (
    e.currentTarget.id == "session-increment" &&
    this.state.sessionLength < 60 && this.state.timerId == null) {
      this.setState({
        sessionLength: this.state.sessionLength + 1 });

    } else {
      this.setState({
        sessionLength: this.state.sessionLength });

    }
  }
  toggleTimerType() {
    this.setState({
      timerType: !this.state.timerType });

  }
  toggleTimerState() {
    if (this.state.timerId == null) {
      this.runTimer();
      document.getElementById('start_stop').innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      document.getElementById('start_stop').innerHTML = '<i class="fas fa-play"</i>';
      clearInterval(this.state.timerId);
      this.setState({
        timerId: null });

    }
  }
  runTimer() {
    if (this.state.duration == null && this.state.timerType) {
      this.setState({
        duration: this.state.sessionLength * 60 });

    } else if (this.state.duration == null && !this.state.timerType) {
      this.setState({
        duration: this.state.breakLength * 60 });

    } else {
      this.setState({
        duration: this.state.duration });

    }
    this.state.timerId = setInterval(() => {
      this.setState({
        duration: this.state.duration - 1 });

      var minutes = Math.floor(this.state.duration / 60);
      var seconds = this.state.duration - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.setState({
        timer: minutes + ":" + seconds });

      if (this.state.duration === 0) {
        document.getElementById('beep').play();
        this.toggleTimerType();
        this.setState({
          duration: this.state.timerType ? this.state.sessionLength * 60 : this.state.breakLength * 60 });

      }
    }, 1000);
  }

  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("h1", null, "Pomodoro Clock"),
      React.createElement("div", { className: "session-controls" },
      React.createElement(BreakLength, { timerType: this.state.timerType, setBreakLengthFalse: this.setBreakLengthFalse,
        setBreakLength: this.setBreakLength,
        brLength: this.state.breakLength }),

      React.createElement(SessionLength, { timerType: this.state.timerType, setSessionLengthTrue: this.setSessionLengthTrue,
        setSessionLength: this.setSessionLength,
        sLength: this.state.sessionLength })),


      React.createElement(Timer, { timer: this.state.timer, timerType: this.state.timerType }),
      React.createElement(Controls, {
        toggleTimerState: this.toggleTimerState,
        tReset: this.timerReset })));



  }}

class BreakLength extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h3", { id: "break-label" }, "Break Length"),
      React.createElement("div", { className: "controls" },
      React.createElement("button", { id: "break-decrement", onClick: !this.props.timerType ? this.props.setBreakLengthFalse : this.props.setBreakLength },
      React.createElement("i", { class: "fas fa-caret-left" })),

      React.createElement("div", { id: "break-length" }, this.props.brLength),
      React.createElement("button", { id: "break-increment", onClick: !this.props.timerType ? this.props.setBreakLengthFalse : this.props.setBreakLength },
      React.createElement("i", { class: "fas fa-caret-right" })))));




  }}

class SessionLength extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h3", { id: "session-label" }, "Session Length"),
      React.createElement("div", { className: "controls" },
      React.createElement("button", { id: "session-decrement", onClick: this.props.timerType ? this.props.setSessionLengthTrue : this.props.setSessionLength },
      React.createElement("i", { class: "fas fa-caret-left" })),

      React.createElement("div", { id: "session-length" }, this.props.sLength),
      React.createElement("button", { id: "session-increment", onClick: this.props.timerType ? this.props.setSessionLengthTrue : this.props.setSessionLength },
      React.createElement("i", { class: "fas fa-caret-right" })))));




  }}

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { className: "timer" },
      React.createElement("h3", { id: "timer-label" }, this.props.timerType ? "Session" : "Break"),
      React.createElement("div", { id: "time-left" }, this.props.timer, React.createElement("audio", { id: "beep", preload: "auto", src: "https://goo.gl/65cBl1" }))));


  }}

class Controls extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "controls" },
      React.createElement("button", { id: "start_stop", onClick: this.props.toggleTimerState }, React.createElement("i", { class: "fas fa-play" })),

      React.createElement("button", { id: "reset", onClick: this.props.tReset },
      React.createElement("i", { class: "fas fa-sync" }))));



  }}

ReactDOM.render(React.createElement(PomodoroClock, null), document.getElementById("app"));