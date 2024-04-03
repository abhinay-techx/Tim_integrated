import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       
        'Forget liabilities, use AIbilities.',
        1500,
        'Disrupt the Disruption.',       
        1500, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-yellow-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};
export default TextEffect;