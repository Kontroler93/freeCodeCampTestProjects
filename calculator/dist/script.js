class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "calc" },
      React.createElement(Interface, null)));


  }}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { className: "row no-gutters text-right" },
      React.createElement("div", { id: "display", className: "col-sm-11" },
      this.props.result)));



  }}


class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: null,
      prevValue: '0',
      operator: '',
      result: '0' };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.answer = this.answer.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.rounded = this.rounded.bind(this);
  }
  handleReset() {
    this.setState({
      currentValue: null,
      prevValue: '0',
      operator: '',
      result: '0' });

  }
  rounded(n) {
    return Math.round(n * 10000) / 10000;
  }
  handleNumber(e) {
    if (this.state.currentValue === null || this.state.currentValue == '0') {
      this.setState({
        currentValue: e.target.textContent,
        result: e.target.textContent });

    } else if (this.state.currentValue.length >= 15) {
      this.setState({
        currentValue: this.state.currentValue,
        result: this.state.currentValue });

    } else if (this.state.currentValue === '0' && e.target.textContent === '0') {
      this.setState({
        currentValue: this.state.currentValue });

    } else {
      this.setState({
        currentValue: this.state.currentValue + e.target.textContent,
        result: this.state.currentValue + e.target.textContent });

    }
  }
  answer(val1, val2, operator) {
    if (operator === '+') {return +val1 + +val2;}
    if (operator === '-') {return val1 - val2;}
    if (operator === '*') {return val1 * val2;}
    if (operator === '/') {return val1 / val2;}
  }
  handleOperator(e) {
    if (this.state.operator == '') {
      this.setState({
        currentValue: null,
        prevValue: this.state.currentValue,
        operator: e.target.textContent });

    } else if (this.state.operator !== '' && this.state.currentValue === null) {
      this.setState({
        operator: e.target.textContent });

    } else {
      this.setState({
        currentValue: null,
        prevValue: this.answer(this.state.prevValue, this.state.currentValue, this.state.operator),
        operator: e.target.textContent,
        result: this.rounded(this.answer(this.state.prevValue, this.state.currentValue, this.state.operator)) });

    }
  }
  handleEqual() {
    if (this.state.operator == '') {
      this.setState({
        result: this.state.currentValue });

    } else if (this.state.operator != '' && this.state.currentValue === null) {
      this.setState({
        result: this.state.prevValue });

    } else {
      this.setState({
        currentValue: this.rounded(this.answer(this.state.prevValue, this.state.currentValue, this.state.operator)),
        prevValue: '0',
        operator: '',
        result: this.rounded(this.answer(this.state.prevValue, this.state.currentValue, this.state.operator)) });

    }
  }
  handleDecimal(e) {
    var reg = /\./;
    if (reg.test(this.state.currentValue)) {
      this.setState({
        currentValue: this.state.currentValue });

    } else {
      this.setState({
        currentValue: this.state.currentValue + e.target.textContent,
        result: this.state.currentValue + e.target.textContent });

    }
  }
  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement(Display, { result: this.state.result }),
      React.createElement("div", { className: "row no-gutters text-center" },
      React.createElement("div", { className: "col-sm-3", id: "clear" }, React.createElement("button", { className: "btn btn-danger", id: "clear", onClick: this.handleReset }, "AC")),

      React.createElement("div", { className: "col-sm-3", id: "clear" }, React.createElement("button", { className: "btn btn-danger", id: "reset" }, "CE")),

      React.createElement("div", { className: "col-sm-3" }, React.createElement("button", { className: "btn btn-dark" }, "%")),

      React.createElement("div", { className: "col-sm-3", id: "divide" }, React.createElement("button", { className: "btn btn-dark", id: "divide", onClick: this.handleOperator }, "/"))),


      React.createElement("div", { className: "row no-gutters text-center" },
      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "seven", onClick: this.handleNumber }, "7")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "eight", onClick: this.handleNumber }, "8")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "nine", onClick: this.handleNumber }, "9")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "multiply", onClick: this.handleOperator }, "*"))),


      React.createElement("div", { className: "row no-gutters text-center" },
      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "four", onClick: this.handleNumber }, "4")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "five", onClick: this.handleNumber }, "5")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "six", onClick: this.handleNumber }, "6")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "subtract", onClick: this.handleOperator }, "-"))),


      React.createElement("div", { className: "row no-gutters text-center" },
      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "one", onClick: this.handleNumber }, "1")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "two", onClick: this.handleNumber }, "2")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "three", onClick: this.handleNumber }, "3")),

      React.createElement("div", { className: "col-sm" }, React.createElement("button", { className: "btn btn-dark", id: "add", onClick: this.handleOperator }, "+"))),


      React.createElement("div", { className: "row no-gutters text-center" },
      React.createElement("div", { className: "col-sm-3" }, React.createElement("button", { className: "btn btn-dark", id: "zero", onClick: this.handleNumber }, "0")),

      React.createElement("div", { className: "col-sm-3" }, React.createElement("button", { className: "btn btn-dark", id: "decimal", onClick: this.handleDecimal }, ".")),

      React.createElement("div", { className: "col-sm-3" }, React.createElement("button", { className: "btn btn-success", id: "equals", onClick: this.handleEqual }, "=")))));




  }}


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));