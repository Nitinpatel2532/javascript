let str = "Hello"
console.log(str)
console.log(str[1]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let ct = str.repeat(3)

console.log(ct);



// (` `)template litersals-->use html or varivale inside js use backtick
let field="Trainer"
let name1 = `
HELLO
MY name is nitin patel
how are you
you are  technical ${field}

`
console.log(name1)
// console.log(name1.length());

let fname = "nitin"
let lname = " patel"
console.log(fname+lname)

let name = fname.concat(" ", lname)
console.log(name);
