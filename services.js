function getAll(){
    const respon = axios.get("http://localhost:8080/databarang/tokobunga")
    const dr = respon.then(resp => resp.data)
    return dr
}

function getbyID(data){
    await axios.get("http://localhost:8080/databarang/tokobunga/{id}", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function create(data){
    await axios.post("http://localhost:8080/databarang/tokobunga", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
    
async function update(data){
    await axios.put("http://localhost:8080/databarang/tokobunga", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function del(data){
    await axios.delete("http://localhost:8080/databarang/tokobunga", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}