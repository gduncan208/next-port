"use client";
import React, {useState} from "react";
import styles from "../page.module.css"
import { Button, TextField, TextareaAutosize } from "@mui/material";


const ContactForm = () => {
    const defaultSubmission = {
        status: null,
        message: null,
    }

    const [submission, setSubmission] = useState(defaultSubmission);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {};
        const elements = e.currentTarget.elements;

        Array.from(elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("MY AWESOME RESPONSE", res);
                setSubmission(res);
            });
    }

    return (
       <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField className={styles.textField} name="name" id="outlined-basic" label="Name" variant="filled" />
                <TextField className={styles.textField} name="email" id="outlined-basic" label="Email" variant="filled" />
                <TextareaAutosize className={styles.textField} id="message" name="message" label="Message" minRows={3} />
                <Button className={styles.submitButton} variant="outlined" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm;