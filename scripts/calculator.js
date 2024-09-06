import { getInputValueById, multiplier } from "./function.js";

document
    .getElementById("calculateTriangleAreaBtn")
    .addEventListener("click", function () {
        const baseOfTriangle = getInputValueById("base-of-triangle");
        const heightOfTriangle = getInputValueById("height-of-triangle");
        const areaOfTriangle =
            0.5 * multiplier(baseOfTriangle, heightOfTriangle);
        console.log("area of tingle is", areaOfTriangle);
    });

document
    .getElementById("calculateRectangleAreaBtn")
    .addEventListener("click", function () {
        const widthOfRectangle = getInputValueById("width-of-rectangle");
        const lengthOfRectangle = getInputValueById("length-of-rectangle");
        const areaOfRectangle = multiplier(widthOfRectangle, lengthOfRectangle);
        console.log("area of rectangle is ", areaOfRectangle);
    });

document
    .getElementById("calculateParallelogramBtn")
    .addEventListener("click", function () {
        const baseOfParallelogram = getInputValueById("base-of-parallelogram");
        const heightOfParallelogram = getInputValueById(
            "height-of-parallelogram"
        );
        const areaOfParallelogram = multiplier(
            baseOfParallelogram,
            heightOfParallelogram
        );
        console.log("area of parallelogram ", areaOfParallelogram);
    });

document
    .getElementById("calculateRhombusBtn")
    .addEventListener("click", function () {
        const firstDiagonal = getInputValueById("first-diagonal-of-rhombus");
        const secondDiagonal = getInputValueById("second-diagonal-of-rhombus");
        const areaOfRhombus = 0.5 * multiplier(firstDiagonal, secondDiagonal);
        console.log("area of rhombus ", areaOfRhombus);
    });

document
    .getElementById("calculatePentagonBtn")
    .addEventListener("click", function () {
        const p = getInputValueById("pOfPentagon");
        const b = getInputValueById("bOfPentagon");
        const areaOfPentagon = 0.5 * multiplier(p, b);
        console.log("area of pentagon is ", areaOfPentagon);
    });

document
    .getElementById("calculateEllipseBtn")
    .addEventListener("click", function () {
        const pi = Math.PI;
        const aOfEllipse = getInputValueById("aOfEllipse");
        const bOfEllipse = getInputValueById("bOfEllipse");
        const areaOfEllipse = pi * multiplier(aOfEllipse, bOfEllipse);
        console.log("Area of the ellipse is ", areaOfEllipse);
    });
