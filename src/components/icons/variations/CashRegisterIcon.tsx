import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CashRegisterIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <Path
        fill={props.fill || "#615959"}
        d="M16.521 41.916a.75.75 0 00.47 1.424l-.47-1.424zm12.359 1.513l-.068-.747.068.747zm7.273-1.602l.327.675-.327-.675zm6.95-6.269l-.58-.474.58.474zm-4.753-3.922l.528.533-.528-.533zm-3.201 3.174l.528.532-.528-.532zm-8.694.658a.75.75 0 100 1.5v-1.5zm15.91-4.226l-.414.626.413-.626zm-23.148-1.051l.333.672-.333-.672zm8.7-.79l.196-.723-.196.724zm3.397.92l-.195.723.195-.724zm1.077 4.018l-.528-.532.528.532zm-2.423 1.346a.75.75 0 001.056 1.066l-1.056-1.066zM16.992 43.34c.461-.152 1.147-.19 2.06-.125.899.063 1.929.217 3.044.391 2.189.341 4.718.763 6.851.57l-.135-1.494c-1.908.173-4.228-.206-6.485-.558-1.106-.172-2.198-.337-3.169-.406-.955-.067-1.886-.05-2.637.198l.47 1.424zm11.955.836c3.178-.287 4.496-.205 7.533-1.674l-.653-1.35c-2.748 1.33-3.782 1.239-7.015 1.53l.135 1.494zm7.533-1.674c2.684-1.299 5.457-4.33 7.204-6.47l-1.161-.948c-1.755 2.148-4.344 4.93-6.696 6.068l.653 1.35zm1.342-11.398l-3.201 3.173 1.056 1.065 3.201-3.173-1.056-1.065zm-6.102 4.364h-5.265v1.5h5.265v-1.5zm2.901-1.19a4.12 4.12 0 01-2.9 1.19v1.5a5.62 5.62 0 003.956-1.626l-1.056-1.065zm8.157-3.662a3.952 3.952 0 00-4.956.488l1.056 1.065a2.452 2.452 0 013.073-.301l.827-1.252zm.906 5.417c1.42-1.738.907-4.218-.906-5.417l-.827 1.252c1.135.75 1.383 2.223.572 3.216l1.161.949zM7.866 28.955h6.466v-1.5H7.866v1.5zm7.332.853V44.23h1.5V29.808h-1.5zm-.866 15.275H7.866v1.5h6.466v-1.5zM7 44.231V29.808H5.5V44.23H7zm.866.852A.86.86 0 017 44.231H5.5a2.36 2.36 0 002.366 2.352v-1.5zm7.332-.852a.86.86 0 01-.866.852v1.5a2.36 2.36 0 002.366-2.352h-1.5zm-.866-15.276a.86.86 0 01.866.853h1.5a2.36 2.36 0 00-2.366-2.353v1.5zm-6.466-1.5A2.36 2.36 0 005.5 29.808H7a.86.86 0 01.866-.853v-1.5zm9.224 4.627l2.46-1.22-.666-1.343-2.46 1.22.666 1.343zm7.187-2.326h.663v-1.5h-.663v1.5zm3.444.37l3.398.918.391-1.448-3.397-.918-.392 1.448zm4.142 3.68l-1.895 1.88 1.056 1.065 1.895-1.88-1.056-1.064zm-.744-2.762c1.244.337 1.645 1.869.744 2.763l1.056 1.065c1.731-1.717.939-4.64-1.409-5.276l-.391 1.448zm-6.18-1.288c.94 0 1.876.125 2.782.37l.392-1.448a12.157 12.157 0 00-3.173-.422v1.5zm-5.39 1.107a10.645 10.645 0 014.728-1.107v-1.5c-1.872 0-3.719.433-5.393 1.263l.666 1.344zm16.663-13.876c0 3.12-2.553 5.66-5.716 5.66v1.5c3.979 0 7.216-3.2 7.216-7.16h-1.5zm-5.716 5.66c-3.163 0-5.716-2.54-5.716-5.66h-1.5c0 3.96 3.237 7.16 7.216 7.16v-1.5zm-5.716-5.66c0-3.12 2.553-5.66 5.716-5.66v-1.5c-3.979 0-7.216 3.2-7.216 7.16h1.5zm5.716-5.66c3.163 0 5.716 2.54 5.716 5.66h1.5c0-3.96-3.237-7.16-7.216-7.16v1.5zm-6.466 4.91c-3.162 0-5.715-2.54-5.715-5.66h-1.5c0 3.96 3.236 7.16 7.215 7.16v-1.5zm-5.715-5.66c0-3.12 2.553-5.66 5.715-5.66v-1.5c-3.979 0-7.215 3.2-7.215 7.16h1.5zm5.715-5.66c3.163 0 5.716 2.54 5.716 5.66h1.5c0-3.96-3.237-7.16-7.216-7.16v1.5z"
      ></Path>
    </Svg>
  );
};

export default CashRegisterIcon;
