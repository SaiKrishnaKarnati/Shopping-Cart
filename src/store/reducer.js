import {  ADD_TO_CART} from "./actions";
import {  REMOVE_FROM_CART} from "./actions";
import {INCREASE_PRODUCT_COUNT} from "./actions"
import {DECREASE_PRODUCT_COUNT} from "./actions"
const initialState ={
    cart :[
    ],
    Products:[
        {
            id:"1",
            title:"Realme 3 pro",
            image:{
                img1:"https://www.monotain.com/wp-content/uploads/2019/12/realme-5-pro.jpg",
                img2:"https://static.techspot.com/images/products/2019/smartphones/org/2019-05-20-product-7.jpg"
            },
           
            price:"10000",
            details:"Take photography a notch higher with the Realme 3 Pro as it comes with a 25 MP AI Selfie Camera and 16 MP + 5 MP Rear Camera with Sony IMX519 Sensor. The Qualcomm Snapdragon 710 AIE, multi-core AI Engine and Adreno 616 GPU redefine your smartphone experience.",
            seller:"Cloudtail India",
            quantity:"0"
    
    
        },
        {
            "id":"2",
            "title":"SAMSUNG GALAXY S20",
            "image":{"img1":"https://bab-assets3.babapi.ooo/img/othe/8687242/da/8f/samsunggalaxys20plusg985f128gbds4gblack01.png.403055da8f.999x600x550.png",
                     "img2":"https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Plus-500x500.jpg"  },
           
            "price":"100000",
            "details":"The Samsung Galaxy S20 is the best smartphone available right now. That covers both the S20 and the larger Galaxy S20 Plus, as there's very little difference between the two handsets aside from size and a couple of specs.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        },
        {
            "id":"3",
            "title":"Iphone X",
            "image":{
                "img1":"https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
                "img2":"https://image.shutterstock.com/image-vector/warsaw-poland-september-12-2017-260nw-1015020826.jpg"
            },
           
            "price":"100000",
            "details":"Meet the iPhone X - the device that's so smart that it responds to a tap, your voice, and even a glance. Elegantly designed with a large 14.73 cm (5.8) Super Retina screen and a durable front-and-back glass, this smartphone is designed to impress. What's more, you can charge this iPhone wirelessly.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        }
        ,
        {
            "id":"4",
            "title":"Apple iPhone 11 Pro Max",
            "image":{
                "img1":"https://www.att.com/shopcms/media/att/2019/Shop/360s/1000478/6137C-2.jpg",
                "img2":"https://phoneaqua.com/products/Iphone-11-Pro-Max-price-.webp"
            },
            "price":"20000",
            "details":"Four new textured matt glass finishes and stainless-steel design. Featuring a 16.51cm (6.5) Super Retina XDR display, the iPhone 11 Pro Max is as beautiful as it gets. The IP68 rating ensures that is water-resistant up to 4 meters for 30 minutes.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        }
        ,
        {
            "id":"5",
            "title":"Samsung Galaxy S20 Plus",
            "image":{
                "img1":"https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Plus-500x500.jpg",
                "img2":"https://cdn.vox-cdn.com/thumbor/prc3XGzWu2EZ_x2yB0kl_ndXT_I=/0x0:1280x800/1200x800/filters:focal(538x298:742x502)/cdn.vox-cdn.com/uploads/chorus_image/image/66203722/s20.0.png"
            },    
            "price":"20000",
            "details":"Say hello to the powerful and stylish Samsung Galaxy S20+ smartphone. Featuring a 64 MP high-resolution camera with 30X Zoom, you can capture stunning photos like never before on this smartphone. It also comes with a long-lasting 4500 mAh battery so you can stay entertained for a long time. That's not all, the Samsung Galaxy S20+ comes with the Infinity-O display and a seamless design, which makes it a must-have for all the gadget-enthusiasts.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        }
        ,
        {
            "id":"6",
            "title":"Apple iPhone 11",
            "image":{
                "img1":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704",
                "img2":"https://www.91-img.com/pictures/135857-v3-apple-iphone-11-pro-max-mobile-phone-large-1.jpg"
            },    
            "price":"20000",
            "details":"Featuring a 15.49-cm (6.1) all-screen Liquid Retina LCD and a glass and aluminum design, the iPhone 11 is as beautiful as it gets. Also, the IP68 rating ensures that is water-resistant up to 2 meters for 30 minutes.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        },
        {
            "id":"7",
            "title":"Realme X50 Pro 5G",
            "image":{
                "img1":"https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2020/04/Realme-X50-Youth-5G--500x500.png",
                "img2":"https://www.91-img.com/pictures/137400-v4-realme-x50-pro-5g-mobile-phone-large-1.jpg"
            }, 
            "price":"20000",
            "details":"Powered by a 7nm octa-core Qualcomm Snapdragon 865 processor which comes with A77 performance cores, the Realme X50 Pro can reach clock speeds of up to 2.84 GHz. Also, this smartphone features the first-ever updatable GPU driver on a mobile.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        },
        {
            "id":"8",
            "title":"Vivo iQOO 3",
            "image":{
                "img1":"https://www.mobilewithprices.com/products/Vivo-iQOO-Neo-3-5G.jpg",
                "img2":"https://www.gizmochina.com/wp-content/uploads/2020/01/Vivo-V17-India-edtion.jpg"
            }, 
            "price":"20000",
            "details":"Housing a Snapdragon 865 processor, 12 GB of LPDDR5 RAM, and a 48 MP quad rear-camera setup, this iQOO smartphone is every gadget freak’s must-have device. This phone features a 16.36-cm (6.44) FHD+ E3 Super AMOLED display, which offers a vivid and lifelike viewing experience. This phone also sports pressure-sensitive Monster Touch buttons, making it perfect for gaming enthusiasts.",
            "seller":"Lakshmi Retails",
            quantity:"0"
    
    
        }
    
     ],
     quantity:[0,0,0,0,0,0,0,0]
}



const reducer = (state = initialState , action) =>
{
    let updatedcart ={...state};
    let updatedItemIndex;
    
    switch(action.type)
    {
       
        case ADD_TO_CART :
            let num = parseInt(action.product.quantity) + 1
            console.log(num)
            if(state.cart.includes(action.product))
            {
                alert("Please increase the product at cart page");
            }
            else{
           return{
               ...state,
               cart:state.cart.concat(action.product) ,
              
               quantity:state.quantity.map((value,i) =>{
                if(action.product.id-1 === i)
                {
                    return value +=1
                }
                return value;
            })
               
               
        }}break;
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter(item => item !== action.product),
               
            }
        case INCREASE_PRODUCT_COUNT:
           console.log(state.quantity[parseInt(action.product.id)]+1)
           console.log(state.quantity[parseInt(action.product.id)]+1)

            console.log(typeof parseInt(action.product.id))
            console.log(typeof state.quantity)
            return{
                ...state,
               
                quantity:state.quantity.map((value,i) =>{
                    if(action.product.id-1 === i)
                    {
                        return value +=1
                    }
                    return value;
                })
    

               }
        case DECREASE_PRODUCT_COUNT:
            if(state.quantity[action.product.id -1] === 0)
                {
                    alert("please add something");
                }
                else{
                    return{
                    ...state,
                    
                    quantity:state.quantity.map((value,i) =>{
                        if(action.product.id-1 === i)
                        {
                            return value -=1
                        }
                        return value;
                    })
        
                } }
            


       


default:
   
       


           
    }
   
    
    return state;
}


export default reducer;
