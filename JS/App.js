
function calculate() {
    const Price = Number(document.getElementById("Price").value)
    const QTY = Number(document.getElementById("Qty").value)
    const amount = document.getElementById("Amount")
    
    amount.innerHTML =  "N " + Number(Price * QTY)
}


let AddBtn = document.querySelector(".AddBtn")
let Output = document.querySelector(".check2")
let order2 = document.querySelector('order2')

let DataArray = JSON.parse(localStorage.getItem("DataInfo")) || []
let DataArray2 = JSON.parse(localStorage.getItem("DataInfo2")) || []
let DataArray3 = JSON.parse(localStorage.getItem("DataInfo3")) || []
let DataArray4 = JSON.parse(localStorage.getItem("DataInfo4")) || []

AddBtn.onclick = () => {
    const Descr = document.getElementById('Descr').value
    const Price = document.getElementById("Price").value
    const QTY = document.getElementById("Qty").value
    const amount = document.getElementById("Amount").innerHTML

    const together = Descr + ' ' + Price + ' ' +  QTY + ' ' +  amount

    DataArray.push(Descr)
    localStorage.setItem("DataInfo", JSON.stringify(DataArray))
    
    DataArray2.push(QTY)
    localStorage.setItem("DataInfo2", JSON.stringify(DataArray2))
    
    DataArray3.push(Price)
    localStorage.setItem("DataInfo3", JSON.stringify(DataArray3))
    
    DataArray4.push(amount)
    localStorage.setItem("DataInfo4", JSON.stringify(DataArray4))

    window.location.reload()
}

DataArray.forEach(element =>
DataArray2.forEach(element2 =>
DataArray3.forEach(element3 =>
DataArray4.forEach(element4 => {
    const adding = `
    <div class="props">
    <div class="outputProps">${element}</div>
    <div class="outputProps">${element2}</div>
    <div class="outputProps">${element3}</div>
    <div class="outputProps">${element4}</div>
    </div>
    `
    Output.innerHTML += adding
}))));


PreviewI = document.getElementById('btnreview')
PreviewI.onclick = ()=> {
  popup = document.getElementById('preview2').style.display = 'flex';
  console.log(popup)
}

