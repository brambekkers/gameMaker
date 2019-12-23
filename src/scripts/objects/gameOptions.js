const state = {
    gridNr: false,
    placeItem: 'start'
}

const size = {
    gameSize: 10,
}

const colors = {
    colors: ['5F5369', '546171', 'F7D1CD', 'E8E1EF', 'CFCFCD'],
}

const text = {
    titleStyle: { fontSize: 45, color: `#${colors.colors[1]}`, align: 'center', fontFamily: "Arial Black", },
    headerStyle: { fontSize: 28, color: `#${colors.colors[1]}`, fontFamily: "Arial" },
    menuStyle: { fontSize: 20, color: `#${colors.colors[1]}`, fontFamily: "Arial" },
}

export default { ...state, ...size, ...colors, ...text }