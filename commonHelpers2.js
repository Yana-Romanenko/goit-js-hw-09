import"./assets/styles-b3b73aac.js";const o=document.querySelector(".feedback-form"),r="feedback-form-state";let t={};try{if(JSON.parse(localStorage.getItem(r)))for(let a in t)console.log(o.elements[a].value=t[a])}catch{console.log("PARSE ERROR")}o.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem(r,JSON.stringify(t))});o.addEventListener("submit",e=>{e.preventDefault(),console.log(t),localStorage.removeItem(r),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
