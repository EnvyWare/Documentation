---
description: Thi
---

# Example Crate with Sprites

<details>

<summary>Example Legendary Crate with Sprites</summary>

```
{
	"type": "simple",
	"id": "Legendary",
	"display_name": "&6&lLegendary Crate",
  "key": {
      "type": "minecraft:nether_star",
      "amount": 1,
      "name": "&6&lLegendary Crate Key",
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
		"You have been given a key for &6&lLegendary Crate"
	],
    "need_a_key": [
        "You need a key to open this crate. Get one here: URL!"
    ],
	"rewards": [
		{
			"id": "Mewtwo",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% mewtwo"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Mewtwo",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 150,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 1,
				"page": 1
			}
		},
    		{
			"id": "Rayquaza",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% rayquaza"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Rayquaza",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 384,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 1,
				"page": 1
			}
		},
    		{
			"id": "Kyogre",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% kyogre"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Mewtwo",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 382,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 1,
				"page": 1
			}
		},
    		{
			"id": "Articuno",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% articuno"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Articuno",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 144,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 1,
				"page": 1
			}
		},
		    		{
			"id": "Mew",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% mew"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Mew",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 151,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 1,
				"page": 1
			}
		},
		    		{
			"id": "Moltres",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% moltres"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Moltres",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 146,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 1,
				"page": 1
			}
		},
		    		{
			"id": "Zapdos",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% zapdos"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zapdos",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 145,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 1,
				"page": 1
			}
		},
		    		{
			"id": "Celebi",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% celebi"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Celebi",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 251,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Entei",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% entei"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Entei",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 244,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "HoOh",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% ho-oh"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Ho-Oh",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 250,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Lugia",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% lugia"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Lugia",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 249,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Raikou",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% raikou"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Raikou",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 243,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Suicune",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% suicune"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Suicune",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 245,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Deoxys",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% deoxys"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Deoxys",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 386,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 2,
				"page": 1
			}
		},
		    		{
			"id": "Groudon",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% groudon"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Groudon",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 383,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Jirachi",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% jirachi"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Jirachi",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 385,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Latias",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% latias"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Latias",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 380,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Latios",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% latios"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Latios",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 381,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Regice",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% regice"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Regice",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 378,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Regirock",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% regirock"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Regirock",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 377,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Registeel",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% registeel"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Registeel",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 379,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 3,
				"page": 1
			}
		},
		    		{
			"id": "Arceus",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% arceus"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Arceus",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 493,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Azelf",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% azelf"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Azelf",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 482,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Cresselia",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% cresselia"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Cresselia",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 488,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Darkrai",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% darkrai"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Darkrai",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 491,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Dialga",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% dialga"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Dialga",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 483,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Giratina",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% giratina"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Giratina",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 487,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "altered",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Heatran",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% heatran"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Heatran",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 485,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 4,
				"page": 1
			}
		},
		    		{
			"id": "Manaphy",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% manaphy"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Manaphy",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 490,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Mesprit",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% mesprit"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Mesprit",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 481,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Palkia",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% palkia"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Palkia",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 484,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Phione",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% phione"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Phione",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 489,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Regigigas",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% regigigas"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Regigigas",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 486,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Shaymin",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% shaymin"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Shaymin",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 492,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "land",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Uxie",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% uxie"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Uxie",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 480,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 1,
				"page": 2
			}
		},
		    		{
			"id": "Cobalion",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Cobalion"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Cobalion",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 638,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Genesect",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% genesect"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Genesect",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 649,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Keldeo",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Keldeo"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Keldeo",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 647,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "ordinary",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Kyurem",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% kyurem"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Kyurem",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 646,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Landorus",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% landorus"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Landorus",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 645,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "incarnate",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Meloetta",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% meloetta"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Meloetta",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 685,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Reshiram",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% reshiram"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Reshiram",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 643,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 2,
				"page": 2
			}
		},
		    		{
			"id": "Terrakion",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Terrakion"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Terrakion",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 639,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Thundurus",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Thundurus"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Thundurus",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 642,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "incarnate",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Victini",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% victini"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Victini",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 494,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Virizion",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% virizion"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Virizion",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 640,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Zekrom",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Zekrom"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zekrom",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 644,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Diancie",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Diancie"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Diancie",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 719,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Hoopa",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% hoopa"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Hoopa",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 720,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "confined",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 3,
				"page": 2
			}
		},
		    		{
			"id": "Volcanion",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% volcanion"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Volcanion",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 721,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Xerneas",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% xerneas"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Xerneas",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 716,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "neutral",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Yveltal",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Yveltal"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Yveltal",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 717,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Zygarde",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Zygarde"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zygarde",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 718,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "fifty_percent",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Cosmoem",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Cosmoem"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Cosmoem",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 790,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Cosmog",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Cosmog"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Cosmog",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 789,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Lunala",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Lunala"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Lunala",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 792,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 4,
				"page": 2
			}
		},
		    		{
			"id": "Magearna",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% magearna"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Magearna",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 801,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Marshadow",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% marshadow"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Marshadow",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 802,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Melmetal",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% melmetal"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Melmetal",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 809,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Meltan",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% meltan"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Meltan",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 808,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Necrozma",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% necrozma"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Necrozma",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 800,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Silvally",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Silvally"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Silvally",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 773,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Solgaleo",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% solgaleo"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Solgaleo",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 791,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 1,
				"page": 3
			}
		},
		    		{
			"id": "Tapu Bulu",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% tapubulu"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Tapu Bulu",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 787,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Tapu Fini",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% tapufini"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Tapu Fini",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 788,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Tapu Koko",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Tapukoko"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Tapu Koko",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 785,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Tapu Lele",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Tapulele"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Tapu Lele",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 786,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Zeraora",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% zeraora"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zeraora",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 807,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Calyrex",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% calyrex"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Calyrex",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 898,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Eternatus",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Eternatus"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Eternatus",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 890,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "ordinary",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 2,
				"page": 3
			}
		},
		    		{
			"id": "Enamorus",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% enamorus"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Enamorus",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 905,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "Incarnate",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Glastrier",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% glastrier"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Glastrier",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 896,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Kubfu",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% kubfu"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Kubfu",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 891,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Regieleki",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% regieleki"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Regieleki",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 894,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 4,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Regidrago",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% regidrago"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Regidrago",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 895,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 5,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Spectrier",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% spectrier"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Spectrier",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 897,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 6,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Urshifu",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Urshifu"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Urshifu",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 892,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "SingleStrike",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 7,
				"y": 3,
				"page": 3
			}
		},
		    		{
			"id": "Zacian",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% zacian"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zacian",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 888,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "hero",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 1,
				"y": 4,
				"page": 3
			}
		},
		    		{
			"id": "Zamazenta",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% Zamazenta"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zamazenta",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 889,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "hero",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 2,
				"y": 4,
				"page": 3
			}
		},
		    		{
			"id": "Zarude",
			"type": "simple_commands",
			"weight": 20.0,
			"commands": [
				"pokegive %player% zarude"
			],
			"display":  {
        "enabled": true,
        "type": "pixelmon:pixelmon_sprite",
        "amount": 1,
        "damage": 0,
        "name": "Zarude",
        "flags": [],
        "lore": [],
        "enchants": {},
        "nbt": {
            "ndex": {
                "type": "short",
                "data": 893,
                "subData": {}
            },
            "gender": {
                "type": "byte",
                "data": 1,
                "subData": {}
            },
            "form": {
                "type": "string",
                "data": "",
                "subData": {}
            },
            "palette": {
                "type": "string",
                "data": "none",
                "subData": {}
            }
        }
			},
			"display_data": {
				"x": 3,
				"y": 4,
				"page": 3
			}
		}	



	],
	"preview_gui_settings": {
		"title": "&6&lLegendary Crate",
		"height": 6,
		"fillType": "BLOCK",
		"fillerItems": {
			"0": {
				"enabled": true,
				"type": "minecraft:yellow_stained_glass_pane",
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
		"title": "&6&lLegendary Crate",
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
	"preview_pages": 3,
	"preview_next_page": {
		"enabled": true,
		"type": "pixelmon:trade_holder_right",
		"amount": 1,
		"damage": 0,
		"name": "Next page",
		"flags": [],
		"lore": [],
		"enchants": {},
		"nbt": {},
		"positions": {
			"one": {
				"x": 8,
				"y": 5
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
		"type": "pixelmon:trade_holder_left",
		"amount": 1,
		"damage": 0,
		"name": "Prev. page",
		"flags": [],
		"lore": [],
		"enchants": {},
		"nbt": {},
		"positions": {
			"one": {
				"x": 0,
				"y": 5
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

If you have issues with a Pokémon sprite not appearing, make sure that the Pokémon in question does not have a default named form like with Zamazenta.
