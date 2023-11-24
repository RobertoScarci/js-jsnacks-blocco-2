const zucchine = [
    {varietà: 'varietà 1', peso: '12', lunghezza: '4'},
    {varietà: 'varietà 2', peso: '22', lunghezza: '10'},
    {varietà: 'varietà 3', peso: '10', lunghezza: '3'},
    {varietà: 'varietà 4', peso: '18', lunghezza: '9'},
    {varietà: 'varietà 5', peso: '14', lunghezza: '13'},
    {varietà: 'varietà 6', peso: '20', lunghezza: '18'},
    {varietà: 'varietà 7', peso: '7', lunghezza: '10'},
    {varietà: 'varietà 8', peso: '32', lunghezza: '8'},
    {varietà: 'varietà 9', peso: '19', lunghezza: '7'},
    {varietà: 'varietà 10', peso: '16', lunghezza: '15'},
]

let totalSum= 0;

for (let i = 0 ; i < zucchine.lenght; i++) {

    const zucchinaAttuale = zucchine[i];

    totalSum = totalSum + zucchine[i].peso;

    console.log(zucchinaAttuale)
}

console.log(totalSum)

