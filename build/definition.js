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

/* eslint global-require: 0 */

var React = require('react');
var ImmutablePropTypes = require('react-immutable-proptypes');
var Component = require('react-pure-render/component');

var Definition = function (_Component) {
  (0, _inherits3.default)(Definition, _Component);

  function Definition() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Definition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Definition.__proto__ || (0, _getPrototypeOf2.default)(Definition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showDefinition: false
    }, _this.handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          showDefinition: !prevState.showDefinition
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Definition, [{
    key: 'renderDefTable',
    value: function renderDefTable(definitions) {
      var ObjectDefinitionTable = require('./objectDefinitionTable');
      return React.createElement(ObjectDefinitionTable, { definitions: definitions });
    }
  }, {
    key: 'render',
    value: function render() {
      var definitions = this.props.definitions;
      var showDefinition = this.state.showDefinition;


      return React.createElement(
        'div',
        null,
        IS_JAVASCRIPT && React.createElement(
          'a',
          {
            onClick: this.handleToggle,
            style: { cursor: 'pointer' }
          },
          React.createElement(
            'span',
            null,
            showDefinition ? 'Hide' : 'Show'
          ),
          ' definition \xBB'
        ),
        (showDefinition || !IS_JAVASCRIPT) && this.renderDefTable(definitions)
      );
    }
  }]);
  return Definition;
}(Component);

Definition.propTypes = {
  definitions: ImmutablePropTypes.map,
  contextId: React.PropTypes.string,
  fieldPointer: React.PropTypes.string
};


module.exports = Definition;