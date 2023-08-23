import React, { useReducer } from "react";
import { Htag, Sort, Span } from "@/components";
import { Tag } from "@/components";
import { HhData } from "@/components";
import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Advantage } from "@/components";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReducer } from "../sort.reducer";

const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 ? (
        <>
          <Htag tag={"h2"}>Преимущества</Htag>
          <Advantage advantages={page.advantages} />
        </>
      ) : (
        <>
          <Htag tag={"h2"}>Преимущества</Htag>
          <Advantage />
          <Advantage />
          <Advantage />
        </>
      )}
      {page.seoText ? (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      ) : (
        <Span>SEO text</Span>
      )}
      <Htag tag={"h2"}>Получаемые навыки</Htag>
      {page?.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
