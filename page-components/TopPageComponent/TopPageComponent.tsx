import React from "react";
import { Htag, Span } from "@/components";
import { Tag } from "@/components";
import { HhData } from "@/components";
import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Advantage } from "@/components";

const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return (
    <div>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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
      {page.advantages ? <Span>{page.seoText}</Span> : <Span>SEO text</Span>}
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
