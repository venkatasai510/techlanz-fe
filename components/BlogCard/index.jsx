import SVGImages from "assets/images/index";
import Image from "next/image";
import { useRouter } from "node_modules/next/router";
import React from "react";
import Card from "react-bootstrap/Card";
import styles from "styles/Components/BlogCard/blogCard.module.scss";

const BlogCard = () => {
  const router = useRouter();

  return (
    <Card
      style={{ width: "219px" }}
      className={styles.blogCard}
      onClick={() => {
        router.push("/blog/12345");
      }}
    >
      <Image src={SVGImages.blogCard} alt="blogCard" />
      <Card.Body>
        <p>The Role of Anatomy and Psychology in Medical Technology...</p>

        <div className={styles.cardDetails}>
          <div className={styles.photoSection}>
            <Image src={SVGImages.profile} alt="profile" />
            <p>Alex Buckmaster</p>
          </div>

          <p>On February 04, 2024</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
