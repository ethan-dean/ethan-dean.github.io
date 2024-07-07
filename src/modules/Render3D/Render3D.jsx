import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"

import Model from "./Model"
import RenderLoading from "./RenderLoading"

function Render3D() {

  return (
    // Full-body shot
    //   <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [-0.6, 0.3, 1.2]} } >
    //   <Model position={[0, -1.0, 0]}/>

    // Head and shoulders
    // <Canvas camera={ {fov: 20, near: 0.1, far: 1000, position: [-0.6, 0.07, 1.2]} } >
    // <Model position={[0, -1.65, 0]}/>

    // Waist up - zoomed out
    // <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [-0.35, 0.07, 0.7]} } >
    // <Model position={[0, -1.65, 0]}/>

    // Waist up - zoomed in
      <Canvas camera={ {fov: 20, near: 0.1, far: 1000, position: [-1.25, 0.7, 2.5]} } >
        <Suspense fallback={<RenderLoading />}>
          <ambientLight intensity={0.7} />
          <Model position={[0, -1.33, 0]}/>
        </Suspense>
      </Canvas>
  )
}

export default Render3D
