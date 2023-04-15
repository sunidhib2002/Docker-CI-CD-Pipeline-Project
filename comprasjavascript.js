const panels=document.querySelectorAll('.panel');

// console.log(panels);

function expandingcards()
{
	let i;
	for(i=0;i<panels.length;i++)
	{	
		panels[i].addEventListener('click',removeclass);
		panels[i].addEventListener('click',addclass.bind(this,i));
	}
}


function addclass(i)
{
	panels[i].classList.add('active');
}

function removeclass()
{
	for(i=0;i<panels.length;i++)
	{
		panels[i].classList.remove('active');
	}
}
expandingcards();


var ProdImg = document.getElementByClassName("ProdImg");
var smallimg = document.getElementByClassName("small-img");
	smallimg[0].onclick = function()
	{

		ProdImg.src=smallimg[0].src;
	}
	smallimg[1].onclick = function()
	{

		ProdImg.src=smallimg[1].src;
	}
	smallimg[2].onclick = function()
	{

		ProdImg.src=smallimg[2].src;
	}
	smallimg[3].onclick = function()
	{

		ProdImg.src=smallimg[3].src;
	}
	smallimg[4].onclick = function()
	{

		ProdImg.src=smallimg[3].src;
	}












