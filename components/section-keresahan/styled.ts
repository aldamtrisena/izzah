import styled from "styled-components";

export const Container = styled.section`
  background-color: #f2f2f2;
  padding: 80px 110px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const Title = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 58px;
  /* or 138% */

  text-align: center;

  color: #000000;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    position: relative;
    z-index: 2;
  }
`;

export const ContainerImageUp = styled.img`
  position: absolute;
  top: -221px;
  right: -5%;
`;

export const GridContain = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const ContainContainer = styled.div`
  flex: 1;
`;

export const ImageTokoh = styled.img`
  width: 100%;
  position: absolute;
  bottom: -54px;
  right: -5px;
  cursor: pointer;
`;

export const ContainerVideo = styled.div`
  width: 100%;
`;

export const VideoYoutube = styled.iframe`
  width: 90%;
  height: 312px;
  position: absolute;
  bottom: -43px;
  right: 11px;
  border-radius: 10px;
  border: none;

  @media (max-width: 768px) {
    height: 100%;
    bottom: -33px;
    right: 4px;
  }
`;

export const Paragraf = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  margin-top: 32px;
  /* or 117% */

  margin-top: 32px;
  color: #0d0c1f;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    margin-top: 16px;
  }
`;

export const BingkaiHijau = styled.div`
  border: 3px solid #24ce7b;
  box-sizing: border-box;
  border-radius: 18px;
  height: 309px;
  width: 90%;

  @media (max-width: 768px) {
    height: 181px;
  }
`;

export const ContainerPicture = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`;

export const ScaleUpButton = styled.div`
  background: #24ce7b;
  border-radius: 32px;
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  width: 478px;
  height: 143px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 46px;
    text-align: center;
    width: 220px;
    height: 111px;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 60px 0;
  z-index: 2;
  position: relative;
`;

export const ContainerImageDown = styled.img`
  position: absolute;
  bottom: -6%;
  left: -1%;
  z-index: 1;
`;
