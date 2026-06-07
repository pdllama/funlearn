



export default function TextInput({label, handler, value, textboxsize, textarea, width='w-full', classes='', purchase_form, white_outline=false, text_color=''}:any) {



    return (
        <div className={`flex flex-col p-[10px] justify-center ${width} ${classes}`}>
            <label htmlFor={`${label}${purchase_form ? '-purchase' : ''}`} className={`${text_color ? text_color : 'text-secondary'} text-smol`}>{label}</label>
            {textarea ? 
                <textarea
                    className={`border ${white_outline ? 'border-white' : 'border-black'} ${textboxsize ? textboxsize : 'h-[40px]'} p-[5px]`} 
                    id={`${label}${purchase_form ? '-purchase' : ''}`} 
                    onChange={(e:any) => e.target.value.length < 1000 ? handler(e.target.value) : null} 
                    value={value}
                /> : 
                <input className={`border ${white_outline ? 'border-white' : 'border-black'} ${textboxsize ? textboxsize : 'h-[40px]'} p-[5px]`} type='text' id={`${label}${purchase_form ? '-purchase' : ''}`}  onChange={(e:any) => handler(e.target.value)} value={value}/>
            }
            
        </div>
    )
}