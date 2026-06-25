import { useState } from "react";
import DemoSection from "../components/home/DemoSection";
import { demos } from "../constants/demos";

export default function Demo() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? demos
      : demos.filter((item) => {
          if (filter === "landing page") {
            return item.category === "landing page" || item.category === "website";
          }
          return item.category === filter;
        });

  return (
    <DemoSection
      filter={filter}
      setFilter={setFilter}
      filtered={filtered}
    />
  );
}
