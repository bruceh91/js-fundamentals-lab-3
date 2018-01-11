
let friendArr = ["Andy", "Sari", "Ernest", "Travis", "Dante"];
let count = 99;



function singSong (friendArr) {
    let name = "";
    let z = 0;
    for (let i = 0; i < friendArr.length; i++) {
        name = friendArr[i];
        tempVal = name.toUpperCase();
        console.log(tempVal + ":");
        for (let j = count; j > 0; j--)
            
            if (j>1) {
                z = j - 1
                console.log(name + " saw " + j + " aliens in the sky, " + name + " saw " + j + " aliens. Shoot one down. Take one to a secret base in Nevada, and deny it's existance. " + z + " aliens in the sky.");
            } else {
                console.log(name + " saw " + j + " alien in the sky. " + name + " saw " + j + " alien. Shoot one down. Take it to a secret base in Nevada, and deny it's existance. No more aliens in the sky.");
            }
    }
}

singSong (friendArr);

