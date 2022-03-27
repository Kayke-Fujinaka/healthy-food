import React, { useState } from "react";
import * as S from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../../components/Header";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Home = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>

      <Header  />

      <S.Main>
        <S.LeftHomeInfo>
          <S.LeftHomeParagraph>
            Ready for
            <br />
            Trying a new
            <br />
            recipe?
          </S.LeftHomeParagraph>
          <S.LeftDivInputHome>
            <S.Input placeholder="Search healthy recipes" />
            <S.ButtonSearchHome>
              <i className="bx bx-search" />
            </S.ButtonSearchHome>
          </S.LeftDivInputHome>
        </S.LeftHomeInfo>
        <S.ImageHome
            src="./assets/img/Illustration.svg"
            alt="The image has two people holding a strawberry, one person with a magnifying glass sitting on the end of a giant banana lying behind. She has giant fruits and a scale that represents the nutritional values ​​of a giant apple."
          />

      </S.Main>

      <S.SectionRecipes id="recipes">
        <S.HeaderSections>
          <S.TitleSections>Our Best Recipes</S.TitleSections>
          <S.ParagrafoSections>
            Far far away, behind the word mountains, far from the countries
          </S.ParagrafoSections>
          <S.ParagrafoSections>
            Vokalia and Consonantia, there live the blind texts.
          </S.ParagrafoSections>
          <S.DivCardRecipes>
            <S.CardsRecipes>
              <img
                src="./assets/img/comida_1.svg"
                alt="Image of a plate with Broccoli Salad with Bacon"
              />
              <S.CardsInfoRecipes>
                <S.ParagraphCardRecipes>
                  Broccoli Salad with Bacon
                </S.ParagraphCardRecipes>
                <S.LinkCardRecipes href="#">See Recipe</S.LinkCardRecipes>
              </S.CardsInfoRecipes>
            </S.CardsRecipes>
            <S.CardsRecipes>
              <img
                src="./assets/img/comida_2.svg"
                alt="Images of Classic Beef Burgers"
              />
              <S.CardsInfoRecipes>
                <S.ParagraphCardRecipes>
                  Classic Beef Burgers
                </S.ParagraphCardRecipes>
                <S.LinkCardRecipes href="#">See Recipe</S.LinkCardRecipes>
              </S.CardsInfoRecipes>
            </S.CardsRecipes>
            <S.CardsRecipes>
              <img
                src="./assets/img/comida_3.svg"
                alt="Image of Classic Potato Salad"
              />
              <S.CardsInfoRecipes>
                <S.ParagraphCardRecipes>
                  Classic Potato Salad
                </S.ParagraphCardRecipes>
                <S.LinkCardRecipes href="#">See Recipe</S.LinkCardRecipes>
              </S.CardsInfoRecipes>
            </S.CardsRecipes>
            <S.CardsRecipes>
              <img
                src="./assets/img/comida_4.svg"
                alt="Image of Cherry Cobbler on the Grill"
              />
              <S.CardsInfoRecipes>
                <S.ParagraphCardRecipes>
                  Cherry Cobbler on the Grill
                </S.ParagraphCardRecipes>
                <S.LinkCardRecipes href="#">See Recipe</S.LinkCardRecipes>
              </S.CardsInfoRecipes>
            </S.CardsRecipes>
          </S.DivCardRecipes>
        </S.HeaderSections>
      </S.SectionRecipes>

      <S.SectionServices>
        <S.ImageServices
          src="./assets/img/bloco_services.svg"
          alt="The image of a woman frying an egg, but next to it there's a blender and a toaster."
        />
        <div>
          <S.ArticleServices>
            <S.TitleSections>
              The best services ready To serve you
            </S.TitleSections>
            <S.ParagraphServices>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </S.ParagraphServices>
            <S.ParagraphServices>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </S.ParagraphServices>
            <S.ParagraphServices>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </S.ParagraphServices>
            <S.KnowMoreServices href="#">Know More</S.KnowMoreServices>
          </S.ArticleServices>
        </div>
      </S.SectionServices>

      <S.SectionBlog id="blog">
        <S.HeaderSections>
          <S.TitleSections>Read Our Blog</S.TitleSections>
          <S.ParagrafoSections>
            Far far away, behind the word mountains, far from the countries
          </S.ParagrafoSections>
          <S.ParagrafoSections>
            Vokalia and Consonantia, there live the blind texts.
          </S.ParagrafoSections>
        </S.HeaderSections>
        <Carousel
          responsive={responsive}
          partialVisible={true}
          customLeftArrow={null}
          className="containerCarousel"
        >
          <S.CardsBlog>
            <div>
              <S.CardsImgBlog
                src="./assets/img/blog_image_1.svg"
                alt="The image of a person holding giant green seeds"
              />
            </div>
            <div>
              <S.CardInfoBlog>
                Quick-start guide to nuts and seeds
              </S.CardInfoBlog>
              <S.CardProfileBlog>
                <S.CardProfileImagemBlog
                  width="50px"
                  src="./assets/img/man.jpg"
                />
                <S.CardProfileParagraphBlog>
                  Kevin Ibrahim
                </S.CardProfileParagraphBlog>
              </S.CardProfileBlog>
            </div>
          </S.CardsBlog>
          <S.CardsBlog>
            <div>
              <S.CardsImgBlog
                src="./assets/img/bloco_image_2.svg"
                alt="The image of a bottle of water, a pot with coal powder, a kiwi, a potato, a lettuce leaf, an apple and a banana"
              />
            </div>
            <div>
              <S.CardInfoBlog>
                Nutrition: Tips for Improving Your Health
              </S.CardInfoBlog>
              <S.CardProfileBlog>
                <S.CardProfileImagemBlog
                  width="50px"
                  src="./assets/img/man.jpg"
                />
                <S.CardProfileParagraphBlog>
                  Kevin Ibrahim
                </S.CardProfileParagraphBlog>
              </S.CardProfileBlog>
            </div>
          </S.CardsBlog>
          <S.CardsBlog>
            <div>
              <S.CardsImgBlog
                src="./assets/img/bloco_image_3.svg"
                alt="The image of a heart-shaped pot that contains strawberry, blackberry and black currant"
              />
            </div>
            <div>
              <S.CardInfoBlog>
                The top 10 benefits of eating healthy
              </S.CardInfoBlog>
              <S.CardProfileBlog>
                <S.CardProfileImagemBlog
                  width="50px"
                  src="./assets/img/man.jpg"
                />
                <S.CardProfileParagraphBlog>
                  Kevin Ibrahim
                </S.CardProfileParagraphBlog>
              </S.CardProfileBlog>
            </div>
          </S.CardsBlog>
          <S.CardsBlog>
            <div>
              <S.CardsImgBlog
                src="./assets/img/bloco_image_4.svg"
                alt="The image of a plate with a sad face drawn, and on top it has a fork and a knife"
              />
            </div>
            <div>
              <S.CardInfoBlog>Watch What the Health Life</S.CardInfoBlog>
              <S.CardProfileBlog>
                <S.CardProfileImagemBlog
                  width="50px"
                  src="./assets/img/man.jpg"
                />
                <S.CardProfileParagraphBlog>
                  Kevin Ibrahim
                </S.CardProfileParagraphBlog>
              </S.CardProfileBlog>
            </div>
          </S.CardsBlog>
        </Carousel>
      </S.SectionBlog>

      <S.SectionMembership>
        <S.ArticleMembership>
          <S.TitleSections>
            Join our membership
            <br />
            to get special offer
          </S.TitleSections>
          <S.InputAndButtonContainerMembership>
            <S.InputMembership placeholder="Enter your email address " />
            <S.ButtonMembership>Join</S.ButtonMembership>
          </S.InputAndButtonContainerMembership>
        </S.ArticleMembership>
        <div>
          <S.IllustrationMembership
            src="./assets/img/bloco_final_image.svg"
            alt="The image of two men shaking hands while the man on the left makes a cell phone bank transfer to the man on the left."
          />
        </div>
      </S.SectionMembership>

      <S.Footer>
        <S.FooterCopyright>
          © Copyrights 2019 Stack. All Rights Reserved
        </S.FooterCopyright>
        <div>
          <S.FooterLegalDocument href="https://www.linkedin.com/in/kayke-fujinaka/">Privacy Policy</S.FooterLegalDocument>
          <S.FooterLegalDocument href="https://www.linkedin.com/in/kayke-fujinaka/">Terms and Conditions</S.FooterLegalDocument>
        </div>
      </S.Footer>
    </>
  );
};

export default Home;
