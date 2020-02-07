import React from "react";
import styles from "./searchItem.module.css";

const SearchItem = props => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.itemID}>{props.id}</div>
      <div className={styles.itemTitle}>{props.title}</div>
    </div>
  );
};

export default SearchItem;
