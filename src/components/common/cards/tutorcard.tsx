


export default function TutorCard({fname, lname, blurb, subjects}:any) {
    
    return (
        <section className='flex flex-col w-fill sm:w-[300px] h-fit sm:h-[790px] shadow-sm bg-secondary-alt'>
            <div className='flex justify-center items-center h-[300px] w-full'>
                <img src={`tutors/${fname.toLowerCase()}-${lname.toLowerCase()}.jpg`} width='300px' height='300px'/>
            </div>
            <div className='flex flex-col justify-start w-full gap-[10px] p-[20px]'>
                <h2 className='text-meed text-white text-center'>{fname} {lname}</h2>
                <div className='flex flex-row flex-wrap w-full items-center gap-[5px] tag-coloring'>
                    {subjects.map((sb:any) => {

                        return (
                            <TutorSubjectTag 
                                key={`${sb}-tag`}
                                label={sb}
                            />
                        )
                    })}
                </div>
                <div className='text-white w-full'>
                    <p className='text-supa-smol'>{blurb}</p>
                </div>
            </div>
        </section>
    )
}


function TutorSubjectTag({label}:any) {

    return (
        <div className='bg-white py-[5px] px-[10px] flex justify-center items-center rounded-[5px] text-primary-darker'>
            <p className='text-[12px] leading-[100%] text-nowrap'>{label}</p>
        </div>
    )
}