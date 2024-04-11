import React, { useState } from "react";
import ContentWrapper from "../../components/contetWrapper/ContentWrapper";
import { SwitchTabs } from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/corousel/Carousel";

const TopRated = () => {
  const [endpoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs
          data={["Movies", "Tv Show"]}
          onTabChange={(tab) => onTabChange(tab)}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
