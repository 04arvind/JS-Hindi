// Immediately invoked function expression (iife):

(function chai(){       // this is named IIFE : 
    console.log(`DB connected`)
}) ();
// chai()

( (name)=> {
    console.log(`DB Connected Two ${name}`)
})('Arvind')