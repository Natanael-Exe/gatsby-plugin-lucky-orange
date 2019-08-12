"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (process.env.NODE_ENV === "production") {
    var id = pluginOptions.id,
        host = pluginOptions.host;

    return setPostBodyComponents([_react2.default.createElement("script", {
      key: "gatsby-plugin-lucky-orange",
      dangerouslySetInnerHTML: {
        __html: "\n          window.__lo_site_id = " + id + ";\n          (function() {\n            var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;\n            wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';\n            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);\n            })()\n          "
      }
    })]);
  }

  return null;
};