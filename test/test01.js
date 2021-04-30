function clasificaElementos(index) {

    let Npositivos = [];
    let Nnegativos = [];
    let Nzero = [];

    for(let i of index){
        if(i > 0){ 
            Npositivos.push(i);
        } else if (i == 0) {
            Nzero.push(i);
        } else if (i < 0) {
            Nnegativos.push(i);
        };
    };

    return [(Npositivos.length/Array.length).toFixed(4),(Nnegativos.length/Array.length).toFixed(4),(Nzero.length/Array.length).toFixed(4)];
}
module.exports = clasificaElementos;
