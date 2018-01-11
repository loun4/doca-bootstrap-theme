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
var _ = require('lodash/core');

var Constraints = function (_Component) {
  (0, _inherits3.default)(Constraints, _Component);

  function Constraints() {
    (0, _classCallCheck3.default)(this, Constraints);
    return (0, _possibleConstructorReturn3.default)(this, (Constraints.__proto__ || (0, _getPrototypeOf2.default)(Constraints)).apply(this, arguments));
  }

  (0, _createClass3.default)(Constraints, [{
    key: 'considerType',
    value: function considerType(value) {
      if (_.isString(value)) {
        return '"' + value + '"';
      }
      if (_.isNull(value)) {
        return 'null';
      }
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var constraints = this.props.constraints;

      if (!constraints) return React.createElement('div', null);
      return React.createElement(
        'ul',
        { className: 'constraints' },
        constraints.get('readOnly') && React.createElement(
          'li',
          { className: 'read-only' },
          'read only'
        ),
        constraints.has('default') && React.createElement(
          'li',
          null,
          'default value: ' + constraints.get('default')
        ),
        (constraints.get('minItems') || constraints.get('minItems') === 0) && React.createElement(
          'li',
          null,
          'min length: ',
          constraints.get('minItems')
        ),
        (constraints.get('maxItems') || constraints.get('maxItems') === 0) && React.createElement(
          'li',
          null,
          'max length: ',
          constraints.get('maxItems')
        ),
        constraints.get('uniqueItems') && React.createElement(
          'li',
          null,
          'unique items'
        ),
        (constraints.get('minProperties') || constraints.get('minProperties') === 0) && React.createElement(
          'li',
          null,
          'min length: ',
          constraints.get('minProperties')
        ),
        (constraints.get('maxProperties') || constraints.get('maxProperties') === 0) && React.createElement(
          'li',
          null,
          'max length: ',
          constraints.get('maxProperties')
        ),
        (constraints.get('minLength') || constraints.get('minLength') === 0) && React.createElement(
          'li',
          null,
          'min length: ',
          constraints.get('minLength')
        ),
        (constraints.get('maxLength') || constraints.get('maxLength') === 0) && React.createElement(
          'li',
          null,
          'max length: ',
          constraints.get('maxLength')
        ),
        (constraints.get('minimum') || constraints.get('minimum') === 0) && React.createElement(
          'li',
          null,
          'min value',
          constraints.get('exclusiveMinimum') && ' (exclusive)',
          ':',
          constraints.get('minimum')
        ),
        (constraints.get('maximum') || constraints.get('maximum') === 0) && React.createElement(
          'li',
          null,
          'max value',
          constraints.get('exclusiveMaximum') && ' (exclusive)',
          ':',
          constraints.get('maximum')
        ),
        constraints.get('enum') ? React.createElement(
          'li',
          null,
          'valid values: ',
          constraints.get('enum').valueSeq().map(function (value) {
            return React.createElement(
              'code',
              { key: value },
              _this2.considerType(value)
            );
          }).reduce(function (prev, curr) {
            return [prev, ', ', curr];
          })
        ) : constraints.get('type') === 'boolean' && React.createElement(
          'li',
          null,
          'valid values: (true,false)'
        ),
        constraints.get('pattern') && React.createElement(
          'li',
          null,
          'pattern: ',
          constraints.get('pattern')
        ),
        constraints.get('cfNotes') && React.createElement(
          'li',
          null,
          'notes: ',
          constraints.get('cfNotes')
        )
      );
    }
  }]);
  return Constraints;
}(Component);

Constraints.propTypes = {
  constraints: React.PropTypes.object
};


module.exports = Constraints;