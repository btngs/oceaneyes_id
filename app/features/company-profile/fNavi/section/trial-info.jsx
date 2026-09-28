import { useRouter } from "next/navigation";
import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";

export default function TrialInfoSection() {

  const router = useRouter()
  return (
    <SectionLayout classNames={`lg:items-center`}>
      <div className="flex flex-col w-full lg:max-w-[1000px] bg-primaryLGray p-10 rounded-2xl">
        <div className="flex w-full">
          <SectionTitle
            className={`!text-foreground !text-center lg:!text-left`}
            text={`Ask for a Free Trial`}
          />
        </div>
        <h5>Dapatkan satu bulan gratis akses penuh Fnavi untuk semua area laut di Indonesia</h5>
        <div className="w-full grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-4 xl:max-w-[1000px] pt-10">
          <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md lg:rounded-l-md">
            <img src="/fill_form.svg" className="w-[28px]" />
            <h6 className="text-textGray text-base text-left">Isi link berikut ini</h6>
            <button
              onClick={() => router.push('/contact-us')}
              className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
            >
              Klik Disini
            </button>
          </div>
          <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md">
            <img src="/phonecall.svg" className="w-[28px]" />
            <h6 className="text-textGray text-base text-left">Team Oceaneyes akan menghubungi anda</h6>
          </div>
          <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md">
            <img src="/info.svg" className="w-[28px]" />
            <h6 className="text-textGray text-base text-left">Akan ada guideline yang diberikan </h6>
          </div>
          <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md lg:rounded-r-md">
            <img src="/mobile.svg" className="w-[28px]" />
            <h6 className="text-textGray text-base text-left">Gunakan Fnavi di device anda sendiri </h6>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}