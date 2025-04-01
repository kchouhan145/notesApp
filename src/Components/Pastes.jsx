import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import 'boxicons'

const Pastes = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='flex flex-col justify-center items-center '>
            <input
                className='p-2 rounded min-w-[500px] mt-5 border'
                type='search'
                placeholder='Enter search title'
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <div className='flex flex-col gap-5 mt-[10px] h-[100vh]'>
                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div
                                    className='flex flex-col w-full max-w-[500px] border rounded-lg bg-white p-4 gap-2 sm:p-3 sm:gap-1 md:p-2 md:gap-1'
                                    key={paste?._id}
                                >
                                    <div className='text-lg font-semibold sm:text-base md:text-sm'>
                                        {paste.title}
                                    </div>
                                    <div className='text-sm text-gray-600 sm:text-xs md:text-xs'>
                                        {paste.content}
                                    </div>
                                    <div className='flex flex-wrap gap-4 justify-evenly mt-2 sm:gap-2 md:gap-2 w-[500px]'>
                                        <button className=''>
                                            <Link to={`/?pasteId=${paste?._id}`}>
                                                <box-icon type='solid' name='edit-alt' size='sm'></box-icon>
                                            </Link>
                                        </button>
                                        <button>
                                            <Link to={`${paste?._id}`}>
                                                <box-icon name='low-vision' size='sm'></box-icon>
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDelete(paste?._id)}>
                                            <box-icon name='trash' size='sm'></box-icon>
                                        </button>
                                        <button onClick={() => {
                                            navigator.clipboard.writeText(paste?.content)
                                            toast.success("Copied to Clipboard")
                                        }}>
                                            <box-icon name='clipboard' size='sm'></box-icon>
                                        </button>
                                        <button>
                                            <box-icon name='send' size='sm'></box-icon>
                                        </button>

                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Pastes
