"use strict";

var React = require('react');

var Head = function Head(_ref) {
  var cssBundle = _ref.cssBundle,
      title = _ref.title;
  return React.createElement(
    "head",
    null,
    React.createElement("meta", { charSet: "utf-8" }),
    React.createElement(
      "title",
      null,
      title
    ),
    React.createElement("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    }),
    React.createElement("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css", rel: "stylesheet" }),
    cssBundle && React.createElement("link", { href: cssBundle, rel: "stylesheet" })
  );
};

Head.propTypes = {
  cssBundle: React.PropTypes.string,
  title: React.PropTypes.string
};

Head.displayName = 'Head';
module.exports = Head;