(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board");

	/* theThumbnails collects all of the image elements into an array-	like container that looks like this:
	[
		<img src="images/buttonZero.jpg" alt="thumbnail">
		<img src="images/buttonOne.jpg" alt="thumbnail">
		<img src="images/buttonTwo.jpg" alt="thumbnail">
		<img src="images/buttonThree.jpg" alt="thumbnail">
	]
	*/

	function changeBGImg() {
			// the 'this' keyword refers to the element that triggers this function
			//debugger;
			gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	// add event handling here -. loop through theThumbnails array and add event handling to each image
	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBGImg));

})();
