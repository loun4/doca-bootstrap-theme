"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offsetTop = offsetTop;
// return offsetTop relative to the whole page
function offsetTop(elem) {
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  if (!elem) return scrollTop - clientTop;
  var box = elem.getBoundingClientRect();
  var top = box.top + scrollTop - clientTop;
  return Math.round(top);
}