const firstP = document.getElementsByTagName("p")[0];

firstP.innerHTML = "<span>text of p tag changed to this</span>";

firstP.style.cssText +=
    "color:white;background-color:#111827;border-radius: 0.3rem;padding: 8px 16px;animation: move 5s linear infinite !important;border: 1.1px solid #7432ff;font-size:1.4rem;font-weight:bold;";

// Create a new style element
const style = document.createElement("style");

const css = window.document.styleSheets[0];
css.insertRule(
    `
@keyframes move {
    0% { transform: translateX(-1200px); }
    100% { transform: translateX(1200px); }
  }`,
    css.cssRules.length
);
