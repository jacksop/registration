var TextAreaWithCounter = React.createClass({
  render: function render() {
    return <p>
      <label htmlFor="bio">Bio:</label>
      <textarea id="bio"></textarea>
      <span id="counter"></span>
    </p>;
  }
});

$(document).ready(function() {
  ReactDOM.render(<TextAreaWithCounter />,
    $('#bioInput')[0]);

  /*
  $('#bio').keyup(function(event) {
    console.log('i changed');
    var count = $('#bio').val().length
    $('#counter').text(count)
  });
  */
});

