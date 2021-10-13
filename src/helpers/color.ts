//convert Hex to HSL
export const hexToHSL = (hex: string) => {

}

// convert Hex to RGB
export const hexToRGB = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//convert RGB to Hex
export const rgbToHex = (rgb: string) => {
    rgb = rgb.replace(')', '').replace('rgb(', '')
    const rgbs: Array<string> = rgb.split(',')

    return "#" + componentToHex(Number(rgbs[0])) + componentToHex(Number(rgbs[1])) + componentToHex(Number(rgbs[2]));
}

//convert HSL to Hex
export const hslToHex = (hsl: string) => {
}

const componentToHex = (c: number) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

//checking the color is valid or not
export const isValidColor = (color: string) => {
    const rgbPattern = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/
    const hexPattern = /^#([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/
    if (color.match(rgbPattern)) {
        return rgbToHex(color)
    } else if (!color.match(hexPattern)) {
        return false
    }
    return color
}