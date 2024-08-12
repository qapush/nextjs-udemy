'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}){
    
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];
        
        if(!file) return;

        const filereader = new FileReader();

        filereader.onload = () => {
            setPickedImage(filereader.result);
        }

        filereader.readAsDataURL(file);
        
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && 'no image picked yet'}
                {pickedImage && <Image src={pickedImage} alt="Image selected by the user" fill/>}
            </div>
            <input ref={imageInput} onChange={handleImageChange} className={classes.input} type="file" name={name} id={name} accept="image/png, image/jpeg" />
        </div>
        <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an image
        </button>
    </div>
}