// JavaScript Program to Print the Fibonacci Sequence

// addition of previous 2
//  print = f
//       r = f + s
//       f = s
//       l = r   

function fibbo(first, second, upto) {

    let fibbonaciee = [];

    for (let i = 1; i < upto; i++) {
        fibbonaciee.push(first);

        let next = first + second;
        first = second;
        second = next;
    }
    console.log(fibbonaciee.join(', '));
}

fibbo(0, 1, 10)

