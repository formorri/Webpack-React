import {Sphere, MeshDistortMaterial} from "@react-three/drei";
const Three = () => {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2.5}>
    <MeshDistortMaterial color="#B3D803" attach="material" distort={0.5} speed={1.5} roughness={0}/>
        </Sphere>
        // <mesh rotation={[90, 0, 20]}>
        //     <boxBufferGeometry attach="geometry" args={[2,2,2]}/>
        //     <meshNormalMaterial attach ="material"/>
        // </mesh>
    )
}

export default Three