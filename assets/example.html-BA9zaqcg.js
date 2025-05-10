import{_ as i,c as u,f as c,a as s,b as l,e as p,r,o as k,d as n}from"./app-CBFKTYkr.js";const d={},v={class:"hint-container details"},m={class:"hint-container details"};function q(b,a){const o=r("CodeTabs");return k(),u("div",null,[a[22]||(a[22]=c(`<h1 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h1><p>This page provides an overview of all the items introduced by the Clay Soldiers mod.</p><h2 id="items" tabindex="-1"><a class="header-anchor" href="#items"><span>Items</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
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
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20s&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:bamboo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;breath_hold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;infinite&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:blaze_powder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;predicate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:holdable_property&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set_on_fire&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;test_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;increase&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20s&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">        <span class="token property">&quot;set_on_fire&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:firework_star&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;drop_rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:glowstone_dust&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glowing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100s&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;special_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:effect&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;attack_properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;attack_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;melee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;600s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:rabbit_hide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;glide&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">                <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offhand&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csr:has_item&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:air&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mainhand&quot;</span></span>
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
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">              <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;400s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
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
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:tnt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;death_exploder&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;slots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;backpack_passive&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;backpack&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;minecraft:totem_of_undying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;pick_priority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;very_high&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;revive_other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;angel&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2000s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line">          <span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80s&quot;</span><span class="token punctuation">,</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="armor" tabindex="-1"><a class="header-anchor" href="#armor"><span>Armor</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
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
<span class="line">    <span class="token property">&quot;minecraft:blaze_powder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;accessories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;skull&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:player_head&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MHF_Blaze&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
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
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:emerald&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:shaper&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:diamond&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:vex&quot;</span></span>
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
<span class="line">      <span class="token property">&quot;armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">16777215</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:iron_helmet&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;trim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:redstone&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:silence&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="soldier-pois" tabindex="-1"><a class="header-anchor" href="#soldier-pois"><span>Soldier POIs</span></a></h2>`,7)),s("details",v,[a[4]||(a[4]=s("summary",null,"Details",-1)),l(o,{id:"22",data:[{id:"Items"},{id:"Blocks"}],"tab-id":"poi-examples"},{title0:p(({value:t,isActive:e})=>a[0]||(a[0]=[n("Items")])),title1:p(({value:t,isActive:e})=>a[1]||(a[1]=[n("Blocks")])),tab0:p(({value:t,isActive:e})=>a[2]||(a[2]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"#c:dyes"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:dye_soldier"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"dye"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"color"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"from_item"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"overwrite"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:logic"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"not"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_custom_color"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:book"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.05"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:set_item"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"set_item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"count"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:paper"')]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_item"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:paper"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"slot"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"suitable"')]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:flint"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.15"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:set_item"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"set_item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"count"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:sharpened_stick"')]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"replace"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"slot"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"mainhand"')]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_item"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:stick"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"slot"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"mainhand"')]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:heart_of_the_sea"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:apply_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"duration"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"360s"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:conduit_power"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"add"')]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:logic"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"not"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:conduit_power"')]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:honey_bottle"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.1"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:apply_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:poison"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"remove"')]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:has_effect"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:poison"')]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:nether_wart"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"always"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:conversion"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"conversion"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:vampire_clay_soldier"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"additional_data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"Alpha"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:logic"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"not"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:holdable_property"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"attack_type"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"test_type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"exactly"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"7")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:rotten_flesh"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"break_chance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"always"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:conversion"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"conversion"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:zombie_clay_soldier"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"additional_data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"Curable"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"match_teams"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"pick_items"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:logic"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"operation"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"not"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:holdable_property"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"attack_type"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"test_type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"exactly"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"6")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:p(({value:t,isActive:e})=>a[3]||(a[3]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"minecraft:end_rod"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"effect"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:conversion"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token property"},'"conversion"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:clay_wraith"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token property"},'"additional_data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"LifeTicks"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"120"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token property"},'"WraithAttacks"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("                "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("                  "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:lightning_attack"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("                  "),s("span",{class:"token property"},'"attack_properties"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("                    "),s("span",{class:"token property"},'"attack_type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"melee"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("                    "),s("span",{class:"token property"},'"damage"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"2.0")]),n(`
`),s("span",{class:"line"},[n("                  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("                "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("              "),s("span",{class:"token punctuation"},"]")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("          "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"predicate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"csr:always_true"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token property"},'"test"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),a[23]||(a[23]=s("h2",{id:"tags",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tags"},[s("span",null,"Tags")])],-1)),a[24]||(a[24]=s("p",null,"An overview of all relevant tags added.",-1)),s("details",m,[a[13]||(a[13]=s("summary",null,"Details",-1)),l(o,{id:"41",data:[{id:"Soldier Item"},{id:"Weapons"},{id:"Armor"},{id:"POIs"}],"tab-id":"item-tags-preview"},{title0:p(({value:t,isActive:e})=>a[5]||(a[5]=[n("Soldier Item")])),title1:p(({value:t,isActive:e})=>a[6]||(a[6]=[n("Weapons")])),title2:p(({value:t,isActive:e})=>a[7]||(a[7]=[n("Armor")])),title3:p(({value:t,isActive:e})=>a[8]||(a[8]=[n("POIs")])),tab0:p(({value:t,isActive:e})=>a[9]||(a[9]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#csr:clay_soldier_weapon"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"required"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#csr:clay_soldier_armor"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("      "),s("span",{class:"token property"},'"required"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"#minecraft:coals"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:snowball"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:fire_charge"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:slime_ball"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:gravel"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:glass_bottle"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:sugar"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:gunpowder"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:tnt"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:magma_cream"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:poisonous_potato"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:emerald"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:redstone"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:nether_star"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:amethyst_shard"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:glowstone_dust"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:glow_ink_sac"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:dragon_breath"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:golden_apple"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:totem_of_undying"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:echo_shard"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:fermented_spider_eye"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:wheat"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:glistering_melon_slice"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:ender_pearl"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:chorus_fruit"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:firework_rocket"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:firework_star"')]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:p(({value:t,isActive:e})=>a[10]||(a[10]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:stick"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"csr:sharpened_stick"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:bone"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:blaze_rod"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:shears"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"csr:shear_blade"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:debug_stick"')]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab2:p(({value:t,isActive:e})=>a[11]||(a[11]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:lily_pad"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:red_mushroom"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:leather"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:glass_pane"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"#csr:soldier_rgb_glasses"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:paper"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:bamboo"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:brick"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:turtle_scute"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:gold_ingot"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:gold_block"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:diamond"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:diamond_block"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:cactus"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:string"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:feather"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:rabbit_hide"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:skeleton_skull"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:wither_skeleton_skull"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:coal_block"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:blaze_powder"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:bowl"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:command_block"')]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab3:p(({value:t,isActive:e})=>a[12]||(a[12]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"[")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:flint"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:honey_bottle"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:heart_of_the_sea"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"#c:dyes"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:nether_wart"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:rotten_flesh"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:end_rod"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token string"},'"minecraft:book"')]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"]")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),a[25]||(a[25]=s("h2",{id:"teams",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#teams"},[s("span",null,"Teams")])],-1)),l(o,{id:"59",data:[{id:"Normal"},{id:"No Team"},{id:"Any Dye"},{id:"Jeb_"}],"tab-id":"teamss-preview"},{title0:p(({value:t,isActive:e})=>a[14]||(a[14]=[n("Normal")])),title1:p(({value:t,isActive:e})=>a[15]||(a[15]=[n("No Team")])),title2:p(({value:t,isActive:e})=>a[16]||(a[16]=[n("Any Dye")])),title3:p(({value:t,isActive:e})=>a[17]||(a[17]=[n("Jeb_")])),tab0:p(({value:t,isActive:e})=>a[18]||(a[18]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Normal"')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:p(({value:t,isActive:e})=>a[19]||(a[19]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Normal"')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab2:p(({value:t,isActive:e})=>a[20]||(a[20]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"color"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#RRGGBB"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"from"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"minecraft:<dye>"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"<Dye>"')]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab3:p(({value:t,isActive:e})=>a[21]||(a[21]=[s("div",{class:"language-json line-numbers-mode","data-highlighter":"prismjs","data-ext":"json","data-title":"json"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"color"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"jeb_"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Jeb_"'),s("span",{class:"token punctuation"},",")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token property"},'"properties"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token property"},'"size"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"1.1")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),a[26]||(a[26]=c(`<h2 id="soldier-vehicle-properties" tabindex="-1"><a class="header-anchor" href="#soldier-vehicle-properties"><span>Soldier Vehicle Properties</span></a></h2><details class="hint-container details"><summary>Details</summary><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2))])}const g=i(d,[["render",q],["__file","example.html.vue"]]),_=JSON.parse('{"path":"/create-items/example.html","title":"Examples","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Items","slug":"items","link":"#items","children":[]},{"level":2,"title":"Armor","slug":"armor","link":"#armor","children":[]},{"level":2,"title":"Soldier POIs","slug":"soldier-pois","link":"#soldier-pois","children":[]},{"level":2,"title":"Tags","slug":"tags","link":"#tags","children":[]},{"level":2,"title":"Teams","slug":"teams","link":"#teams","children":[]},{"level":2,"title":"Soldier Vehicle Properties","slug":"soldier-vehicle-properties","link":"#soldier-vehicle-properties","children":[]}],"git":{"updatedTime":1746885425000,"contributors":[{"name":"XcraX1","email":"lego_master@web.de","commits":1}]},"filePathRelative":"create-items/example.md"}');export{g as comp,_ as data};
