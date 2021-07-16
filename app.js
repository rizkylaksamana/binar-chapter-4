// comp options
function getCompOptions(){
    const comp = Math.random();
    if( comp < 0.34 ) return "batu";
    if( comp >= 0.34 && comp < 0.67 ) return "kertas";
    return "gunting";

}

function getResult(comp, player) {
    if( player == comp ) return 'DRAW';
    if ( player == 'batu') return ( comp == 'gunting' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if ( player == 'gunting') return ( comp == 'kertas' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if ( player == 'kertas') return ( comp == 'batu' ) ? 'PLAYER 1 WIN' : 'COM WIN';
}

// pilih batu
const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function(){
    const compOptions = getCompOptions();
    const playerOptions = pBatu.className;
    const result = getResult(compOptions, playerOptions);
    console.log('comp : ' + compOptions);
    console.log('player : ' + playerOptions);
    console.log('hasil : ' + result);

    const imgComputer = document.querySelector('.image-comp');
    imgComputer.setAttribute('src', 'assets/' + compOptions + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = result;
});

// pilih kertas
const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function(){
    const compOptions = getCompOptions();
    const playerOptions = pKertas.className;
    const result = getResult(compOptions, playerOptions);
    console.log('comp : ' + compOptions);
    console.log('player : ' + playerOptions);
    console.log('hasil : ' + result);

    const imgComputer = document.querySelector('.image-comp');
    imgComputer.setAttribute('src', 'assets/' + compOptions + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = result;
});

// pilih gunting
const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function(){
    const compOptions = getCompOptions();
    const playerOptions = pGunting.className;
    const result = getResult(compOptions, playerOptions);
    console.log('comp : ' + compOptions);
    console.log('player : ' + playerOptions);
    console.log('hasil : ' + result);

    const imgComputer = document.querySelector('.image-comp');
    imgComputer.setAttribute('src', 'assets/' + compOptions + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = result;
});
