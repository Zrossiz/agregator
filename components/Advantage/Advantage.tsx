import React from "react";
import { Htag } from "@/components";
import { AdvantageProps } from "./Advatage.props";
import { Span } from "@/components";
import CheckIcon from "./Check.svg";
import styles from "./Advantage.module.css";

export const Advantage = ({ advantages }: AdvantageProps) => {
  return (
    <>
      {advantages ? (
        advantages?.map((a) => (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>
              {a.title ? a.title : "Title advantage"}
            </div>
            <div className={styles.vline}></div>
            <div>
              {a.description
                ? a.description
                : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful"}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>Title advantage</div>
          <div className={styles.vline}></div>
          <div>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </div>
        </div>
      )}
    </>
  );
};
