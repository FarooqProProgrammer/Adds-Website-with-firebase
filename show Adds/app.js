import  {getData} from '../config/firebase.js'
// let doc = []
var data;
async function readData(){

    data = await getData()

    // doc.push(data)
    console.log(data);   


    let row1 = document.getElementById('row1')
    let row2 = document.getElementById('row2')
    let data1 = []
    let data2 = []
    var i = 0; 
    for( i ;i < data.length;i++){

        if(i != 4){
            data1.push(data[i])
        }
   }

   i = 4

   if( i == 4) {
        for(i;i<data.length;i++) {
            data2.push(data[i])
        }
   }


   console.log(data1);
   console.log(data2);



   for(let k = 0 ;k<data1.length;k++ ) {
//  // ========================= card ==========================================
        let card = document.createElement('div')
        card.setAttribute('class','card')
        

        //  ========================= card_img ==========================================
        let card_img = document.createElement('div')
        card_img.setAttribute('class','card_img')
        // card_img.setAttribute('id','img')





        // ======================= img child =========================================
        let img_tag  = document.createElement('img')
        img_tag.setAttribute('class','img_class')
        img_tag.setAttribute('src',data1[k].url)
        

        card_img.appendChild(img_tag)
        card.appendChild(card_img)



        //  let image = document.getElementById('img')
        //  image.style.backgroundImage = `url(${data[i].url})`
        //  image.style.backgroundSize = '100% 100%'


        // ======================== card_text ======================================
        let card_text = document.createElement('div')
        card_text.setAttribute('class','card-text')


        // ========================= product information ============================
        let h_3 = document.createElement('h3')
        h_3.innerHTML = data1[k].title


        let h_4 = document.createElement('h4')
        h_4.innerHTML = data1[k].price


        let h_5 = document.createElement('h4')
        h_5.innerHTML = data1[k].Address

        card_text.appendChild(h_3)
        card_text.appendChild(h_4)
        card_text.appendChild(h_5)
        


        card.appendChild(card_text)

        row1.appendChild(card)

   }


   for(let d = 0 ;d < data2.length;d++) {
    let card = document.createElement('div')
            card.setAttribute('class','card')
            

            //  ========================= card_img ==========================================
           let card_img = document.createElement('div')
           card_img.setAttribute('class','card_img')
           // card_img.setAttribute('id','img')
        

        
        

            // ======================= img child =========================================
            let img_tag  = document.createElement('img')
            img_tag.setAttribute('class','img_class')
            img_tag.setAttribute('src',data2[d].url)
            

            card_img.appendChild(img_tag)
            card.appendChild(card_img)



           //  let image = document.getElementById('img')
           //  image.style.backgroundImage = `url(${data[i].url})`
           //  image.style.backgroundSize = '100% 100%'


            // ======================== card_text ======================================
            let card_text = document.createElement('div')
            card_text.setAttribute('class','card-text')


            // ========================= product information ============================
            let h_3 = document.createElement('h3')
            h_3.innerHTML = data2[d].title


            let h_4 = document.createElement('h4')
            h_4.innerHTML = data2[d].price


            let h_5 = document.createElement('h4')
            h_5.innerHTML = data2[d].Address

            card_text.appendChild(h_3)
            card_text.appendChild(h_4)
            card_text.appendChild(h_5)
            


            card.appendChild(card_text)
        
            row2.appendChild(card)


   }


}

readData()
// console.log(data)




//  if(i == 4 ) {
    


//  }