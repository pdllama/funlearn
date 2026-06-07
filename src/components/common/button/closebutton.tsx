


export default function CloseButton({closeHandler}:any) {


    return (
        <button className='p-[5px] rounded-[20px] hover:bg-gray-300 absolute top-3 right-3' onClick={closeHandler}>
            <img src="clear-icon.png" width='50px' height='50px'/>
        </button>
    )
}