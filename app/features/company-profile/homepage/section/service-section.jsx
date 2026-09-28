import PrimaryButton from "../../../../components/atoms/buttons/primary-button";
import SectionTitle from "../../../../components/atoms/section-title";

export default function ServiceSection() {

    const carouselItems = [
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">FNavi</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan. tampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing</h5>
                    </div>
                </div>
            ),
            title: "FNavi",
        },
        {
            element: (
                <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
                    <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
                    <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center">
                        <h5 className="font-extrabold font-foreground text-base lg:text-[18px]">Fishing Ground Map</h5>
                        <h5 className="font-semibold text-textGray text-base lg:text-[18px]">Fishing Ground Map adalah peta berbasis teknologi yang menyediakan informasi akurat tentang lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dihasilkan melalui kombinasi dan analisis data kondisi laut, perilaku alami ikan, serta data historis penangkapan, yang diproses menggunakan teknologi AI dari OceanEyes.</h5>
                    </div>
                </div>
            ),
            title: "Fishing Ground Map",
        }
    ]

    return (
        <div className="flex w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-10">
            <div className="flex flex-col justify-center items-center">
                <SectionTitle 
                    text={"Our Best Products"}
                />
            </div>
            {/* Showcase Opt */}
            <div className="flex flex-col w-full justify-center items-center gap-y-20 lg:gap-y-[80px] pt-10">
                <div className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-[100px] items-start w-full gap-y-6">
                    <img src="/product-placeholder.png" className="w-full rounded-xl md:w-[300px] xl:w-[440px]"/>
                    <div className="flex flex-col gap-y-4">
                        <h5 className="font-semibold text-foreground text-[24px] xl:text-[32px]">FNavi</h5>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan  </p>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">tampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing   </p>
                        <PrimaryButton 
                            text={"Learn More"}
                            className={`!mt-4 lg:!mt-10`}
                            onClick={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row lg:gap-x-10 xl:gap-x-[100px] items-start w-full gap-y-6">
                    <div className="flex flex-col gap-y-4">
                        <h5 className="font-semibold text-foreground text-[24px] xl:text-[32px]">Fishing Ground Map</h5>
                        <p className="font-regular text-textGray text-base xl:text-[20px]">Fishing Ground Map adalah peta berbasis teknologi yang menyediakan informasi akurat tentang lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dihasilkan melalui kombinasi dan analisis data kondisi laut, perilaku alami ikan, serta data historis penangkapan, yang diproses menggunakan teknologi AI dari OceanEyes.</p>
                        <PrimaryButton 
                            text="Learn More"
                            className={`!mt-4 lg:!mt-10`}
                            onClick={() => {}}
                        />
                    </div>
                    <img src="/product-placeholder.png" className="w-full rounded-xl md:w-[300px] xl:w-[440px]"/>
                </div>
            </div>
            {/* Carousel Opt */}
            {/* <div className="flex justify-center items-center pt-8 lg:pt-10">
                <CustomCarousel 
                    items={carouselItems}
                    autoSlide={true}
                    autoSlideInterval={5000}
                />
            </div> */}
        </div>
    )
}