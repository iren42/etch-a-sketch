const MAXSIZE = 100;
const DEFAULTSIZE = 16;

const	resizeBtn = document.querySelector("#resize");
const	body = document.querySelector("body");

function createGrid(size = DEFAULTSIZE)
{
	const container = document.createElement("div");
	container.classList.add("container");

	body.append(container);
	let	i = 0;
	let	j = 0;
	while (i++ < size)
	{
		const	row = document.createElement("div");
		row.classList.add("row");
		container.append(row);

		j = 0;
		while (j++ < size)
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

function eraseGrid()
{
	const container = document.querySelector(".container");
	if (container.parentNode)
	{
		container.parentNode.removeChild(container);
		console.log("container successfully removed");
	}
}

function	isValid(size)
{
	if (size <= 100 && size > 1)
		return (true);
	return (false);
}

resizeBtn.addEventListener("click", event => {
	let	sizeStr = prompt("Enter new dimensions: ", "16");
	let	size = parseInt(sizeStr);
	if (isValid(size))
	{
		eraseGrid();
		createGrid(size);
	}
	else
	{
		console.log("You wrote: '" + sizeStr + "', it's not a valid number.");
	}
});

createGrid();
