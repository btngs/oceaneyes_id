import SectionLayout from "../../../../components/layout/section-layout";

export default function MisionSection() {
    return (
        <SectionLayout classNames={`mb-[60px] md:mb-[98px] lg:!my-[60px] !py-8 lg:!py-[60px] lg:shadow-md`}>
            <div className="flex flex-col gap-y-5">
                <h2 className={`font-bold text-foreground text-[25px]`}>Mission</h2>
                <h3 className={`font-semibold text-textGray text-base lg:text-[20px]`}>{`Memberdayakan nelayan melalui teknologi FishTech dan solusi berbasis data untuk meningkatkan efisiensi, profitabilitas, serta mendukung industri perikanan yang tangguh dan berkelanjutan, meskipun menghadapi perubahan regulasi.`}</h3>
            </div>
        </SectionLayout>
    )
}