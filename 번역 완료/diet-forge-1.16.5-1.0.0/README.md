# Diet
[![](http://cf.way2muchnoise.eu/versions/diet.svg)](https://www.curseforge.com/minecraft/mc-mods/diet)
[![](http://cf.way2muchnoise.eu/short_diet_downloads.svg)](https://www.curseforge.com/minecraft/mc-mods/diet/files)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg?&style=flat-square)](https://www.gnu.org/licenses/lgpl-3.0)
[![ko-fi](https://img.shields.io/badge/Support%20Me-Ko--fi-%23FF5E5B?style=flat-square)](https://ko-fi.com/C0C1NL4O)

Diet is a mod that facilitates the creation and management of dietary food groups in Minecraft. Diet
comes with a default configuration that creates five classical food groups (fruits, grains, vegetables,
proteins, and sugars). The mod is highly configurable; users and modpack developers can define their
own food groups, classifications, and diet effects.

## Features

### Food Groups

![](https://i.ibb.co/BLYDcbT/diet-screen.png)

Food groups are custom dietary groups that represent the types of food that you have eaten. Each
group has a value ranging between 0% and 100% depending on how much of that particular category that
a player has eaten. These values increase depending on what types of food a player eats and every
group gradually decays when the player uses up their hunger bar.

By default, Diet comes with five classical food groups: Fruits, Grains, Proteins, Vegetables, and
Sugars.

By editing the `diet-groups.toml` configuration file in the world save's `serverconfig` folder,
users and modpack developers can create their own custom food groups. Configurable options include:
- Name
- Item Icon
- Hexcode Color
- Ordering
- Default Value
- Gain Multiplier
- Decay Multiplier

Please refer to the [wiki](https://github.com/TheIllusiveC4/Diet/wiki) for more detailed
information.

### Dietary Effects

![](https://i.ibb.co/7vmZfpD/diet-effects.png)

Dietary effects are custom rewards or penalties applied to players based on certain, configurable
food group values. These effects can be configured through the `diet-effects.toml` file in the world
save's `serverconfig` folder.

Possible effects can include any registered potion effect, vanilla and modded, as
well as modifying attributes directly (i.e. increasing maximum health by an arbitrary value).
The conditions for these effects are highly configurable, including checking specific values,
checking only subsets of groups, applying effects cumulatively for each matching test, and much
more.

Please refer to the [wiki](https://github.com/TheIllusiveC4/Diet/wiki) for more detailed
information.

### Commands

Diet registers a few commands to help aid debugging and server management.

- `/diet`
    - `get <player> <group>`
    - `set <player> <group> <value>`
    - `add <player> <group> <value>`
    - `subtract <player> <group> <value>`
    - `reset <player>`
    - `pause <player>`
    - `resume <player>`
    - `export <filter> <argument>`

## Downloads
- [Diet on CurseForge](https://www.curseforge.com/minecraft/mc-mods/diet/files)

## Support

Please report all bugs, issues, and feature requests to the [issue tracker](https://github.com/TheIllusiveC4/Diet/issues).

For non-technical support and questions, join the developer's [Discord](https://discord.gg/JWgrdwt).

## License

All source code and assets are licensed under LGPL 3.0.

## Donations

Donations to the developer can be sent through [Ko-fi](https://ko-fi.com/C0C1NL4O).

## Affiliates

[![BisectHosting](https://i.ibb.co/1G4QPdc/bh-illusive.png)](https://bisecthosting.com/illusive)

## Five Food Groups - Supported Mods
- [Abnormals Delight](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight)
- [Abundance](https://www.curseforge.com/minecraft/mc-mods/abundance)
- [Advent of Ascension (Nevermine)](https://www.curseforge.com/minecraft/mc-mods/advent-of-ascension-nevermine)
- [akkamaddi's Ashenwheat](https://www.curseforge.com/minecraft/mc-mods/akkamaddis-ashenwheat)
- [Alex's Mobs](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs)
- [Animalium](https://www.curseforge.com/minecraft/mc-mods/animalium)
- [Aquaculture 2](https://www.curseforge.com/minecraft/mc-mods/aquaculture)
- [Ars Nouveau](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)
- [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts)
- [Atmospheric](https://www.curseforge.com/minecraft/mc-mods/atmospheric)
- [Atum 2: Return to the Sands](https://www.curseforge.com/minecraft/mc-mods/atum)
- [Autumnity](https://www.curseforge.com/minecraft/mc-mods/autumnity)
- [Bayou Blues](https://www.curseforge.com/minecraft/mc-mods/bayou-blues)
- [BetterDefaultBiomes](https://www.curseforge.com/minecraft/mc-mods/better-default-biomes)
- [Berry Good](https://www.curseforge.com/minecraft/mc-mods/berry-good)
- [Bettas](https://www.curseforge.com/minecraft/mc-mods/bettas)
- [Better Animals Plus](https://www.curseforge.com/minecraft/mc-mods/betteranimalsplus)
- [Better End (Forge)](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port)
- [Bloom and Gloom](https://www.curseforge.com/minecraft/mc-mods/bloom-and-gloom)
- [Blue Skies](https://www.curseforge.com/minecraft/mc-mods/blue-skies)
- [Blueberry](https://www.curseforge.com/minecraft/mc-mods/blueberry)
- [Buzzier Bees](https://www.curseforge.com/minecraft/mc-mods/buzzier-bees)
- [Caves and Cliffs Backport](https://www.curseforge.com/minecraft/mc-mods/caves-and-cliffs-backport)
- [Caves and Cliffs Mod](https://www.curseforge.com/minecraft/mc-mods/caves-and-cliffs-mod)
- [Charcoal Pit](https://www.curseforge.com/minecraft/mc-mods/charcoal-pit)
- [Combustive Fishing](https://www.curseforge.com/minecraft/mc-mods/combustive-fishing)
- [Comfortable Nether](https://www.curseforge.com/minecraft/mc-mods/comfortable-nether)
- [Conjurer's Cookbook](https://www.curseforge.com/minecraft/mc-mods/conjurers-cookbook)
- [Cookielicious](https://www.curseforge.com/minecraft/mc-mods/cookielicious)
- [Create](https://www.curseforge.com/minecraft/mc-mods/create)
- [Create Crafts & Additions](https://www.curseforge.com/minecraft/mc-mods/createaddition)
- [Creatures and Beasts](https://www.curseforge.com/minecraft/mc-mods/creatures-and-beasts)
- [Crock Pot](https://www.curseforge.com/minecraft/mc-mods/crock-pot)
- [Croptopia](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric)
- [Cyclic](https://www.curseforge.com/minecraft/mc-mods/cyclic)
- [Delicate and Dainty](https://www.curseforge.com/minecraft/mc-mods/delicate-and-dainty)
- [Drop the Meat](https://www.curseforge.com/minecraft/mc-mods/drop-the-meat)
- [Druidcraft](https://www.curseforge.com/minecraft/mc-mods/druidcraft)
- [Edible Bugs](https://www.curseforge.com/minecraft/mc-mods/edible-bugs)
- [Eidolon](https://www.curseforge.com/minecraft/mc-mods/eidolon)
- [Endergetic Expansion](https://www.curseforge.com/minecraft/mc-mods/endergetic)
- [Endless Oceans: Adventures](https://www.curseforge.com/minecraft/mc-mods/endless-ocean-adventures)
- [Enhanced Mushrooms](https://www.curseforge.com/minecraft/mc-mods/enhanced-mushrooms)
- [Environmental](https://www.curseforge.com/minecraft/mc-mods/environmental)
- [EvilCraft](https://www.curseforge.com/minecraft/mc-mods/evilcraft)
- [Exotic Birds](https://www.curseforge.com/minecraft/mc-mods/exotic-birds)
- [Extended Caves](https://www.curseforge.com/minecraft/mc-mods/extended-caves)
- [Extra Food Recipes](https://www.curseforge.com/minecraft/mc-mods/extra-food-recipes)
- [Extra Foods](https://www.curseforge.com/minecraft/mc-mods/extra-foods)
- [Fantasy Mounts](https://www.curseforge.com/minecraft/mc-mods/fantasy-mounts)
- [Farmer's Delight](https://www.curseforge.com/minecraft/mc-mods/farmers-delight)
- [Fins and Tails](https://www.curseforge.com/minecraft/mc-mods/fins-and-tails)
- [Fluffy's Farming](https://www.curseforge.com/minecraft/mc-mods/fluffys-farming)
- [Food Expansion: Reimagined](https://www.curseforge.com/minecraft/mc-mods/food-expansion-reimagined)
- [ForageCraft](https://www.curseforge.com/minecraft/mc-mods/foragecraft)
- [Forbidden and Arcanus](https://www.curseforge.com/minecraft/mc-mods/forbidden-arcanus)
- [Frozen Up](https://www.curseforge.com/minecraft/mc-mods/frozen-up)
- [Fruit Trees](https://www.curseforge.com/minecraft/mc-mods/fruit-trees)
- [Fruitful](https://www.curseforge.com/minecraft/mc-mods/fruitful)
- [Gaia Dimension](https://www.curseforge.com/minecraft/mc-mods/gaia-dimension)
- [Gilded Ingot](https://www.curseforge.com/minecraft/mc-mods/gilded-ingot)
- [Ginger's Drinks+](https://www.curseforge.com/minecraft/mc-mods/gingerkes-drinks-mod)
- [Glow Bats](https://www.curseforge.com/minecraft/mc-mods/glow-bats)
- [Golden Beetroot Mod](https://www.curseforge.com/minecraft/mc-mods/golden-beetroot-mod)
- [Good Night's Sleep](https://www.curseforge.com/minecraft/mc-mods/good-nights-sleep)
- [Greek Fantasy](https://www.curseforge.com/minecraft/mc-mods/greek-fantasy)
- [Ice and Fire: Dragons](https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons)
- [Immersive Cooking](https://www.curseforge.com/minecraft/mc-mods/immersive-cooking)
- [Improved Berries](https://www.curseforge.com/minecraft/mc-mods/improved-berries)
- [Infernal Expansion](https://www.curseforge.com/minecraft/mc-mods/infernal-expansion)
- [Inspirations](https://www.curseforge.com/minecraft/mc-mods/inspirations)
- [Integrated Dynamics](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics)
- [Kray's Magic Candles](https://www.curseforge.com/minecraft/mc-mods/krays-magic-candles)
- [Meet Your Fight](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight)
- [Mowzie's Mobs](https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs)
- [Mystical World](https://www.curseforge.com/minecraft/mc-mods/mystical-world)
- [Neapolitan](https://www.curseforge.com/minecraft/mc-mods/neapolitan)
- [Nef's Medieval decoration](https://www.curseforge.com/minecraft/mc-mods/neoelfeos-medieval-pub-decoration)
- [Nether Soups Mod](https://www.curseforge.com/minecraft/mc-mods/nether-soups-mod)
- [Nether's Delight](https://www.curseforge.com/minecraft/mc-mods/nethers-delight)
- [Nourished End](https://www.curseforge.com/minecraft/mc-mods/nourished-end)
- [Nourished Nether](https://www.curseforge.com/minecraft/mc-mods/nourished-nether)
- [Odd Water Mobs](https://www.curseforge.com/minecraft/mc-mods/odd-water-mobs)
- [Oh The Biomes You'll Go](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go)
- [Omni](https://www.curseforge.com/minecraft/mc-mods/omni)
- [Pam's HarvestCraft 2: Crops](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops)
- [Pam's HarvestCraft 2: Food Core](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core)
- [Pam's HarvestCraft 2: Food Extended](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-extended)
- [Pam's HarvestCraft 2: Trees](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees)
- [Pandoras Creatures](https://www.curseforge.com/minecraft/mc-mods/pandoras-creatures)
- [Peculiars](https://www.curseforge.com/minecraft/mc-mods/peculiars)
- [Pickle Tweaks](https://www.curseforge.com/minecraft/mc-mods/pickle-tweaks)
- [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized)
- [Project: Vibrant Journeys](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys)
- [Pumpkin Spice Everything](https://www.curseforge.com/minecraft/mc-mods/pumpkin-spice-everything)
- [Quark](https://www.curseforge.com/minecraft/mc-mods/quark)
- [Rats](https://www.curseforge.com/minecraft/mc-mods/rats)
- [Resourceful Bees](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees)
- [Roots Classic](https://www.curseforge.com/minecraft/mc-mods/roots-classic)
- [Seasonals](https://www.curseforge.com/minecraft/mc-mods/seasonals)
- [Shulkered](https://www.curseforge.com/minecraft/mc-mods/shulkered)
- [Silent Gear](https://www.curseforge.com/minecraft/mc-mods/silent-gear)
- [Silent's Gems (Experimental)](https://www.curseforge.com/minecraft/mc-mods/silents-gems-experimental)
- [Silent's Mechanisms](https://www.curseforge.com/minecraft/mc-mods/silents-mechanisms)
- [Simple Corn](https://www.curseforge.com/minecraft/mc-mods/simple-corn)
- [Simple Delights](https://www.curseforge.com/minecraft/mc-mods/simple-delights)
- [Simple Farming](https://www.curseforge.com/minecraft/mc-mods/simple-farming)
- [Simply Tea](https://www.curseforge.com/minecraft/mc-mods/simply-tea)
- [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries)
- [SurvivalPlus](https://www.curseforge.com/minecraft/mc-mods/survivalplus)
- [Tea Kettle](https://www.curseforge.com/minecraft/mc-mods/tea-kettle)
- [Terra Incognita](https://www.curseforge.com/minecraft/mc-mods/terraincognita)
- [The Bumblezone](https://www.curseforge.com/minecraft/mc-mods/the-bumblezone-forge)
- [The Outer End](https://www.curseforge.com/minecraft/mc-mods/the-outer-end)
- [The Undergarden](https://www.curseforge.com/minecraft/mc-mods/the-undergarden)
- [Tinkers' Construct](https://www.curseforge.com/minecraft/mc-mods/tinkers-construct)
- [Trick'O Creeps](https://www.curseforge.com/minecraft/mc-mods/tricko-creeps)
- [Turkish Meals](https://www.curseforge.com/minecraft/mc-mods/turkish-meals)
- [Turtlemancy](https://www.curseforge.com/minecraft/mc-mods/turtlemancy)
- [Trail Mix](https://www.curseforge.com/minecraft/mc-mods/trail-mix)
- [Twilight Forest](https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest)
- [Unique Crops](https://www.curseforge.com/minecraft/mc-mods/unique-crops)
- [Untitled Duck Mod](https://www.curseforge.com/minecraft/mc-mods/untitled-duck-mod-forge)
- [Upgrade Aquatic](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic)
- [VanillaFoodPantry Mod](https://www.curseforge.com/minecraft/mc-mods/vanillafoodpantry-mod)
- [VanillaTweaks](https://www.curseforge.com/minecraft/mc-mods/vanillatweaks)
- [Vanilla Cookbook](https://www.curseforge.com/minecraft/mc-mods/vanilla-cookbook)
- [Water Source](https://www.curseforge.com/minecraft/mc-mods/water-source)
- [Wyrmroost](https://www.curseforge.com/minecraft/mc-mods/wyrmroost)
- [XercaMod](https://www.curseforge.com/minecraft/mc-mods/xercamod)
- ...and more!

Please request support by opening an issue on the [issue tracker](https://github.com/TheIllusiveC4/Diet/issues)
or opening a pull request to contribute directly.
