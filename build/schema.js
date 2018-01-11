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
var Endpoint = require('./endpoint');
var ObjectDefinitionTable = require('./objectDefinitionTable');
var MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
var ImmutablePropTypes = require('react-immutable-proptypes');
var Component = require('react-pure-render/component');
var ExampleObject = require('./exampleObject');

var Schema = function (_Component) {
  (0, _inherits3.default)(Schema, _Component);

  function Schema() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Schema);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Schema.__proto__ || (0, _getPrototypeOf2.default)(Schema)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showDefinition: false
    }, _this.handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          showDefinition: !prevState.showDefinition
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Schema, [{
    key: 'render',
    value: function render() {
      var schema = this.props.schema;
      var showDefinition = this.state.showDefinition;

      return React.createElement(
        'article',
        { className: 'panel panel-primary' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          React.createElement('div', { id: schema.get('html_id') }),
          React.createElement(
            'h2',
            null,
            schema.get('title')
          )
        ),
        React.createElement(
          'div',
          { className: 'panel-body' },
          React.createElement(
            'h3',
            null,
            schema.get('description')
          ),
          schema.get('cfExtendedDescription') && React.createElement(MarkdownPreview, { value: schema.get('cfExtendedDescription') }),
          React.createElement(
            'header',
            { id: schema.get('html_id') + '-properties' },
            IS_JAVASCRIPT && React.createElement(
              'p',
              null,
              React.createElement(
                'a',
                { onClick: this.handleToggle, className: 'btn btn-info' },
                React.createElement(
                  'span',
                  null,
                  showDefinition ? 'Hide' : 'Show'
                ),
                ' ',
                'properties and constraints defined on the object'
              )
            )
          ),
          (showDefinition || !IS_JAVASCRIPT) && React.createElement(
            'div',
            null,
            schema.getIn(['object_definition', 'objects']).count() ? React.createElement(
              'div',
              null,
              schema.getIn(['object_definition', 'objects']).valueSeq().map(function (obj, index) {
                return React.createElement(
                  'div',
                  { key: obj.get('title') },
                  obj.get('title') && React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'h4',
                      null,
                      obj.get('title')
                    )
                  ),
                  obj.get('example') && React.createElement(ExampleObject, { example: obj.get('example') }),
                  React.createElement(ObjectDefinitionTable, {
                    definitions: obj.get('properties'),
                    contextId: obj.get('title'),
                    fieldPointer: '/' + schema.getIn(['object_definition', 'which_of']) + '/' + index + '/properties'
                  })
                );
              })
            ) : React.createElement(
              'div',
              null,
              schema.getIn(['object_definition', 'example']) && React.createElement(ExampleObject, { example: schema.getIn(['object_definition', 'example']) }),
              React.createElement(ObjectDefinitionTable, {
                definitions: schema.getIn(['object_definition', 'properties']),
                contextId: schema.getIn(['object_definition', 'title']),
                fieldPointer: '/properties'
              })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'list-group' },
          schema.get('links').filter(function (link) {
            return !link.get('cfPrivate');
          }).valueSeq().map(function (link) {
            return React.createElement(Endpoint, { key: link.get('html_id'), link: link });
          })
        )
      );
    }
  }]);
  return Schema;
}(Component);

Schema.propTypes = {
  schema: ImmutablePropTypes.map.isRequired
};


module.exports = Schema;