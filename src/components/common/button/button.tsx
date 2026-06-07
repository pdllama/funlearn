


export default function Button({type2, size, children, onClick, classes}:any) {


    return (
        <button
            className={`
                px-[30px] py-[15px] flex justify-center items-center 
                w-fit
                rounded-[10px] ${type2 ? 'button-bg-2' : 'button-bg'} text-white text-${size}
                ${classes}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}