import{_ as r,c as u,f as k,a as s,d as n,b as o,e as t,r as c,o as d}from"./app-CBFKTYkr.js";const m={};function f(y,a){const l=c("RouteLink"),i=c("CodeTabs");return d(),u("div",null,[a[21]||(a[21]=k(`<h1 id="creating-soldier-pois" tabindex="-1"><a class="header-anchor" href="#creating-soldier-pois"><span>Creating Soldier POIs</span></a></h1><p>Points of Interest (POIs) are blocks or items that soldiers interact with to gain effects, rather than picking them up.</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">└─ data</span>
<span class="line">   └─ <span class="token punctuation">(</span>your data pack name<span class="token punctuation">)</span></span>
<span class="line">      └─ data-maps</span>
<span class="line">         ├─ item</span>
<span class="line">         │  └─ soldier_poi.json          <span class="token comment"># &lt;- For interactable items</span></span>
<span class="line">         └─ block</span>
<span class="line">            └─ soldier_poi.json          <span class="token comment"># &lt;- For Blocks soldiers can interact</span></span>
<span class="line">      </span>
<span class="line"></span></code></pre></div><p>Whether an interactable Item or Block is created is determent by folder.</p><p>The base structure for <code>soldier_poi.json</code> is:</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre></div>`,6)),s("p",null,[a[2]||(a[2]=n("The ")),a[3]||(a[3]=s("code",null,"effect",-1)),a[4]||(a[4]=n(" is a ")),o(l,{to:"/create-items/holdable-values.html#pickup-functions"},{default:t(()=>a[0]||(a[0]=[n("Pick Function")])),_:1}),a[5]||(a[5]=n(" and the ")),a[6]||(a[6]=s("code",null,"predicate",-1)),a[7]||(a[7]=n(" is the same ")),o(l,{to:"/create-items/holdable-values.html#predicate"},{default:t(()=>a[1]||(a[1]=[n("Predicate")])),_:1}),a[8]||(a[8]=n(" as for Items. The ")),a[9]||(a[9]=s("code",null,"break_chance",-1)),a[10]||(a[10]=n(" describes how like it is the item breaks after a Soldier uses it. It is between ")),a[11]||(a[11]=s("code",null,"[0.0 - 1.0]",-1)),a[12]||(a[12]=n(". A value of ")),a[13]||(a[13]=s("code",null,"0.0",-1)),a[14]||(a[14]=n(" means it will never break, while ")),a[15]||(a[15]=s("code",null,"1.0",-1)),a[16]||(a[16]=n(" ensures it always breaks."))]),a[22]||(a[22]=s("div",{class:"hint-container caution"},[s("p",{class:"hint-container-title"},"Caution"),s("p",null,[n("Always ensure that the "),s("code",null,"Predicate"),n(" checks if the "),s("code",null,"Effect"),n(" is not already applied. Otherwise, soldiers may get stuck repeatedly interacting with the same POI.")])],-1)),a[23]||(a[23]=s("h3",{id:"examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#examples"},[s("span",null,"Examples")])],-1)),o(i,{id:"25",data:[{id:"Item"},{id:"Block"}],"tab-id":"poi-examples"},{title0:t(({value:e,isActive:p})=>a[17]||(a[17]=[n("Item")])),title1:t(({value:e,isActive:p})=>a[18]||(a[18]=[n("Block")])),tab0:t(({value:e,isActive:p})=>a[19]||(a[19]=[s("div",{class:"language-json","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"If you want soldiers to gain the Conduit Power effect"),n(`
`),s("span",{class:"line"},[n("when interacting with a Heart of the Sea item"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("use the following definition"),s("span",{class:"token operator"},":")]),n(`
`),s("span",{class:"line"},"We would put this under the item directory."),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token property"},'"minecraft:heart_of_the_sea"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:apply_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"duration"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"360"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:conduit_power"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"add"')]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:logic"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"not"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:conduit_power"')]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.0"),n(),s("span",{class:"token comment"},"// This item will never break when used")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])])],-1)])),tab1:t(({value:e,isActive:p})=>a[20]||(a[20]=[s("div",{class:"language-json","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"If you want soldiers to transform into Wraiths"),n(`
`),s("span",{class:"line"},[n("when interacting with a Dragon Egg"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},"here’s how you can define it. Place this under the block directory."),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("Since Wraiths cannot interact with POIs"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("there's no need to check whether the soldier is already a Wraith"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},"so we can set the predicate to Always True"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token property"},'"minecraft:dragon_egg"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:conversion"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"function"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:clay_wraith"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"additional_data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"LifeTicks"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"420"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"WraithAttacks"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:lightning_attack"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"attack_properties"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"attack_type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"melee"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"damage"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"2.0")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:always_true"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])])],-1)])),_:1})])}const h=r(m,[["render",f],["__file","pois.html.vue"]]),b=JSON.parse('{"path":"/create-items/pois.html","title":"Creating Soldier POIs","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"git":{"updatedTime":1746885425000,"contributors":[{"name":"XcraX1","email":"lego_master@web.de","commits":1}]},"filePathRelative":"create-items/pois.md"}');export{h as comp,b as data};
