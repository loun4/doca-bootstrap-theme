'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
var Constraints = require('./constraints');
var MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
var List = require('immutable').List;
var ImmutableMap = require('immutable').Map;
var ImmutablePropTypes = require('react-immutable-proptypes');
var Component = require('react-pure-render/component');
var Definition = require('./definition');

var ObjectDefinitionTable = function (_Component) {
  (0, _inherits3.default)(ObjectDefinitionTable, _Component);

  function ObjectDefinitionTable() {
    (0, _classCallCheck3.default)(this, ObjectDefinitionTable);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectDefinitionTable.__proto__ || (0, _getPrototypeOf2.default)(ObjectDefinitionTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectDefinitionTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var definitions = this.props.definitions;

      return React.createElement(
        'table',
        { className: 'table table-hover' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              React.createElement(
                'p',
                null,
                'Name ',
                React.createElement(
                  'small',
                  null,
                  '/type'
                )
              )
            ),
            React.createElement(
              'th',
              null,
              React.createElement(
                'p',
                null,
                'Description ',
                React.createElement(
                  'small',
                  null,
                  '/example'
                )
              )
            ),
            React.createElement(
              'th',
              null,
              React.createElement(
                'p',
                null,
                'Constraints'
              )
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          definitions && definitions.entrySeq().map(function (_ref) {
            var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                key = _ref2[0],
                definition = _ref2[1];

            return React.createElement(
              'tr',
              { key: key },
              React.createElement(
                'td',
                null,
                React.createElement(
                  'p',
                  null,
                  React.createElement(
                    'strong',
                    null,
                    key
                  ),
                  React.createElement('br', null),
                  React.createElement(
                    'small',
                    null,
                    React.createElement(
                      'em',
                      null,
                      List.isList(definition.get('type')) ? definition.get('type').valueSeq().join(', ') : definition.get('type'),
                      definition.get('format') && ' (' + definition.get('format') + ')'
                    )
                  )
                )
              ),
              React.createElement(
                'td',
                null,
                definition.get('description') && React.createElement(MarkdownPreview, { value: definition.get('description') }),
                React.createElement(
                  'div',
                  null,
                  definition.get('example') && React.createElement(
                    'small',
                    null,
                    React.createElement(
                      'code',
                      null,
                      definition.get('example')
                    )
                  ),
                  definition.get('oneOf') && React.createElement(
                    'span',
                    null,
                    React.createElement('br', null),
                    'One of the following:'
                  ),
                  definition.get('anyOf') && React.createElement(
                    'span',
                    null,
                    React.createElement('br', null),
                    'Any of the following:'
                  )
                ),
                definition.get('properties') && React.createElement(Definition, {
                  definitions: definition.get('properties'),
                  contextId: _this2.props.contextId,
                  fieldPointer: _this2.props.fieldPointer + '/' + key
                }),
                definition.get('items') && React.createElement(Definition, {
                  definitions: ImmutableMap({ '[*]': definition.get('items') }),
                  contextId: _this2.props.contextId,
                  fieldPointer: _this2.props.fieldPointer + '/' + key
                }),
                definition.get('oneOf') && definition.get('oneOf').entrySeq().map(function (_ref3) {
                  var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                      subkey = _ref4[0],
                      subdefinition = _ref4[1];

                  return React.createElement(
                    'div',
                    { key: subkey },
                    React.createElement(
                      'h6',
                      null,
                      subdefinition.get('description')
                    ),
                    React.createElement(Definition, {
                      definitions: subdefinition.get('properties'),
                      contextId: _this2.props.contextId,
                      fieldPointer: _this2.props.fieldPointer + '/' + key + '/oneOf/' + subkey
                    })
                  );
                }),
                definition.get('anyOf') && definition.get('anyOf').entrySeq().map(function (_ref5) {
                  var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
                      subkey = _ref6[0],
                      subdefinition = _ref6[1];

                  return React.createElement(
                    'div',
                    { key: subkey },
                    React.createElement(
                      'h6',
                      null,
                      subdefinition.get('description')
                    ),
                    React.createElement(Definition, {
                      definitions: subdefinition.get('properties'),
                      contextId: _this2.props.contextId,
                      fieldPointer: _this2.props.fieldPointer + '/' + key + '/anyOf/' + subkey + '/properties/'
                    })
                  );
                })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(Constraints, { constraints: definition })
              )
            );
          })
        )
      );
    }
  }]);
  return ObjectDefinitionTable;
}(Component);

ObjectDefinitionTable.propTypes = {
  definitions: ImmutablePropTypes.map,
  contextId: React.PropTypes.string,
  fieldPointer: React.PropTypes.string
};


module.exports = ObjectDefinitionTable;