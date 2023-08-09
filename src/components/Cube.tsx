import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, RenderTexture, Text, Text3D,} from "@react-three/drei";


export const Cube = ()=>{

    return (
        <div className="h-[100vh] w-full snap-center">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]} />
                <mesh>

                    <boxGeometry args={[2,2,2]} />
                    <meshStandardMaterial >
                            <PerspectiveCamera
                                makeDefault
                                position={[0,0,2]}
                            />
                            <color attach="background" args={['purple']}/>
                            <Text fontSize={0.3} color="#555">
                                FrontEnd
                            </Text>


                    </meshStandardMaterial>
                </mesh>
            </Canvas>

        </div>
    )

}