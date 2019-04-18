export function drawFlower(ctx: CanvasRenderingContext2D,
                           circle: {x: number, y: number, radius: number},
                           frequency: number = 2.0, magnitude: number = 0.5,
                           independence: number = 0.1, spacing: number = 0.01,
                           count: number = 200): void {
    // adjust the radius so will have roughly the same size irregardless of magnitude
    let current = {...circle};
    current.radius /= (magnitude + 1);

    for (let i = 0; i < count; ++i) {
        // draw a circle, the final parameter controlling how similar it is to
        // other circles in this image
        drawDeformedCircle(ctx, current,
                           frequency, magnitude,
                           i * independence);

        // shrink the radius of the next circle
        current.radius *= (1 - spacing);
    }
}