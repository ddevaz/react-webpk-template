
var React = require('react');

module.exports =  React.createClass({
  render: function() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  },
});


