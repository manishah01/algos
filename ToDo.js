//**PUSH FRONT** 
//Given an array and an additional value
//insert this value at the beginning of the array.
//Do this without using any built-in array methods.

function pushToFront(arr, newValue) {
	for(i = arr.length; i > 0; i--)
		arr[i] = arr[i-1] 
	arr[0] = newValue;
	console.log(arr)
}
pushToFront([1,2,3,4,5],6);

//**POP FRONT**
//Given an array, 
//remove and return the value at the beginning of the array
// Do this without using any built-in array methods except pop().

function popFront(arr) {
	let val = arr[0];
	for(let i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
	return val;
}

console.log(popFront([1,2,3,4,5,6]))


//**Insert At**
//Given an array, index, and additional value, 
//insert the value into array at given index. 
//Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, index, val) {
	for(let i = arr.length; i > index; i--)
		arr[i] = arr[i-1]
	
	arr[index] = val;
	console.log(arr)
}
insertAt([0,0,0,0],2,1)

//Remove At
//Given an array and an index into array, 
//remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). 
//Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index) {
	Remove = arr[index];

	for(let i = index; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
	console.log(Remove)
    return Remove;
}
removeAt([1,2,3,4],0)

//Swap positions of successive pairs of values of given array.
// If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
//For example, change input ["Brendan",true,42] to [true,"Brendan",42].
//As with all array challenges, do this without using any built-in array methods.

function swap(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	console.log(arr)
}
swap([1,2,3,4,5])

//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

//Second: Solve this without using any nested loops.

function removeDuplicates(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	console.log(newArr)
	return newArr;
}

removeDuplicates([1,2,3,3,4])



