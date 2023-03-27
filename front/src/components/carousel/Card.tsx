import Slider from "react-slick";
import styled from "styled-components";

const Card = styled(Slider)`
  width: 100%;
  height: 95%;

  .slick-list {
    width: 400px;
    height: 100%;
    margin: 0 auto;
    background-color: #f0f9ff;

    border-radius: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;
    opacity: 0.5;
    color: var(--white300-color);
    -webkit-font-smoothing: antialiased;
  }

  .slick-slide div {
    cursor: pointer;
    /* background: black; */
  }
`;
export default Card;
