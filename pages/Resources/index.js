import style from "@/styles/Resources.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";
import { TruncatedWords } from "@/Helpers/contentInnerHtml";
import { usePostsContext } from "@/Helpers/context";
import HomeLayout from "@/components/Layouts/layout";

const Resources = () => {
  const router = useRouter();
  const {
    resource_container,
    resource_header,
    article_wrapper,
    heading_3,
    inline_block,
    block,
    article_info,
    article_info_sep,
  } = style;

  const posts = usePostsContext();

  return (
    <div className="ContainerWrapper">
      <div className="blog_logo">
        <Image className="logo" src={EQlogo} alt="EqLogo" />
      </div>
      <div className={resource_container}>
        <h1 className={resource_header}>Resource</h1>
        <div className={inline_block}>
          {posts.map((item, index) => {
            return (
              <div
                className={article_wrapper}
                key={index}
                onClick={() => {
                  router.push(`Resources/${index}`);
                }}
              >
                <h3 className={heading_3}>{item.title}</h3>
                <br />
                <TruncatedWords description={item.description} />

                <br />
                <div className={block}>
                  <p className={article_info}>{item.pubDate}</p>
                  <p className={article_info_sep}>|</p>
                  <p className={article_info}>{item.author}</p>
                  <div />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;

Resources.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={true} pageTitle={"Eqam capital | Blogs"}>
      {page}
    </HomeLayout>
  );
};
