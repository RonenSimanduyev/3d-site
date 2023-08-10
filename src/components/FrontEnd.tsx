import {Canvas} from "@react-three/fiber";
import {OrbitControls ,Stage} from "@react-three/drei";
import Mac from "@/components/Mac";
export const FrontEnd =()=>{


    return(
        <Canvas>
            <Stage environment='city' intensity={0.6}>
                <Mac/>
            </Stage>

            <OrbitControls enableZoom={false} autoRotate />

        </Canvas>
    )
}

