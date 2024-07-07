import { Html, useProgress } from '@react-three/drei'

function RenderLoading() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default RenderLoading