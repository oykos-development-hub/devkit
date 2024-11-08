import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FeesIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.25 22.5h17.5M16.25 30h17.5M12 6.25h26c1.795 0 3.25 1.679 3.25 3.75v33.75L35.833 40l-5.416 3.75L25 40l-5.417 3.75L14.167 40 8.75 43.75V10c0-2.071 1.455-3.75 3.25-3.75z"
      ></Path>
      <Path
        fill={props.fill || "#615959"}
        d="M18.34 15v-3.516h-1.188v-.42h2.88v.42h-1.188V15h-.504zm2.839-2.202l-.186.6h1.182l-.186-.6a24.27 24.27 0 01-.204-.654c-.064-.22-.128-.444-.192-.672h-.024c-.06.228-.122.452-.186.672a24.27 24.27 0 01-.204.654zM19.979 15l1.332-3.936h.564L23.207 15h-.534l-.372-1.2h-1.434l-.378 1.2h-.51zm3.786 0v-3.936h.498v1.974h.018l1.638-1.974h.564l-1.23 1.5L26.675 15h-.558l-1.176-2.046-.678.798V15h-.498zm4.514.072a1.883 1.883 0 01-1.38-.582l.3-.348c.14.148.303.268.491.36.192.088.39.132.595.132.26 0 .462-.058.605-.174a.58.58 0 00.216-.468.528.528 0 00-.09-.324.691.691 0 00-.233-.204 3.591 3.591 0 00-.33-.168l-.564-.246a2.142 2.142 0 01-.372-.204 1.13 1.13 0 01-.306-.324.922.922 0 01-.12-.486c0-.2.051-.378.155-.534a1.07 1.07 0 01.445-.372c.188-.092.4-.138.636-.138.235 0 .453.046.653.138.2.088.37.204.51.348l-.27.324a1.34 1.34 0 00-.401-.27 1.139 1.139 0 00-.492-.102c-.22 0-.399.052-.535.156a.507.507 0 00-.198.42.5.5 0 00.096.312c.069.08.152.146.252.198.1.052.203.1.306.144l.558.24c.152.064.288.142.409.234a.969.969 0 01.294.33c.072.128.107.29.107.486 0 .208-.053.398-.162.57a1.14 1.14 0 01-.462.402c-.2.1-.438.15-.713.15zM30.392 15v-3.936h2.268v.42h-1.77v1.236h1.494v.426H30.89v1.428h1.83V15h-2.328z"
      ></Path>
    </Svg>
  );
};

export default FeesIcon;
