// Create screenspace component
const canvas = new UICanvas()

class UISystem {
    update(dt: number) {
        text.value = `number of stones collected: ${stonesCount}`
    }
}
engine.addSystem(new UISystem())
var stonesCount: number = 0

// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)

text.value = `number of stones collected: ${stonesCount}`
text.fontSize = 20
text.width = 120
text.height = 30
text.hAlign = "left"
text.paddingLeft = 20

export function setStones(count: number): void {
    stonesCount += count;
}
