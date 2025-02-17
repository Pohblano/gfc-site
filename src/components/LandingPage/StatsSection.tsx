import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { motion as three_motion } from "framer-motion-3d";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CameraShake, Environment, Float, useGLTF } from "@react-three/drei";
import { Button } from "../ui/moving-border";
import { useNavigationContext } from "../../contexts/navigation.context";
import { BadgeCheck, ServerCog, ServerIcon, Upload, Users } from "lucide-react";
import StatCard, { StatCardType } from "../ui/StatCard";

const statCards: StatCardType[] = [
  {
    icon: <Upload className="h-6 w-6" />,
    statRange: [0, 65],
    symbol: "+",
    titleStack: ["Projects", "Launched & Scaled"],
    subtitle: "ranging from  MVPs to full-scale enterprise applications.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    statRange: [0, 10],
    symbol: "M",
    titleStack: ["Users", "Impacted"],
    subtitle:
      "by our web applications and digital platforms with worldwide outreach",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    statRange: [0, 15],
    symbol: "+",
    titleStack: ["Years of", "Industry Experience"],
    subtitle:
      "bringing a wealth of expertise in web development, UX/UI design, and software engineering.",
  },
  {
    icon: <ServerIcon className="h-6 w-6" />,
    statRange: [0, 99],
    symbol: "%",
    titleStack: ["Uptime", "& Response"],
    subtitle:
      "ensuring that our services are available and responsive when you need them.",
  },
];

// Stats Component
const StatisticsSection = () => {
  const { isTablet, isDesktop } = useNavigationContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const industries = [
    "Education",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Media",
    "Technology",
    "Telecommunications",
    "Transportation",
  ];

  return (
    <div id="intro-section" className="w-full flex items-center justify-center relative max-w-7xl px-[2em]">
      <div className="flex flex-col-reverse items-start gap-y-10 sm:gap-y-15 md:grid md:grid-cols-2 md:items-center md:justify-between md:gap-10 lg:items-center lg:gap-15 xl:gap-20">
        <div className="left-grid h-fit flex flex-col md:grid text-start md:py-[11em]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className=" mb-8 text-[35px]/[1.1] font-[700] md:text-5xl/[1.2] md:mb-10 "
          >
            <span className="text-gfc-accent">Software That Evolves</span>{" "}
            With Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-500 mb-[6em] md:mb-[4em]"
          >
            We don’t just build software—we engineer solutions that grow, adapt,
            and optimize alongside your business, keeping you ahead of the
            curve.
          </motion.p>
          <h4 className="text-lg md:text-xl mb-[1em] text-[#757575] font-[300] leading-relaxed">
            Industries Served
          </h4>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap gap-4 mb-[4em]"
          >
            {industries.map((industry, index) => (
              <Button
                key={index}
                borderRadius="1.75rem"
                containerClassName=""
                className="bg-slate-100 dark:bg-slate-900 text-grey-600 dark:text-white cursor-pointer border-neutral-200 shadow-lg dark:border-slate-800"
              >
                {industry}
              </Button>
            ))}
          </motion.div>

          <h4 className="text-lg md:text-xl mb-[1em] text-[#757575] font-[300] leading-relaxed">
            Success in Numbers
          </h4>

          <div className="grid grid-cols-2 gap-4">
            {statCards.map((card, index) => (
              <StatCard key={index} card={card} />
            ))}
          </div>
        </div>

        {/* 3D model of logo */}
        {(isTablet || isDesktop) && (
          <motion.div
          ref={ref}
          style={isTablet || isDesktop ? { position: "sticky", top: "0" } : {}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex items-center justify-center self-start "
        >
          <Canvas
            style={{ height: "80vh", width: "98%" }}
            className=""
            orthographic
            camera={{
              position: [0, 0, 200],
              zoom: isDesktop ? 200 : isTablet ? 200 : 170,
            }}
          >
            <Model />
            <ambientLight intensity={0.5} />
            <spotLight position={[50, 50, -30]} castShadow />
            <pointLight
              position={[-10, -10, -10]}
              color="white"
              intensity={2}
            />
            <pointLight position={[0, -5, 5]} intensity={0.5} />
            <directionalLight
              position={[0, -5, 0]}
              color="white"
              intensity={1}
            />
            <Environment preset="studio" />
          </Canvas>
        </motion.div>
        )}
      </div>
    </div>
  );
};



export default StatisticsSection;

export function Model() {
  const { nodes } = useGLTF("/short1.glb");
  const [activeShape, setActiveShape] = useState(1);
  const { isTablet, isDesktop } = useNavigationContext();

  useEffect(() => {
    setTimeout(() => {
      if (activeShape == 11) {
        setActiveShape(1);
      } else {
        setActiveShape(activeShape + 1);
      }
    }, 2000);
  }, [activeShape]);

  return (
    <group position={[0, 0, 0]}>
      <Mesh node={nodes.Node2} multiplier={1} isActive={activeShape == 1} isTablet={isTablet} />
      <Mesh node={nodes.Node1} multiplier={1} isActive={activeShape == 2} isTablet={isTablet} />
    </group>
  );
}

useGLTF.preload("/short1.glb");

function Mesh({
  node,
  multiplier,
  isActive,
  isTablet
}: {
  node: any;
  multiplier: number;
  isActive: boolean;
  isTablet: boolean;
}) {
  const { geometry, material, position, scale, rotation } = node;
  const a = multiplier / 2;

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
  };

  return (
    <Float>
      <three_motion.mesh
        castShadow={true}
        receiveShadow={false}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        animate={{
          rotateZ: isActive ? rotation.z + getRandomMultiplier() : null,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}
