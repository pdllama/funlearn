


export default function Select({options, value, onChange, id, classes}:any) {


    return (
        <select id={id} value={value} onChange={(e:any) => onChange(e.target.value)} className={`w-full h-[40px] p-[5px] border border-black ${classes}`}>
            {options.map((o:any) => {
                return (
                    <option key={`${o.value}-option`} value={o.value} label={o.label}/>
                )
            })}
        </select>
    )
}