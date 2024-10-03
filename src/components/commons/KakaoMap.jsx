import React, { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CardImages from "../../assets/images/CardImages.jpg";
import TrashPile from "../../assets/icons/workerMode/Trash Pile.svg";

const KakaoMap = ({ myCoords, spots, setDetail }) => {
  return (
    <Map
      center={{
        lat: myCoords.lat,
        lng: myCoords.lng,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      level={3} // 지도의 확대 레벨
    >
      {spots.map((spot, index) => {
        return (
          <MapMarker
            key={spot.title}
            position={{ lat: spot.latitude, lng: spot.longitude }}
            title={spot.title}
            image={{
              src: TrashPile,
              size: {
                width: 24,
                height: 35,
              },
            }}
            onClick={() => {
              setDetail(spot.title);
            }}
          />
        );
      })}
    </Map>
  );
};

export default KakaoMap;
