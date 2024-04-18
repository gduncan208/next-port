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
       <div className={styles.formContainer}>
            <form className={styles.form} action={handleSubmit}>
                <TextField className={styles.textField} name="name" id="outlined-basic" label="Name" variant="filled" />
                <TextField className={styles.textField} name="email" id="outlined-basic" label="Email" variant="filled" />
                <TextareaAutosize className={styles.textField} id="message" label="Message" minRows={3} />
                <Button className={styles.submitButton} variant="outlined" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm;