import React from "react";

const customerIoSnippet = `
  var _cio = _cio || [];
  (function() {
    var a,b,c;a=function(f){return function(){_cio.push([f].
    concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
    "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-tracker';
    t.setAttribute('data-site-id', 'c0505d95f77250bd54e6');
    t.src = 'https://assets.customer.io/assets/track.js';
    s.parentNode.insertBefore(t, s);
  })();
  window._cio = _cio;
`;

export default function HTML(props: {
  htmlAttributes: unknown;
  headComponents: unknown[];
  bodyAttributes: unknown;
  preBodyComponents: unknown[];
  body: string;
  postBodyComponents: unknown[];
}) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {process.env.NODE_ENV === "production" && (
          <script dangerouslySetInnerHTML={{ __html: customerIoSnippet }} />
        )}
        {props.postBodyComponents}
      </body>
    </html>
  );
}
