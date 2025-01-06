import React, { useEffect, useState } from 'react';
import RadioButton from '../component/ui/RadioButton';
import Checkbox from '../component/ui/Checkbox';
import TextInput from '../component/ui/TextInput';
import FileInput from '../component/ui/FileInput';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';
import { ToastContainer, toast } from 'react-toastify';


export default function Admin() {
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        size: [],
        image: '',
    });
    
    const handleChange = ({target}) => {
        const { name, value, files, checked } = target;

        if (name === "image") {
            setFile(files && files[0]);
        }

        setProduct((prev) => {
            if (name === "image") {
                return { ...prev, image: files && files[0] }; // Update image
            }

            if (name === "size") {
                const updatedsize = checked
                    ? [...prev.size, value] // add when checked
                    : prev.size.filter((size) => size !== value); // remove when unchecked

                return { ...prev, size: updatedsize }; // update array
            }

            return { ...prev, [name]: value };
        });
    };

    const handleImageDelete = (e) => {
        if(product.image !== ''){
            product.image = '';
        }
    }

    useEffect(() => {
        // console.log("Updated product:", product);
    }, [product]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const tt = toast.loading("Uploading..."); 

        setIsUploading(true);
        uploadImage(file)
        .then((url) => {
            addNewProduct(product,url)
            .then(() => {
                toast.update(tt, { 
                    render: "Product added successfully!", 
                    type: "success", 
                    isLoading: false, 
                    autoClose: 3000 
                });
                setSuccess(true);

                setTimeout(() => {
                    setSuccess(false);
                    window.location.reload();
                }, 3000);
            })
        })
        .catch((error) => console.log(error))
        .finally(() => {
            setIsUploading(false);
        });
    };
    
    return (
        <main>
            <ToastContainer />
            <div className='content'>
                <div className='inner'>
                    <h2 className='mb-12 md:mb-8 font-medium text-2xl'>Add New Product</h2>
                    <form 
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col items-start justify-center gap-8 md:gap-6'
                    >
                        <TextInput type={'text'} name={'name'} onChange={handleChange} label={'Name'} placeholder={'Enter product name'} reqired={'true'} />
                        <TextInput type={'text'} name={'price'} onChange={handleChange} label={'Price'} placeholder={'Enter product price'} reqired={'true'} />
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='category'
                            >
                                    Category
                            </label>
                            <div className='flex flex-wrap w-full gap-4'>
                                <RadioButton name={'category'} id={'outerwear'} label={'Outerwear'} onChange={handleChange} />
                                <RadioButton name={'category'} id={'top'} label={'Top'} onChange={handleChange} />
                                <RadioButton name={'category'} id={'bottom'} label={'Bottom'} onChange={handleChange} />
                                <RadioButton name={'category'} id={'dress'} label={'Dress'} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='description'
                            >
                                Description
                            </label>
                            <textarea 
                                onChange={handleChange}
                                className='w-full h-[200px] md:h-8 md:h-[150px] px-4 py-2 rounded border'
                                name="description" 
                                id="description"
                            ></textarea>
                        </div>
                        <div className='w-full'>
                            <label 
                                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                                htmlFor='size'
                            >
                                Size
                            </label>
                            <div className='flex flex-wrap w-full gap-4'>
                                <Checkbox name={'size'} id={'small'} label={'S'} onChange={handleChange} />
                                <Checkbox name={'size'} id={'medium'} label={'M'} onChange={handleChange} />
                                <Checkbox name={'size'} id={'large'} label={'L'} onChange={handleChange} />
                                <Checkbox name={'size'} id={'xLarge'} label={'XL'} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex items-start justify-between gap-8 md:gap-6 sm:flex-wrap w-full">
                            <FileInput name={'image'} imgName={product.image.name} file={file} onChange={handleChange} onClick={handleImageDelete} reqired={'true'} />
                        </div>
                        <div className='w-full mt-4'>
                            <button 
                                className={`block m-auto py-3 px-4 ${isUploading ? 'bg-gray-500 text-white' : 'bg-navy text-lightGray hover:bg-mint duration-200'} rounded-md`}
                                disabled={isUploading}
                            >
                                {isUploading ? 'Uploading' : 'Add New Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

