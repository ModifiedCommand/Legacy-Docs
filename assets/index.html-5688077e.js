import{_ as t,p as e,q as a,a1 as r}from"./framework-5866ffd3.js";const d={},i=r('<h1 id="material" tabindex="-1"><a class="header-anchor" href="#material" aria-hidden="true">#</a> Material</h1><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>version</td><td>(int32)0x4</td><td>indicates format version</td></tr><tr><td>Material Count</td><td>(int32)0x4</td><td>Number of materials declared within the file</td></tr><tr><td><a href="#material">Materials</a></td><td>variable</td><td>materials within the file</td></tr></tbody></table><h2 id="materials" tabindex="-1"><a class="header-anchor" href="#materials" aria-hidden="true">#</a> Materials</h2><table><thead><tr><th>Name</th><th>Size (per element)</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>(string)variable</td><td>material name</td></tr><tr><td>type</td><td>(string)variable</td><td>material type</td></tr></tbody></table><p>(repeat per Material Count)</p><p>**Each &#39;string&#39; is an Int16 to indicate length, followed by an ASCII encoded string.</p>',6),n=[i];function h(l,s){return e(),a("div",null,n)}const c=t(d,[["render",h],["__file","index.html.vue"]]);export{c as default};