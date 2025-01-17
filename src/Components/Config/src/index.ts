import hexToRgb from '~components/Helper/src/components/hex-to-rgb'

export const BORDER_RADIUS = '2rem'
export const COLOR_DARK = '#333333'
export const COLOR_GRAY = '#f8f8f8'
export const COLOR_DARK_RGB = hexToRgb(COLOR_DARK)
export const GUTTER = '1rem'
export const TEXT_SHADOW_WITH_DARK_BG = `0 1px 1px ${COLOR_DARK}`
export const TEXT_SHADOW_WITH_LIGHT_BG = `0 1px 1px ${COLOR_GRAY}`
