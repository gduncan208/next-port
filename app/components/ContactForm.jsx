"use client";
import { React } from "react";
import styles from "../page.module.css"
import { Button, TextField, TextareaAutosize } from "@mui/material";


const ContactForm = () => {


    const handleSubmit = async (formData) => {
        console.log(formData);
        let object ={};
        formData.forEach((value, key) => object[key] = value);
        await fetch ('/contact/send', {
            method: 'POST',
            body: JSON.stringify(object),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("zee response", res);
            console.log(info)
        });
    }

    return (
       <div>
            <form className={styles.form} action={handleSubmit}>
                <TextField name="name" id="outlined-basic" label="Name" variant="outlined" />
                <TextField name="email" id="outlined-basic" label="Email" variant="outlined" />
                <TextareaAutosize id="message" label="Message" minRows={3} />
                <Button variant="outlined" type="submit" />
            </form>
        </div>
    )
}

export default ContactForm;