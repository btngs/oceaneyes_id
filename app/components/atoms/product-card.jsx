import { Carousel, Image, Typography } from 'antd'
import React from 'react'
import PrimaryText from './primary-text';
import ActionButton from './buttons/action-button';
import { BsArrowLeft, BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function ProductCard({
    title,
    image,
    description,
    imageCollection,
}) {

    const { Text } = Typography;

    const actionButtonClick = () => {
        window.open('https://linktr.ee/oceaneyes', '_blank');
    }

    return (
        <div className={`flex flex-col lg:flex-row lg:gap-x-8 justify-center items-center gap-y-6 w-full bg-purpleMuted py-[24px] px-4 lg:py-0 lg:px-[50px] rounded-[24px] lg:rounded-[32px] elevation`}>
            <Carousel 
                rootClassName='w-[227.48px] h-[232.69px] md:min-w-[457px] md:h-[439.99px]'
                swipeToSlide 
                draggable
                arrows
                nextArrow={<BsChevronRight />}
                prevArrow={<BsChevronLeft />}
            >
                {
                    imageCollection.map((record, idx) => (
                        <Image key={record.image} 
                            preview={false}
                            className={`w-[227.48px] h-[232.69px] md:min-w-[457px] md:h-[439.99px] carouselImage`}
                            src={record.image}
                        />
                    ))
                }
            </Carousel>
            {/* <Image key={record.image} 
                preview={false}
                className={`w-[227.48px] h-[232.69px] lg:min-w-[448px] lg:min-h-[375.69px]`}
                src={image}
            /> */}
            <div className='flex flex-col gap-y-4 items-center justify-center'>
                    <h3
                        className='font-semibold font-primary text-[18px] lg:text-[30px] text-center text-neutral'
                    >
                        {title}
                    </h3>
                    <PrimaryText centered>
                        {description}
                    </PrimaryText>
                    <ActionButton 
                        action={() => actionButtonClick()}
                        text={'Learn More'}
                    />
            </div>
        </div>
    )
}

export default ProductCard