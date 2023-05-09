const order = [
    {
        size: 'small',
        qty: 13
    },
    {
        size: 'medium',
        qty: 8
    },
    {
        size: 'large',
        qty: 20
    }
];


const carpetArea = function (sideA, sideB) {
    return sideA * sideB;
}

const carpetPerimeter = function (sideA, sideB) {
    return (sideA + sideB) * 2;
}

const materialCalc = function (order) {
    const material = [];
    order.forEach(product => {
        if (product.size === 'small') {
            let carpetMaterial = carpetArea(40, 40) * product.qty / 1000;
            let edgeMaterial = carpetPerimeter(40, 40) * product.qty / 100;
            material.push({size: 'small', carpetMaterial, edgeMaterial})
        }
        if (product.size === 'medium') {
            let carpetMaterial = carpetArea(80, 40) * product.qty / 1000;
            let edgeMaterial = carpetPerimeter(80, 40) * product.qty / 100;
            material.push({size: 'medium', carpetMaterial, edgeMaterial})
        }
        if (product.size === 'large') {
            let carpetMaterial = carpetArea(80, 80) * product.qty / 1000;
            let edgeMaterial = carpetPerimeter(80, 80) * product.qty / 100;
            material.push({size: 'large', carpetMaterial, edgeMaterial})
        }
    })
    return material;
} 

function calculateTotals (calcFn, order) {
    let materials = calcFn(order);
    let carpetMaterialTotal = 0;
    let edgeMaterialTotal = 0;
    materials.forEach(entry => {
        carpetMaterialTotal += entry.carpetMaterial;
        edgeMaterialTotal += entry.edgeMaterial;
    })
    return [carpetMaterialTotal, edgeMaterialTotal];
}

function printResults(calcFn, order) {
    console.log('Starting!');
    let [carpet, edge] = calculateTotals(materialCalc, order);
    console.log(`You need ${carpet} square meeters of carpet material.`);
    console.log(`You need ${edge} meeters of edge material.`)
    console.log('Ending!');
}

printResults(materialCalc, order)
