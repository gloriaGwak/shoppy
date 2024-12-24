import React, { useState } from 'react';
import RadioButton from '../component/ui/RadioButton';
import Checkbox from '../component/ui/Checkbox';
import TextInput from '../component/ui/TextInput';
import Button from '../component/ui/Button';
import FileInput from '../component/ui/FileInput';

export default function Admin() {
    const [text, setText] = useState([
        // 'prdName','prdPrice','prdDescription'
        {prdName:''},
        {prdPrice:''},
        {prdDescription:''}
    ]);
    
    const handleChange = (index, key, value) => {
        setText((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [key]: value } : item
            )
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0){
            return
        }
        setText([...text,text])
    };


    return (
        <div className='content'>
            <div className='inner'>
                <h2 className='mb-6 font-medium text-2xl'>Add New Product</h2>
                <div className="flex items-start justify-between gap-8 md:flex-wrap">
                    <form 
                        onSubmit={handleSubmit}
                        className='w-[calc(70%-1rem)] md:w-full flex flex-col items-start justify-center gap-6 md:gap-4'
                    >
                        <TextInput type={'text'} id={'prdName'} onChange={handleChange} label={'Name'} placeholder={'Enter product name'} />
                        <TextInput type={'text'} id={'prdPrice'} onChange={handleChange} label={'Price'} placeholder={'Enter product price'} />
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='prdCategory'
                            >
                                    Category
                            </label>
                            <div className='flex flex-wrap w-full gap-4'>
                                <RadioButton name={'prdCategory'} id={'outerwear'} label={'Outerwear'} />
                                <RadioButton name={'prdCategory'} id={'top'} label={'Top'} />
                                <RadioButton name={'prdCategory'} id={'bottom'} label={'Bottom'} />
                                <RadioButton name={'prdCategory'} id={'dress'} label={'Dress'} />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='prdDescription'
                            >
                                Description
                            </label>
                            <textarea 
                                onChange={handleChange}
                                className='w-full h-[200px] md:h-8 md:h-[150px] px-4 py-2 rounded border'
                                name="" 
                                id="prdDescription"
                            ></textarea>
                        </div>
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='prdSize'
                            >
                                Size
                            </label>
                            <div className='flex flex-wrap w-full gap-4'>
                                <Checkbox name={'prdSize'} id={'small'} label={'S'} />
                                <Checkbox name={'prdSize'} id={'medium'} label={'M'} />
                                <Checkbox name={'prdSize'} id={'large'} label={'L'} />
                                <Checkbox name={'prdSize'} id={'xLarge'} label={'XL'} />
                            </div>
                        </div>
                        <FileInput id={'prdImage'} value={'text'} />
                        <div className='w-full mt-4'>
                            <button 
                                className='block m-auto py-3 px-4 bg-navy rounded-md text-lightGray hover:bg-mint duration-200'
                            >
                                Add New Product
                            </button>
                        </div>
                    </form>
                    <div className="w-[calc(30%-1rem)] md:w-full">
                        <img src="https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

