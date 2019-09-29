import * as React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://s3.amazonaws.com/cccg-media/site-images/carousel/slide-1.jpg',
    altText: '敬请关注',
    caption: '2019 宣道年会'
  },
  {
    src: 'https://s3.amazonaws.com/cccg-media/site-images/carousel/slide-2.jpg',
    altText: '欢迎报名',
    caption: '2019 夏令会 JMU'
  },
  {
    src: 'https://s3.amazonaws.com/cccg-media/site-images/carousel/slide-3.jpg',
    altText: '2019 教会同乐日(烧烤)',
    caption: '2019 教会同乐日(烧烤) 黑山公园'
  }
];

//class IndexCarousel extends React.Component<any, { activeIndex: number; }> {
const IndexCarousel: React.FC = ({ children }) => {

  const [animating, setAnimating] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const onExiting = () => setAnimating(true);

  const onExited = () => setAnimating(false);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
        <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  //constructor(props: any) {
  //super(props);
  //this.state = { activeIndex: 0 };
  //this.next = this.next.bind(this);
  //this.previous = this.previous.bind(this);
  //this.goToIndex = this.goToIndex.bind(this);
  //this.onExiting = this.onExiting.bind(this);
  //this.onExited = this.onExited.bind(this);
  //}


  const next = () => {
    if (animating) return;
    const nextIndex: number = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }




  return (
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
  );

}


export default IndexCarousel;
