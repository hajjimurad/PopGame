/**
 * Created by murad on 17/10/15.
 */
function Board(size, colors) {

    var self = this;
    self.size = size;
    self.colors = colors;
    self.cells = [];
    self.initIndex = 0;

    self.init = function (stateArray) {
        if (stateArray) {
            for (var i in stateArray) {
                self.cells[i] = stateArray[i];
            }
        } else {
            for (var i = 0; i < self.size * self.size; i++) {
                self.cells[i] = 0;
            }
        }
    };

    self.getState = function () {
        return self.cells;
    };

    self.getNorthIndexFor = function (i, j) {
        return self.getIndexByCoords(i - 1, j);
    };

    self.getSouthIndexFor = function (i, j) {
        return self.getIndexByCoords(i + 1, j);
    };

    self.getWestIndexFor = function (i, j) {
        return self.getIndexByCoords(i, j - 1);
    };

    self.getEastIndexFor = function (i, j) {
        return self.getIndexByCoords(i, j + 1);
    };

    self.getNeighboursIndexes = function (i, j) {
        var result = [];

        var resultRaw = [
            self.getNorthIndexFor(i, i),
            self.getEastIndexFor(i, j),
            self.getSouthIndexFor(i, j),
            self.getWestIndexFor(i, j)];

        for (var i = 0; i < resultRaw.length; i++) {
            if (resultRaw[i]) {
                result.push(resultRaw[i]);
            }
        }

        return result.sort();
    };

    self.getNeighboursIndexesAnotherColor = function (i, j) {
        var cellIndex = self.getIndexByCoords(i, j);
        var cellColor = self.cells[cellIndex];
        var result = [];

        var neighboursIndexes = self.getNeighboursIndexes(i, j);
        for (var i in neighboursIndexes) {
            if (self.cells[neighboursIndexes[i]] !== cellColor) {
                result.push(neighboursIndexes[i]);
            }
        }
        return result;
    };

    self.getIndexByCoords = function (i, j) {
        if (i < 0 || i >= self.size)
            return undefined;

        if (j < 0 || j >= self.size)
            return undefined;

        return i * self.size + j;
    };

    self.getCoordsByIndex = function (index) {
        return {
            x: Math.floor(index / self.size),
            y: index % self.size
        }
    }

    self.getCellsIndexesOfOwnColor = function (i, j, result) {
        var currentIndex = self.getIndexByCoords(i, j);
        var currentColor = self.cells[currentIndex];

        var neighboursIndexes = self.getNeighboursIndexes(i, j);
        for (var i in neighboursIndexes) {
            if (neighboursIndexes[i] === currentColor && !inArray(result, neighboursIndexes[i])) {
                result.push(neighboursIndexes[i]);

                var coords = self.getCoordsByIndex(neighboursIndexes[i]);
                self.getCellsIndexesOfOwnColor(coords.x, coords.y, result);
            }
        }

        return result;
    }

    var inArray = function (a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }
};

Board.compareArrays = function (stateBefore, stateAfter) {

    if (!stateBefore || !stateAfter)
        return false;

    if (stateBefore.length != stateAfter.length)
        return false;

    for (var index in stateBefore) {
        if (stateBefore[index] !== stateAfter[index]) {
            return false;
        }
    }
    return true;
};