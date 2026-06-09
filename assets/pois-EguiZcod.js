import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./app-BZKiLHCU.js";var l=JSON.parse(`{"path":"/create-items/pois.html","title":"Creating Soldier POIs","lang":"en-US","frontmatter":{},"git":{"updatedTime":1747161857000,"contributors":[{"name":"XcraX1","username":"XcraX1","email":"lego_master@web.de","commits":2,"url":"https://github.com/XcraX1"}],"changelog":[{"hash":"4357a32aad259e14bf862238f9178017afac88fa","time":1747161857000,"email":"lego_master@web.de","author":"XcraX1","message":"progress"},{"hash":"f2d3989c54fe3b4ba639bffb280f83e729566cea","time":1746885425000,"email":"lego_master@web.de","author":"XcraX1","message":"init"}]},"filePathRelative":"create-items/pois.md"}`),u={name:`pois.md`};function d(c,l,u,d,f,p){let m=t(`RouteLink`),h=t(`CodeTabs`);return s(),o(`div`,null,[l[21]||=n(`<h1 id="creating-soldier-pois" tabindex="-1"><a class="header-anchor" href="#creating-soldier-pois"><span>Creating Soldier POIs</span></a></h1><p>Points of Interest (POIs) are blocks or items that soldiers interact with to gain effects, rather than picking them up.</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">└─ data</span>
<span class="line">   └─ <span class="token punctuation">(</span>your data pack name<span class="token punctuation">)</span></span>
<span class="line">      └─ data-maps</span>
<span class="line">         ├─ item</span>
<span class="line">         │  └─ soldier_poi.json          <span class="token comment"># &lt;- For interactable items</span></span>
<span class="line">         └─ block</span>
<span class="line">            └─ soldier_poi.json          <span class="token comment"># &lt;- For Blocks soldiers can interact</span></span>
<span class="line">      </span>
<span class="line"></span></code></pre></div><p>Whether an interactable Item or Block is created is determent by folder.</p><p>The base structure for <code>soldier_poi.json</code> is:</p><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;modid:item_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token comment">// Effects to apply when a soldier interacts with this item</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Conditions under which this item can be used as a POI</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;break_chance&quot;</span><span class="token operator">:</span> number <span class="token comment">// Likelihood of the item breaking after use (0.0 - 1.0)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    ...</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,6),i(`p`,null,[l[2]||=e(`The `,-1),l[3]||=i(`code`,null,`effect`,-1),l[4]||=e(` is a `,-1),a(m,{to:`/create-items/holdable-values.html#pickup-functions`},{default:r(()=>[...l[0]||=[e(`Pick Function`,-1)]]),_:1}),l[5]||=e(` and the `,-1),l[6]||=i(`code`,null,`predicate`,-1),l[7]||=e(` is the same `,-1),a(m,{to:`/create-items/holdable-values.html#predicate`},{default:r(()=>[...l[1]||=[e(`Predicate`,-1)]]),_:1}),l[8]||=e(` as for Items. The `,-1),l[9]||=i(`code`,null,`break_chance`,-1),l[10]||=e(` describes how like it is the item breaks after a Soldier uses it. It is between `,-1),l[11]||=i(`code`,null,`[0.0 - 1.0]`,-1),l[12]||=e(`. A value of `,-1),l[13]||=i(`code`,null,`0.0`,-1),l[14]||=e(` means it will never break, while `,-1),l[15]||=i(`code`,null,`1.0`,-1),l[16]||=e(` ensures it always breaks.`,-1)]),l[22]||=i(`div`,{class:`hint-container caution`},[i(`p`,{class:`hint-container-title`},`Caution`),i(`p`,null,[e(`Always ensure that the `),i(`code`,null,`Predicate`),e(` checks if the `),i(`code`,null,`Effect`),e(` is not already applied. Otherwise, soldiers may get stuck repeatedly interacting with the same POI.`)])],-1),l[23]||=i(`h3`,{id:`examples`,tabindex:`-1`},[i(`a`,{class:`header-anchor`,href:`#examples`},[i(`span`,null,`Examples`)])],-1),a(h,{data:[{id:`Item`},{id:`Block`}],"tab-id":`poi-examples`},{title0:r(({value:t,isActive:n})=>[...l[17]||=[e(`Item`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[18]||=[e(`Block`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[19]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},`If you want soldiers to gain the Conduit Power effect`),e(`
`),i(`span`,{class:`line`},[e(`when interacting with a Heart of the Sea item`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`use the following definition`),i(`span`,{class:`token operator`},`:`)]),e(`
`),i(`span`,{class:`line`},`We would put this under the item directory.`),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"minecraft:heart_of_the_sea"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:apply_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"duration"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`360`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:conduit_power"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"add"`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:logic"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"not"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:conduit_power"`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`0.0`),e(),i(`span`,{class:`token comment`},`// This item will never break when used`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[20]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},`If you want soldiers to transform into Wraiths`),e(`
`),i(`span`,{class:`line`},[e(`when interacting with a Dragon Egg`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},`here’s how you can define it. Place this under the block directory.`),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`},[e(`Since Wraiths cannot interact with POIs`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`there's no need to check whether the soldier is already a Wraith`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},`so we can set the predicate to Always True`),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`}),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"minecraft:dragon_egg"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"function"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:clay_wraith"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"LifeTicks"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`420`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"WraithAttacks"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:lightning_attack"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"attack_properties"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"attack_type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"melee"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"damage"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`2.0`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:always_true"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),_:1})])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};