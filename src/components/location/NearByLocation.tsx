import { Address, Link } from "@yext/pages/components";
import * as React from "react";
import { TemplateMeta } from "../../types";
import { NearByLocationResult } from "../../types/Locator";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {
  getDirectionUrl,
  getRecursiveData,
} from "../../config/GlobalFunctions";
import { Coordinate } from "../google-map/SearchProvider";
import { fetch } from "@yext/pages/util";

type NearbyAPIConfig = {
  endpoint:
    | "https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch"
    | "https://liveapi.yext.com/v2/accounts/me/entities/geosearch";
  params: {
    api_key: string;
    entityTypes?: string;
    limit?: string;
    radius?: string;
    savedFilterIds?: string;
    v: string;
  };
};

const getConfig = (api_key: string): NearbyAPIConfig => {
  return {
    endpoint: YEXT_PUBLIC_GEO_SEARCH_END_POINT,
    params: {
      api_key,
      entityTypes: "location",
      limit: "4",
      v: "20220927",
    },
  };
};

type NearbyProps = {
  coordinate: Coordinate;
  id: string;
  meta: TemplateMeta;
  apiKey: string;
};

const NearByLocation = ({ meta, coordinate, id, apiKey }: NearbyProps) => {
  const [locations, setLocations] = React.useState<NearByLocationResult[]>([]);
  React.useEffect(() => {
    if (!coordinate || !apiKey) {
      return;
    }

    const config = getConfig(apiKey);
    const searchParams = new URLSearchParams({
      ...config.params,
      location: `${coordinate.latitude},${coordinate.longitude}`,
      filter: JSON.stringify({ "meta.id": { "!$eq": `${id}` } }),
    });

    fetch(`${config.endpoint}?${searchParams.toString()}`)
      .then((resp) => resp.json())
      .then((data) => setLocations(data.response.entities || []))
      .catch((error) => console.error(error));
  }, [coordinate, id, apiKey]);
  return (
    <div className="nearby-locations">
      <div className="container">
        <h3 className="nearby-locations-title">Nearby Locations</h3>
        <Swiper spaceBetween={50} slidesPerView={3}>
          {locations.map((location ,index:number) => {
            const url = getRecursiveData(location, meta);
            return (
              <SwiperSlide key={index}>
                <div className="location-card">
                  <div className="icon-row">
                    <div className="icon addressIcon"></div>
                    <Link className="location-name" href={`${url}`}>
                      {location.name}
                    </Link>
                    <Address address={location.address} />
                  </div>

                  <div className="button-bx-detail">
                    <Link className="button link" href={`${url}`}>
                      View Details
                    </Link>
                    <Link
                      data-ya-track="getdirections"
                      eventName={`getdirections`}
                      target="_blank"
                      className="direction button before-icon"
                      href={getDirectionUrl(
                        location.address,
                        location.googlePlaceId
                      )}
                      rel="noopener noreferrer"
                    >
                      Get Direction
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="nearby-locations-actions">
          <Link href="/" className="button link">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NearByLocation;
