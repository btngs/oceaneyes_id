import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";
import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";
import { useRouter } from 'next/navigation';

export default function CTASection() {

    const router = useRouter()

    const routeToContactUs = () => {
        router.push('/contact-us')
    }

    const carouselItems = [
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px] lg:w-[350px]" src="https://storage.oceaneyes.co.id/oceaneyes/web/optimalisasi.webp"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
                        <h5 className="font-extrabold font-foreground text-base xl:text-[18px]">Perusahaan Ikan Tangkap</h5>
                        <h5 className="text-textGray text-base xl:text-[18px]">Oceaneyes adalah teknologi yang ideal untuk perusahaan tangkap, meningkatkan efisiensi operasional dan mengurangi risiko secara signifikan. Kami dapat menyesuaikan teknologi ini sesuai karakter dan model bisnis Anda. Hubungi tim kami untuk penawaran lebih lanjut</h5>
                        <div onClick={() => routeToContactUs()} className="font-extrabold font-foreground text-base xl:text-[18px] text-secondary underline lg:no-underline lg:hover:text-primary lg:cursor-pointer w-fit">Hubungi Kami</div>
                    </div>
                </div>
            ),
            title: "Fishing Company",
        },
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px] lg:w-[350px]" src="https://storage.oceaneyes.co.id/oceaneyes/web/kolaborasi.webp"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
                        <h5 className="font-extrabold font-foreground text-base xl:text-[18px]">Kelompok Nelayan</h5>
                        <h5 className="text-textGray text-base xl:text-[18px]">Memahami bisnis ikan tangkap sebagai sumber utama penghidupan nelayan adalah langkah tepat untuk meningkatkan ekonomi mereka. Dengan teknologi ini, kami menjamin peningkatan keuntungan dan keamanan melaut. Hubungi tim kami untuk penawaran lebih lanjut</h5>
                        <div onClick={() => routeToContactUs()} className="font-extrabold font-foreground text-base xl:text-[18px] text-secondary underline lg:no-underline lg:hover:text-primary lg:cursor-pointer w-fit">Hubungi Kami</div>
                    </div>
                </div>
            ),
            title: "Fisher Association",
        }
    ]

    return (
        <SectionLayout classNames={`bg-gradient-to-b from-primaryL to-primary`}>
            <SectionTitle 
                text={"Collaborate With Us"}
                className={`text-white`}
            />
            <div className="flex justify-center items-center pt-8 lg:pt-10">
                <CustomCarousel 
                    items={carouselItems}
                    autoSlide={true}
                    autoSlideInterval={8000}
                    colorScheme="secondary"
                />
            </div>
        </SectionLayout>
    )
}