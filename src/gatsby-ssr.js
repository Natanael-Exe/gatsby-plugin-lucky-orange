import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const {id,host} = pluginOptions
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-lucky-orange`}
        dangerouslySetInnerHTML={{
          __html: `
          window.__lo_site_id = ${id};
          (function() {
            var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
            wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
            })()
          `,
        }}
      />,
    ])
  }

  return null
}