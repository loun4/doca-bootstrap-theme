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
var ImmutablePropTypes = require('react-immutable-proptypes');
var Component = require('react-pure-render/component');
var Sidebar = require('./sidebar');
var Schema = require('./schema');

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schemas = _props.schemas,
          config = _props.config;


      return React.createElement(
        'div',
        { id: 'wrapper' },
        React.createElement(Sidebar, { schemas: schemas }),
        React.createElement(
          'div',
          { id: 'page-content-wrapper' },
          React.createElement(
            'div',
            { className: 'container-fluid' },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'col-lg-12' },
                React.createElement(
                  'h1',
                  null,
                  config.title
                ),
                schemas.filter(function (schema) {
                  return !schema.get('cfHidden');
                }).valueSeq().map(function (schema) {
                  return React.createElement(Schema, { key: schema.get('id'), schema: schema });
                })
              )
            )
          )
        )
      );
    }
  }]);
  return App;
}(Component);

App.propTypes = {
  schemas: ImmutablePropTypes.list.isRequired,
  config: React.PropTypes.object
};


module.exports = App;