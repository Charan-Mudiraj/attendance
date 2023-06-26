let input = document.getElementById("input");
let btn = document.getElementById("submit");
let result = document.getElementById("output");
let copy = document.getElementById("copy");

async function generate() {
    let rollnos = input.value.split(" ");
    let n = rollnos.length;
    for(let i=0; i<n; i++){
        rollnos[i] = Number(rollnos[i]);
    }
    rollnos.sort(function(a,b){return a-b});
    let file = await fetch("./rs.txt");
    let text = await file.text();

    let rollnos_abs = [];
    let flag = 0;
    for(let i=0; i<60; i++){
        if(rollnos[flag] != i+1){
            rollnos_abs.push(i+1);
        }
        else{
            flag++;
        }
    }
    let m = rollnos_abs.length;
    let names = text.split("\n");
    result.innerHTML = 'No.of Students: ' + n + '\n';
    for(let i=0; i<m; i++){
        result.innerHTML += rollnos_abs[i] + '.' + names[rollnos_abs[i]-1] + '\n';
    }
}
function copy_to_clpiboard(){
  result.select();
  result.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(result.value);
  alert("Attendance Copied !");
}
btn.addEventListener("click", generate);
copy.addEventListener("click", copy_to_clpiboard);
