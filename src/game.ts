import * as utils from '@dcl/ecs-scene-utils'
import { createGen } from './gen'

// import { scene } from "./scene" 

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(AudioSource)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

engine.addSystem(new RotatorSystem())

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const archwayOfLoyalty3 = new Entity('archwayOfLoyalty3')
engine.addEntity(archwayOfLoyalty3)
archwayOfLoyalty3.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(34, 0, 65.5),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty3.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/27943c14-c660-4a0c-b9f5-af162022cf65/ChineseGate_01/ChineseGate_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
archwayOfLoyalty3.addComponentOrReplace(gltfShape)

const box = new Entity('box')
engine.addEntity(box)
box.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(3.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
box.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/ed290ab1-2d77-417a-b6cb-604350c25e44/box.gltf")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
box.addComponentOrReplace(gltfShape2)

const box2 = new Entity('box2')
engine.addEntity(box2)
box2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(9.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
box2.addComponentOrReplace(transform4)
box2.addComponentOrReplace(gltfShape2)

const box3 = new Entity('box3')
engine.addEntity(box3)
box3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(11, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
box3.addComponentOrReplace(transform5)
box3.addComponentOrReplace(gltfShape2)

const box4 = new Entity('box4')
engine.addEntity(box4)
box4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(11, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
box4.addComponentOrReplace(transform6)
box4.addComponentOrReplace(gltfShape2)

const archwayOfLoyalty = new Entity('archwayOfLoyalty')
engine.addEntity(archwayOfLoyalty)
archwayOfLoyalty.setParent(_scene)
archwayOfLoyalty.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(34, 0, 52.5),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty.addComponentOrReplace(transform7)

const archwayOfLoyalty2 = new Entity('archwayOfLoyalty2')
engine.addEntity(archwayOfLoyalty2)
archwayOfLoyalty2.setParent(_scene)
archwayOfLoyalty2.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(34, 0, 40),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty2.addComponentOrReplace(transform8)

const archwayOfLoyalty4 = new Entity('archwayOfLoyalty4')
engine.addEntity(archwayOfLoyalty4)
archwayOfLoyalty4.setParent(_scene)
archwayOfLoyalty4.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(34.5, 0, 28.5),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty4.addComponentOrReplace(transform9)

const archwayOfLoyalty5 = new Entity('archwayOfLoyalty5')
engine.addEntity(archwayOfLoyalty5)
archwayOfLoyalty5.setParent(_scene)
archwayOfLoyalty5.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(34.5, 0, 17),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty5.addComponentOrReplace(transform10)

const archwayOfLoyalty6 = new Entity('archwayOfLoyalty6')
engine.addEntity(archwayOfLoyalty6)
archwayOfLoyalty6.setParent(_scene)
archwayOfLoyalty6.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(34.5, 0, 6),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty6.addComponentOrReplace(transform11)

const roadStraightShort = new Entity('roadStraightShort')
engine.addEntity(roadStraightShort)
roadStraightShort.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(27, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadStraightShort.addComponentOrReplace(transform12)
const gltfShape3 = new GLTFShape("models/b30392a6-02dc-473e-9eb5-a1f67f972bfe/Road Straight Short.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roadStraightShort.addComponentOrReplace(gltfShape3)

const roadStraight = new Entity('roadStraight')
engine.addEntity(roadStraight)
roadStraight.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(18.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadStraight.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("models/1a60f177-c822-4d6a-b65a-983c90e05ad6/Road Straight.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
roadStraight.addComponentOrReplace(gltfShape4)

const roadStraightShort2 = new Entity('roadStraightShort2')
engine.addEntity(roadStraightShort2)
roadStraightShort2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(52.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadStraightShort2.addComponentOrReplace(transform14)
roadStraightShort2.addComponentOrReplace(gltfShape3)

const roadCrossShort = new Entity('roadCrossShort')
engine.addEntity(roadCrossShort)
roadCrossShort.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(47.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadCrossShort.addComponentOrReplace(transform15)
const gltfShape5 = new GLTFShape("models/2d8c6889-2029-458b-a40a-b48e3e4ebcd8/Road Cross Short.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roadCrossShort.addComponentOrReplace(gltfShape5)

const roadCrossShort2 = new Entity('roadCrossShort2')
engine.addEntity(roadCrossShort2)
roadCrossShort2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(49, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadCrossShort2.addComponentOrReplace(transform16)
roadCrossShort2.addComponentOrReplace(gltfShape5)

const roadCrossShort3 = new Entity('roadCrossShort3')
engine.addEntity(roadCrossShort3)
roadCrossShort3.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(53.5, 0, 75.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadCrossShort3.addComponentOrReplace(transform17)
roadCrossShort3.addComponentOrReplace(gltfShape5)

const roadEnd = new Entity('roadEnd')
engine.addEntity(roadEnd)
roadEnd.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(33, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roadEnd.addComponentOrReplace(transform18)
const gltfShape6 = new GLTFShape("models/70ff87e0-e483-4fc5-b169-ff46d1dc710b/Road End.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roadEnd.addComponentOrReplace(gltfShape6)

const bigStone = new Entity('bigStone')
engine.addEntity(bigStone)
bigStone.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(28, 0, 68),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone.addComponentOrReplace(transform19)
const gltfShape7 = new GLTFShape("models/ce45a1a0-7021-4428-b56f-cd60bdcb7dac/RockLarge_03/RockLarge_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
bigStone.addComponentOrReplace(gltfShape7)

const bigStone2 = new Entity('bigStone2')
engine.addEntity(bigStone2)
bigStone2.setParent(_scene)
bigStone2.addComponentOrReplace(gltfShape7)
const transform20 = new Transform({
  position: new Vector3(28.5, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone2.addComponentOrReplace(transform20)

const bigStone3 = new Entity('bigStone3')
engine.addEntity(bigStone3)
bigStone3.setParent(_scene)
bigStone3.addComponentOrReplace(gltfShape7)
const transform21 = new Transform({
  position: new Vector3(28.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone3.addComponentOrReplace(transform21)

const bigStone4 = new Entity('bigStone4')
engine.addEntity(bigStone4)
bigStone4.setParent(_scene)
bigStone4.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(28, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone4.addComponentOrReplace(transform22)

const bigStone5 = new Entity('bigStone5')
engine.addEntity(bigStone5)
bigStone5.setParent(_scene)
bigStone5.addComponentOrReplace(gltfShape7)
const transform23 = new Transform({
  position: new Vector3(28, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone5.addComponentOrReplace(transform23)

const bigStone6 = new Entity('bigStone6')
engine.addEntity(bigStone6)
bigStone6.setParent(_scene)
bigStone6.addComponentOrReplace(gltfShape7)
const transform24 = new Transform({
  position: new Vector3(28.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone6.addComponentOrReplace(transform24)

const bigStone7 = new Entity('bigStone7')
engine.addEntity(bigStone7)
bigStone7.setParent(_scene)
bigStone7.addComponentOrReplace(gltfShape7)
const transform25 = new Transform({
  position: new Vector3(29.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone7.addComponentOrReplace(transform25)

const bigStone8 = new Entity('bigStone8')
engine.addEntity(bigStone8)
bigStone8.setParent(_scene)
bigStone8.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(29, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone8.addComponentOrReplace(transform26)

const bigStone9 = new Entity('bigStone9')
engine.addEntity(bigStone9)
bigStone9.setParent(_scene)
bigStone9.addComponentOrReplace(gltfShape7)
const transform27 = new Transform({
  position: new Vector3(39, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone9.addComponentOrReplace(transform27)

const bigStone10 = new Entity('bigStone10')
engine.addEntity(bigStone10)
bigStone10.setParent(_scene)
bigStone10.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(39.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone10.addComponentOrReplace(transform28)

const bigStone11 = new Entity('bigStone11')
engine.addEntity(bigStone11)
bigStone11.setParent(_scene)
bigStone11.addComponentOrReplace(gltfShape7)
const transform29 = new Transform({
  position: new Vector3(40.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone11.addComponentOrReplace(transform29)

const bigStone12 = new Entity('bigStone12')
engine.addEntity(bigStone12)
bigStone12.setParent(_scene)
bigStone12.addComponentOrReplace(gltfShape7)
const transform30 = new Transform({
  position: new Vector3(38.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone12.addComponentOrReplace(transform30)

const bigStone13 = new Entity('bigStone13')
engine.addEntity(bigStone13)
bigStone13.setParent(_scene)
bigStone13.addComponentOrReplace(gltfShape7)
const transform31 = new Transform({
  position: new Vector3(38.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStone13.addComponentOrReplace(transform31)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(40, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform32)
const gltfShape8 = new GLTFShape("models/3168d3fe-8f93-4a1a-81f4-689780f2a373/Bush_02/Bush_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bush.addComponentOrReplace(gltfShape8)

const birdSNestFern = new Entity('birdSNestFern')
engine.addEntity(birdSNestFern)
birdSNestFern.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(44, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern.addComponentOrReplace(transform33)
const gltfShape9 = new GLTFShape("models/f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
birdSNestFern.addComponentOrReplace(gltfShape9)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(39, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub.addComponentOrReplace(transform34)
const gltfShape10 = new GLTFShape("models/0d4f1e28-c9bd-4f3e-9605-c76c84702742/Bush_03/Bush_03.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
evergreenShrub.addComponentOrReplace(gltfShape10)

const dandelion = new Entity('dandelion')
engine.addEntity(dandelion)
dandelion.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(27.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion.addComponentOrReplace(transform35)
const gltfShape11 = new GLTFShape("models/009be9a4-294f-4ff4-88b6-04d13a51af0d/Grass_04/Grass_04.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
dandelion.addComponentOrReplace(gltfShape11)

const flowerSprouts = new Entity('flowerSprouts')
engine.addEntity(flowerSprouts)
flowerSprouts.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(27.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts.addComponentOrReplace(transform36)
const gltfShape12 = new GLTFShape("models/bf0962d5-8904-4f4a-b2b6-9f4607ba1e0d/Plant_03/Plant_03.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
flowerSprouts.addComponentOrReplace(gltfShape12)

const gypsyMushroom = new Entity('gypsyMushroom')
engine.addEntity(gypsyMushroom)
gypsyMushroom.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(33, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom.addComponentOrReplace(transform37)
const gltfShape13 = new GLTFShape("models/cf22fe9b-69b1-40d8-92d7-7a8caa71ade8/Mushroom_02/Mushroom_02.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
gypsyMushroom.addComponentOrReplace(gltfShape13)

const kangarooPaws = new Entity('kangarooPaws')
engine.addEntity(kangarooPaws)
kangarooPaws.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(28, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kangarooPaws.addComponentOrReplace(transform38)
const gltfShape14 = new GLTFShape("models/39494fdb-7107-4dac-9412-a113586ffcda/Plant_05/Plant_05.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
kangarooPaws.addComponentOrReplace(gltfShape14)

const dandelion2 = new Entity('dandelion2')
engine.addEntity(dandelion2)
dandelion2.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(30.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion2.addComponentOrReplace(transform39)
dandelion2.addComponentOrReplace(gltfShape11)

const dandelion3 = new Entity('dandelion3')
engine.addEntity(dandelion3)
dandelion3.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(30.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion3.addComponentOrReplace(transform40)
dandelion3.addComponentOrReplace(gltfShape11)

const dandelion4 = new Entity('dandelion4')
engine.addEntity(dandelion4)
dandelion4.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(30.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion4.addComponentOrReplace(transform41)
dandelion4.addComponentOrReplace(gltfShape11)

const dandelion5 = new Entity('dandelion5')
engine.addEntity(dandelion5)
dandelion5.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(30.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dandelion5.addComponentOrReplace(transform42)
dandelion5.addComponentOrReplace(gltfShape11)

const archwayOfLoyalty7 = new Entity('archwayOfLoyalty7')
engine.addEntity(archwayOfLoyalty7)
archwayOfLoyalty7.setParent(_scene)
archwayOfLoyalty7.addComponentOrReplace(gltfShape)
const transform43 = new Transform({
  position: new Vector3(34, 0, 76),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty7.addComponentOrReplace(transform43)

const archwayOfLoyalty8 = new Entity('archwayOfLoyalty8')
engine.addEntity(archwayOfLoyalty8)
archwayOfLoyalty8.setParent(_scene)
archwayOfLoyalty8.addComponentOrReplace(gltfShape)
const transform44 = new Transform({
  position: new Vector3(33.5, 0, 86.5),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty8.addComponentOrReplace(transform44)

const archwayOfLoyalty9 = new Entity('archwayOfLoyalty9')
engine.addEntity(archwayOfLoyalty9)
archwayOfLoyalty9.setParent(_scene)
archwayOfLoyalty9.addComponentOrReplace(gltfShape)
const transform45 = new Transform({
  position: new Vector3(32.5, 0, 98),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty9.addComponentOrReplace(transform45)

const archwayOfLoyalty10 = new Entity('archwayOfLoyalty10')
engine.addEntity(archwayOfLoyalty10)
archwayOfLoyalty10.setParent(_scene)
archwayOfLoyalty10.addComponentOrReplace(gltfShape)
const transform46 = new Transform({
  position: new Vector3(32.5, 0, 107.5),
  rotation: new Quaternion(-2.5690547406705556e-15, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(2.0000009536743164, 2, 2.0000009536743164)
})
archwayOfLoyalty10.addComponentOrReplace(transform46)

const clusteredPinkAcaciaTree = new Entity('clusteredPinkAcaciaTree')
engine.addEntity(clusteredPinkAcaciaTree)
clusteredPinkAcaciaTree.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(24.5, 0, 81.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
clusteredPinkAcaciaTree.addComponentOrReplace(transform47)
const gltfShape15 = new GLTFShape("models/62913528-493e-41d5-9656-9d369b6e521b/Tree_Forest_Pink_03/Tree_Forest_Pink_03.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
clusteredPinkAcaciaTree.addComponentOrReplace(gltfShape15)

const bloomingPinkAcaciaTree = new Entity('bloomingPinkAcaciaTree')
engine.addEntity(bloomingPinkAcaciaTree)
bloomingPinkAcaciaTree.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(28, 0, 72.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree.addComponentOrReplace(transform48)
const gltfShape16 = new GLTFShape("models/84d1a6c5-7928-4a77-b8c4-b22952ee8b15/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
bloomingPinkAcaciaTree.addComponentOrReplace(gltfShape16)

const bloomingPinkAcaciaTree2 = new Entity('bloomingPinkAcaciaTree2')
engine.addEntity(bloomingPinkAcaciaTree2)
bloomingPinkAcaciaTree2.setParent(_scene)
bloomingPinkAcaciaTree2.addComponentOrReplace(gltfShape16)
const transform49 = new Transform({
  position: new Vector3(25.5, 0, 91),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree2.addComponentOrReplace(transform49)

const clusteredPinkAcaciaTree2 = new Entity('clusteredPinkAcaciaTree2')
engine.addEntity(clusteredPinkAcaciaTree2)
clusteredPinkAcaciaTree2.setParent(_scene)
clusteredPinkAcaciaTree2.addComponentOrReplace(gltfShape15)
const transform50 = new Transform({
  position: new Vector3(42, 0, 77),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
clusteredPinkAcaciaTree2.addComponentOrReplace(transform50)

const clusteredPinkAcaciaTree3 = new Entity('clusteredPinkAcaciaTree3')
engine.addEntity(clusteredPinkAcaciaTree3)
clusteredPinkAcaciaTree3.setParent(_scene)
clusteredPinkAcaciaTree3.addComponentOrReplace(gltfShape15)
const transform51 = new Transform({
  position: new Vector3(42.5, 0, 54),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
clusteredPinkAcaciaTree3.addComponentOrReplace(transform51)

const clusteredPinkAcaciaTree4 = new Entity('clusteredPinkAcaciaTree4')
engine.addEntity(clusteredPinkAcaciaTree4)
clusteredPinkAcaciaTree4.setParent(_scene)
clusteredPinkAcaciaTree4.addComponentOrReplace(gltfShape15)
const transform52 = new Transform({
  position: new Vector3(27, 0, 45),
  rotation: new Quaternion(2.276632921015243e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
clusteredPinkAcaciaTree4.addComponentOrReplace(transform52)

const clusteredPinkAcaciaTree5 = new Entity('clusteredPinkAcaciaTree5')
engine.addEntity(clusteredPinkAcaciaTree5)
clusteredPinkAcaciaTree5.setParent(_scene)
clusteredPinkAcaciaTree5.addComponentOrReplace(gltfShape15)
const transform53 = new Transform({
  position: new Vector3(24, 0, 29),
  rotation: new Quaternion(2.276632921015243e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
clusteredPinkAcaciaTree5.addComponentOrReplace(transform53)

const clusteredPinkAcaciaTree6 = new Entity('clusteredPinkAcaciaTree6')
engine.addEntity(clusteredPinkAcaciaTree6)
clusteredPinkAcaciaTree6.setParent(_scene)
clusteredPinkAcaciaTree6.addComponentOrReplace(gltfShape15)
const transform54 = new Transform({
  position: new Vector3(24, 0, 12.5),
  rotation: new Quaternion(2.276632921015243e-16, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
clusteredPinkAcaciaTree6.addComponentOrReplace(transform54)

const bloomingPinkAcaciaTree3 = new Entity('bloomingPinkAcaciaTree3')
engine.addEntity(bloomingPinkAcaciaTree3)
bloomingPinkAcaciaTree3.setParent(_scene)
bloomingPinkAcaciaTree3.addComponentOrReplace(gltfShape16)
const transform55 = new Transform({
  position: new Vector3(29, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree3.addComponentOrReplace(transform55)

const bloomingPinkAcaciaTree4 = new Entity('bloomingPinkAcaciaTree4')
engine.addEntity(bloomingPinkAcaciaTree4)
bloomingPinkAcaciaTree4.setParent(_scene)
bloomingPinkAcaciaTree4.addComponentOrReplace(gltfShape16)
const transform56 = new Transform({
  position: new Vector3(41, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree4.addComponentOrReplace(transform56)

const bloomingPinkAcaciaTree5 = new Entity('bloomingPinkAcaciaTree5')
engine.addEntity(bloomingPinkAcaciaTree5)
bloomingPinkAcaciaTree5.setParent(_scene)
bloomingPinkAcaciaTree5.addComponentOrReplace(gltfShape16)
const transform57 = new Transform({
  position: new Vector3(40.5, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree5.addComponentOrReplace(transform57)

const bloomingPinkAcaciaTree6 = new Entity('bloomingPinkAcaciaTree6')
engine.addEntity(bloomingPinkAcaciaTree6)
bloomingPinkAcaciaTree6.setParent(_scene)
bloomingPinkAcaciaTree6.addComponentOrReplace(gltfShape16)
const transform58 = new Transform({
  position: new Vector3(41, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree6.addComponentOrReplace(transform58)

const bloomingPinkAcaciaTree7 = new Entity('bloomingPinkAcaciaTree7')
engine.addEntity(bloomingPinkAcaciaTree7)
bloomingPinkAcaciaTree7.setParent(_scene)
bloomingPinkAcaciaTree7.addComponentOrReplace(gltfShape16)
const transform59 = new Transform({
  position: new Vector3(41.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree7.addComponentOrReplace(transform59)

const bloomingPinkAcaciaTree8 = new Entity('bloomingPinkAcaciaTree8')
engine.addEntity(bloomingPinkAcaciaTree8)
bloomingPinkAcaciaTree8.setParent(_scene)
bloomingPinkAcaciaTree8.addComponentOrReplace(gltfShape16)
const transform60 = new Transform({
  position: new Vector3(43, 0, 25),
  rotation: new Quaternion(-6.65064594497863e-16, -0.4713967442512512, 5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree8.addComponentOrReplace(transform60)

const bloomingPinkAcaciaTree9 = new Entity('bloomingPinkAcaciaTree9')
engine.addEntity(bloomingPinkAcaciaTree9)
bloomingPinkAcaciaTree9.setParent(_scene)
bloomingPinkAcaciaTree9.addComponentOrReplace(gltfShape16)
const transform61 = new Transform({
  position: new Vector3(43, 0, 9.5),
  rotation: new Quaternion(-2.420181076894087e-15, -0.7730104923248291, 9.215002449991516e-8, 0.6343933343887329),
  scale: new Vector3(1.0000007152557373, 1.5, 1.0000007152557373)
})
bloomingPinkAcaciaTree9.addComponentOrReplace(transform61)

const bloomingPinkAcaciaTree10 = new Entity('bloomingPinkAcaciaTree10')
engine.addEntity(bloomingPinkAcaciaTree10)
bloomingPinkAcaciaTree10.setParent(_scene)
bloomingPinkAcaciaTree10.addComponentOrReplace(gltfShape16)
const transform62 = new Transform({
  position: new Vector3(28.5, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1.5)
})
bloomingPinkAcaciaTree10.addComponentOrReplace(transform62)

const bloomingPinkAcaciaTree11 = new Entity('bloomingPinkAcaciaTree11')
engine.addEntity(bloomingPinkAcaciaTree11)
bloomingPinkAcaciaTree11.setParent(_scene)
bloomingPinkAcaciaTree11.addComponentOrReplace(gltfShape16)
const transform63 = new Transform({
  position: new Vector3(42, 0, 66.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree11.addComponentOrReplace(transform63)

const bloomingPinkAcaciaTree12 = new Entity('bloomingPinkAcaciaTree12')
engine.addEntity(bloomingPinkAcaciaTree12)
bloomingPinkAcaciaTree12.setParent(_scene)
bloomingPinkAcaciaTree12.addComponentOrReplace(gltfShape16)
const transform64 = new Transform({
  position: new Vector3(40, 0, 92),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree12.addComponentOrReplace(transform64)

const bloomingPinkAcaciaTree13 = new Entity('bloomingPinkAcaciaTree13')
engine.addEntity(bloomingPinkAcaciaTree13)
bloomingPinkAcaciaTree13.setParent(_scene)
bloomingPinkAcaciaTree13.addComponentOrReplace(gltfShape16)
const transform65 = new Transform({
  position: new Vector3(39.5, 0, 101.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree13.addComponentOrReplace(transform65)

const bloomingPinkAcaciaTree14 = new Entity('bloomingPinkAcaciaTree14')
engine.addEntity(bloomingPinkAcaciaTree14)
bloomingPinkAcaciaTree14.setParent(_scene)
bloomingPinkAcaciaTree14.addComponentOrReplace(gltfShape16)
const transform66 = new Transform({
  position: new Vector3(25.5, 0, 101.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree14.addComponentOrReplace(transform66)

const bloomingPinkAcaciaTree15 = new Entity('bloomingPinkAcaciaTree15')
engine.addEntity(bloomingPinkAcaciaTree15)
bloomingPinkAcaciaTree15.setParent(_scene)
bloomingPinkAcaciaTree15.addComponentOrReplace(gltfShape16)
const transform67 = new Transform({
  position: new Vector3(41.5, 0, 107.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree15.addComponentOrReplace(transform67)

const bloomingPinkAcaciaTree16 = new Entity('bloomingPinkAcaciaTree16')
engine.addEntity(bloomingPinkAcaciaTree16)
bloomingPinkAcaciaTree16.setParent(_scene)
bloomingPinkAcaciaTree16.addComponentOrReplace(gltfShape16)
const transform68 = new Transform({
  position: new Vector3(24, 0, 108),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree16.addComponentOrReplace(transform68)

const bloomingPinkAcaciaTree17 = new Entity('bloomingPinkAcaciaTree17')
engine.addEntity(bloomingPinkAcaciaTree17)
bloomingPinkAcaciaTree17.setParent(_scene)
bloomingPinkAcaciaTree17.addComponentOrReplace(gltfShape16)
const transform69 = new Transform({
  position: new Vector3(27.5, 0, 95.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
bloomingPinkAcaciaTree17.addComponentOrReplace(transform69)

const clusteredPinkAcaciaTree7 = new Entity('clusteredPinkAcaciaTree7')
engine.addEntity(clusteredPinkAcaciaTree7)
clusteredPinkAcaciaTree7.setParent(_scene)
clusteredPinkAcaciaTree7.addComponentOrReplace(gltfShape15)
const transform70 = new Transform({
  position: new Vector3(40.5, 0, 84.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
clusteredPinkAcaciaTree7.addComponentOrReplace(transform70)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape17 = new GLTFShape("models/2c66317c-4923-4094-ad90-8ad72db010b1/FloorBaseTiles_01/FloorBaseTiles_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
entity.addComponentOrReplace(gltfShape17)
const transform71 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform71)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape17)
const transform72 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform72)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape17)
const transform73 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform73)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape17)
const transform74 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform74)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape17)
const transform75 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform75)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape17)
const transform76 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform76)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape17)
const transform77 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform77)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape17)
const transform78 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform78)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape17)
const transform79 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform79)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape17)
const transform80 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform80)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape17)
const transform81 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform81)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape17)
const transform82 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform82)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape17)
const transform83 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform83)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape17)
const transform84 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform84)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape17)
const transform85 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform85)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape17)
const transform86 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform86)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape17)
const transform87 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform87)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape17)
const transform88 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform88)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape17)
const transform89 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform89)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape17)
const transform90 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform90)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape17)
const transform91 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform91)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape17)
const transform92 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform92)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape17)
const transform93 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform93)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape17)
const transform94 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform94)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape17)
const transform95 = new Transform({
  position: new Vector3(8, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform95)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape17)
const transform96 = new Transform({
  position: new Vector3(24, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform96)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape17)
const transform97 = new Transform({
  position: new Vector3(40, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform97)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape17)
const transform98 = new Transform({
  position: new Vector3(56, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform98)

const bigRock = new Entity('bigRock')
engine.addEntity(bigRock)
bigRock.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(28.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigRock.addComponentOrReplace(transform99)
const gltfShape18 = new GLTFShape("models/c91329da-ee59-4595-88fd-10b2b75a4f5b/RockLarge_01/RockLarge_01.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
bigRock.addComponentOrReplace(gltfShape18)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(29, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout.addComponentOrReplace(transform100)
const gltfShape19 = new GLTFShape("models/43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
grassSprout.addComponentOrReplace(gltfShape19)

generateCubes(3, generateBGMSource('bgm'))

function generateBGMSource(sound: string): AudioSource {
  const clip = new AudioClip(`sounds/${sound}.mp3`)
  const source = new AudioSource(clip)
  source.loop = true
  source.playing = true
  return source
}

function generateCubes(count: number, source: AudioSource): void {
  const myMaterial = new Material()
  myMaterial.albedoColor = new Color3(15, 0, 0)
  myMaterial.metallic = 0.9
  myMaterial.roughness = 0.1

  for (let index = 0; index < count; index++) {
    var cube = new Entity()
    cube.addComponent(new Transform({ position: new Vector3(20, 1, 5 + 5 * index) }))
    log(cube.getComponent(Transform).position)
    cube.addComponent(new BoxShape())
    cube.addComponent(source)
    cube.addComponent(myMaterial)

    cube.addComponent(new OnPointerDown(() => {
      source.playing = source.playing ?
        false : true;
    }, { button: ActionButton.POINTER, hoverText: 'onTap' }))
    engine.addEntity(cube)
  }
}

const myTexture = new Texture("materials/wood.jpeg")
const myMaterial = new Material()
myMaterial.albedoTexture = myTexture

const woodCube = new Entity();
woodCube.addComponent(new Transform({ position: new Vector3(20, 1, 20) }))
woodCube.addComponent(new BoxShape())
woodCube.addComponent(myMaterial)
engine.addEntity(woodCube)
utils.addLabel('wood', woodCube)

const storeShap = new GLTFShape('models/gen.glb')
const triggerBoxShape = new utils.TriggerBoxShape(new Vector3(1.5, 3, 1.5), new Vector3(0, 1, 0))

generatePosition(20).forEach((position) => {
  createGen(storeShap, new Transform({ position: position }), triggerBoxShape)
})

function generatePosition(count: number): Vector3[] {

  var list: Vector3[] = []

  for (let index = 0; index < count; index++) {
    const element = new Vector3(35, 1, 5 * (1 + index));
    list.push(element);
  }
  log(list)
  return list
}

onEnterSceneObservable.add((player) => {
  log("player entered scene: ", player.userId)
})

onLeaveSceneObservable.add((player) => {
  log("player left scene: ", player.userId)
})








