(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(1),n=a(9),o=(a(0),a(150)),i={title:"Getting Started"},p={id:"getting-started",title:"Getting Started",description:"*OpenWeatherMap PHP API* is a PHP client for weather APIs from [OpenWeatherMap.org](http://www.OpenWeatherMap.org).",source:"@site/docs/getting-started.md",permalink:"/OpenWeatherMap-PHP-API/docs/getting-started",editUrl:"https://github.com/cmfcmf/OpenWeatherMap-PHP-API/edit/master/docs/docs/getting-started.md",lastUpdatedBy:"Fran\xe7ois Lajoie",lastUpdatedAt:1584044546,sidebar:"someSidebar",next:{title:"API Key",permalink:"/OpenWeatherMap-PHP-API/docs/api-key"}},c=[{value:"PHP Requirements",id:"php-requirements",children:[]},{value:"Installation",id:"installation",children:[{value:"Required PSR-17/-18 dependencies",id:"required-psr-17-18-dependencies",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"OpenWeatherMap PHP API")," is a PHP client for weather APIs from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.OpenWeatherMap.org"}),"OpenWeatherMap.org"),"."),Object(o.b)("p",null,"This project aims to normalise the provided data and remove inconsistencies.\nIt is ",Object(o.b)("strong",{parentName:"p"},"not")," maintained by OpenWeatherMap and ",Object(o.b)("strong",{parentName:"p"},"not")," an official API wrapper."),Object(o.b)("p",null,"Please note that only the following APIs are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/OpenWeatherMap-PHP-API/docs/apis/current-weather"}),"Current Weather Data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/OpenWeatherMap-PHP-API/docs/apis/weather-forecast"}),"16-day/daily and 5-day/3-hourly Forecasts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/OpenWeatherMap-PHP-API/docs/apis/air-pollution"}),"Air Pollution (CO, O3, SO2, NO2)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/OpenWeatherMap-PHP-API/docs/apis/uv-index"}),"Ultraviolet Index"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"I am open for pull requests to add support for other APIs from OpenWeatherMap\nas long as they do not require a paid subscription. That is because I have no\nmeans to test paid APIs without paying myself.")),Object(o.b)("h2",{id:"php-requirements"},"PHP Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PHP 7.x")," (if you are still on PHP 5.x, you'll have to use version 2.x of this library)"),Object(o.b)("li",{parentName:"ul"},"PHP json extension"),Object(o.b)("li",{parentName:"ul"},"PHP libxml extension"),Object(o.b)("li",{parentName:"ul"},"PHP simplexml extension")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"This project can be found on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://packagist.org/packages/cmfcmf/openweathermap-php-api"}),"Packagist"),"\nand is best installed using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://getcomposer.org"}),"Composer"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'composer require "cmfcmf/openweathermap-php-api"\n')),Object(o.b)("h3",{id:"required-psr-17-18-dependencies"},"Required PSR-17/-18 dependencies"),Object(o.b)("p",null,"You will also need to have two additional dependencies installed:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.php-fig.org/psr/psr-17/"}),"PSR-17")," compatible HTTP factory implementation."),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.php-fig.org/psr/psr-18/"}),"PSR-18")," compatible HTTP client implementation.")),Object(o.b)("p",null,"I you are integrating this project into a PHP framework, it most likely already comes with these.\nOtherwise, go through the lists of implementations on Packagist and choose ones that fit your project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://packagist.org/providers/psr/http-factory-implementation"}),"List of PSR-17-compatible implementations")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://packagist.org/providers/psr/http-client-implementation"}),"List of PSR-18-compatible implementations"))),Object(o.b)("p",null,"If you don't know which to choose, try these:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'composer require "http-interop/http-factory-guzzle:^1.0" \\\n                "php-http/guzzle6-adapter:^2.0 || ^1.0"\n')))}s.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p({},t,{},e)),a},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=r,O=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?n.a.createElement(O,p({ref:t},l,{components:a})):n.a.createElement(O,p({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);