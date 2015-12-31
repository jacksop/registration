var Counter = React.createClass({
  render: function render() {
    return <span id="counter">{this.props.text.length}</span>;
  }
});

var TextAreaWithCounter = React.createClass({
  getInitialState: function getInitialState() {
    return {bioText: ''};
  },

  handleChange: function handleChange(e) {
   console.log(e.target);
   this.setState({bioText: e.target.value});
  },

  render: function render() {
    return <p>
      <label htmlFor="bio">Bio:</label>
      <textarea id="bio" value={this.state.bioText} onChange={this.handleChange}/>
      <Counter text={this.state.bioText}/>
    </p>;
  }
});

$(document).ready(function() {
  ReactDOM.render(<TextAreaWithCounter />,
    $('#bioInput')[0]);
  ReactDOM.render(<TextAreaWithCounter />, $('#bioInput2')[0]);
});
