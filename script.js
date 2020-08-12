api_key='563492ad6f91700001000001a9fc8099f7244dbebb8a85d0e88b89d0'
let bearer = 'Bearer ' + api_key;
const searchResult=quary=>
{
    
    fetch(`https://api.pexels.com/v1/search?query=${quary}&per_page=10&page=2`,{
        method:'GET',
        withCredentials: true,
        headers:{
            'Authorization':bearer,
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(function(data) {
        renderData(data)
    console.log(data.photos);
    })
    .catch(function(error) {
    console.log(error);
    });
}

// debouncing
const getData=()=>{
    console.log(search.value)
    searchResult(search.value)
}
const doSomething=(func, delay)=>{
    let debounce
    return ()=>{
        clearTimeout(debounce)
        debounce=setTimeout(()=>{
            func.apply(this)
        },delay)
    }
}
let search= document.getElementById('searchId')
search.addEventListener('keyup', doSomething(getData, 500))

let imageRender= document.getElementById('displayId')
const renderData=(data)=>{
    imageRender.innerHTML=''
    console.log(data)
    data && data.photos.map((img)=>{
        let imgTag=document.createElement('img')
        imgTag.setAttribute('src', img.src.large)
        imgTag.setAttribute('alt', img.photographer)
        imgTag.setAttribute('width', 250)
        imgTag.setAttribute('height', 300)
        imgTag.setAttribute('style', 'margin:10px')
        console.log(img)
        imageRender.append(imgTag)
    })
    
    
}

imageRender.append('images loading ..')
