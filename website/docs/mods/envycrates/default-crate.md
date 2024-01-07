---
description: 'Example crate (put in config/EnvyCrates/crates):'
---

# Default Crate

<details>

<summary>Default Crate</summary>

```
{
	"type": "simple",
	"id": "Example",
	"display_name": "Example Crate",
  "key": {
      "type": "minecraft:nether_star",
      "amount": 1,
      "name": "Example Crate Key",
      "lore": [],
      "enchants": {
          "one": {
          "enchant": "minecraft:unbreaking",
          "level": 1
          }
      },
      "flags": [
          "HIDE_ENCHANTS"
      ],
      "nbt": {
          "a": {
              "type": "int",
              "data": 1,
              "subData": {}
                  }
              }
  },
	"given_key_message": [
		"You have been given a key for Example Crate"
	],
	"need_a_key": [
		"You need a key to open this crate. Get one here: URL!"
	],
	"rewards": [
		{
			"id": "abc",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"broadcast yay"
			],
			"display":  {
				"id": "minecraft:diamond",
				"Count": 1
			},
			"display_data": {
				"x": 1,
				"y": 1,
				"page": 1
			}
		},
		{
			"id": "abc2",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"broadcast boo"
			],
			"display":  {
				"id": "minecraft:stone",
				"Count": 1
			},
			"display_data": {
				"x": 1,
				"y": 2,
				"page": 1
			}
		}
	],
	"preview_gui_settings": {
		"title": "Hello",
		"height": 6,
		"fillType": "BLOCK",
		"fillerItems": {
			"0": {
				"enabled": true,
				"type": "minecraft:black_stained_glass_pane",
				"amount": "1",
				"damage": 0,
				"name": " ",
				"flags": [],
				"lore": [],
				"enchants": {},
				"nbt": {}
			}
		}
	},
	"display_gui_settings": {
		"title": "Hello",
		"height": 6,
		"fillType": "BLOCK",
		"fillerItems": {
			"0": {
				"enabled": true,
				"type": "minecraft:black_stained_glass_pane",
				"amount": "1",
				"damage": 0,
				"name": " ",
				"flags": [],
				"lore": [],
				"enchants": {},
				"nbt": {}
			}
		}
	},
	"display_slots": [
		1, 2, 3, 4, 5, 6, 7
	],
	"spin_duration": 30,
	"final_reward_position": 30,
	"preview_pages": 1,
	"preview_next_page": {
		"enabled": true,
		"type": "minecraft:stone",
		"amount": 1,
		"damage": 0,
		"name": "Next page",
		"flags": [],
		"lore": [],
		"enchants": {},
		"nbt": {},
		"positions": {
			"one": {
				"x": 5,
				"y": 3
			}
		},
		"requiresPermission": false,
		"permission": "",
		"elseItem": {},
		"closeOnClick": false,
		"commandsExecuted": []
	},
	"preview_previous_page": {
		"enabled": true,
		"type": "minecraft:stone",
		"amount": 1,
		"damage": 0,
		"name": "Prev. page",
		"flags": [],
		"lore": [],
		"enchants": {},
		"nbt": {},
		"positions": {
			"one": {
				"x": 4,
				"y": 3
			}
		},
		"requiresPermission": false,
		"permission": "",
		"elseItem": {},
		"closeOnClick": false,
		"commandsExecuted": []
	}
}
```

</details>
