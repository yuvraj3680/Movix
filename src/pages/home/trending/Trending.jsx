import React, { useState } from "react";
import ContentWrapper from "../../../components/contetWrapper/ContentWrapper";
import { SwitchTabs } from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/corousel/Carousel";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs
          data={["day", "week"]}
          onTabChange={(tab) => onTabChange(tab)}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
