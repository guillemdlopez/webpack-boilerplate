(()=>{"use strict";var e=document.createElement("p");root.appendChild(e);function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"Guillem"},c=n(n({},o),{},{logged:!0});console.log(o.name),console.log("".concat(c.logged?"IS LOGGED IN!":"HE IS OUT")),function(e){var t=document.getElementById("root"),n=document.createElement("h1");n.textContent="Welcome, ".concat(e,"!!"),t.appendChild(n)}("Guillem"),function(){var t=function(){e.textContent="",e.textContent="".concat(n),0===n&&(e.textContent="One minute of your life is gone!",clearInterval(r)),n--},n=60;t();var r=setInterval(t,1e3)}()})();
//# sourceMappingURL=main.js.map