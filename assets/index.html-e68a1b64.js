import{_ as e,p as s,q as a,a1 as n}from"./framework-016e66c7.js";const t={},o=n(`<h1 id="mcr-structure" tabindex="-1"><a class="header-anchor" href="#mcr-structure" aria-hidden="true">#</a> MCR Structure</h1><h2 id="_1-chunk-index-0x0000-0x0fff" tabindex="-1"><a class="header-anchor" href="#_1-chunk-index-0x0000-0x0fff" aria-hidden="true">#</a> 1. Chunk Index <code>[0x0000..0x0FFF]</code></h2><ul><li>The first 0x1000 bytes of a <code>.mcr</code> file is dedicated to 1024 (32x32) chunk indicies, despite the fact that only 27x27 chunks are used. They are in order of XZ index. Each 4 bytes represents a chunk offset like so:</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token number">00</span> <span class="token number">00</span> <span class="token number">02</span> <span class="token number">01</span>
<span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> <span class="token operator">^</span><span class="token operator">^</span>
Offset   Length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The offset and length can be multiplied by 0x1000 to get the actual values. if a chunk offset has all zeros, that means the chunk does not exist.</li><li>The offset points to a position in the mcr where the chunk&#39;s data is stored. The length specifies how many <code>0x1000</code> blocks the compressed chunk data takes up.</li></ul><h2 id="_2-chunk-timestamps-0x1000-0x1fff" tabindex="-1"><a class="header-anchor" href="#_2-chunk-timestamps-0x1000-0x1fff" aria-hidden="true">#</a> 2. Chunk Timestamps <code>[0x1000..0x1FFF]</code></h2><ul><li>The next 0x1000 bytes are supposedly (according to miku) timestamps of the chunks, for some reason. Maybe it was the timestamp of when the chunk was last edited? I&#39;m not sure.</li></ul><h2 id="_3-chunk-data-0x2000" tabindex="-1"><a class="header-anchor" href="#_3-chunk-data-0x2000" aria-hidden="true">#</a> 3. Chunk Data <code>[0x2000..]</code></h2><ul><li>The rest of the <code>.mcr</code> file is dedicated to storing the actual chunk&#39;s data. The size of the chunk data is shown in the chunk index, multiplied by <strong>0x1000</strong>, so if the length is 03, <strong>0x3000</strong> bytes are reserved for the chunk data. Missing chunks are not stored here. You can tell where a chunk&#39;s data starts if it has the bytes <code>C0</code> or <code>80</code> at the beginning.</li></ul><p><strong>A chunk&#39;s data is stored like so:</strong><br> The first 8 bytes contain the decompressed and compressed sizes of the chunk (not including the header here):</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> C0 00 02 EB 00 00 0C 73
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ^^^^^^^^^^^ ^^^^^^^^^^^
</span><span class="token prefix unchanged"> </span><span class="token line"> Compressed  Decompressed
</span><span class="token prefix unchanged"> </span><span class="token line"> Size &amp; Bits Size
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The first two bits of the compressed size are two flags that define stuff like RLE compression. The first bit defines whether or not the compressed chunk data is RLE compressed, but the second bit&#39;s purpose is unknown at the moment.</li></ul><blockquote><p>(You can safely remove the bits from the compressed size by doing an AND operation: <code>0xC00002EB &amp; 0x3FFFFFFF = 0x000002EB</code>)</p></blockquote><p>The rest of the data is the compressed chunk data (XMEM for Xbox 360, Deflate for PS3, or ZLIB for Wii U), along with RLE compression. The compressed size shows how big the data is before it ends (there may be some trailing bytes at the end, I&#39;m not sure what those mean exactly yet).</p>`,14),i=[o];function r(c,d){return s(),a("div",null,i)}const l=e(t,[["render",r],["__file","index.html.vue"]]);export{l as default};