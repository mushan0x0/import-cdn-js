'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (CDNUrl, name) {
    return new _promise2.default(function (resolve) {
        var dom = document.createElement('script');
        dom.src = CDNUrl;
        dom.type = 'text/javascript';
        dom.onload = function () {
            resolve(window[name]);
        };
        document.head.appendChild(dom);
    });
};