import Button from "../components/common/button/button";
import { useNavigate } from "react-router";



export default function HomePage({}) {
    const navigate = useNavigate()

    return (
        <main className='flex p-0 m-0 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[55%] h-[400px] lg:h-[650px] max-w-[1024px] relative' style={{backgroundImage: 'url("homepage-image.jpg")', backgroundPosition: 'center'}}>
                <div 
                    aria-hidden 
                    className='w-full h-[20%] z-2 absolute bottom-[0px]' 
                    style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(236,236,236,100))'}}
                />
                <div 
                    aria-hidden 
                    className='h-full w-[20%] z-2 absolute right-[0px] invisible lg:visible' 
                    style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(236,236,236,100))'}}
                />
            </div>
            <div className='flex flex-col px-[26px] py-[41px] w-full lg:w-[45%] items-center justify-center'>
                <div className="flex flex-col p-[10px] size-full gap-[60px] max-w-[550px] justify-center">
                    <h1 
                        className='
                            text-beeg text-secondary text-wrap text-center leading-[100%]
                        '
                    >
                        Find the Right Tutors for your children
                    </h1>
                    <p className='leading-[100%] text-center text-smol'>
                        At FunLearn, we believe teachers should strive to make learning personalized and enjoyable. With over 2000+ satisfied students, your child is certain to learn and have fun!
                    </p>
                    <p className='leading-[100%] text-center text-smol'>
                        We tutor students from Grades 1-12!
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[10px]'>
                        <Button
                            size='smol'
                            onClick={() => navigate('/plans')}
                        >
                            Plans
                        </Button>
                        <Button
                            type2
                            size='smol'
                            onClick={() => navigate('/plans', {state: {scrollToServices: true}})}
                        >
                            Our Services
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}