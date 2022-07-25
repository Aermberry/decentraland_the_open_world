import * as utils from '@dcl/ecs-scene-utils'
import { setStones } from './game_hud'

const genAudioEffect = new Entity()
genAudioEffect.addComponent(new Transform())
engine.addEntity(genAudioEffect)
genAudioEffect.setParent(Attachable.AVATAR)
genAudioEffect.addComponent(new AudioSource(new AudioClip('sounds/gen_effect.mp3')))
engine.addEntity(genAudioEffect)

export function createGen(model: GLTFShape, transform: Transform, triggerShape: utils.TriggerBoxShape): Entity {
    const entity = new Entity()

    const material = new Material()
    material.albedoColor = new Color3(15, 0, 0)
    material.metallic = 0.9
    material.roughness = 0.1

    engine.addEntity(entity)
    entity.addComponent(model)
    entity.addComponent(transform)
    entity.addComponent(material)

    entity.addComponent(
        new utils.TriggerComponent(triggerShape, {
            onCameraEnter: () => {
                entity.getComponent(Transform).scale.setAll(0)
                genAudioEffect.getComponent(AudioSource).playOnce()
                setStones(1)
            },
            onCameraExit: () => {
                engine.removeEntity(entity)
            }
        })
    )
    return entity
}
