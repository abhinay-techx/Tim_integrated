import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div>
      {/* Here is the Particles component */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // Adjust the options to customize the particles animation
          background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
          },
          // Stop the animation by setting fpsLimit to 0
          fpsLimit: 0,
          interactivity: {
            events: {
              // Disable interaction events to stop the animation
              onClick: {
                enable: false,
                // mode: "push",
              },
              onHover: {
                enable: false,
                // mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 0, // Set quantity to 0 to stop the push effect
              },
              repulse: {
                distance: 0, // Set distance to 0 to stop the repulse effect
                duration: 0,
              },
            },
          },
          particles: {
            // Set color to make the particles visible
            color: {
              value: "#000000",
            },
            // Set links to false to hide the lines between particles
            links: {
              enable: false,
            },
            move: {
              enable: false, // Disable movement to stop the animation
            },
            // Set number to 0 to hide all particles
            number: {
              value: 0,
            },
            // Set opacity to 0 to hide particles
            opacity: {
              value: 0,
            },
            // Set size to 0 to hide particles
            size: {
              value: 0,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;
