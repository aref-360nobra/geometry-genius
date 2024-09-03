function calculateParallelogram() {
    const base = parseFloat(
        document.getElementById("base-of-parallelogram").value
    );
    const height = parseFloat(
        document.getElementById("height-of-parallelogram").value
    );

    const area = base * height;
    console.log(area);
}
