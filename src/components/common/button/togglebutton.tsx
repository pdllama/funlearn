

export default function ToggleButton({size, children, onClick, active, width='w-fit', classes='', override}:any) {


    return (
        <button
            className={`
                px-[10px] py-[5px] flex justify-center items-center 
                ${width} h-fit
                rounded-[10px] ${override ? '' : `button-bg-2`} ${active?'active' : ''} text-black text-${size}
                ${classes}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}