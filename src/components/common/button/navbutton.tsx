

export default function NavButton({children, onClick}:any) {


    return (
        <button
            className={`
                flex justify-center items-center 
                w-fill xs:w-fit text-nowrap px-[5px] lg:py-[2px] contact-us-nav rounded-[5px]
                text-secondary nav-sizing text-smol a-hover
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}