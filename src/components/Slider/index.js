import React, { Component } from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa';
import styles from './index.module.css';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 3px solid #eceff1;
  background-color: #f44336;
  color: #eceff1;
  outline: none;
  box-shadow: 2px 0px 3px solid #23232367;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderButton = ({ children, className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

const Dots = ({ activeIndex, numberOfSlides, onClick, className }) => {
  const allDots = [];
  for (let i = 0; i < numberOfSlides; i++) {
    if (i === activeIndex) {
      allDots.push(<Dot key={i} id={i} isActive onClick={onClick} />);
    } else {
      allDots.push(<Dot key={i} id={i} isActive={false} onClick={onClick} />);
    }
  }
  return <div className={className}>{allDots}</div>;
};

const Dot = ({ isActive, onClick, id }) => {
  if (isActive) {
    return (
      <div
        id={id}
        onClick={onClick}
        className={styles.activeDot}
        role="button"
        tabIndex={0}
      />
    );
  } else {
    return (
      <div
        id={id}
        onClick={onClick}
        className={styles.inActiveDot}
        role="button"
        tabIndex={0}
      />
    );
  }
};

const Slides = ({ activeIndex, numberOfSlides, className, images }) => {
  const allSlides = [];
  for (let i = 0; i < numberOfSlides; i++) {
    if (i === activeIndex) {
      allSlides.push(
        <img
          srcSet={images.edges[i].node.sizes.srcSet}
          className={styles.activeImage}
          key={i}
          alt="slideshow"
        />
      );
    } else {
      allSlides.push(
        <img
          srcSet={images.edges[i].node.sizes.srcSet}
          className={styles.inActiveImage}
          key={i}
          alt="slideshow"
        />
      );
    }
  }
  return <div className={className}> {allSlides} </div>;
};

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      numOfSlides: this.props.images.edges.length,
      slideDuration: 6000
    };
    this.timer = 0;
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.onNextClick();
      clearTimeout(this.timer);
      this.componentDidMount();
    }, this.state.slideDuration);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onPrevClick() {
    const { index } = this.state;
    if (index === 0) {
      this.changeIndex(this.state.numOfSlides - 1);
    } else {
      this.changeIndex(this.state.index - 1);
    }
  }

  onNextClick() {
    const { index, numOfSlides } = this.state;
    if (index === numOfSlides - 1) {
      this.changeIndex(0);
    } else {
      this.changeIndex(this.state.index + 1);
    }
  }

  selectSlide(e) {
    this.changeIndex(parseInt(e.target.id, 19));
  }

  changeIndex(newIndex) {
    clearTimeout(this.timer);
    this.componentDidMount();

    this.setState({
      index: newIndex
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Slides
          activeIndex={this.state.index}
          numberOfSlides={this.state.numOfSlides}
          className={styles.slides}
          images={this.props.images}
        />

        <SliderButton
          className={styles.leftButton}
          onClick={() => this.onPrevClick()}
        >
          <FaAngleLeft />
        </SliderButton>
        <SliderButton
          className={styles.rightButton}
          onClick={() => this.onNextClick()}
        >
          <FaAngleRight />
        </SliderButton>
        <Dots
          activeIndex={this.state.index}
          numberOfSlides={this.state.numOfSlides}
          onClick={e => this.selectSlide(e)}
          className={styles.dotWrapperStyle}
        />
        {this.props.children}
      </div>
    );
  }
}
