import {OrbitControls, Stage} from "@react-three/drei";
import Ironmanscetch from "@/components/Ironmanscetch";
import {Canvas} from "@react-three/fiber";

export const WhereDesign =()=>{


    return(
        <Canvas>
            <Stage environment='city' intensity={0.6}>
                <Ironmanscetch/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )

}
