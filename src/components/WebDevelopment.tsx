import {OrbitControls, Stage} from "@react-three/drei";
import React from "@/components/React";
import {Canvas} from "@react-three/fiber";

export const WebDevelopment =()=>{


    return(
        <Canvas>
            <Stage environment='city' intensity={0.6}>
                <React/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )

}