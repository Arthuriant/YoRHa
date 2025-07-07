import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Mod2b = ({ currentAnim }) => {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/A2.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && currentAnim && actions[currentAnim]) {
      actions[currentAnim].reset().fadeIn(0.5).play()
    }
    return () => {
      if (actions && currentAnim && actions[currentAnim]) {
        actions[currentAnim].fadeOut(0.5)
      }
    }
  }, [actions, currentAnim])

  // Tambahkan rotasi otomatis
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y -= 0.01 // putar searah jarum jam
    }
  })

  return <primitive ref={group} object={scene} />
}

export default Mod2b
