

// comp options
function getCompOptions(){
    const comp = Math.random();
    if( comp < 0.34 ) return "batu";
    if( comp >= 0.34 && comp < 0.67 ) return "kertas";
    return "gunting";

}

function getResult(comp, player) {
    let info = document.querySelector('.info')
    let win = info.innerHTML = 'PLAYER 1 WIN'
    let comWin = info.innerHTML = 'COM WIN'
    let draw = info.innerHTML = 'DRAW'

    info.style.backgroundColor = "#4C9654"
    info.style.width = "50%"
    info.style.height = "200px"
    info.style.transform = "rotate(-28.87deg)"
    info.style.borderRadius = '10px'
    info.style.fontWeight = '700'
    info.style.fontSize = '38px'
    info.style.color = 'white'

    if( player == comp ) return draw;
    if ( player == 'batu') return ( comp == 'gunting' ) ? win : comWin;
    if ( player == 'gunting') return ( comp == 'kertas' ) ? win : comWin;
    if ( player == 'kertas') return ( comp == 'batu' ) ? win : comWin;

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

    // const imgComputer = document.querySelector('.kertas-2');
    // imgComputer.style.backgroundColor = 'grey';

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

    // const imgComputer = document.querySelector('.gunting-2');
    // imgComputer.style.backgroundColor = 'grey';

    const info = document.querySelector('.info');
    info.innerHTML = result;
});






// refresh
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', function(){
    location.reload();
})