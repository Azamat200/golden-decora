function burgerFunc(instance)
{
	let burg=document.querySelector('.header-top__mob')
	

	 instance.classList.contains('active')?instance.classList.remove('active'):instance.classList.add('active');
	 burg.classList.contains('active')?burg.classList.remove('active'):burg.classList.add('active');
}


function btnFunc(instance)
{
	
	let form=document.querySelector('.dopcontent__form')
	//let sent=document.querySelector('.dopcontent__form-send') //переменная для конпки форм (на запас)

	 instance.classList.contains('active')?instance.classList.remove('active'):instance.classList.add('active');
	 form.classList.contains('active')?form.classList.remove('active'):form.classList.add('active');
	 //sent.classList.contains('active')?sent.classList.remove('active'):sent.classList.add('active');
}


function prodFunc(instance, num)
{
	console.log(num);
	let prod = document.querySelectorAll('.catalog__list-items')
	let btn = document.querySelectorAll('.catalog__block')

	for(let i = 0; i < prod.length; i++)
	{
		prod[i].classList.remove('active')
		btn[i].classList.remove('active')
	}
	instance.classList.add('active')
	btn[num].classList.add('active')
}