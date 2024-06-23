//your JS code here. If required.
const numberInput=document.getElementById('ip')
const startButton=document.getElementById('btn')
const outputDiv=document.getElementById('output')

const renderOutput=(num)=>{
	outputDiv.textContent=`Result: ${num}`
}
const renderFinalOutput=(num)=>{
	outputDiv.textContent=`Final Result: ${num}`
}

const promise1=()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			const num=numberInput.value
			res(num)
		},2000)
	})
}

const promise2=(num)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(num)
		},2000)
	})
}

const multiplyBy2=(num)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(num*2)
		},1000)
	})
}

const subtractBy3=(num)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(num-3)
		},1000)
	})
}

const divideBy2=(num)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(num/2)
		},1000)
	})
}

const addBy10=(num)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(num+10)
		},1000)
	})
}

const startOperation=()=>{
	promise1()
		.then((num)=>{
			renderOutput(num)
			return promise2(num)
		})
		.then((num)=>{
			renderOutput(num)
			return multiplyBy2(num)
		})
		.then((num)=>{
			renderOutput(num)
			return subtractBy3(num)
		})
		.then((num)=>{
			renderOutput(num)
			return divideBy2(num)
		})
		.then((num)=>{
			renderOutput(num)
			return addBy10(num)
		})
		.then((num)=>{
			renderFinalOutput(num)			
		})
		.catch((err)=>{
			console.error(err)
		})
}

startButton.addEventListener('click',startOperation)



