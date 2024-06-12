import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};
console.log("before reverse");
// calculate the reverse index for stagged delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {/* Render 6 motoin divs, each representing a step of the stairs.
    each div will have the same animation defined by stairsAnimation object. 
    The delay for each div is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each sunsequnt step.
    */}
            {[...Array(6).keys()].map((index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className='h-full w-full bg-white relative'
                    />
                );
            })}
        </>
    );
};

export default Stairs;
