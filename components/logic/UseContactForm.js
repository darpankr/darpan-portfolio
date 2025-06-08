import { useState } from "react";


export function useContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                alert("Message has been sent successfully!")
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                })
            } else {
                alert ("Failed to send message. Please try again! ")
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred while sending your message. Please try again.");
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }


    return {formData, handleChange, handleSubmit}

}