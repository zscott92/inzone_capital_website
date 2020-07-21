import React, { useState, Fragment } from 'react';
import image1 from '../../images/carouselimages/money.jpg';
import image2 from '../../images/carouselimages/moneytree.jpg';
import image3 from '../../images/carouselimages/private_equity_image_3.jpeg';
import image4 from '../../images/carouselimages/financialdocuments.jpg';
import image5 from '../../images/carouselimages/grid.jpg';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Jumbotron } from 'reactstrap';

function AboutJumbo() {
    const items = [
        {
            src: image1,
            altText: 'Slide 1',
            caption: 'Building Strong Consumer Brands and Businesses',
            header: 'Slide 1 Header',
            key: '1'
        },
        {
            src: image2,
            altText: 'Slide 2',
            caption: 'Providing Strategic Guidance and Consumer-Focused Expertise',
            header: 'Slide 2 Header',
            key: '2'
        },
        {
            src: image3,
            altText: 'Slide 3',
            caption: 'Managing for Long-term Success and Continued Growth',
            header: 'Slide 3 Header',
            key: '3'
        },
        {
            src: image4,
            altText: 'Slide 4',
            caption: 'Managing for Long-term Success and Continued Growth',
            header: 'Slide 4 Header',
            key: '4'
        },
        {
            src: image5,
            altText: 'Slide 5',
            caption: 'Managing for Long-term Success and Continued Growth',
            header: 'Slide 5 Header',
            key: '5'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(false)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="AboutImages" />
                <CarouselCaption captionText={item.header} />
            </CarouselItem>
        );
    });

    return (
        <Fragment>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="aboutCarousel"
                        fluid={true}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                    <Jumbotron fluid>
            <h2>What We Do</h2>
            <p>We are a private equity firm focused on growing branded consumer products and services companies. We partner with founder-owners
            and executive teams to help them achieve the next phase in company growth, from extending distribution channels, adding new product
            lines, implementing creative marketing and brand strategies, building operational infrastructure, accessing capital, and more.
        </p>
        </Jumbotron>
        </Fragment>
    )
}
export default AboutJumbo;