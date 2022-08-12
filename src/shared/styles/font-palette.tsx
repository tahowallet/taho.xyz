import {
  quincyRegularFontFamily,
  segmentFontFamily,
} from "shared/styles/font-families";

function size(sizePx: number) {
  return `${sizePx / 16}rem`;
}

export const segment14 = `400 ${size(14)} / 1.33 ${segmentFontFamily}`;
export const segment18 = `400 ${size(18)} / 1.33 ${segmentFontFamily}`;
export const segment24 = `400 ${size(24)} / 1.33 ${segmentFontFamily}`;
export const segment32 = `400 ${size(32)} / 1.33 ${segmentFontFamily}`;

export const quincyBold18 = `700 ${size(18)} / 1 ${quincyRegularFontFamily}`;
export const quincyBold24 = `700 ${size(24)} / 1 ${quincyRegularFontFamily}`;
export const quincyBold48 = `700 ${size(48)} / 1 ${quincyRegularFontFamily};`;

export const quincy24 = `400 ${size(24)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy32 = `400 ${size(32)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy36 = `400 ${size(36)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy48 = `400 ${size(48)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy72 = `400 ${size(72)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy80 = `400 ${size(80)} / 1.1 ${quincyRegularFontFamily};`;
export const quincy144 = `400 ${size(144)} / 1.1 ${quincyRegularFontFamily};`;
