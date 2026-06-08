
import TutorCard from "../components/common/cards/tutorcard";
import "./tutors.css"
import tutors from "../data/tutors.json" with {type:"json"};

export default function Tutors({}) {


    return (
        <main className='w-full p-[15px] flex flex-col items-center gap-[10px]'>
            <h1 className='text-beeg text-black'>Our Tutors</h1>
            <h2 className='text-meed text-black'>Meet our wonderful tutoring team below!</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center gap-[3px]'>
                {tutors.map((t:any) => {

                    return (
                        <TutorCard
                            key={`${t.firstname}-${t.lastname}`}
                            fname={t.firstname}
                            lname={t.lastname}
                            blurb={t.blurb}
                            subjects={t.subjects}
                            
                        />
                    )
                })}
            </div>
        </main>
    )
}