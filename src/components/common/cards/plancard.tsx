import Button from "../button/button"

export default function PlanCard({
    plan_title, plan_desc,
    in_person_price, virtual_price,
    save_per_hour_amt
}:any) {

    const true_gap = save_per_hour_amt ? 'gap-[80px]' : 'gap-[50px]'


    return (
        <section className='h-[460px] w-[296px] flex flex-col p-0 bg-primary border border-black rounded-[20px]'>
            <div className='w-full h-[179px] relative'>
                {/** Image Container */}
                {save_per_hour_amt &&
                    <div className='size-fit absolute bottom-[0px] left-[0px] rounded-[5px] bg-white flex justify-center items-center z-3 px-[10px]'>
                        <p className='text-secondary text-half-smol'><i>Save {save_per_hour_amt}$/hour</i></p>
                    </div>
                }
            </div>
            <div className='size-full flex flex-col items-center px-[10px] gap-[5px] h-fit'>
                <h2 className='text-meed text-secondary size-fit'>{plan_title}</h2>
                <div className='w-[208px] h-fit text-black text-center text-supa-smol'><p>{plan_desc}</p></div>
                <div aria-hidden className='w-[269px] h-0 border-t border-black'/>

                <div className={`flex flex-row w-full h-fit ${true_gap} px-[11px] py-[2px] justify-center`}>
                    <div className='flex flex-col size-fit justify-start items-center'>
                        <p className='text-supa-smol text-black'>In-Person</p>
                        <p className='text-smol text-secondary'>{in_person_price}</p>
                    </div>
                    <div className='flex flex-col size-fit justify-start items-center'>
                        <p className='text-supa-smol text-black'>Virtual</p>
                        <p className='text-smol text-secondary'>{virtual_price}</p>
                    </div>
                </div>

                <Button size='supa-smol'>Buy Now</Button>
            </div>
        </section>
    )
}