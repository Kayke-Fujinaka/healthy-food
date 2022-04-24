import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const HeaderSections = styled.div`
  text-align: center;
`;

export const TitleSections = styled.h3`
  margin: 10px 0;
  font-size: 2em;
  color: #1d164d;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
  @media (max-width: 600px) {
    font-size: 1.4em;
  }
  @media (max-width: 500px) {
    font-size: 1.3em;
  }
  @media (max-width: 400px) {
    font-size: 1.2em;
  }
  @media (max-width: 350px) {
    font-size: 1.1em;
  }
`;

export const ParagrafoSections = styled.p`
  line-height: 25px;
  font-size: 1.1em;
  font-weight: 500;
  color: #b5afba;
  @media (max-width: 800px) {
    font-size: 1em;
  }
  @media (max-width: 700px) {
    font-size: 0.95em;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 0.9em;
    line-height: 15px;
  }
  @media (max-width: 500px) {
    font-size: 0.95em; 
  }
  @media (max-width: 450px) {
    font-size: 0.9em;
  }
  @media (max-width: 430px) {
    font-size: 0.85em;  }
`;

export const LeftHomeInfo = styled.div`
  margin: 15% 0 15% 6%;
  @media (max-width: 1000px) {
    margin-bottom: 15%;
  }
  @media (max-width: 650px) {
    margin-bottom: 10%;
  }
`;

export const LeftHomeParagraph = styled.p`
  margin-bottom: 30px;
  font-size: 2.6em;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #1d164d;
  @media (max-width: 1000px) {
    font-size: 41px;
  }
  @media (max-width: 900px) {
    font-size: 38px;
  }
  @media (max-width: 800px) {
    font-size: 35px;
    margin-top: 60px;
  }
  @media (max-width: 700px) {
    font-size: 27px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 21px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const LeftDivInputHome = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 0 10px 7px;
  margin-right: 8px;
  border: 2px solid #999db2;
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: #ccd0d6;
  }
  @media (max-width: 550px) {
    width: 250px;
    padding: 5px 0 5px 7px;
    font-size: 10px;
  }
`;

export const ButtonSearchHome = styled.button`
  width: 40px;
  border: none;
  background-color: #badc58;
  border-radius: 0.2rem;
  cursor: pointer;
  i {
    font-size: 15px;
    color: #fff;
      @media (max-width: 550px) {
        font-size: 10px;
    }
  }
  &:hover {
    background-color: #badc3c;
  }
  &:active {
    opacity: 0.8;
  }
  @media (max-width: 550px) {
    width: 30px;
  }
`;

export const ImageHome = styled.img`
  width: 50%;
  position: absolute;
  top: 0;
  right: 0; 
  @media (max-width: 450px) {
    width: 60%;
  }
`;

export const SectionRecipes = styled.section`
  padding: 70px 0 70px;
  background-color: #FAFAFA;
  @media (max-width: 550px) {
    padding: 40px 0 40px;
  }
`;

export const DivCardRecipes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 60px;
  @media (max-width: 455px) {
    margin-top: 20px;
    gap: 20px;
  }
`;

export const CardsRecipes = styled.div`
  display: flex;
  min-width: 600px;
  min-height: 190px;
  background: #fff;
  border-radius: 5px;
  box-shadow: -1px 7px 18px 2px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-2px);
  }
  img {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    text-align: center;
    min-width: 0;
    width: 60%;
    flex-direction: column;
  }
`;

export const CardsInfoRecipes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  width: 100%;
  @media (max-width: 850px) {
    padding: 10% 0 15% 0;
    align-items: center;
  }
  @media (max-width: 400px) {
    padding: 5% 0 10% 0;
    align-items: center;
  }
`;

export const ParagraphCardRecipes = styled.p`
  text-align: left;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #1d164d;
  @media (max-width: 850px) {
    font-size: 1.1rem;
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 1em;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  @media (max-width: 400px) {
    font-size: 1em;
  }
`;

export const LinkCardRecipes = styled.a`
  background: #badc58;
  text-decoration: none;
  color: #fff;
  padding: 10px 0;
  width: 50%;
  border-radius: 3px;
  text-align: center;
  font-weight: 500;
  &:hover {
    background-color: #badc3c;
  }
  @media (max-width: 850px) {
    padding: 6px 0;
  }
  @media (max-width: 700px) {
    padding: 4px 0;
    font-size: 12px;
  }
  @media (max-width: 550px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const SectionServices = styled.section`
  display: flex;
  align-items: center;
  @media (max-width: 455px) {
    display: block;
    text-align: center;
    padding: 40px 0;
  }
`;

export const ImageServices = styled.img`
  width: 50%;
  @media (max-width: 455px) {
    display: none;
  }
`;

export const ArticleServices = styled.div`
  width: 80%;
  @media (max-width: 455px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const ParagraphServices = styled.p`
  margin: 4% 0;
  color: #B5AFBA;
  @media (max-width: 1354px) {
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
    margin: 2.5% 0;
  }
  @media (max-width: 600px) {
    font-size: 8px;
    margin: 2% 0;
  }
  @media (max-width: 455px) {
    font-size: 12px;
    margin: 2% 0;
    text-align: center;
  }
`;

export const KnowMoreServices = styled.a`
  display: block;
  text-align: center;
  width: 40%;
  margin-top: 50px;
  padding: 15px 0;
  font-size: 1em;
  color: #fff;
  font-weight: 500;
  background: #badc58;
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    background-color: #badc3c;
  }
  @media (max-width: 1354px) {
    margin-top: 20px;
    padding: 10px 0;
    font-size: 0.9em;
  }
  @media (max-width: 1000px) {
    margin-top: 10px;
    padding: 4px 0;
    font-size: 0.9em;
  }
  @media (max-width: 455px) {
    margin: 15px 30%;
    align-items: center;
  }
`;

export const SectionBlog = styled.section`
  padding: 70px 0 70px;
  margin: 0 20px;
  background: #FAFAFA;
  .containerCarousel {
    z-index: 1;
  }
  @media (max-width: 455px) {
    padding: 40px 0 40px;
  }
`;


export const CardsBlog = styled.div`
  padding-bottom: 30px;
  background: #fff;
  border-radius: 0.5rem;
  margin: 30px ;
  cursor: pointer;

`;

export const CardsImgBlog = styled.img`
  width: 100%;
`;

export const CardInfoBlog = styled.p`
  padding: 8% 2% 6% 7%;
  font-size: 1.2em;
  color: #1d1640;
  font-weight: 700;
  @media (max-width: 450px) {
    font-size: 1em;
  }
  @media (max-width: 650px) {
    font-size: 1em;
  }
`;

export const CardProfileBlog = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 5px 0 18px;
`;

export const CardProfileImagemBlog = styled.img`
  width: 15%;
  height: 100%;
  margin-right: 5%;
  border-radius: 50%;
`;

export const CardProfileParagraphBlog = styled.p`
  font-size: 0.76em;
  color: #a9b0c8;
`;

export const SectionMembership = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding-bottom: 100px;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
`;

export const ArticleMembership = styled.article`
  margin: 17% 0 0 7%;
  @media (max-width: 1000px) {
    margin: 5% 4% 0 4%;
  }
`;

export const InputAndButtonContainerMembership = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const InputMembership = styled.input`
  width: 100%;
  padding: 15px 15px 15px;
  margin-right: 10px;
  font-size: 12px;
  border: 1px solid #999db2;
  outline: none;
  @media (max-width: 500px) {
    padding: 10px 5px 10px;
    font-size: 10px;
  }
`;

export const ButtonMembership = styled.button`
  display: block;
  padding: 0 12px;
  background-color: #badc58;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #badc3c;
  }
  &:active {
    opacity: 0.5;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const IllustrationMembership = styled.img`
  width: 100%;
  @media (max-width: 1000px) {
    width: 70%;
    float: right;
  }
  @media (max-width: 460px) {
    width: 70%;
    float: right;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 80px;
  @media (max-width: 780px) {
    padding: 25px 50px;
  }
  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const FooterCopyright = styled.p`
  font-weight: 500;
  font-size: 0.8em;
  color: #1d164d;
  @media (max-width: 780px) {
    font-size: 0.6em;
    margin-left: 10px;
  }
  @media (max-width: 450px) {
    font-size: 0.5em;
  }
`;

export const FooterLegalDocument = styled.a`
  margin-right: 20px;
  font-size: 0.8em;
  font-weight: 500;
  color: #B5AFBA;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 780px) {
    font-size: 0.6em;
    margin-right: 10px;
  }
  @media (max-width: 450px) {
    font-size: 0.5em;
  }
`;
