import { useState } from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import SectionTitle from "../../../../components/atoms/section-title";
import { FaCheckCircle } from "react-icons/fa";
import HeroTitle from "../../../../components/atoms/hero-title";
import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";

export default function FeatureSection() {

  const [activeTab, setActiveTab] = useState(0);

  const cloudRemovalCarousel = [
    {
      element: (
        <div className="w-full">
          <img src="/post-removal.jpeg" className="w-full lg:h-[206.5px]" />
        </div>
      ),
      title: "Before"
    },
    {
      element: (
        <div className="w-full">
          <img src="https://storage.oceaneyes.co.id/oceaneyes/web/post-removal.webp" className="w-full lg:h-[206.5px]" />
        </div>
      ),
      title: "After"
    },
  ]

  const otherCarousel = [
    {
      element: (
        <div className="w-full">
          <img src="https://storage.oceaneyes.co.id/oceaneyes/web/anomali.webp" className="w-full lg:h-[206.5px]" />
        </div>
      ),
      title: "Anomali"
    },
    {
      element: (
        <div className="w-full">
          <img src="https://storage.oceaneyes.co.id/oceaneyes/web/klorofil.webp" className="w-full lg:h-[206.5px]" />
        </div>
      ),
      title: "Klorofil"
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <SectionLayout classNames={`items-center`}>
        <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-full lg:max-w-[1320px] gap-8 rounded-lg shadow-lg p-8 lg:rounded-none lg:shadow-none lg:p-0">
          <h4 className="text-[28px] text-foreground">
            We offer quality, <span className="text-textGray">with the best features and services</span>
          </h4>
          <h4 className="text-base text-textGray">
            Fnavi membantu Anda memahami kondisi laut dengan presisi, mempermudah keputusan, serta menghindari risiko keamanan dan kerugian operasional saat melaut
          </h4>
        </div>
      </SectionLayout>
      <SectionLayout classNames={`bg-sky-950 items-center !py-[60px] lg:!py-[80px] gap-y-10 lg:gap-y-[45px]`}>
        <div className="flex w-full lg:max-w-[1320px] justify-center">
          <SectionTitle
            text={`How it Works`}
            className={`!text-white drop-shadow-lg`}
          />
        </div>
        <div className="flex flex-col w-full lg:max-w-[1320px] items-center">
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between items-center">
            <div className="flex w-fit flex-col gap-y-4 lg:max-w-[400px] xl:max-w-[500px]">
              <SectionTitle
                text={`Cloud Removal`}
                className={`!text-white drop-shadow-lg lg:!text-left`}
              />
              <h6 className='font-normal text-base text-white'>Teknologi pencitraan satelit terbatas karena lebih dari 60% permukaan laut terhalang awan. Oceaneyes hadir dengan teknologi AI canggih yang merekonstruksi dan melengkapi data suhu permukaan laut di area tertutup awan, menghasilkan informasi kondisi laut yang lebih presisi dan akurat.</h6>
            </div>
            {/* <img src="/post-removal.jpeg" className="w-full lg:w-[400px] rounded-lg" /> */}
            <div className="w-full lg:w-[400px]">
              <CustomCarousel
                autoSlide={false}
                items={cloudRemovalCarousel}
                colorScheme="secondary"
              />
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout classNames={`bg-teal-50 items-center !py-[60px] lg:!py-[80px] gap-y-10 lg:gap-y-[45px]`}>
        <div className="flex flex-col w-full lg:max-w-[1320px] items-center">
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between items-center">
            <div className="flex w-fit flex-col gap-y-4 lg:max-w-[400px] xl:max-w-[500px]">
              <SectionTitle
                text={`Temperatur Dalam Jangkauan Luas`}
                className={`!text-foreground drop-shadow-lg lg:!text-left`}
              />
              <h6 className='font-normal text-base text-foreground'>Platform ini menampilkan data temperatur permukaan air laut yang mencakup hampir seluruh wilayah Asia Pasifik, termasuk perairan Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Informasi temperatur dapat disesuaikan hingga kedalaman 200 meter di bawah permukaan, membantu nelayan memetakan area potensial untuk memancing berdasarkan karakter ikan yang ditarget.</h6>
            </div>
            <img src="https://storage.oceaneyes.co.id/oceaneyes/web/post-removal.webp" className="w-full lg:w-[400px] rounded-lg" />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout classNames={`bg-orange-50 items-center !py-[60px] lg:!py-[80px] gap-y-10 lg:gap-y-[45px]`}>
        <div className="flex flex-col w-full lg:max-w-[1320px] items-center">
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between items-center">
            <div className="flex w-fit flex-col gap-y-4 lg:max-w-[400px] xl:max-w-[500px]">
              <SectionTitle
                text={`Arah dan Kecepatan Arus Laut`}
                className={`!text-foreground drop-shadow-lg lg:!text-left`}
              />
              <h6 className='font-normal text-base text-foreground'>Menyajikan data arah dan kecepatan arus laut yang mencakup seluruh Asia Pasifik, termasuk Indonesia, dengan pembaruan setiap 4 jam dan ramalan hingga 5 hari ke depan. Informasi ini membantu nelayan memetakan rute yang aman dan menghindari arus deras yang berpotensi mengganggu atau merusak proses memancing.</h6>
            </div>
            <img src="https://storage.oceaneyes.co.id/oceaneyes/web/speed.webp" className="w-full lg:w-[400px] rounded-lg" />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout classNames={`bg-cyan-950 items-center !py-[60px] lg:!py-[80px] gap-y-10 lg:gap-y-[45px]`}>
        <div className="flex flex-col w-full lg:max-w-[1320px] items-center">
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between items-center">
            <div className="flex w-fit flex-col gap-y-4 lg:max-w-[400px] xl:max-w-[500px]">
              <SectionTitle
                text={`Konfigurasi Lain Sesuai Kebutuhan`}
                className={`!text-white drop-shadow-lg lg:!text-left`}
              />
              <h6 className='text-white font-normal text-base text-foreground'>Data data lain yang anda butuhkan terkait kondisi laut akan tersedia di fnavi dan secara terus menerus akan terus ditambah menyesuaikan kebutuhan para nelayan ataupun pelaku usaha lain di sektor maritime..</h6>
            </div>
            <div className="w-full lg:w-[400px]">
              <CustomCarousel
                autoSlide={false}
                items={otherCarousel}
                colorScheme="secondary"
              />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}