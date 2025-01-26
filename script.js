const NUMBEROFROWS = 16;
const NUMBEROFCOL = 16;

const	body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");

body.append(container);

function createGrid()
{
	let	i = 0;
	let	j = 0;
	while (i++ < NUMBEROFROWS)
	{
		const	row = document.createElement("div");
		row.classList.add("row");
		container.append(row);
		j = 0;
		while (j++ < NUMBEROFCOL)
		{
			const	col = document.createElement("div");
			col.classList.add("square");
			row.append(col);

			col.addEventListener("mouseover", (event) => {
				col.style.backgroundColor = "blue";
			});
		}
	}
}
createGrid();
