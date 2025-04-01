import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import Button from './Button';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const allPastes = useSelector((state) => state.paste.pastes);
    const dispatcher = useDispatch();

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
                Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }


        if (pasteId) {
            dispatcher(updateToPastes(paste));
        }
        else {
            dispatcher(addToPastes(paste));
        }

        setValue('');
        setTitle('');
        setSearchParams({});
    }
    return (
        <div className='mt-9 px-4'>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
                <input 
                    type="text"
                    placeholder='Enter Title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    className='mt-4 w-full md:min-w-[50vw] py-2 pl-2 rounded-lg border'
                />
                <Button title={pasteId ? "Update" : "Create"} onClick={createPaste} />
            </div>
            <div className='flex flex-row justify-center'>
                <textarea
                    className='mt-4 w-full md:min-w-[90vw] pt-5 pl-2 rounded-lg border'
                    placeholder='Enter Content'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default Home
