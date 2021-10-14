// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	const player = event.source.player;
	// Change recipes here
	event.remove({output: 'thermal:machine_frame'})
	event.remove({output: 'thermal:device_fisher'})
	event.remove({output: 'thermal:energy_cell_frame'})
	
	event.recipes.createMechanicalCrafting('thermal:machine_frame', [
		'IGI',
		'GMG',
		'IGI'
	], {
		I: '#forge:ingots/iron',
		G: '#forge:glass',
		M: 'create:precision_mechanism'
	})
	event.recipes.createMechanicalCrafting('thermal:device_fisher', [
		'WTW',
		'GFG',
		'WCW'
	], {
		W: '#minecraft:planks',
		T: 'create:electron_tube',
		G: '#forge:glass',
		F: 'minecraft:fishing_rod',
		C: 'immersiveengineering:component_iron'
	})
	event.recipes.createMechanicalCrafting('thermal:energy_cell_frame', [
		'LGL',
		'GEG',
		'LGL'
	], {
		L: '#forge:ingots/lead',
		G: '#forge:glass',
		E: '#forge:gears/electrum'
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})