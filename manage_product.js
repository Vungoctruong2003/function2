let arr = [];


function showProduct() {
    let sout;
    sout = "<table>"
    for (let i = 0; i < arr.length; i++) {
        sout = sout + "<tr>";
        sout = sout + "<td>" + arr[i] + "</td>";
        sout = sout + "<td> <button id='" + i + "' onclick='editProduct(this.id)'" + "> Edit </button> </td> ";
        sout = sout + "<td> <button id='" + i + "' onclick='deleteProduct(this.id)'" + "> Delete </button> </td> ";
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById("iptProduct").value = "";
    document.getElementById("show").innerHTML = sout
    document.getElementById("countProduct").innerHTML = arr.length + "product";
}


function addProduct() {
    let NewProduct = document.getElementById("iptProduct").value;
    arr.push(NewProduct);
    showProduct(arr)
}

function editProduct(index) {
    arr[index] = prompt()
    showProduct(arr)
}


function deleteProduct(index) {
if (confirm("Are you sure???")){
    arr.splice(index,1)
}
    showProduct(arr)
}

