import React from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "../../pages/details/cast/Cast.jsx";
const Details = () => {
  const { mediatype, id } = useParams();
  const { data, loading } = useFetch(`/${mediatype}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediatype}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
    </div>
  );
};

export default Details;
