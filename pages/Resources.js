import Navbar from "@/components/Navbar/Navbar";
import style from "../styles/Resources.module.css";
import { items } from "@/components/Constants";

const Resources = () => {
  const {
    resource_container,
    resource_header,
    article_wrapper,
    heading_3,
    paragraph_7,
    inline_block,
    block,
    article_info,
    article_info_sep
  } = style;

  console.log(items);
  return (
    <>
      <Navbar />
      <div className={resource_container}>
        <h1 className={resource_header}>Resource</h1>
        <div className={inline_block}>
          {items.map((item, index) => {
            return (
              <div className={article_wrapper} key={index}>
                <h3 className={heading_3}>{item.heading}</h3>
                <br />
                <p className={paragraph_7}>{item.paragragh}</p>
                <br />
                <div className={block}>
                  <p className={article_info}>{item.timestamp}</p>
                  <p className={article_info_sep}>{item.border}</p>
                  <p className={article_info}>item.name</p>
                  <div />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Resources;