'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var Component = require('react-pure-render/component');

var ExampleObject = function (_Component) {
  (0, _inherits3.default)(ExampleObject, _Component);

  function ExampleObject() {
    (0, _classCallCheck3.default)(this, ExampleObject);
    return (0, _possibleConstructorReturn3.default)(this, (ExampleObject.__proto__ || (0, _getPrototypeOf2.default)(ExampleObject)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExampleObject, [{
    key: 'render',
    value: function render() {
      var example = this.props.example;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'h5',
            null,
            'Example object'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'pre',
            null,
            example
          )
        )
      );
    }
  }]);
  return ExampleObject;
}(Component);

ExampleObject.propTypes = {
  example: React.PropTypes.string.isRequired
};


module.exports = ExampleObject;