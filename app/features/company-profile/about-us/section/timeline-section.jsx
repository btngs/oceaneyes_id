import React from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import Separator from "../../../../components/atoms/separator/separator";
import SectionTitle from "../../../../components/atoms/section-title";

export default function TimelineSection() {
  const events = [
    {
      year: "2019",
      image: "https://storage.oceaneyes.co.id/oceaneyes/web/2019.jpeg", // Ganti dengan URL gambar Anda
      title: "Riset Pasar",
      description: [
        "Langkah pertama kami dimulai dengan memahami lanskap bisnis dan metode mendalam terkait kebiasaan menangkap ikan serta industri perikanan di Indonesia.",
        "Kolaborasi dengan KKP (Kementerian Kelautan dan Perikanan): Memahami lanskap regulasi perikanan di Indonesia, termasuk pembagian wilayah, kuota tangkapan, dan pemantauan perikanan ilegal.",
        "Proyek Percontohan dengan Perusahaan Perikanan Tangkap (Bitung, Bali, Aceh): Mengembangkan teknologi yang sesuai dengan kebutuhan pelaku usaha."

      ],
    },
    {
      year: "2020",
      // image: "/history.png", // Ganti dengan URL gambar Anda
      title: "Tertunda Wabah COVID-19",
      description: [],
    },
    {
      year: "2024",
      image: "https://storage.oceaneyes.co.id/oceaneyes/web/2024.webp", // Ganti dengan URL gambar Anda
      title: "Percobaan Teknologi bersama Nelayan Lokal",
      description: [
        "Ocean Eyes melibatkan berbagai kelompok nelayan dalam uji coba teknologi:",
        "- ASTUIN (Asosiasi Tuna Indonesia): Memberikan wawasan penting mengenai industri perikanan tuna di Indonesia.",
        "- Kelompok Nelayan Binuanegun & Pelabuhan Ratu: Melibatkan lebih dari 30 nelayan untuk menguji Fishing Ground Map di perairan selatan Jawa.",
        "- Kelompok Nelayan Palu: Melibatkan lebih dari 20 nelayan untuk mengumpulkan data dan masukan mengenai perikanan di Indonesia timur."
      ],
    },
    {
      year: "2025",
      image: "https://storage.oceaneyes.co.id/oceaneyes/establish/establish.jpeg", // Ganti dengan URL gambar Anda
      title: "We officially establised our KP3A (Kantor Perwakilan Perdagangan Asing) in indonesia",
      description: [
        `OceanEyes mengumumkan pendirian Kantor Perwakilan Perdagangan Perusahaan Asing (KP3A) pertamanya di Indonesia, yang berlokasi di "Bella Terra Lifestyle Center Kelapa Gading lantai 2, Jl. Boulevard Raya Kelapa Gading", Jakarta Utara. Langkah ini merupakan bagian dari komitmen kami untuk semakin dekat dengan para pemangku kepentingan di sektor perikanan, khususnya para nelayan dan pelaku industri perikanan tangkap.`
      ],
    },
  ];

  return (
    <SectionLayout classNames={`items-center bg-gradient-to-b from-white from- via-primary via-`}>
      <div className="flex flex-col justify-center items-center py-4 lg:py-10 gap-y-4">
        <SectionTitle
          text={"Our Story in Indonesia"}
        />
      </div>
      <div className="flex flex-col items-center w-fit px-4 bg-white rounded-2xl drop-shadow-xl">
        <div className="flex flex-col items-center py-8 lg:max-w-[816px]">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative w-full max-w-3xl mb-12 flex items-start"
            >
              {/* Line */}
              <div className="absolute left-[94px] md:left-[120px] top-0 h-[calc(100%+48px)] w-0.5 border-r-[2px] border-textGray border-dashed"></div>
              {/* Year */}
              <div className="absolute left-[22px] md:left-[45px] transform -translate-x-1/3 md:-translate-x-2/3 text-textGray font-bold text-[25px]">
                {event.year}
              </div>
              {/* Circle */}
              <div className="absolute left-[82px] md:left-[110px] top-2 h-6 w-6 rounded-full bg-primary"></div>
              {/* Horizontal Line */}
              {
                event.image && (
                  <div className="absolute left-[94px] md:left-[120px] top-5 h-0.5 w-8 md:w-12 border-t-[2px] border-primary"></div>
                )
              }
              {/* Content */}
              <div className={`ml-10 pl-[85px] md:pl-[125px]`}>
                {
                  event.image && (
                    <img
                      src={event.image}
                      alt={`${event.year} illustration`}
                      className="mb-4 w-full rounded-lg drop-shadow-md"
                    />
                  )
                }
                <h3 className="text-lg font-extrabold lg:text-[20px] text-foreground">{event.title}</h3>
                <ul className="mt-2 space-y-2 text-lg text-textGray lg:text-[20px]">
                  {event.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
