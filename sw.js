if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),t={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>t[e]||c(e)))).then((e=>(f(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-26MHVzqL.css",revision:null},{url:"assets/index-qi0u652T.js",revision:null},{url:"favicon.ico",revision:"eaf65cff45ef26e9bfa5879499c9e61d"},{url:"favicon.svg",revision:"3b275b3abcfb845fdf7bb90de9daf69f"},{url:"index.html",revision:"4c18489d7a2c9fce449037a703f80724"},{url:"logo.png",revision:"ecf9001d382c624b0308853bb9843257"},{url:"registerSW.js",revision:"fc9243999dfe5e9a9752377aa3ffe3fc"},{url:"favicon.ico",revision:"eaf65cff45ef26e9bfa5879499c9e61d"},{url:"manifest.webmanifest",revision:"722b8a76ffbed8a94acad0bbbfaa6dda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));