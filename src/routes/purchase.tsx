import { useLocation, useParams } from "react-router"
import TextInput from "../components/common/input/textinput";
import { useState, useRef } from "react";
import ToggleButton from "../components/common/button/togglebutton";
import Button from "../components/common/button/button";
import Select from "../components/common/select/select";
import LoadingSpinner from "../components/common/loaders/spinner";
import "./purchase.css"

const param_to_label:Record<string, string> = {
    'pay-as-you-go': 'Pay-as-you-go Package',
    '10-hour': '10-hour Package',
    '15-hour': '15-hour Package',
    '20-hour': '20-hour Package',
    '30-hour': '30-hour Package',
    '60-hour': '60-hour Package'
}

type formstate = {
    fname: string, 
    lname: string, 
    phone_number: string, 
    email: string, 
    sname: string, modality: 'in-person'|'virtual'
    grade_level: string, subject: string, 
    schedule: string[], 
    other: string
}

const schedule_days = [
    {label: 'Monday', value: 'monday'},
    {label: 'Tuesday', value: 'tuesday'},
    {label: 'Wednesday', value: 'wednesday'},
    {label: 'Thursday', value: 'thursday'},
    {label: 'Friday', value: 'friday'}
]

const weekend_days = [
    {label: 'Saturday', value: 'saturday'},
    {label: 'Sunday', value: 'sunday'}
]

const modality_pricing:Record<string, {in_person:string, virtual: string}> = {
    'pay-as-you-go': {in_person: '60$/h', virtual: '50$/h'},
    '10-hour': {in_person: '550$', virtual: '450$'},
    '15-hour': {in_person: '810$', virtual: '660$'},
    '20-hour': {in_person: '1060$', virtual: '860$'},
    '30-hour': {in_person: '1560$', virtual: '1260$'},
    '60-hour': {in_person: '3000$', virtual: '2400$'}
}

export default function Purchase({}) {

    const {package_name} = useParams()

    const fieldset_ref = useRef<HTMLFieldSetElement>(null)
    const top_ref = useRef<HTMLHeadingElement>(null)
    const spinner_ref = useRef<HTMLDivElement>(null)
    const success_ref = useRef<HTMLDivElement>(null)

    const [form, setForm] = useState<formstate>({fname: '', lname: '', phone_number: '', email: '', sname: '', modality: 'in-person', grade_level: '', subject: '', schedule: [], other: ''})

    const [screen, setScreen] = useState({screen: 'form', transitioning: false})
    const [payment, setPayment] = useState({modality: 'in-person', cardholderName: '', ccNum: '', expDate: '', secCode: ''});


    const package_label = param_to_label[package_name as string];

    const pricing = modality_pricing[package_name as string];
    
    const submit_form = () => {
        const fieldset = fieldset_ref.current as HTMLFieldSetElement;
        const top = top_ref.current as HTMLHeadingElement;
        fieldset.classList.add('fade-slide-out')
        top.scrollIntoView({behavior: 'smooth', block: 'start'})
        setTimeout(() => {
            setScreen({...screen, transitioning: true})
            setTimeout(() => {
                const spinner = spinner_ref.current as HTMLDivElement
                spinner.classList.add('fade-slide-out')
            }, 1700)
            setTimeout(() => {
                setScreen({screen:'success', transitioning: false})
            }, 2000)
        }, 300)
    }

    const submit_payment = () => {
        const success = success_ref.current as HTMLDivElement;
        const top = top_ref.current as HTMLHeadingElement;
        success.classList.add('fade-slide-out');
        top.scrollIntoView({behavior: 'smooth', block: 'start'})
        setTimeout(() => {
            setScreen({...screen, transitioning: true})
            setTimeout(() => {
                const spinner = spinner_ref.current as HTMLDivElement
                spinner.classList.add('fade-slide-out')
            }, 1700)
            setTimeout(() => {
                setScreen({screen:'payment-success', transitioning: false})
            }, 2000)
        }, 300)
    }

    return (
        <main className='flex flex-col items-center gap-[10px] py-[30px] p-[5px] ssm:p-[30px]'>
            <div className='flex flex-col items-center gap-[20px] w-full max-w-[800px]'>
                <div className='flex flex-col items-center text-center gap-[10px] w-full overflow-hidden relative'>
                    <h1 className='text-black text-beeg' ref={top_ref}>Purchase Tutoring Services</h1>
                    <p className='text-smol text-black'>Enter the information below to get started. You can choose to pay online, or pay in-person at our location.</p>
                    <div className='flex flex-row items-center gap-[10px] w-full'>
                        <p className='text-smol text-black'>Purchasing: <span className='text-secondary'>{package_label}</span></p>
                    </div>
                    {screen.transitioning ?
                    <div className='w-full max-w-[150px] max-h-[150px] flex justify-center items-center fade-slide-in' ref={spinner_ref}>
                        <LoadingSpinner/>
                    </div> :
                    screen.screen === 'success' ? 
                    <div className='w-full flex flex-col p-[10px] justify-center items-center fade-slide-in bg-secondary-alt rounded-[10px] gap-[10px]' ref={success_ref}>
                        <h2 className='text-white text-meed max-w-[500px]'>You've successfully signed up for our tutoring services!</h2>
                        <p className='text-white text-smol max-w-[500px]'>The next step is to pay. You can pay online or in-person. We accept payments online via credit card only.</p>
                        <div className='flex flex-col justify-center items-center rounded-[5px] border border-white min-w-[600px] max-w-[90%]'>
                            <div className='flex flex-row items-center border-b border-white w-full'>
                                <ToggleButton 
                                    classes='flex justify-center items-center border-none rounded-none rounded-ss-[5px] border-none text-white toggle-button' 
                                    size='smol' override active={payment.modality === 'in-person'}
                                    width='w-[50%]'
                                    onClick={() => setPayment({...payment, modality: 'in-person'})}
                                >
                                    Pay In-Person
                                </ToggleButton>
                                <ToggleButton 
                                    classes='flex justify-center items-center rounded-none rounded-se-[5px] border-none text-white toggle-button' 
                                    size='smol' override active={payment.modality === 'virtual'}
                                    width='w-[50%]'
                                    onClick={() => setPayment({...payment, modality: 'virtual'})}
                                >
                                    Pay Virtually
                                </ToggleButton>
                            </div>
                            {payment.modality === 'in-person' ? 
                            <div className='flex justify-center items-center p-[20px]'>
                                <p className='text-smol text-white'>You can head over to 123 Easy Street to pay in-person!</p>
                            </div> : 
                            <div className='flex flex-col justify-center items-center p-[10px] py-[15px] w-full'>
                                <div className='flex flex-row w-full text-start'>
                                    <TextInput
                                        label='Cardholder Name'
                                        handler={(v:string) => setPayment({...payment, ccNum: v})}
                                        value={payment.ccNum}
                                        classes="px-[0px] ssm:p-[10px]"
                                        white_outline
                                        text_color='text-black'
                                    />
                                </div>
                                <div className='flex flex-row w-full text-start'>
                                    <TextInput
                                        label='Credit Card Number'
                                        handler={(v:string) => setPayment({...payment, ccNum: v})}
                                        value={payment.cardholderName}
                                        classes="px-[0px] ssm:p-[10px]"
                                        white_outline
                                        text_color='text-black'
                                    />
                                </div>
                                <div className='flex flex-row w-full text-start'>
                                    <TextInput
                                        label='Expiration Date'
                                        handler={(v:string) => setPayment({...payment, expDate: v})}
                                        value={payment.expDate}
                                        classes="px-[0px] ssm:p-[10px]"
                                        white_outline
                                        text_color='text-black'
                                    />
                                    <TextInput
                                        label='Security Code'
                                        handler={(v:string) => setPayment({...payment, secCode: v})}
                                        value={payment.secCode}
                                        classes="px-[0px] ssm:p-[10px]"
                                        white_outline
                                        text_color='text-black'
                                    />
                                </div>
                                <div className='flex justify-center items-center w-full'>
                                    <Button size='smol' onClick={submit_payment}>Submit</Button>
                                </div>
                            </div>
                            }
                        </div>
                    </div> :
                    screen.screen === 'payment-success' ? 
                    <div className='w-full flex flex-col p-[10px] justify-center items-center fade-slide-in bg-secondary-alt rounded-[10px] gap-[10px] fade-slide-in'>
                        <h2 className='text-white text-meed max-w-[500px]'>Payment Received!</h2>
                        <p className='text-white text-smol max-w-[500px]'>Thank you for paying! You will receive a follow-up within 24 hours to discuss scheduling and plans. You can also give us a call at 613-123-4567 to discuss immediately!</p>
                    </div> :
                    <fieldset className='w-full ssm:w-[100%] flex flex-col gap-[10px] text-start relative' ref={fieldset_ref}>
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <TextInput 
                                label='First Name'
                                handler={(v:string) => setForm({...form, fname: v})}
                                value={form.fname}
                                classes="px-[0px] ssm:p-[10px]"
                                purchase_form={true}
                            />
                            <TextInput 
                                label='Last Name'
                                handler={(v:string) => setForm({...form, lname: v})}
                                value={form.lname}
                                classes="px-[0px] ssm:p-[10px]"
                                purchase_form
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-[10px] w-full'>
                            <TextInput 
                                label='Phone Number'
                                handler={(v:string) => setForm({...form, phone_number: v})}
                                value={form.phone_number}
                                classes="px-[0px] ssm:p-[10px]"
                                purchase_form
                            />
                            <TextInput 
                                label='E-mail'
                                handler={(v:string) => setForm({...form, email: v})}
                                value={form.email}
                                classes="px-[0px] ssm:p-[10px]"
                                purchase_form
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-[0px] gap-[10px] w-full'>
                            <TextInput 
                                label="Student's Name"
                                handler={(v:string) => setForm({...form, sname: v})}
                                value={form.sname}
                                classes="px-[0px] ssm:p-[10px]"
                                purchase_form
                            />
                            <div className={`flex flex-col p-[0px] sm:p-[10px] justify-center w-[100%] sm:w-[40%]`}>
                                <label htmlFor='modality-select' className='text-secondary text-smol'>Modality</label>
                                <Select 
                                    id='modality-select'
                                    options={[{label: `In-Person - ${pricing.in_person}`, value: 'in-person'}, {label: `Virtual - ${pricing.virtual}`, value: 'virtual'}]}
                                    classes='dm-serif-text-regular'
                                    onChange={(newopt:'in-person'|'virtual') => setForm({...form, modality: newopt})}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-[0px] gap-[10px] w-full'>
                            <TextInput 
                                label="Grade Level"
                                handler={(v:string) => setForm({...form, grade_level: v})}
                                value={form.grade_level}
                                width="sm:w-[40%] w-full"
                                classes="px-[0px] sm:p-[10px]"
                                purchase_form
                            />
                            <TextInput 
                                label="Subject(s)"
                                handler={(v:string) => setForm({...form, subject: v})}
                                value={form.subject}
                                width="sm:w-[60%] w-full"
                                classes="px-[0px] sm:p-[10px]"
                                purchase_form
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full px-[0px] ssm:p-[10px]'>
                            <p className='text-secondary text-smol'>Schedule</p>
                            <p className='text-black text-supa-smol text-center w-fit'>Select which evenings the student is free</p>
                            <div className='flex flex-row flex-wrap justify-center items-center gap-[5px]'>
                                {schedule_days.map(sd => {
                                    return (
                                        <div key={`${sd.value}-toggle-button`} className='flex justify-center items-center'>
                                        <ToggleButton 
                                            size='smol' 
                                            onClick={
                                                () => setForm(
                                                    {...form, schedule: form.schedule.includes(sd.value) ? form.schedule.filter(d => d != sd.value) : [...form.schedule, sd.value]}
                                                )
                                            }
                                            active={form.schedule.includes(sd.value)}
                                            width='w-[132px]'
                                        >
                                            {sd.label}
                                        </ToggleButton>
                                        </div>
                                    )
                                })}
                                
                            </div>
                            <div className='flex flex-col justify-center gap-[5px] mt-[10px] w-full'>
                                {weekend_days.map(wd => {

                                    const day_value = `${wd.value}-day`
                                    const eve_value = `${wd.value}-evening`

                                    return (
                                        <div key={`${wd.value}-time-selection`} className='flex flex-row items-center px-[0px] xs:px-[20px] gap-[5px]'>
                                            <p className='text-smol text-black w-full h-fit'>{wd.label}</p>
                                            <ToggleButton 
                                                size='smol' 
                                                onClick={
                                                    () => setForm(
                                                        {...form, schedule: form.schedule.includes(day_value) ? form.schedule.filter(d => d != day_value) : [...form.schedule, day_value]}
                                                    )
                                                }
                                                active={form.schedule.includes(day_value)}
                                            >
                                                Day
                                            </ToggleButton>
                                            <ToggleButton 
                                                size='smol' 
                                                onClick={
                                                    () => setForm(
                                                        {...form, schedule: form.schedule.includes(eve_value) ? form.schedule.filter(d => d != eve_value) : [...form.schedule, eve_value]}
                                                    )
                                                }
                                                active={form.schedule.includes(eve_value)}
                                            >
                                                Evening
                                            </ToggleButton>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-full px-[0px] ssm:p-[10px]'>
                            <label htmlFor='Other Concerns' className='text-secondary text-smol'>Other Concerns</label>
                            <p className='text-black text-supa-smol text-center w-fit'>Type here if there are any other concerns e.g. special needs</p>
                            <div className='relative h-[150px] w-full'>
                                <textarea
                                    className={`border border-black size-full p-[5px] relative`} 
                                    id='Other Concerns' 
                                    onChange={(e:any) => e.target.value.length < 1500 ? setForm({...form, other: e.target.value}) : null} 
                                    value={form.other}
                                />
                                <div className='absolute bottom-0 right-[5px]'>
                                    <p className='text-supa-smol text-gray-900 italic'>{form.other.length}/1500</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <Button size='smol' onClick={submit_form}>Submit</Button>
                        </div>
                    </fieldset>}
                </div>
            </div>
        </main>
    )
}