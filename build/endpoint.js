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
var ObjectDefinitionTable = require('./objectDefinitionTable');
var MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
var ImmutablePropTypes = require('react-immutable-proptypes');
var Component = require('react-pure-render/component');

var Endpoint = function (_Component) {
  (0, _inherits3.default)(Endpoint, _Component);

  function Endpoint() {
    (0, _classCallCheck3.default)(this, Endpoint);
    return (0, _possibleConstructorReturn3.default)(this, (Endpoint.__proto__ || (0, _getPrototypeOf2.default)(Endpoint)).apply(this, arguments));
  }

  (0, _createClass3.default)(Endpoint, [{
    key: 'render',
    value: function render() {
      var link = this.props.link;


      return React.createElement(
        'section',
        { key: link.get('html_id'), id: link.get('html_id'), className: 'list-group-item' },
        React.createElement(
          'h3',
          null,
          React.createElement(
            'div',
            { className: 'label label-success' },
            link.get('method')
          ),
          ' ',
          React.createElement(
            'div',
            { className: 'endpoint-title' },
            link.get('title')
          )
        ),
        link.get('description') && React.createElement(MarkdownPreview, { value: link.get('description') }),
        React.createElement(
          'pre',
          null,
          link.get('method'),
          ' ',
          link.get('uri')
        ),
        link.getIn(['parameters', 'required_props', 0]) && React.createElement(
          'div',
          null,
          React.createElement(
            'h4',
            null,
            'Required parameters'
          ),
          React.createElement(ObjectDefinitionTable, {
            definitions: link.getIn(['parameters', 'properties']).filter(function (val, key) {
              return link.getIn(['parameters', 'required_props']).indexOf(key) > -1;
            }),
            contextId: link.get('title'),
            fieldPointer: '/properties'
          })
        ),
        link.getIn(['parameters', 'optional_props', 0]) && React.createElement(
          'div',
          null,
          React.createElement(
            'h4',
            null,
            'Optional parameters'
          ),
          React.createElement(ObjectDefinitionTable, {
            definitions: link.getIn(['parameters', 'properties']).filter(function (val, key) {
              return link.getIn(['parameters', 'optional_props']).indexOf(key) > -1;
            }),
            contextId: link.get('title'),
            fieldPointer: '/properties'
          })
        ),
        React.createElement(
          'h4',
          null,
          'cURL'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'pre',
            null,
            link.get('curl')
          )
        ),
        React.createElement(
          'h4',
          null,
          'Response'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'pre',
            null,
            link.get('response')
          )
        )
      );
    }
  }]);
  return Endpoint;
}(Component);

Endpoint.propTypes = {
  link: ImmutablePropTypes.map.isRequired
};


module.exports = Endpoint;