import React from "react";
import { Button } from "antd";

export default function Home() {
  let styles = {
    baseButtons: {
      margin: "auto",
      width: "100%",
    },
    buttons: {
      width: "60%",
      height: "70px",
      marginTop: "10%",
    },
  };

  return (
    <div>
      <div style={styles.baseButtons}>
        <a href="/vendor">
          <Button type="primary" style={styles.buttons}>
            Հաճախորդներ
          </Button>
        </a>

        <a href="/couriers">
          <Button type="primary" style={styles.buttons}>
            Առաքիչներ
          </Button>
        </a>
        <a href="/orders">
          <Button type="primary" style={styles.buttons}>
            Պատվերներ
          </Button>
        </a>
      </div>
    </div>
  );
}
