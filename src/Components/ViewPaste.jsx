import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './Button';

const ViewPaste = () => {
    const { id } = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);

    const paste = allPastes.find((p) => p._id === id);
    return (
        <div className='mt-9'>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
                <input
                    disabled
                    type="text"
                    placeholder='Enter Title'
                    value={paste.title}
                    className='mt-4 w-full md:min-w-[50vw] py-2 pl-2 rounded-lg border'
                />
                <button className='rounded-lg mt-4 py-2 px-4 border bg-blue-500 text-white'>
                    <Link to={`/?pasteId=${paste?._id}`}>
                        Edit
                    </Link>
                </button>
            </div>
            <div className='flex flex-row justify-center'>
                <textarea
                    disabled
                    className='mt-4 w-full md:min-w-[90vw] pt-5 pl-2 rounded-lg border'
                    placeholder='Enter Content'
                    value={paste.content}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default ViewPaste
