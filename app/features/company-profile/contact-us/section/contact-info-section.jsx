import SectionLayout from "../../../../components/layout/section-layout";

export default function ContactInfoSection() {
    return (
        <SectionLayout>
            <div className="flex flex-col w-full gap-y-8">
                <div className="flex flex-col w-full gap-y-4">
                    <h3 className="font-semibold text-foreground text-[20px]">Office</h3>
                    <ul className="space-y-4">
                        <li className="font-semibold text-textGray text-base">Kyoto Office : Kyoto City, Nakagyo Ward, Uraideyama-cho 308 Yamachu Building 26</li>
                        <li className="font-semibold text-textGray text-base">Tokyo Office : 402 Taiyo Building, 3-27-1 Kanda Sakumacho, Chiyoda-ku, Tokyo 101-0025</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full gap-y-4">
                    <h3 className="font-semibold text-foreground text-[20px]">Contact Person</h3>
                    <h4 className="font-semibold text-textGray text-base">Oceaneyes Representative for Indonesia</h4>
                    <h4 className="font-semibold text-textGray text-base">Ketut Widiarta Yasa +62 812 1183 4752</h4>
                </div>
            </div>
        </SectionLayout>
    )
}