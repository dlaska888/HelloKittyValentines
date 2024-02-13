const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const imgContainer = document.querySelector(".img-container");

yesBtn.addEventListener("mouseover", onAcceptHover);
noBtn.addEventListener("mouseover", onDeclineHover);

yesBtn.addEventListener("click", onAcceptClick);
noBtn.addEventListener("click", onDeclineClick);

yesBtn.addEventListener("mouseleave", reset);
noBtn.addEventListener("mouseleave", reset);

function onAcceptHover() {
	setImage(1);
}

function onDeclineHover() {
	setImage(2);
}

function onAcceptClick() {
	setImage(3);
    document.querySelector("h1").innerHTML = "❤️❤️❤️ <span class='text-outline'>Love You So Much</span> ❤️❤️❤️";
    document.querySelectorAll("button").forEach((btn) => btn.remove());
}

function onDeclineClick() {
	setImage(4);
    document.querySelector("h1").innerHTML = "❤️ <span class='text-outline'>I Still Love You</span> ❤️";
    document.querySelector("h1").classList.add("text-decline");

	yesBtn.innerHTML = "Changed my mind!";
	yesBtn.removeEventListener("mouseover", onAcceptHover);
    yesBtn.removeEventListener("mouseleave", reset);

	noBtn.remove();
}

function reset() {
	setImage(0);
}

function setImage(index) {
	imgContainer.querySelectorAll("img").forEach((img, i) => {
		index === i
			? img.classList.add("active")
			: img.classList.remove("active");
	});
}