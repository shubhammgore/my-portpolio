import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col xl:flex-row items-center justify-between'>
                    {/* Text */}
                    <div className='text-center xl:text-left'>
                        <span className='text-xl'>Software Engineer</span>
                        <h1 className='h1'>
                            Hello I'm <br />
                            <span className='text-accent'>Shubham Gore</span>
                        </h1>
                        <p className='max-w-[500px] mb-9 text-white/80'>
                            I excel at crafting elegant digital experiences and
                            I am proficient in various programming languages and
                            technologies.
                        </p>
                        {/* btn and socials */}
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <Button
                                variant='outline'
                                size='lg'
                                className='uppercase flex items-center gap-2'
                            >
                                <span>Download CV</span>
                                <FiDownload className='text-xl' />
                            </Button>
                            <div className='mb-8 xl:mb-0'>
                                <Socials
                                    containerStyles='flex gap-6'
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div>
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
