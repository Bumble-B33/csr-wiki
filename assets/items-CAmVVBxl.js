import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./app-BZKiLHCU.js";var l=JSON.parse(`{"path":"/create-items/items.html","title":"Custom Items","lang":"en-US","frontmatter":{},"git":{"updatedTime":1746885425000,"contributors":[{"name":"XcraX1","username":"XcraX1","email":"lego_master@web.de","commits":1,"url":"https://github.com/XcraX1"}],"changelog":[{"hash":"f2d3989c54fe3b4ba639bffb280f83e729566cea","time":1746885425000,"email":"lego_master@web.de","author":"XcraX1","message":"init"}]},"filePathRelative":"create-items/items.md"}`),u={name:`items.md`},d={class:`hint-container info`},f={class:`hint-container tip`};function p(c,l,u,p,m,h){let g=t(`RouteLink`),_=t(`CodeTabs`);return s(),o(`div`,null,[l[35]||=n(`<h1 id="custom-items" tabindex="-1"><a class="header-anchor" href="#custom-items"><span>Custom Items</span></a></h1><h2 id="creating-items-that-soldiers-can-hold" tabindex="-1"><a class="header-anchor" href="#creating-items-that-soldiers-can-hold"><span>Creating Items That Soldiers Can Hold</span></a></h2><p>To create items that soldiers can hold, you need to modify the <code>soldier_holdable.json</code> file.</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">└─ data</span>
<span class="line">   └─ <span class="token punctuation">(</span>your data pack name<span class="token punctuation">)</span></span>
<span class="line">      └─ data-maps</span>
<span class="line">        └─ item</span>
<span class="line">           └─ soldier_holdable.json</span>
<span class="line"></span></code></pre></div><p>Here&#39;s the basic structure:</p><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;modid:item_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// For Vanilla Minecraft Items ModId is &#39;minecraft&#39;</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        ...</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> name<span class="token punctuation">,</span>                 <span class="token comment">// Defines which slot the item is held in (e.g., mainhand or offhand)</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>      <span class="token comment">// (Optional) Determines priority when soldiers pick up items</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>          <span class="token comment">// (Optional) Chance that the soldier will drop the item on death</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> test<span class="token punctuation">,</span>            <span class="token comment">// (Optional) Conditions under which the item can be held</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        functions...                <span class="token comment">// (Optional) Define custom functions for when the item is picked up </span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>        <span class="token comment">// (Optional) Define custom conditions for when the item is destroyed</span></span>
<span class="line">        ...</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    ...</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>Ensure that your item is added to the <code>&quot;clay_soldier_holdable&quot;</code> tag, otherwise soldiers won’t pick up the item.</p><p>Putting your item under the <code>&quot;clay_soldier_weapon&quot;</code> tag, makes them swing it on attack.</p></div>`,7),i(`div`,d,[l[3]||=i(`p`,{class:`hint-container-title`},`Info`,-1),i(`p`,null,[l[1]||=e(`More details on properties and values, can be found `,-1),a(g,{to:`/create-items/holdable-values.html`},{default:r(()=>[...l[0]||=[e(`here`,-1)]]),_:1}),l[2]||=e(`.`,-1)])]),l[36]||=n(`<h2 id="example-adding-a-stick" tabindex="-1"><a class="header-anchor" href="#example-adding-a-stick"><span>Example: Adding a Stick</span></a></h2><p>Let&#39;s look at an Example. If we want soldiers to hold a stick and deal extra damage, we can define it like this:</p><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;minecraft:stick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;csr:damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span> <span class="token comment">// Increases the soldier&#39;s damage when holding a stick</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span> <span class="token comment">//  The stick should be held in the main hand only </span></span>
<span class="line">      <span class="token comment">// We dont need to mention other values as we want to leave as the default value</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// Some other items...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,3),i(`div`,f,[l[7]||=i(`p`,{class:`hint-container-title`},`Tips`,-1),i(`p`,null,[l[5]||=e(`You can find more examples of `,-1),a(g,{to:`/create-items/example.html`},{default:r(()=>[...l[4]||=[e(`items`,-1)]]),_:1}),l[6]||=e(` implemented by the Clay Soldiers mod for inspiration.`,-1)])]),l[37]||=n(`<h2 id="creating-items-that-soldiers-can-wear" tabindex="-1"><a class="header-anchor" href="#creating-items-that-soldiers-can-wear"><span>Creating Items That Soldiers Can Wear</span></a></h2><p>To create wearable items, modify the <code>soldier_wearable.json</code> file.</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">└─ data</span>
<span class="line">   └─ <span class="token punctuation">(</span>your data pack name<span class="token punctuation">)</span></span>
<span class="line">      └─ data-maps</span>
<span class="line">        └─ item</span>
<span class="line">           └─ soldier_wearable.json</span>
<span class="line"></span></code></pre></div><div class="hint-container important"><p class="hint-container-title">Important</p><p>This is only visual, all properties like protection, should be added via <a href="#creating-items-that-soldiers-can-hold">Holdable Items</a></p></div><p>Here&#39;s the basic structure:</p><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> id     <span class="token comment">// (Optional) The id of the armor model</span></span>
<span class="line">        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> color  <span class="token comment">// (Optional) The color model. </span></span>
<span class="line">        &quot;trims<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            ...         <span class="token comment">// (Opional) List of trims to apply</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      ...</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  ...</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>Let&#39;s look at how we could make a Gold Ingot acts as helmet. First we create a Holdable Item, also don&#39;t forget to tag the Item:</p><details class="hint-container details"><summary>Details</summary><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token property">&quot;minecraft:gold_ingot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div></details><p>Now we make the visuals for the item. We modify the <code>soldier_wearable.json</code></p><div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gold_ingot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// &lt;- The Slot this Item acts as Armor</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:golden_helmet&quot;</span> <span class="token comment">// The armor model we want to copy</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span>  </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    ...</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,11),i(`p`,null,[l[9]||=e(`You can specify other `,-1),a(g,{to:`/create-items/holdable-values.html#slots`},{default:r(()=>[...l[8]||=[i(`code`,null,`Slots`,-1)]]),_:1}),l[10]||=e(` such as `,-1),l[11]||=i(`code`,null,`head`,-1),l[12]||=e(`, `,-1),l[13]||=i(`code`,null,`chest`,-1),l[14]||=e(`, `,-1),l[15]||=i(`code`,null,`legs`,-1),l[16]||=e(`, `,-1),l[17]||=i(`code`,null,`feet`,-1),l[18]||=e(`. An item can even be worn in multiple slots by adding multiple entries: Additionally we can also color armor pieces`,-1)]),l[38]||=n(`<div class="language-json" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_chestplate&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1D1D21&quot;</span> <span class="token comment">// RGB color</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;feet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;copy_model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_boots&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">1908001</span> <span class="token comment">// RGB color in integer format, same as (RGB 1D1D21)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Learn more about Color <a href="common-values">here</a></p></div><h3 id="adding-armor-trims" tabindex="-1"><a class="header-anchor" href="#adding-armor-trims"><span>Adding Armor Trims</span></a></h3><p>You can also add trims to armor pieces:</p>`,4),a(_,{data:[{id:`Suit`},{id:`Glasses`}],"tab-id":`armor-examples`},{title0:r(({value:t,isActive:n})=>[...l[19]||=[e(`Suit`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[20]||=[e(`Glasses`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[21]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"chest"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  model`),i(`span`,{class:`token string`},`": "`),e(`minecraft`),i(`span`,{class:`token operator`},`:`),e(`chainmail_chestplate"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"trims"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"material"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:gold"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"pattern"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:shaper"`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"material"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:gold"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"pattern"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:vex"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[22]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"head"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"model"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:iron_helmet"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"trim_only"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token boolean`},`true`),i(`span`,{class:`token punctuation`},`,`),e(),i(`span`,{class:`token comment`},`// When set to true the armor copy will not be displayed`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"trims"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"material"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:quartz"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"pattern"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:eye"`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"material"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:netherite"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"pattern"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:spire"`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`),e(`  `)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),_:1}),l[39]||=i(`h3`,{id:`creating-an-accessory`,tabindex:`-1`},[i(`a`,{class:`header-anchor`,href:`#creating-an-accessory`},[i(`span`,null,`Creating an Accessory`)])],-1),l[40]||=i(`p`,null,`Accessories are visually displayed items that are not considered armor, such as capes.`,-1),a(_,{data:[{id:`Cape`},{id:`Skull`},{id:`Snorkel`},{id:`Shield`},{id:`Glider`},{id:`Wrapped`}],"tab-id":`accessories-simple`},{title0:r(({value:t,isActive:n})=>[...l[23]||=[e(`Cape`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[24]||=[e(`Skull`,-1)]]),title2:r(({value:t,isActive:n})=>[...l[25]||=[e(`Snorkel`,-1)]]),title3:r(({value:t,isActive:n})=>[...l[26]||=[e(`Shield`,-1)]]),title4:r(({value:t,isActive:n})=>[...l[27]||=[e(`Glider`,-1)]]),title5:r(({value:t,isActive:n})=>[...l[28]||=[e(`Wrapped`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[29]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"minecraft:rabbit_hide"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"cape"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"texture_location"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:textures/entity/clay_soldier/paper_cape.png"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"color"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`8339378`),e(),i(`span`,{class:`token comment`},`// Optionally we could add a color.`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[30]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"minecraft:skeleton_skull"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"skull"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:skeleton_skull"`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab2:r(({value:t,isActive:n})=>[...l[31]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"snorkel"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:textures/entity/clay_soldier/bamboo_stick.png"`),e(),i(`span`,{class:`token comment`},`// <- Texture of the Snorkel`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab3:r(({value:t,isActive:n})=>[...l[32]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"shield"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:textures/entity/clay_soldier/clay_shield.png"`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab4:r(({value:t,isActive:n})=>[...l[33]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"glider"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:rabbit_hide"`),e(),i(`span`,{class:`token comment`},`// <- the Item we use as a Glider`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),tab5:r(({value:t,isActive:n})=>[...l[34]||=[i(`div`,{class:`language-json`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token property`},`"accessories"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"string"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:textures/entity/clay_soldier/wrapped.png"`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])])],-1)]]),_:1})])}var m=c(u,[[`render`,p]]);export{l as _pageData,m as default};