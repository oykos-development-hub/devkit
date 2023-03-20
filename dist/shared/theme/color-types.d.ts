declare enum Colors {
    primary900 = "#000D99",
    primary800 = "#122EBD",
    primary700 = "#0024D9",
    primary600 = "#0B4BDA",
    primary500 = "#004FFF",
    primary400 = "#3C8AFF",
    primary300 = "#599CFF",
    primary200 = "#79AFFF",
    primary100 = "#99CCFF",
    primary50 = "#C0E0FF",
    secondary900 = "#8F6400",
    secondary800 = "#B88100",
    secondary700 = "#E09D00",
    secondary600 = "#FFB60A",
    secondary500 = "#FFC233",
    secondary400 = "#FFCE5C",
    secondary300 = "#FFDA85",
    secondary200 = "#FFE7AD",
    secondary100 = "#FFF3D6",
    secondary50 = "#FFFAEE",
    gray900 = "#212121",
    gray800 = "#424242",
    gray700 = "#616161",
    gray600 = "#757575",
    gray500 = "#9E9E9E",
    gray400 = "#BDBDBD",
    gray300 = "#E0E0E0",
    gray200 = "#EEEEEE",
    gray100 = "#F5F5F5",
    gray50 = "#FAFAFA",
    error900 = "#B71C1C",
    error800 = "#C62828",
    error700 = "#D32F2F",
    error600 = "#E53935",
    error500 = "#F44336",
    error400 = "#EF5350",
    error300 = "#E57373",
    error200 = "#EF9A9A",
    error100 = "#FFCDD2",
    error50 = "#FFEBEE",
    warning900 = "#E65100",
    warning800 = "#EF6C00",
    warning700 = "#F57C00",
    warning600 = "#FB8C00",
    warning500 = "#FF9800",
    warning400 = "#FFA726",
    warning300 = "#FFB74D",
    warning200 = "#FFCC80",
    warning100 = "#FFE0B2",
    warning50 = "#FFF3E0",
    success900 = "#1B5E20",
    success800 = "#2E7D32",
    success700 = "#388E3C",
    success600 = "#43A047",
    success500 = "#4CAF50",
    success400 = "#66BB6A",
    success300 = "#81C784",
    success200 = "#A5D6A7",
    success100 = "#C8E6C9",
    success50 = "#E8F5E9",
    white = "#FFF",
    black = "#000"
}
declare const _default: {
    primary900: Colors.primary900;
    primary800: Colors.primary800;
    primary700: Colors.primary700;
    primary600: Colors.primary600;
    primary500: Colors.primary500;
    primary400: Colors.primary400;
    primary300: Colors.primary300;
    primary200: Colors.primary200;
    primary100: Colors.primary100;
    primary50: Colors.primary50;
    secondary900: Colors.secondary900;
    secondary800: Colors.secondary800;
    secondary700: Colors.secondary700;
    secondary600: Colors.secondary600;
    secondary500: Colors.secondary500;
    secondary400: Colors.secondary400;
    secondary300: Colors.secondary300;
    secondary200: Colors.secondary200;
    secondary100: Colors.secondary100;
    secondary50: Colors.secondary50;
    gray900: Colors.gray900;
    gray800: Colors.gray800;
    gray700: Colors.gray700;
    gray600: Colors.gray600;
    gray500: Colors.gray500;
    gray400: Colors.gray400;
    gray300: Colors.gray300;
    gray200: Colors.gray200;
    gray100: Colors.gray100;
    gray50: Colors.gray50;
    error900: Colors.error900;
    error800: Colors.error800;
    error700: Colors.error700;
    error600: Colors.error600;
    error500: Colors.error500;
    error400: Colors.error400;
    error300: Colors.error300;
    error200: Colors.error200;
    error100: Colors.error100;
    error50: Colors.error50;
    warning900: Colors.warning900;
    warning800: Colors.warning800;
    warning700: Colors.warning700;
    warning600: Colors.warning600;
    warning500: Colors.warning500;
    warning400: Colors.warning400;
    warning300: Colors.warning300;
    warning200: Colors.warning200;
    warning100: Colors.warning100;
    warning50: Colors.warning50;
    success900: Colors.success900;
    success800: Colors.success800;
    success700: Colors.success700;
    success600: Colors.success600;
    success500: Colors.success500;
    success400: Colors.success400;
    success300: Colors.success300;
    success200: Colors.success200;
    success100: Colors.success100;
    success50: Colors.success50;
    white: Colors.white;
    black: Colors.black;
};
export default _default;
type ColorKeys = keyof typeof Colors;
export type Palette = {
    [key in ColorKeys]: string;
};
