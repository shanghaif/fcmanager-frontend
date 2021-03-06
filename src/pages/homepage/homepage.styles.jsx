import styled from 'styled-components';

import MainBannerImage from  '../../assets/main-banner-son3.jpg';
import MainBannerMobileImage from  '../../assets/main-banner-mobile.png';

export const HomePageContainer = styled.div`

`;

export const TitleContainer = styled.div`
  line-height: 1.08365;
  letter-spacing: -.003em;
  font-weight: 700;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  position: relative;
  text-align: center;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    height: 800px
  }
`;

export const Title = styled.div`
  font-size: 70px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    padding: 5px;
  }
`;

export const SubTitle = styled.div`
  font-size: 48px;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    padding: 5px;
  }
`;


export const MainBanner = styled.div`
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.3), #001131), url(${MainBannerImage});
  width: 100%;
  height: 800px;
  background-size: cover;
  position: absolute;
  @media screen and (max-width: 800px) {
    height: 800px;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.3), #001131), url(${MainBannerMobileImage});
  }
`;