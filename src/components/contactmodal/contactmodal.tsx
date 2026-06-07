import TextInput from "../common/input/textinput"
import ModalWrapper from "../common/modal/modalwrapper"
import { useState, useRef } from "react"
import Button from "../common/button/button"
import LoadingSpinner from "../common/loaders/spinner"

export default function ContactModal({open, handleClose}:any) {

    const field_set_ref = useRef<HTMLFieldSetElement>(null)
    const success_ref = useRef<HTMLDivElement>(null)
    const loading_ref = useRef<HTMLDivElement>(null)

    const [form, setForm] = useState({fname: '', lname: '', phone_number: '', email: '', help: ''})
    const [transition, setTransition] = useState(false)
    const [success, setSuccess] = useState(false)

    const transition_to_success = () => {
        const field_set = field_set_ref.current as HTMLFieldSetElement;
        field_set.classList.add('fade-out')
        setTimeout(() => {
            setSuccess(true);
            setTransition(true);
            
            setTimeout(() => {
                const loading = loading_ref.current as HTMLDivElement;
                loading.classList.remove('fade-in')
                loading.classList.add('fade-out')
            }, 1700)
            setTimeout(() => {
                setTransition(false)
            }, 2000)
        }, 300)
    }

    return (
        <ModalWrapper 
            open={open}
            handleClose={handleClose}
            transition_class='slide-in'
            className=''
        >
            <div className='bg-white w-[30vw] min-w-[400px] min-h-screen max-w-[500px] p-[10px]'>
                <div className='bg-slight-white size-full flex flex-col items-center py-[30px] gap-[20px] text-center'>
                    <h5 className='text-meed text-black'>Contact Us</h5>
                    <p className='text-half-smol text-black max-w-[80%]'>Feel free to get in touch for any questions/concerns and/or to book a free consultation. We will be in touch within 24 hours.</p>
                    {success ? 
                    transition ? 
                        <div className='fade-in' ref={loading_ref}>
                            <LoadingSpinner/>
                        </div> : 
                    <div className='w-full bg-secondary rounded-[5px] flex flex-col text-center fade-in max-w-[80%] p-[20px] gap-[10px]' ref={success_ref}>
                        <h6 className='text-smol text-white'>Success!</h6>
                        <p className='text-half-smol text-white'>We will contact you within 24 hours to follow up on your request</p>
                    </div> :
                    <fieldset className='flex flex-col justify-center items-center px-[31px] py-[23px] w-full text-start' ref={field_set_ref}>
                        <TextInput 
                            label='First Name'
                            handler={(v:string) => setForm({...form, fname: v})}
                            value={form.fname}
                        />
                        <TextInput 
                            label='Last Name'
                            handler={(v:string) => setForm({...form, lname: v})}
                            value={form.lname}
                        />
                        <TextInput 
                            label='Phone Number'
                            handler={(v:string) => setForm({...form, phone_number: v})}
                            value={form.phone_number}
                        />
                        <TextInput 
                            label='E-mail'
                            handler={(v:string) => setForm({...form, email: v})}
                            value={form.email}
                        />
                        <TextInput 
                            label='How can we help?'
                            handler={(v:string) => setForm({...form, help: v})}
                            value={form.help}
                            textarea
                            textboxsize='h-[160px]'
                        />
                        <Button size='smol' onClick={transition_to_success}>Submit</Button>
                    </fieldset>
                    }
                </div>
            </div>
        </ModalWrapper>
    )
}