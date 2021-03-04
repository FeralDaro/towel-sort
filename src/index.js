// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(matrix === undefined){
        return []
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j])
            }
        }
        if (i % 2 === 1) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][matrix[i].length - 1 - j])
            }
        }
    }
    return arr;
}
