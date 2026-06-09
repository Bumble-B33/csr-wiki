import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./app-X2R4V_Rs.js";var l=JSON.parse(`{"path":"/create-items/example.html","title":"Examples","lang":"en-US","frontmatter":{},"git":{"updatedTime":1746885425000,"contributors":[{"name":"XcraX1","username":"XcraX1","email":"lego_master@web.de","commits":1,"url":"https://github.com/XcraX1"}],"changelog":[{"hash":"f2d3989c54fe3b4ba639bffb280f83e729566cea","time":1746885425000,"email":"lego_master@web.de","author":"XcraX1","message":"init"}]},"filePathRelative":"create-items/example.md"}`),u={name:`example.md`},d={class:`hint-container details`},f={class:`hint-container details`};function p(c,l,u,p,m,h){let g=t(`CodeTabs`);return s(),o(`div`,null,[l[22]||=n(`<h1 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h1><p>This page provides an overview of all the items introduced by the Clay Soldiers mod.</p><h2 id="items" tabindex="-1"><a class="header-anchor" href="#items"><span>Items</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;#csr:soldier_rgb_glasses&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;see_invisibility&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;#minecraft:coals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:holdable_property&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set_on_fire&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;test_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;increase&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1s&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;csr:sharpened_stick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">3.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;csr:shear_blade&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:sneak_attack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hands&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:amethyst_shard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:dye_soldier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;dye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">8339378</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;invisible&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bamboo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;infinite&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:blaze_rod&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_range&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bowl&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hands&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:brick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:generic.movement_speed&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">-0.20000000298023224</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:brick_armor_slow&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add_multiplied_total&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;heavy&quot;</span><span class="token operator">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">10.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chest&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:cactus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;counter_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:thorns&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chest&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:chorus_fruit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:dye_soldier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;dye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">9332621</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;overwrite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;teleportation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;on_teleport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;teleportation_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;to_target&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:coal_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capability_pick_up&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:command_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:apply_effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:regeneration&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:apply_effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5000s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:regeneration&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:dye_soldier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;dye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jeb_&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aggressive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:generic.max_health&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">30.0</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:soldier_com_health&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add_value&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;infinite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;can_swim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;counter_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:thorns&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;pierceable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;death_cloud&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:instant_damage&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;death_exploder&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;glow_outline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;glowing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;heavy&quot;</span><span class="token operator">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;immunity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:blindness&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;minecraft:poison&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;minecraft:regeneration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;persistent&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;minecraft:weakness&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;minecraft:wither&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">25.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1.4</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:sneak_attack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:lightning_attack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">7.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;wraith&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;attack_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:lightning_attack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">7.0</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">3.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">13</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:debug_stick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_range&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aggressive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">25.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;see_invisibility&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">25.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hands&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:diamond&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;queen&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1.1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:diamond_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capability_pick_up&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:dragon_breath&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spiritual&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:echo_shard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:dye_soldier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;dye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">213328</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;overwrite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;see_invisibility&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;wraith&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;attack_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:smite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">6</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:emerald&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:lightning_attack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:ender_pearl&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;can_swim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;teleport_to_owner&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:feather&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:fermented_spider_eye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aggressive&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:fire_charge&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;throwable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;harmful&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;ranged_use&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:firework_rocket&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;evacuation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;firework&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;on_escape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:firework_star&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glass_bottle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glass_pane&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;see_invisibility&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glistering_melon_slice&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;support&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;throwable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;helping&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glow_ink_sac&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glowing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glowstone_dust&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glowing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gold_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capability_pick_up&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gold_ingot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;king&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:golden_apple&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;support&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;medic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:regeneration&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;throwable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;harmful&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;ranged_use&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gunpowder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_exploder&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:iron_nugget&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;counter_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:thorns&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">3.0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capability_pick_up&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:leather&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">3.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chest&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:lily_pad&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:logic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:holdable_property&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;heavy&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;test_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;increase&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;can_swim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;legs&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:magma_cream&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_exploder&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:nether_star&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:generic.max_health&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:giant_health&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add_value&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;minecraft:generic.movement_speed&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">-0.20000000298023224</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:giant_slow&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add_multiplied_total&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:paper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cape&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:poisonous_potato&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_cloud&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:poison&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;immunity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:poison&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:poison&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:rabbit_hide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:red_mushroom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;immunity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:poison&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:redstone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:logic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;any&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;predicates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:has_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:air&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:has_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:air&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offhand&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:blindness&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:shears&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;capability_pick_up&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:skeleton_skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;necrotic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:slime_ball&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:slime_root&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;throwable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;harmful&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;ranged_use&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:slime_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;bounce&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feet&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:snowball&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:slowness&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;throwable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;harmful&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;ranged_use&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:stick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;explosion_resistance&quot;</span><span class="token operator">:</span> <span class="token number">24.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;removal_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;on_hurt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;expected&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:is_explosion&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:sugar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:generic.movement_speed&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:sugar_speed&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add_multiplied_total&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:tnt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_exploder&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:totem_of_undying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;angel&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">4</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:smite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee_and_ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">3.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:turtle_scute&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:wheat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pacifist&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;backpack_passive&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:wither_skeleton_skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;on_pick&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:set_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;set_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coal_block&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feet&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:set_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;set_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coal_block&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;legs&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:set_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;set_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:coal_block&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chest&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_cloud&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wither&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;immunity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;minecraft:wither&quot;</span><span class="token operator">:</span> <span class="token string">&quot;immune&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dark_necrotic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="armor" tabindex="-1"><a class="header-anchor" href="#armor"><span>Armor</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;#csr:soldier_rgb_glasses&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;trims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jeb_&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:quartz&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:eye&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spire&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bamboo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;snorkel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:textures/entity/clay_soldier/bamboo_stick.png&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bowl&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;shield&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:textures/entity/clay_soldier/clay_shield.png&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:brick&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">11031355</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite_chestplate&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:cactus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">6592562</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite_chestplate&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;trim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:rib&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:coal_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">1908001</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_chestplate&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;feet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">1908001</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_boots&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;legs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">1908001</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_leggings&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:command_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:command_block&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:diamond&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;trims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:diamond&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wayfinder&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:emerald&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:host&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:diamond_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;trims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:diamond&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:vex&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:emerald&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:shaper&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:feather&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:feather&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glass_pane&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;trims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:quartz&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:eye&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:netherite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spire&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gold_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:chainmail_chestplate&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;trims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gold&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:shaper&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gold&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:vex&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:gold_ingot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:golden_helmet&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;trim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:lapis&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:shaper&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:iron_nugget&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;shield&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:textures/entity/clay_soldier/studded_clay_shield.png&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:leather&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;chest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">-6265536</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:leather_chestplate&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;offset_color&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:lily_pad&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;legs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">2129968</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:iron_leggings&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:paper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;cape&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;texture_location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:textures/entity/clay_soldier/paper_cape.png&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:rabbit_hide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:rabbit_hide&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:red_mushroom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:red_mushroom_block&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:skeleton_skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:skeleton_skull&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:slime_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;feet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">7845224</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:iron_boots&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;wrapped&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:textures/entity/clay_soldier/wrapped.png&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:turtle_scute&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:turtle_helmet&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:wither_skeleton_skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wither_skeleton_skull&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="soldier-pois" tabindex="-1"><a class="header-anchor" href="#soldier-pois"><span>Soldier POIs</span></a></h2>`,7),i(`details`,d,[l[4]||=i(`summary`,null,`Details`,-1),a(g,{data:[{id:`Items`},{id:`Blocks`}],"tab-id":`poi-examples`},{title0:r(({value:t,isActive:n})=>[...l[0]||=[e(`Items`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[1]||=[e(`Blocks`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[2]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"#c:dyes"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:dye_soldier"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"dye"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"color"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"from_item"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"overwrite"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token boolean`},`true`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:logic"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"not"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_custom_color"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:book"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`0.05`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:set_item"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"set_item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"count"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"id"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:paper"`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_item"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:paper"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"slot"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"suitable"`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:egg"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"always"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:select_random"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"selection"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"conversion"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:boss_clay_soldier"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"baseProperties"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"attack_range"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1.0`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"size"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`4.0`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"bossAI"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:default"`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"conversion"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:boss_clay_soldier"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"baseProperties"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"attack_range"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1.0`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"size"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`5.0`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"bossAI"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:vampire"`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:apply_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"amplifier"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`9`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"duration"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"17s"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:wither"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"add"`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:always_true"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:flint"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`0.15`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:set_item"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"set_item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"count"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"id"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:sharpened_stick"`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"replace"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"slot"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"mainhand"`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_item"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"item"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:stick"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"slot"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"mainhand"`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:heart_of_the_sea"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:apply_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"duration"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"18s"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:conduit_power"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"add"`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:logic"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"not"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:conduit_power"`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:honey_bottle"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`0.1`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:apply_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:poison"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"remove"`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:has_effect"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:poison"`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:nether_wart"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"always"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"conversion"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:vampire_clay_soldier"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"Alpha"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:logic"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"not"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:holdable_property"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"property"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"attack_type"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"test_type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"exactly"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"value"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`7`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:rotten_flesh"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"break_chance"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"always"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"conversion"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:zombie_clay_soldier"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"Curable"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`0`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"match_teams"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"pick_items"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:logic"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"operation"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"not"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:holdable_property"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"property"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"attack_type"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"test_type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"exactly"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"value"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`6`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[3]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"minecraft:end_rod"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"effect"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:conversion"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token property`},`"conversion"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:clay_wraith"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token property`},`"additional_data"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"LifeTicks"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`120`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token property`},`"WraithAttacks"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:lightning_attack"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token property`},`"attack_properties"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"attack_type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"melee"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`                    `),i(`span`,{class:`token property`},`"damage"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`2.0`)]),e(`
`),i(`span`,{class:`line`},[e(`                  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`                `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`              `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[e(`            `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`          `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`]`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"predicate"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"type"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"csr:always_true"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`        `),i(`span`,{class:`token property`},`"test"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),_:1})]),l[23]||=i(`h2`,{id:`tags`,tabindex:`-1`},[i(`a`,{class:`header-anchor`,href:`#tags`},[i(`span`,null,`Tags`)])],-1),l[24]||=i(`p`,null,`An overview of all relevant tags added.`,-1),i(`details`,f,[l[13]||=i(`summary`,null,`Details`,-1),a(g,{data:[{id:`Soldier Item`},{id:`Weapons`},{id:`Armor`},{id:`POIs`}],"tab-id":`item-tags-preview`},{title0:r(({value:t,isActive:n})=>[...l[5]||=[e(`Soldier Item`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[6]||=[e(`Weapons`,-1)]]),title2:r(({value:t,isActive:n})=>[...l[7]||=[e(`Armor`,-1)]]),title3:r(({value:t,isActive:n})=>[...l[8]||=[e(`POIs`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[9]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"id"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"#csr:clay_soldier_weapon"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"required"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token boolean`},`false`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"id"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"#csr:clay_soldier_armor"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`      `),i(`span`,{class:`token property`},`"required"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token boolean`},`false`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token punctuation`},`}`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"#minecraft:coals"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:snowball"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:fire_charge"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:slime_ball"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:gravel"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:glass_bottle"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:sugar"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:gunpowder"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:tnt"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:magma_cream"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:poisonous_potato"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:emerald"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:redstone"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:nether_star"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:amethyst_shard"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:glowstone_dust"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:glow_ink_sac"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:dragon_breath"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:golden_apple"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:totem_of_undying"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:echo_shard"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:fermented_spider_eye"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:wheat"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:glistering_melon_slice"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:ender_pearl"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:chorus_fruit"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:firework_rocket"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:firework_star"`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[10]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:stick"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"csr:sharpened_stick"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:bone"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:blaze_rod"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:shears"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"csr:shear_blade"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:debug_stick"`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab2:r(({value:t,isActive:n})=>[...l[11]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:lily_pad"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:red_mushroom"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:leather"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:glass_pane"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"#csr:soldier_rgb_glasses"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:paper"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:bamboo"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:brick"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:turtle_scute"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:slime_block"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:gold_ingot"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:gold_block"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:diamond"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:diamond_block"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:cactus"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:string"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:feather"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:rabbit_hide"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:skeleton_skull"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:wither_skeleton_skull"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:coal_block"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:bowl"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:iron_nugget"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:command_block"`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab3:r(({value:t,isActive:n})=>[...l[12]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"values"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`[`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:flint"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:honey_bottle"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:heart_of_the_sea"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"#c:dyes"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:nether_wart"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:rotten_flesh"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:end_rod"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:book"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token string`},`"minecraft:egg"`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`]`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),_:1})]),l[25]||=i(`h2`,{id:`teams`,tabindex:`-1`},[i(`a`,{class:`header-anchor`,href:`#teams`},[i(`span`,null,`Teams`)])],-1),a(g,{data:[{id:`Normal`},{id:`No Team`},{id:`Any Dye`},{id:`Jeb_`}],"tab-id":`teamss-preview`},{title0:r(({value:t,isActive:n})=>[...l[14]||=[e(`Normal`,-1)]]),title1:r(({value:t,isActive:n})=>[...l[15]||=[e(`No Team`,-1)]]),title2:r(({value:t,isActive:n})=>[...l[16]||=[e(`Any Dye`,-1)]]),title3:r(({value:t,isActive:n})=>[...l[17]||=[e(`Jeb_`,-1)]]),tab0:r(({value:t,isActive:n})=>[...l[18]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"name"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"Normal"`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab1:r(({value:t,isActive:n})=>[...l[19]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"name"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"Normal"`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab2:r(({value:t,isActive:n})=>[...l[20]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"color"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"#RRGGBB"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"from"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"minecraft:<dye>"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"name"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"<Dye>"`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),tab3:r(({value:t,isActive:n})=>[...l[21]||=[i(`div`,{class:`language-json line-numbers-mode`,"data-highlighter":`prismjs`,"data-ext":`json`},[i(`pre`,null,[i(`code`,{class:`language-json`},[i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"color"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"jeb_"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"name"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token string`},`"Jeb_"`),i(`span`,{class:`token punctuation`},`,`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token property`},`"properties"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token punctuation`},`{`)]),e(`
`),i(`span`,{class:`line`},[e(`    `),i(`span`,{class:`token property`},`"size"`),i(`span`,{class:`token operator`},`:`),e(),i(`span`,{class:`token number`},`1.1`)]),e(`
`),i(`span`,{class:`line`},[e(`  `),i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`},[i(`span`,{class:`token punctuation`},`}`)]),e(`
`),i(`span`,{class:`line`})])]),i(`div`,{class:`line-numbers`,"aria-hidden":`true`,style:{"counter-reset":`line-number 0`}},[i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`}),i(`div`,{class:`line-number`})])],-1)]]),_:1}),l[26]||=n(`<h2 id="soldier-vehicle-properties" tabindex="-1"><a class="header-anchor" href="#soldier-vehicle-properties"><span>Soldier Vehicle Properties</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;csr:clay_horse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_range&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;heavy&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;csr:clay_pegasus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_range&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;heavy&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:endermite&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;teleport_to_owner&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;teleportation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:rabbit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;attack_range&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:slime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:critical_hit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ranged&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:turtle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;infinite&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2)])}var m=c(u,[[`render`,p]]);export{l as _pageData,m as default};