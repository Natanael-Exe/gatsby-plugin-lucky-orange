"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (process.env.NODE_ENV === "production") {
    var id = pluginOptions.id,
        url = pluginOptions.url,
        //host = pluginOptions.host;

    return setPostBodyComponents([_react2.default.createElement("script", {
      key: "gatsby-plugin-hotjar",
      dangerouslySetInnerHTML: {
        __html: "\n               window.__lo_site_id = " + id + ";\n            (function(){\n               var wa = document.createElement('script');\n         wa.type = 'text/javascript';\n         wa.async = true;\n        wa.src = " + url + ";\n               var s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(wa, s)}\n )()\n"
      }
    })]);
  }

  return null;
};