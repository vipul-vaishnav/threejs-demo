import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Object3DEventMap, Object3D } from 'three'

type FoxProps = GroupProps

const Fox: React.FC<FoxProps> = (props) => {
  const group = useRef<Object3D<Object3DEventMap>>()
  const path = '/src/fox.glb'
  const { nodes, materials, animations } = useGLTF(path)
  const { actions } = useAnimations(animations, group)

  // State to track rotation angles
  const rotationAngles = useRef({
    x: 0,
    y: 0,
    z: 0
  })

  // Function to update rotation based on arrow key presses
  const handleKeyPress = (event: any) => {
    switch (event.key) {
      case 'ArrowUp':
        rotationAngles.current.x += 0.05
        break
      case 'ArrowDown':
        rotationAngles.current.x -= 0.05
        break
      case 'ArrowLeft':
        rotationAngles.current.y += 0.05
        break
      case 'ArrowRight':
        rotationAngles.current.y -= 0.05
        break
      default:
        break
    }

    // Update the rotation of the group
    group.current.rotation.set(
      rotationAngles.current.x,
      rotationAngles.current.y,
      rotationAngles.current.z
    )
  }

  // Attach the key press event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="fox" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="FoxTransform" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['08_-_Default']}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Fox

useGLTF.preload('/fox.glb')
