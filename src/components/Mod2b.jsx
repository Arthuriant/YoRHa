import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

{/* Initialized 3D Model */}
const Mod2b = ({ currentAnim }) => {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/2b.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && currentAnim && actions[currentAnim]) {
      Object.values(actions).forEach((action) => {
        action.fadeOut(0.3)
      })
      actions[currentAnim].reset().fadeIn(0.3).play()
    }
  }, [currentAnim, actions])

  return <primitive ref={group} object={scene} />
}

export default Mod2b
