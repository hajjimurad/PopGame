function initialState_sameAfterStart() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3, stateBefore);
    board.init(stateBefore);

    return Board.compareArrays(board.getState(), stateBefore);
}

function game3x3_indexByCoordsLeftTop_0() {
    var board = new Board(3, 3);
    board.init();

    return board.getIndexByCoords(0, 0) === 0;
}

function game3x3_indexByCoordsCenter_4() {
    var board = new Board(3, 3);
    board.init();

    return board.getIndexByCoords(1, 1) === 4;
}

function game3x3_indexByCoordsLast_8() {
    var board = new Board(3, 3);
    board.init();

    return board.getIndexByCoords(2, 2) === 8;
}

function game3x3_getCoordsByIndexLeftTop() {
    var board = new Board(3, 3);
    board.init();

    var res = board.getCoordsByIndex(0);
    return res.x === 0 && res.y === 0;
}

function game3x3_getCoordsByIndexRightBottom() {
    var board = new Board(3, 3);
    board.init();

    var res = board.getCoordsByIndex(8);
    return res.x === 2 && res.y === 2;
}

function game3x3_cellNorthPositionForInitial_Undefined() {
    var board = new Board(3, 3);
    board.init();

    return board.getNorthIndexFor(0, 0) == undefined;
}

function game3x3_cellNorthPositionForCenter_1() {
    var board = new Board(3, 3);
    board.init();

    return board.getNorthIndexFor(1, 1) == 1;
}

function game3x3_cellSouthPositionForLast_Undefined() {
    var board = new Board(3, 3);
    board.init();

    return board.getSouthIndexFor(2, 2) == undefined;
}

function game3x3_cellSouthPositionForCenter_7() {
    var board = new Board(3, 3);
    board.init();

    return board.getSouthIndexFor(1, 1) == 7;
}

function game3x3_cellWestPositionForInitial_Undefined() {
    var board = new Board(3, 3);
    board.init();

    return board.getWestIndexFor(0, 0) == undefined;
}

function game3x3_cellWestPositionForCenter_3() {
    var board = new Board(3, 3);
    board.init();

    return board.getWestIndexFor(1, 1) == 3;
}

function game3x3_cellEastPositionForInitial_1() {
    var board = new Board(3, 3);
    board.init();

    return board.getEastIndexFor(0, 0) == 1;
}

function game3x3_cellEastPositionForCenter_5() {
    var board = new Board(3, 3);
    board.init();

    return board.getEastIndexFor(1, 1) == 5;
}

function game3x3_getNeighboursInitial() {

    var board = new Board(3, 3);
    board.init();
    var neighboursExpected = [1, 3];
    var neighboursFact = board.getNeighboursIndexes(0, 0);

    return Board.compareArrays(neighboursExpected, neighboursFact);
}

function game3x3_getNeighboursCenter() {

    var board = new Board(3, 3);
    board.init();
    var neighboursExpected = [1, 3, 5, 7];
    var neighboursFact = board.getNeighboursIndexes(1, 1);

    return Board.compareArrays(neighboursExpected, neighboursFact);
}


function game3x3_getNeighboursOfAnotherColorInitial() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3);
    board.init(stateBefore);
    var indexesAnotherColorExpected = [1, 3];

    var indexesAnotherColorFact = board.getNeighboursIndexesAnotherColor(0, 0);

    return Board.compareArrays(indexesAnotherColorExpected, indexesAnotherColorFact);
}

function game3x3_getNeighboursOfAnotherColorCenter() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3);
    board.init(stateBefore);
    var indexesAnotherColorExpected = [3, 5];

    var indexesAnotherColorFact = board.getNeighboursIndexesAnotherColor(1, 1);

    return Board.compareArrays(indexesAnotherColorExpected, indexesAnotherColorFact);
}

function game3x3_getCellsIndexesOfOwnColor_Inital() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3);
    board.init(stateBefore);
    var indexesAnotherColorExpected = [0];

    var indexesAnotherColorFact = [];
    board.getCellsIndexesOfOwnColor(0,0, indexesAnotherColorFact);

    return Board.compareArrays(indexesAnotherColorExpected, indexesAnotherColorFact);
}

function game3x3_getCellsIndexesOfOwnColor_Center() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3);
    board.init(stateBefore);
    var indexesAnotherColorExpected = [1,7];

    var indexesAnotherColorFact = [];
    board.getCellsIndexesOfOwnColor(1,1,indexesAnotherColorFact);

    return Board.compareArrays(indexesAnotherColorExpected, indexesAnotherColorFact);
}

function initialState_chosenCorrect() {

    var stateBefore = [
        1, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var stateExpected = [
        2, 2, 3,
        3, 2, 1,
        1, 2, 1];

    var board = new Board(3, 3);
    board.init(stateBefore)

    return Board.compareArrays(board.getState(), stateExpected);
}

// Run tests

console.log("initialState_sameAfterStart", initialState_sameAfterStart());
console.log("initialState_chosenCorrect", initialState_chosenCorrect());


console.log("game3x3_indexByCoordsLeftTop_0", game3x3_indexByCoordsLeftTop_0());
console.log("game3x3_indexByCoordsCenter_4", game3x3_indexByCoordsCenter_4());
console.log("game3x3_indexByCoordsLast_8", game3x3_indexByCoordsLast_8());

console.log("game3x3_getCoordsByIndexLeftTop",game3x3_getCoordsByIndexLeftTop());
console.log("game3x3_getCoordsByIndexRightBottom",game3x3_getCoordsByIndexRightBottom());


console.log("game3x3_cellNorthPositionForInitial_Undefined", game3x3_cellNorthPositionForInitial_Undefined());
console.log("game3x3_cellNorthPositionForCenter_1", game3x3_cellNorthPositionForCenter_1());

console.log("game3x3_cellSouthPositionForLast_Undefined", game3x3_cellSouthPositionForLast_Undefined());
console.log("game3x3_cellSouthPositionForCenter_7", game3x3_cellSouthPositionForCenter_7());

console.log("game3x3_cellWestPositionForInitial_Undefined", game3x3_cellWestPositionForInitial_Undefined());
console.log("game3x3_cellWestPositionForCenter_3", game3x3_cellWestPositionForCenter_3());

console.log("game3x3_cellEastPositionForInitial_1", game3x3_cellEastPositionForInitial_1());
console.log("game3x3_cellEastPositionForCenter_5", game3x3_cellEastPositionForCenter_5());

console.log("game3x3_getNeighboursInitial", game3x3_getNeighboursInitial());
console.log("game3x3_getNeighboursCenter", game3x3_getNeighboursCenter());

console.log("game3x3_getNeighboursOfAnotherColorInitial", game3x3_getNeighboursOfAnotherColorInitial());
console.log("game3x3_getNeighboursOfAnotherColorCenter", game3x3_getNeighboursOfAnotherColorCenter());

console.log("game3x3_getCellsIndexesOfOwnColor_Inital", game3x3_getCellsIndexesOfOwnColor_Inital());
console.log("game3x3_getCellsIndexesOfOwnColor_Center", game3x3_getCellsIndexesOfOwnColor_Center());