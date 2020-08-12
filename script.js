api_key='563492ad6f91700001000001a9fc8099f7244dbebb8a85d0e88b89d0'
const url='https://api.pexels.com/v1/search?query=nature&per_page=10&page=2'
let bearer = 'Bearer ' + api_key;
fetch(url,{
    method:'GET',
    withCredentials: true,
    headers:{
        'Authorization':bearer,
        "Content-Type": "application/json"
    }
}).then(resp => resp.json())
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});