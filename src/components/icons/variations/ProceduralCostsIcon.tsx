import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ProceduralCostsIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1989_1159)">
        <Path
          d="M29.1667 6.25V14.5833C29.1667 15.1359 29.3862 15.6658 29.7769 16.0565C30.1676 16.4472 30.6975 16.6667 31.2501 16.6667H39.5834"
          stroke={props.stroke || "#615959"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M35.4167 43.75H14.5834C13.4783 43.75 12.4185 43.311 11.6371 42.5296C10.8557 41.7482 10.4167 40.6884 10.4167 39.5833V10.4167C10.4167 9.3116 10.8557 8.25179 11.6371 7.47039C12.4185 6.68899 13.4783 6.25 14.5834 6.25H29.1667L39.5834 16.6667V39.5833C39.5834 40.6884 39.1444 41.7482 38.363 42.5296C37.5816 43.311 36.5218 43.75 35.4167 43.75Z"
          stroke={props.stroke || "#615959"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M25 29.1667H18.75"
          stroke={props.stroke || "#615959"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M29.1691 23.2751C28.2263 22.9413 27.2172 22.8387 26.2266 22.9757C25.2359 23.1128 24.2926 23.4856 23.4759 24.0629C22.6592 24.6401 21.9929 25.4049 21.5331 26.293C21.0733 27.1811 20.8333 28.1666 20.8333 29.1667C20.8333 30.1669 21.0733 31.1524 21.5331 32.0405C21.9929 32.9286 22.6592 33.6934 23.4759 34.2706C24.2926 34.8479 25.2359 35.2207 26.2266 35.3578C27.2172 35.4948 28.2263 35.3922 29.1691 35.0584"
          stroke={props.stroke || "#615959"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1989_1159">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default ProceduralCostsIcon;
