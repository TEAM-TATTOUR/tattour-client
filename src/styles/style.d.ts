import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            bg: string;
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
            gray8: string;
            gray9: string;
            pink1: string;
            pink2: string;
            pink3: string;
            pink4: string;
            pink5: string;
            red: string;
        };
        fonts: {
            title_semibold_24: SerializedStyles;
            title_semibold_20: SerializedStyles;
            title_medium_20: SerializedStyles;
            title_regular_20: SerializedStyles;
            title_semibold_18: SerializedStyles;
            title_medium_18: SerializedStyles;
            title_line_medium_18: SerializedStyles;
            title_semibold_16: SerializedStyles;
            body_medium_16: SerializedStyles;
            body_semibold_14: SerializedStyles;
            body_medium_14: SerializedStyles;
            body_line_medium_14: SerializedStyles;
            body_underline_medium_14: SerializedStyles;
            body_line_medium_12: SerializedStyles;
            detail_medium_12: SerializedStyles;
        };
    }
}