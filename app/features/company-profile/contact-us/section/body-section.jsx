import { Input } from "antd";
import SectionLayout from "../../../../components/layout/section-layout";
import useContactForm from "../hook/useContactForm";

export default function ContactBodySection() {

  const {
    handleInputChange,
    formSubmit,
  } = useContactForm()

  const { TextArea } = Input;

  return (
    <SectionLayout classNames={`!py-0 w-full justify-center items-center`}>
      <div className="flex gap-x-5 p-4 bg-white mt-[-187px] mb-10 lg:w-[960px] min-h-[240px] rounded-xl shadow-xl">
        <div className="bg-primary rounded-lg flex flex-col p-4 w-1/3 gap-y-10">
          <div className="flex flex-col w-full gap-y-4">
            <h3 className="font-semibold text-white text-[20px]">Office</h3>
            <ul className="space-y-4">
              <li className="font-normal text-white text-sm">Kyoto Office : Kyoto City, Nakagyo Ward, Uraideyama-cho 308 Yamachu Building 26</li>
              <li className="font-normal text-white text-sm">Tokyo Office : 402 Taiyo Building, 3-27-1 Kanda Sakumacho, Chiyoda-ku, Tokyo 101-0025</li>
            </ul>
          </div>
          <div className="flex flex-col w-full gap-y-4">
            <h3 className="font-semibold text-white text-[20px]">Contact Person</h3>
            <h4 className="font-normal text-white text-sm">Oceaneyes Representative for Indonesia</h4>
            <h4 className="font-normal text-white text-sm">Ketut Widiarta Yasa</h4>
            <h4 className="font-normal text-white text-sm">+62 812 1183 4752</h4>
          </div>
        </div>
        <div className="w-full flex-flex-col">
          <div className="grid w-full grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <Input
                placeholder="Full name"
                name="fullName"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Company"
                name="company"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Email"
                name="email"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                name="phoneNumber"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Subject"
                name="subject"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="pt-10 flex w-full">
            <TextArea
              placeholder="Your message"
              name="message"
              onChange={(e) => handleInputChange(e)}
              className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none !transition-none"
            />
          </div>
          <div className="w-full py-10">
            <button
              onClick={() => formSubmit}
              className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}