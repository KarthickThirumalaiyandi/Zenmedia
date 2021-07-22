apiurl = "https://60f8585eee56ef00179758a1.mockapi.io/queryrepo/"
getquery()
async function createpost()
{
 console.log("hi --")
    
    //console.log(document.getElementById("fn").value)
    //console.log(document.getElementById("fp").value)
    //console.log(document.getElementById("ft").value)
    //console.log(document.getElementById("b1").value)


    try{
        let resp = await fetch(apiurl)
        let data = await resp.json()
        let date1 = new Date().setUTCDate;
        let name1 = document.getElementById("fn").value 
        let password1 = document.getElementById("fp").value 
        let id1 = (data.length + 1)
        let title1 = document.getElementById("ft").value
        let query1 = document.getElementById("fq").value
        //    return data
        putquery(date1,name1,password1,title1,query1,id1)

    
    }
    catch(error)
    {
        console.log(error)
    }
}

async function putquery(date,name,password,title,query,id)
{
await fetch(apiurl, {
    method: "POST",
    body: JSON.stringify({date,name,password,title,query,id}),
    headers: {
        "Content-Type" : "application/json"
    },
});
//console.log(id)
document.querySelector("form").reset()
alert("query updated")

}

async function getquery()
{
    let resp = await fetch(apiurl)
    let data = await resp.json()
    console.log(data)
   // console.log(data[0].title)
   // console.log(data[0].query)
    //console.log(data[0].name)
    let j=0

    //console.log("hi" + document.getElementById("b1").value)
    for (let i=0;i<9;i++)
    {   
        console.log("hi")
       // if (data[i].title)
       j = j + i
        let title1 = data[i].title + `<p class="p1"> Created by ${data[i].name}</p>`
        document.getElementById(data[i].id).innerHTML = title1
    }   

}

async function getnquery(id)
{
    
    let resp = await fetch(apiurl + id)
    let data = await resp.json()
    console.log(data)
   // console.log(data[0].title)
   // console.log(data[0].query)
    //console.log(data[0].name)
    //let j=0

    //console.log("hi" + document.getElementById("b1").value)
    //for (let i=0;i<8;i++)
    //{   
        console.log("hi")
       // if (data[i].title)
      // j = j + i
       // let title1 = data[i].title + `<p class="p1"> Created by ${data[i].name}</p>`
       document.getElementById("h1").innerHTML = data.title
       document.getElementById("q1").innerHTML = data.query
       let tbody = document.getElementById("tbody")
       tbody.innerHTML = ""
        let i = 1
       data.comments.forEach((element) => {
        tbody.innerHTML += ` 
            <tr>
                <td>Comment : ${i++}</td>
            </tr>
        
        <tr>
            <td><div class="d6">${element}</div></td>
        </tr>
        
        `;
       // tbody.innerHTML += `
       // <div class="col-sm-4 col-md-4 col-lg-3">
       //         <div class="cardc">
       //             <div class="card-bodyc" >
       //                <p class="card-textc">${element}</p>
        //            </div>
        //        </div>    
         //   </div>
           
    });
}

