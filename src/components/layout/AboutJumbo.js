import React, { useState } from 'react';
import image1 from '../../images/carouselimages/private_equity_image_1.jpeg';
import image2 from '../../images/carouselimages/private_equity_image_2.jpeg';
import image3 from '../../images/carouselimages/private_equity_image_3.jpeg';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Col, Row, Jumbotron } from 'reactstrap';

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
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="AboutImages"/>
                <CarouselCaption captionText={item.caption} />
            </CarouselItem>
        );
    });


    return (
        <Jumbotron className="Jumbotron">

            <Row>
                <Col xs="6">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
                <Col xs="6" id="about">
                    <h2>What We Do</h2>
                    <p>We are a private equity firm focused on growing branded consumer products and services companies. We partner with founder-owners
                    and executive teams to help them achieve the next phase in company growth, from extending distribution channels, adding new product
                    lines, implementing creative marketing and brand strategies, building operational infrastructure, accessing capital, and more.
                    </p>
                        </Col>
            </Row>
        </Jumbotron>
    )
}
export default AboutJumbo;