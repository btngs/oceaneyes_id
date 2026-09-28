import SectionLayout from "../../../../components/layout/section-layout";

export default function VisionSection() {
    return (
        <SectionLayout classNames={`bg-primary mt-[60px] md:mt-[98px] lg:!my-[60px] !py-8 lg:!py-[60px] lg:shadow-md`}>
            <div className="flex flex-col gap-y-5">
                <h2 className={`font-bold text-white text-[25px]`}>Vision</h2>
                <h3 className={`font-semibold text-white text-base lg:text-[20px]`}>{`Mewujudkan penangkapan ikan berkelanjutan yang mendukung stabilitas ekonomi dan lingkungan, sejalan dengan Tujuan Pembangunan Berkelanjutan (SDGs) PBB.`}</h3>
            </div>
        </SectionLayout>
    )
}