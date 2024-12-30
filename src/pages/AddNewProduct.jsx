import React, { useEffect, useState } from 'react';
import RadioButton from '../component/ui/RadioButton';
import Checkbox from '../component/ui/Checkbox';
import TextInput from '../component/ui/TextInput';
import Button from '../component/ui/Button';
import FileInput from '../component/ui/FileInput';

export default function Admin() {
    // const [product, setProduct] = useState({});
    const [product, setProduct] = useState({
        prdName: "",
        prdPrice: "",
        prdCategory: "",
        prdDescription: "",
        prdSize: [],
    });
    const [file, setFile] = useState();
    const [size, setSize] = useState([]);
    
    const handleChange = ({target}) => {
        const { name, value, files, checked } = target;

        setProduct((prev) => {
            if (name === "prdImage") {
                return { ...prev, prdImage: files && files[0] }; // Update image
            }

            if (name === "prdSize") {
                const updatedSizes = checked
                    ? [...prev.prdSize, value] // add when checked
                    : prev.prdSize.filter((size) => size !== value); // remove when unchecked

                return { ...prev, prdSize: updatedSizes }; // update array
            }

            // 기타 일반 입력 필드 업데이트
            return { ...prev, [name]: value };
        });
        console.log(product)
    };

    useEffect(() => {
        console.log("Updated product:", product);
    }, [product]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // if(text.trim().length === 0){
        //     return
        // }
        // setProduct([...product, product])
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
                        <TextInput type={'text'} name={'prdName'} onChange={handleChange} label={'Name'} placeholder={'Enter product name'} />
                        <TextInput type={'text'} name={'prdPrice'} onChange={handleChange} label={'Price'} placeholder={'Enter product price'} />
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='prdCategory'
                            >
                                    Category
                            </label>
                            <div className='flex flex-wrap w-full gap-4'>
                                <RadioButton name={'prdCategory'} id={'outerwear'} label={'Outerwear'} onChange={handleChange} />
                                <RadioButton name={'prdCategory'} id={'top'} label={'Top'} onChange={handleChange} />
                                <RadioButton name={'prdCategory'} id={'bottom'} label={'Bottom'} onChange={handleChange} />
                                <RadioButton name={'prdCategory'} id={'dress'} label={'Dress'} onChange={handleChange} />
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
                                name="prdDescription" 
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
                                <Checkbox name={'prdSize'} id={'small'} label={'S'} onChange={handleChange} />
                                <Checkbox name={'prdSize'} id={'medium'} label={'M'} onChange={handleChange} />
                                <Checkbox name={'prdSize'} id={'large'} label={'L'} onChange={handleChange} />
                                <Checkbox name={'prdSize'} id={'xLarge'} label={'XL'} onChange={handleChange} />
                            </div>
                        </div>
                        <FileInput name={'prdImage'} value={product.title ?? ''} onChange={handleChange} />
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

