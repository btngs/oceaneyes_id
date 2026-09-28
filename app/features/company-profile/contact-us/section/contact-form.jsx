import { Input } from "antd";
import SectionLayout from "../../../../components/layout/section-layout";
import useContactForm from "../hook/useContactForm";

export default function ContactForm() {

    const {
        handleInputChange,
        formSubmit,
    } = useContactForm()

    const {TextArea} = Input;

    return (
        <SectionLayout classNames={`bg-primary md:bg-white !my-4 !py-4`}>
            <div className="flex flex-col w-full justify-center items-center gap-y-10 md:bg-primary md:p-8 lg:p-10 md:rounded-2xl md:drop-shadow-xl">
                <h3 className="text-white font-semibold text-[24px]">Contact Us</h3>
                <div className="flex flex-col w-full justify-center items-center gap-y-4 lg:gap-y-8">
                    <Input 
                        placeholder="Full name"
                        name="fullName"
                        className="rounded-xl p-4 placeholder:text-textGray"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 w-full">
                        <Input 
                            placeholder="Company"
                            name="company"
                            className="rounded-xl p-4 placeholder:text-textGray"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <Input 
                            placeholder="Email"
                            name="email"
                            className="rounded-xl p-4 placeholder:text-textGray"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 w-full">
                        <Input 
                            placeholder="Phone Number"
                            name="phoneNumber"
                            className="rounded-xl p-4 placeholder:text-textGray"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <Input 
                            placeholder="Subject"
                            name="subject"
                            className="rounded-xl p-4 placeholder:text-textGray"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <TextArea 
                        placeholder="Your message"
                        name="message"
                        className="rounded-xl p-4 placeholder:text-textGray"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="flex w-full justify-center lg:justify-start items-center">
                    <button
                        onClick={() => formSubmit()}
                        className='w-[141px] md:w-[153px] lg:w-[200px] flex justify-center items-center py-2 rounded-xl text-white font-bold bg-secondary text-base'
                    >
                        Send
                    </button>
                </div>
            </div>
        </SectionLayout>
    )
}