const p = document.querySelector("#para");
const masjidImage = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
const chandImage = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"

const image = document.querySelector("#image");

// const masjid= document.querySelector("#masjid")
// const chand= document.querySelector("#chand")

function values(){
    // console.log(Math.ceil(Math.random()*2));

    if(Math.ceil(Math.random()*2) === 2){

        p.innerHTML ="p toss jeet gaye hai"
        image.src = chandImage
    }else{
        
        p.innerHTML ="Ap toss har gaye hai"
        image.src = masjidImage
    }
}
function second(){
    // console.log(Math.ceil(Math.random()*2));


    if(Math.ceil(Math.random()*2) === 1){

        p.innerHTML ="Ap toss jeet gaye hai"
        image.src = masjidImage 


    }else{

        p.innerHTML ="Ap toss har gaye hai"
        image.src = chandImage

    }

}