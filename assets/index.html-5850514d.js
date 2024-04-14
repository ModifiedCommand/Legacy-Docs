import{_ as t,p as e,q as n,a1 as a}from"./framework-016e66c7.js";const r={},l=a('<h1 id="col" tabindex="-1"><a class="header-anchor" href="#col" aria-hidden="true">#</a> COL</h1><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">COL Version</td><td style="text-align:center;">(int32)0x4</td><td style="text-align:center;">indicates Format version</td></tr><tr><td style="text-align:center;"><a href="#standard-colors">Colors</a></td><td style="text-align:center;">variable</td><td style="text-align:center;">a list of all colors within the Color Table</td></tr><tr><td style="text-align:center;"><a href="#water-colors">Water Colors</a></td><td style="text-align:center;">variable</td><td style="text-align:center;">a list of all water colors within the Color Table (only if Version &gt; 0)</td></tr></tbody></table><h2 id="standard-colors" tabindex="-1"><a class="header-anchor" href="#standard-colors" aria-hidden="true">#</a> Standard Colors</h2><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Count</td><td style="text-align:center;">(int32)0x4</td><td style="text-align:center;">Amount of Colors in the table</td></tr></tbody></table><p>(repeated per count)</p><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Name</td><td style="text-align:center;">variable</td><td style="text-align:center;">a string(int16 indicates length, then Little endian Unicode string of specified length) indicating color name</td></tr><tr><td style="text-align:center;">Color</td><td style="text-align:center;"><a href="#argb">(ARGB)</a>0x4</td><td style="text-align:center;">an ARGB value, indicating color and transparency</td></tr></tbody></table><h2 id="water-colors" tabindex="-1"><a class="header-anchor" href="#water-colors" aria-hidden="true">#</a> Water Colors</h2><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Count</td><td style="text-align:center;">(int32)0x4</td><td style="text-align:center;">Amount of Colors in the table</td></tr></tbody></table><p>(repeated per count)</p><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Name</td><td style="text-align:center;">variable</td><td style="text-align:center;">a string(int16 indicates length, then Little endian Unicode string of specified length) indicating color name</td></tr><tr><td style="text-align:center;">Surface Color</td><td style="text-align:center;"><a href="#argb">(ARGB)</a>0x4</td><td style="text-align:center;">an ARGB value, indicating color and transparency</td></tr><tr><td style="text-align:center;">Underwater Color</td><td style="text-align:center;"><a href="#argb">(ARGB)</a>0x4</td><td style="text-align:center;">an ARGB value, indicating color and transparency</td></tr><tr><td style="text-align:center;">Fog Color</td><td style="text-align:center;"><a href="#argb">(ARGB)</a>0x4</td><td style="text-align:center;">an ARGB value, indicating color and transparency</td></tr></tbody></table><h2 id="argb" tabindex="-1"><a class="header-anchor" href="#argb" aria-hidden="true">#</a> ARGB</h2><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Size (per element)</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Alpha</td><td style="text-align:center;">(int8)0x1</td><td style="text-align:center;">Alpha color channel</td></tr><tr><td style="text-align:center;">Red</td><td style="text-align:center;">(int8)0x1</td><td style="text-align:center;">Red color channel</td></tr><tr><td style="text-align:center;">Green</td><td style="text-align:center;">(int8)0x1</td><td style="text-align:center;">Green color channel</td></tr><tr><td style="text-align:center;">Blue</td><td style="text-align:center;">(int8)0x1</td><td style="text-align:center;">Blue color channel</td></tr></tbody></table>',12),d=[l];function i(c,s){return e(),n("div",null,d)}const h=t(r,[["render",i],["__file","index.html.vue"]]);export{h as default};