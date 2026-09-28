import React, { useRef } from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import Separator from '../../../../components/atoms/separator/separator'
import SectionTitle from '../../../../components/atoms/section-title'

function CompanySection() {
    return (
        <SectionLayout>
            <div className="flex flex-col items-center lg:items-start gap-y-4">
                <SectionTitle 
                    text={"Who is Oceaneyes"}
                />
                <div className='w-full justify-center flex lg:justify-start '>               
                    <h3 className="w-full lg:w-1/2 font-semibold text-textGray text-base lg:text-lg lg:text-left text-center">OceanEyes Co., Ltd. adalah perusahaan teknologi kelautan asal Jepang yang didirikan pada 2019 melalui kolaborasi antara Kyoto University dan JAMSTEC. Mengusung misi menjembatani sains dan praktik, OceanEyes menghadirkan inovasi berbasis AI dan oseanografi canggih untuk merevolusi industri perikanan, dengan fokus pada keberlanjutan dan ketangguhan terhadap perubahan iklim.</h3>
                </div>

                <div className='w-full lg:justify-end flex justify-center'> 
                    <h3 className="w-full lg:w-1/2 font-semibold text-textGray text-base lg:text-lg lg:text-left text-center">Sebagai pionir FishTech, OceanEyes menawarkan dua solusi utama: SEAoME, sistem prediksi laut resolusi tinggi hingga 14 hari ke depan; dan Fishers Navi, platform navigasi AI untuk membantu nelayan menemukan lokasi penangkapan secara efisien. Teknologi ini mendukung peningkatan produktivitas sekaligus memperkuat ketahanan sosial-ekonomi komunitas pesisir.</h3>
                </div>

                <div className='w-full justify-center flex lg:justify-start '>               
                    <h3 className="lg:w-1/2 w-full font-semibold text-textGray text-base lg:text-lg lg:text-left text-center">OceanEyes telah meraih berbagai penghargaan internasional seperti EY Entrepreneur of the Year Japan dan GRIC Award, serta mewakili Jepang di VivaTech Eropa 2025. Dengan ekspansi ke Asia Tenggara termasuk pembukaan cabang di Indonesia, OceanEyes berkomitmen menjadi mitra strategis dalam transisi menuju ekologi dan ekonomi biru yang adil dan berkelanjutan.</h3>
                </div>
            </div>
        </SectionLayout>
    )
}

export default CompanySection