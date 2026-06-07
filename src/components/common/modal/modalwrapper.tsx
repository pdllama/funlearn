import { useEffect, useRef } from "react"
import CloseButton from "../button/closebutton"

export default function ModalWrapper({children, open, handleClose, className, transition_class}:any) {
    const dialog_ref = useRef<HTMLDialogElement>(null)
    // const box_ref = useRef<HTMLDivElement>(null)

    const finalClose = () => {
        // const item = dialog_ref.current as HTMLDialogElement;
        handleClose()
    }

    useEffect(() => {
        const item = dialog_ref.current as HTMLDialogElement;
        // const box = box_ref.current as HTMLDivElement;
        if (open) {
            item.showModal()
            document.body.style.overflow = 'hidden'
            item.classList.add(transition_class);
        } else {
            item.close()
            document.body.style.overflow = 'unset'
            item.classList.remove(transition_class);
        }
    }, [open])

    const close_outside = (event:any) => {
        const dialog = dialog_ref.current as HTMLDialogElement;


        if (event.target === dialog) {
            finalClose()
        }
    }

    return (
        <dialog
            ref={dialog_ref}
            onClick={close_outside}
            onClose={finalClose}
            className={`relative ${className}`}
            // style={{left: '-100%'}}
        >
            {/* <div aria-hidden className='size-full' ref={box_ref}> */}
                <CloseButton closeHandler={handleClose}/>
                {children}
            {/* </div> */}
        </dialog>
    )
}