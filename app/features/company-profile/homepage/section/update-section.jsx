import { useRouter } from "next/navigation";
import PrimaryButton from "../../../../components/atoms/buttons/primary-button";
import SectionTitle from "../../../../components/atoms/section-title";
import Separator from "../../../../components/atoms/separator/separator";

export default function UpdateSection() {

    const router = useRouter();

    return (
        <div className="flex bg-primaryLGray w-full flex-col px-[22px] md:px-[45px] xl:px-[67px] py-10">
            <div className="flex flex-col justify-center items-center">
                <SectionTitle 
                    text={"Our Update"}
                    className={`!text-foreground`}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center pt-4 lg:pt-10 gap-y-4 md:gap-x-4 xl:gap-x-8">
                <img src="https://storage.oceaneyes.co.id/oceaneyes/web/update1.webp" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px] h-[327px] md:h-[200px] xl:h-[327px]"/>
                <img src="https://storage.oceaneyes.co.id/oceaneyes/web/update2-cmp.webp" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px] h-[327px] md:h-[200px] xl:h-[327px]"/>
                <img src="https://storage.oceaneyes.co.id/oceaneyes/web/update3-cmp.webp" className="rounded-xl shadow-lg w-[327px] md:w-[200px] xl:w-[327px] h-[327px] md:h-[200px] xl:h-[327px]"/>
            </div>
            <div className="flex flex-col gap-y-6 w-full justify-center items-center pt-6 lg:pt-10">
                <h5 className="font-bold text-foreground text-base lg:text-lg text-center">Jangan lewatkan setiap kegiatan dan inovasi terbaru kami</h5>
                <PrimaryButton 
                    text={`See More`}
                    className={`!text-base !px-8`}
                    onClick={() => router.push('/news')}
                />
            </div>
        </div>
    )
}