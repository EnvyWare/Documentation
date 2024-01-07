---
description: You can use multiple specs in one broadcast
---

# Broadcast Types

<table>
<thead>
<tr>
<th width="129">Type</th>
<th width="219">Description</th>
<th width="435">Example</th>
</tr>
</thead>

<tbody><tr>
<td>Capture</td>
<td>Initiates a broadcast when a specified Spec if captured.</td>
<td>
<pre class="language-yaml"><code class="lang-yaml">    one: #Example Using Shiny Spec
        type: capture
        spec: shiny
        nearest-player-radius: 30.0
        broadcasts:
        - '&#x26;8-------'
        - '&#x26;a%nearest_name% caught %pokemon% at %x%, %y%, %z%, in %world%'
        - '&#x26;8-------'
        webhook: none
        nearest-player-only: false
</code></pre></td></tr>
<tr><td>Spawn</td>
<td>Initiates a broadcast when a specified spec spawns</td>
<td>
<pre class="language-yaml"><code class="lang-yaml">    one: #Example Using Shiny Spec
        type: spawn
        spec: shiny
        nearest-player-radius: 30.0
        broadcasts:
        - '&#x26;8-------'
        - '&#x26;aShiny %pokemon% spawned near %nearest_name% at %x%, %y%, %z%, in %world%'
        - '&#x26;8-------'
        webhook: none
        nearest-player-only: true #True means it will only broadcast to the nearest player
</code></pre></td>
</tr><tr><td>Defeat</td>
<td>Initiates a broadcast when a specified spec is defeated</td>
<td>
<pre class="language-yaml"><code class="lang-yaml">    one: #Example Using Shiny Spec
        type: defeat
        spec: shiny
        nearest-player-radius: 30.0
        broadcasts:
        - '&#x26;8-------'
        - '&#x26;a%nearest_name% defeated %pokemon% at %x%, %y%, %z%, in %world%'
        - '&#x26;8-------'
        webhook: none
        nearest-player-only: false
</code></pre></td></tr></tbody></table>
