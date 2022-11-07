/* eslint-disable */

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#000000",
          },
          opacity: {
            value: 0.05,
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.05,
            width: 1,
          },
          // collisions: {
          //   enable: true,
          // },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 10,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
