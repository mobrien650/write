const BASE = 16;

function scale(amount) {
    return (BASE * amount) + 'px';
}

export const SPACING_DIMEN = {
    BASE: scale(1),
    XXSMALL: scale(.25),
    XSMALL: scale(.5),
    SMALL: scale(.75),
    LARGE: scale(1.5),
    XLARGE: scale(2),
    XXLARGE: scale(3)
}