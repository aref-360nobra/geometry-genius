function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById("base-of-triangle");
    const triangleBaseValue = parseFloat(triangleBaseInput.value);
    const triangleHeightValue = parseFloat(
        document.getElementById("height-of-triangle").value
    );
    // console.log(triangleBaseValue);
    // console.log(triangleHeightValue);

    const area = 0.5 * triangleBaseValue * triangleHeightValue;
    console.log(area);
}
