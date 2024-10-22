import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 *   Turno de la computadora
 * @param {Number} puntosMinimos puntos que la computadora tiene q superar para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error( 'Los puntosMinimos son necesarios.' );
    if ( !puntosHTML ) throw new Error( 'Argumento puntosHTML es necesario.' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Empate, nadie gana.');
        } else if ( puntosMinimos > 21 ) {
            alert('Perdiste, gana la casa.')
        } else if( puntosComputadora > 21 ) {
            alert('Ganaste!');
        } else {
            alert('Perdiste, gana la casa.')
        }
    }, 700 );
}
