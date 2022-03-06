(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		dropZones = document.querySelectorAll(".drop-zone"),
		gameBoard = document.querySelector(".puzzle-board");

		const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"]
	/* theThumbnails collects all of the image elements into an array-	like container that looks like this:
	[
		<img src="images/buttonZero.jpg" alt="thumbnail">
		<img src="images/buttonOne.jpg" alt="thumbnail">
		<img src="images/buttonTwo.jpg" alt="thumbnail">
		<img src="images/buttonThree.jpg" alt="thumbnail">
	]
	*/

	function changeImgSet() {
		// the 'this' keyword refers to the element that triggers this function
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img}${this.dataset.bgref}.jpg`;

		});
	}

	function startDrag(event) {

		// save a reference to the element we're dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver(event) {
		//event is the user event (a click, a drag, a drop)
		//some elements have default behviour (like an anchor tag) -> we need to block that behaviour and script our own
		//that's what event.preventDefault() does -> override the default behaviour (block it)*/
		event.preventDefault();

	}

	function handleDrop(event) {
		event.preventDefault();
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);
		// appendChild (add child) is a built-in Js method that
		//adds element to a containing(parent) element
		this.appendChild(document.querySelector(`#${currentEl}`));
	}

	// add event handling here -. loop through theThumbnails array and add event handling to each image
	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeImgSet));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("dragover", handleDrop);
	});

})();
