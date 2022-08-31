// Check the current window size
const checkWindowSize = ( width: number ) => {
    let matchSize = false

    if ( window.matchMedia( `( max-width: ${ width }px )` ).matches ) {
        matchSize = true
    }

    return matchSize
}

export {
    checkWindowSize
}
