function calculateTheAreaOfRectangle() {
    const length = parseFloat(
        document.getElementById("length-of-rectangle").value
    );
    // console.log(length);
    const width = parseFloat(
        document.getElementById("width-of-rectangle").value
    );
    // console.log(width);
    const areaOfRectangle = length * width;
    console.log(areaOfRectangle);
}
