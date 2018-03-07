'use strict';


//1. Binary search Dewey number
//2. If there are > 1 dewey numbers, search for book title
//3. return true or false, book found or book title.

const library = [
	{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
	{ author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
	{ author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
	{ author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
	{ author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
	{ author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
	{ author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
	{ author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
	{ author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
	{ author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function findABook(arr, dewey, start = 0, end = arr.length){
	console.log(dewey);
  
	if (arr.length === 0){
		console.log('Array is empty');
		return;
	}
	/*arr = arr.map( book => {
		return Object.assign({}, book, {
			author: book.author,
			dewey: book.dewey,
			title: book.title
		});
  });
  */
	//console.log(JSON.stringify(arr));
  
	const index = Math.floor((start + end ) /2);
	const item = arr[index];
  
	if ( start > end ){
		return -1;
	}
	else if ( item.dewey === dewey){
		return item.dewey;
	}
	else if ( item.dewey < dewey ){
		return findABook(arr, dewey, index + 1, end);
	}
	else if ( item.dewey > dewey) {
		return findABook(arr, dewey, start, index -1 );
	}
}


function main(){


	console.log(findABook(library, '005.2762'));
	console.log(findABook(library, '623.82509051'));
	console.log(findABook(library, '005.44684'));
}

main();