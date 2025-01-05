import React from 'react';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


export default function FileInput({name, imgName, file, onChange, onClick, reqired}) {
    return (
        <>
            <div className='w-[calc(70%-1rem)] sm:w-full'>
                <p className='block mb-2 md:mb-1 font-medium text-lg md:text-base'>Image</p>
                <div className='text-[0]'>
                    <div className="inline-block relative w-[calc(100%-1rem-96px)] md:w-[calc(100%-6rem)]">
                        <input 
                            type='file' 
                            id={name} 
                            name={name}
                            onChange={onChange}
                            accept='image/*'
                            className='absolute top-0 left-0 w-full h-12 md:h-10 opacity-0'
                            webkitrelativepath='true'
                        />
                        <input 
                            type='text' 
                            id={`id`} 
                            placeholder={imgName !== undefined ? imgName : 'Attach Image'}
                            onChange={onChange}
                            className='w-full h-12 md:h-10 px-4 rounded border text-lg md:text-base'
                            disabled
                        />
                    </div>
                    <label 
                        className='inline-block w-[48px] h-[48px] md:h-10 md:w-10 ml-2 bg-navy rounded text-lightGray hover:bg-mint duration-200 align-top'
                        htmlFor={name}
                    >   
                        <span className="blind">Add image</span>
                        <IoMdAdd className='flex items-center w-[70%] h-full m-auto' />
                    </label>
                    <button
                        onClick={onClick}
                        className='inline-block w-[48px] h-[48px] md:h-10 md:w-10 ml-2 bg-red-500 rounded text-lightGray hover:bg-red-700 duration-200 align-top'
                    >
                        <span className="blind">Delete image</span>
                        <MdDelete className='flex items-center w-[60%] h-full m-auto' />
                    </button>
                </div>
            </div>
            <div className="w-[calc(30%-1rem)] border sm:w-full">
                {file ? (
                    <img src={URL.createObjectURL(file)} alt="" />
                ) : (
                    <div className='flex item-center justify-center w-full h-full pb-[50%] text-center'>
                        <p>Preview Image</p>
                    </div>
                )}
            </div>
        </>
    );
}

