export interface filterItem {
    label: string,
    value: string
}

const filters: Array<filterItem> = [
    { label: 'Red > 50%', value: 'r' },
    { label: 'Green > 50%', value: 'g' },
    { label: 'Blue > 50%', value: 'b' },
    { label: 'Saturation > 50%', value: 's' },
]

export default filters;