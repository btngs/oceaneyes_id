import { Avatar } from "antd";
import SectionLayout from "../../../../components/layout/section-layout";
import { UserOutlined } from "@ant-design/icons";
import SectionTitle from "../../../../components/atoms/section-title";

export default function MemberSection() {
    return (
        <SectionLayout>
            <div className="flex flex-col justify-center items-center py-4 lg:py-10 gap-y-4 pb-10">
                <SectionTitle 
                    text={"Meet Our Team"}
                />
            </div>
            <div className="flex w-full flex-col justify-center items-center md:flex-row gap-y-[60px] md:gap-x-4 lg:gap-x-10 xl:gap-x-[80px] py-10">
                <div className="flex flex-col justify-start items-center gap-y-4">
                    <Avatar size={160} icon={<UserOutlined />}/>
                    <span className="text-center font-bold text-base text-primary">Takuya Kamimura</span>
                    <span className="text-center font-semibold text-base text-foreground">Project Leader of Indonesia Bussiness</span>
                </div>
                <div className="flex flex-col justify-start items-center gap-y-4">
                    <Avatar size={160} icon={<UserOutlined />}/>
                    <span className="text-center font-bold text-base text-primary">Maldi Zacki Carmendi</span>
                    <span className="text-center font-semibold text-base text-foreground">Country Manager for Indonesia Bussiness</span>
                </div>
                <div className="flex flex-col justify-start items-center gap-y-4">
                    <Avatar size={160} icon={<UserOutlined />}/>
                    <span className="text-center font-bold text-base text-primary">Ketut Widiarta Yasa</span>
                    <span className="text-center font-semibold text-base text-foreground">Sales and Marketing Representative</span>
                </div>
            </div>
        </SectionLayout>
    )
}