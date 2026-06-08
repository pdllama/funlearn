import plans from "../data/plans.json" with {type:"json"};
import PlanCard from "../components/common/cards/plancard";
import Button from "../components/common/button/button";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router";

export default function Plans({handleClose}:any) {

    const services_ref = useRef<HTMLDivElement>(null)

    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.scrollToServices) {
            const services = services_ref.current as HTMLDivElement
            services.scrollIntoView({behavior: 'smooth', block: 'start'})
            setTimeout(() => {
                services.classList.add('services-flash')
            }, 500)
        }
    }, [])

    return (
    <main className='py-[35px] gap-[30px] flex flex-col items-center h-fit w-full'>
        <div className='flex flex-col items-center h-fit w-full px-[10px] xs:px-[25px]'>
            <h1 className='text-beeg text-black'>Our Plans</h1>
            <div className='grid grid-cols-1 sm-md:grid-cols-2 lg:grid-cols-3 gap-[10px] px-[1px]'>
                {plans.map((p:any, i:number) => {

                    return (
                        <PlanCard
                            key={`plan-card-${i}`}
                            plan_title={p.plan_title}
                            plan_desc={p.plan_desc}
                            in_person_price={p.in_person_price}
                            virtual_price={p.virtual_price}
                            save_per_hour_amt={p.save_per_hour_amt}
                            value={p.plan_value}
                        />
                    )
                })}
            </div>
        </div>
        <div className='w-full flex flex-col items-center bg-opacity-0 bg-secondary p-[20px] gap-[10px] text-center' ref={services_ref}>
            <h2 className='text-beeg text-white'>Our Service Guarantee</h2>
            <div className='flex flex-col md:flex-row px-[27px] py-[22px] gap-[40px] justify-center'>

                <div className='flex flex-col gap-[10px] p-[10px] items-center size-fit'>
                    <h3 className='text-black text-meed'>Flexibility</h3>
                    <p className='text-smol text-white'>We do everything we can to accommodate for our clients’ busy schedules and can offer tutoring in different modalities including in-person or virtually. We are committed to providing service in a way that works for you.</p>
                </div>

                <div className='flex flex-col gap-[10px] p-[10px] items-center size-fit'>
                    <h3 className='text-black text-meed'>Expertise</h3>
                    <p className='text-smol text-white'>All our tutors are experts in the subject they tutor and have strong experience in tutoring. They have the knowledge to teach what they teach and the experience to adapt their teaching styles to fit the needs of their students.</p>
                </div>

                <div className='flex flex-col gap-[10px] p-[10px] items-center size-fit'>
                    <h3 className='text-black text-meed'>Special Needs</h3>
                    <p className='text-smol text-white'>Some children have more trouble learning than others within the education system. At FunLearn, we believe this is a matter of finding the right teaching style. Most of our tutors are trained to adapt to their needs and teach them in a way that just clicks. </p>
                </div>

            </div>
            <p className='text-meed text-black m-[30px]'>We teach from Grades 1-12</p>
        </div>
        <div className='w-full flex flex-col items-center p-[20px] gap-[10px] text-center'>
            <h2 className='text-beeg text-black'>Need More Information?</h2>
            <p className='text-meed text-black'>Contact us for additional questions and/or to book a free consultation!</p>
            <Button size='meed' onClick={handleClose}>Contact Us</Button>
        </div>
    </main>
    )
}