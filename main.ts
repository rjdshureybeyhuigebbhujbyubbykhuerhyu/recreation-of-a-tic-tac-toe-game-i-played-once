function Reset_board () {
    The_grid = [[0]]
    for (let i = 0; i <= 8; i++) {
        if (The_grid.length - 1 != i) {
            The_grid.push([0])
        }
        for (let j = 0; j <= 8; j++) {
            if (The_grid[i].length - 1 != j) {
                The_grid[i].push(0)
            }
        }
    }
    console.log(The_grid.length)
    console.log(The_grid[0].length)
}
let The_grid: number[][] = []
Reset_board()
