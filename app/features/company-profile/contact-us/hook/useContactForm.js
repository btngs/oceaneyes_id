import { useState } from "react";
import { sendMail } from "../../../../service/mailing/api";

export default function useContactForm() {
  const [input, setInput] = useState({
    fullName: "",
    company: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  })

  const [isSending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const formSubmit = async() => {
    setSending(true);
    const request = {
      name: input.fullName,
      email: input.email,
      subject: input.subject,
      company: input.company,
      message: input.message,
    }
    try {
      const response = await sendMail(request);
      if(response.code == 200) {
        console.log("response success:", response)
        setSuccessModal(true);
        setSending(false);
      }
    } catch (error) {
      console.error("error sending mail:", error);
      setErrorModal(true);
      setSending(false)
    }
  }

  return {
    handleInputChange,
    formSubmit,
    successModal,
    setSuccessModal,
    errorModal,
    setErrorModal,
    isSending,
  }
}