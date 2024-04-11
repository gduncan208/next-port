import { React } from "react";
import styles from "../page.module.css"
import { Button, TextField, TextareaAutosize } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = () => {
    
    
    return (
    <section className={styles.contactSection}>
        <ContactForm />
    </section>
    )
}

export default Contact;