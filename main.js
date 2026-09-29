const upButton =document.querySelector("i.up-button")
// Up Button Icon



const popUp =document.querySelector(".pop-up");
// Pop Up



const logo =document.querySelector(".logo");
const menu = document.querySelector("i.menu");
const  navLinks = document.querySelector("ul.nav-links")
const navItems  =document.querySelectorAll("ul.nav-links li a");
const cartIcon = document.querySelector(".nav-action i.fa-cart-shopping");
let cartIconValue =document.querySelector(".shoping-value");
// all head Element



const heroBox =document.querySelector(".hero");
const heroBtns =document.querySelector(".hero-btns");
// watch Our Story Button 




const productBox =document.querySelector(".products");
const allProductCategory =document.querySelectorAll(".product-category .box");
// All Product 




const storyBox =document.querySelector(".story");
const storyContainer =document.querySelector(".story-container");
const storyImgContainer =document.querySelector(".story-img");
const storyImg =document.querySelector(".story-img > img");
// Story Container 






const passionBox =document.querySelector(".passion");
const passionContainer=document.querySelector(".passion .container");
// Passion Container


const dealBox  =document.querySelector(".deals");
const dealContainer  =document.querySelector(".deals .container");
// Deals
console.log(dealContainer);




const emailInput = document.querySelector("input[type='text']");
const subscribeForm = document.querySelector("form");
const alertEmailMessage =document.querySelector(".alert-email-message");
// Contact 






const customerContainer = document.querySelector(".customer-container");
const arrows = document.querySelectorAll(".switcher i");
// All Related to Customer Testimonial










const shopBox = document.querySelector(".shop")
const shopContainer = document.querySelector(".shop .container")
const allItem  = document.querySelectorAll(".item-container .item");
let addChartBtns = document.querySelectorAll(".add-to-cart") 
const viewBtn  = document.querySelector(".item-container .item-head button.view ")
const itemContainerTitle =document.querySelector(".item-container .item-head h2");
const viewTxt  = document.querySelector(".item-container .item-head button.view span")
const viewIcon = document.querySelector(".item-container .item-head button.view i")
const allProductBox =document.querySelectorAll(".category-section .product-box");
const productName = document.querySelector(".category-section .product-box .category-name")
// All Shop 
// =======================================================================================






// =======================================================================================
// All Related To Cart Box 

const cartBody = document.querySelector(".cart-info .cart-body")

const cartOverlay = document.querySelector(".cart-overlay");
const closeBtn =document.querySelector(".cart-drawer .fa-xmark");
const cartBox = document.querySelector(".cart-overlay .cart-drawer");



// let cartItemNum    = document.querySelector(".cart-info .cart-head-items-count span");
let cartItemImg    = document.querySelector(".cart-info .cart-item-img img ");
let cartItemTitle  = document.querySelector(".cart-info .cart-item-info h3 ")
let cartItemDescribe  = document.querySelector(".cart-info .cart-item-info .product-name")
let cartItemPrice  = document.querySelector(".cart-info .cart-item-info .price")
const cartEmptyBox = document.querySelector(".cart-body .empty-cart");



let  head_cart_item_num = document.querySelector(".cart-head-items-count span");
let summary_subtotal_item_num= document.querySelector(".cart-summary .cart-summary-row .cart-summary-num")
let summary_subtotal_item_price = document.querySelector(".cart-summary-row .subtotal.value span");
let summary_delivery_item_price = document.querySelector(".cart-summary-row .delivery.value span");
let summary_total_item_price = document.querySelector(".cart-summart-total .value span");
const cartItemBtn =document.querySelector(".cart-summary .cart-pay-btn");

// All Related To Cart Box 
// =======================================================================================




let popuptimer=0 , numOfBullets=5 , imgTimer=0 , imgIndex=0 ,alertTiemr=0 ,responeTimer=0 ,cutomerTimer=0 ,currentCustomerIndex=0,allCustomerBoxs;
let numOfItemInCart=0,flag=false,deliveryPrice = 10.00,addDeliveryFlag=true;
let imgArr=["./images/Baked4.jpg","./images/Baked2.jpg","./images/Baked3.jpg","./images/blueCake.jpg","./images/bac2.jpg"]
// All Variables
// ===============================================================












// Add Delivery Price 


// Start All Related to Menu , Head


// Add active Class to clicked nav-links 
navItems.forEach((a)=>{
    a.addEventListener("click",function(){
        addActiveToOne(navItems,a,"active-item")
    })
})


// when menu is Clicked
menu.addEventListener("click",showHideMenu);


// Show/Hide Menu
function showHideMenu(){
    navLinks.classList.toggle("showMenu");
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-close");
}


// when width resize
window.addEventListener("resize",function(){
    if(window.innerWidth > 768){ resetMenu();}
})


//  Hide Menu when user click anyPlace except ( Menu and Ul and Shop icon and Logo )
document.body.addEventListener("click",function(e){
    if( navLinks !== e.target && !menu.contains(e.target) &&  
        !cartIcon.contains(e.target)  &&  !logo.contains(e.target)  ){
        if(navLinks.classList.contains("showMenu")){
            resetMenu();
        }
    }
})


function resetMenu(){
    navLinks.classList.remove("showMenu");
    menu.classList.replace("fa-close", "fa-bars");
}

// End All relevant to Menu , Head
// ===============================================================





































// ===============================================================
// Related To Up Button

// When Up Button Clicked
upButton.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// Related To Up Button
// ===============================================================



// ===============================================================
// All Related To Window
// When page Loaded
window.onload=function(){heroBox.classList.add("close-to-elements")}


// When Window  Scrolling Show Boxs
window.addEventListener("scroll",function(){

    // Show/Hide ->  Up Button <-
    if(window.scrollY >=productBox.offsetTop){
        upButton.classList.add("active-up-button");
    }else {upButton.classList.remove("active-up-button");}

    // When User Close To StoryBox 
    if(window.scrollY >= storyBox.offsetTop - 500) { closeToBox(storyContainer); } 
    if(window.scrollY >= passionBox.offsetTop - 500) { closeToBox(passionContainer); } 
    if(window.scrollY >= dealBox.offsetTop - 500) { closeToBox(dealContainer); } 
    if(window.scrollY >= shopBox.offsetTop - 500) { closeToBox(shopContainer); } 
    

})



// All Related To Window
// ===============================================================






// Related To Hero
// when Story video button Clicked
heroBtns.addEventListener("click",function() {
    // Add Element ,and Add Text
    managePopUp(popUp,`Our Story Video Can Be Connected Here`);
})


















































// ===============================================================
// All Related To Story Box 

// Create Bullets
function createBullets(){
    // create BulletContainer
    const bulletContainer=document.createElement("div");
    bulletContainer.className="bullet-container";
    
    // Create Bullets
    for (let i = 0; i < numOfBullets; i++) {  
        const span =document.createElement("span");
        span.className="bullet";
        span.id=i;
        if(i==0){
            span.classList.add("active-bullet");
            storyImg.src=imgArr[0];

        }
        bulletContainer.appendChild(span);
    }
    // Add Bullet Container on Story 
    storyImgContainer.appendChild(bulletContainer);
    // 
}
createBullets();



// While any bullet Clicked
function bulletClicked(){
    // Get all Bullets
    const allbullets =document.querySelectorAll(".bullet");
    // loop on them 
    allbullets.forEach((b,)=>{
        // if bullet Clicked
        b.addEventListener("click",function(){
            clearInterval(imgTimer);
            
            // Get Bullet Number(Index)
            let BulletIndex = +b.id;

            // Change Story Img
            storyImg.src=imgArr[b.id];

            // Remove from all Element Active Class and Add active Class to Element Only
            addActiveToOne(allbullets,b,`active-bullet`);

            // Increase Index
            imgIndex= BulletIndex + 1 < imgArr.length ? BulletIndex + 1 : 0 ;
            changeImg();
        })
    })
}
bulletClicked();  



// Start Of Controlling Change Story  Img  


//  Device =>  Mobile near to story Box
let shouldEnableChangeImg = window.innerWidth <= 767 && window.scrollY > storyBox.offsetTop - 500;

// EnableChangeImg
if (shouldEnableChangeImg) {enableChangeImg();}


// while Resize
window.addEventListener("resize", function () {

    // Device =>  Mobile  and near to story Box
    const nowChangeImg = window.innerWidth <= 767 &&window.scrollY > storyBox.offsetTop - 500;
        
    if (nowChangeImg && shouldEnableChangeImg ) {enableChangeImg(); }

    else if (!nowChangeImg &&shouldEnableChangeImg ) {
        shouldEnableChangeImg = true;
        clearInterval(imgTimer);
    }
});

function enableChangeImg(){
    // close to change IMg again  to aviod call enableChangeImg every duration that less than 767
    shouldEnableChangeImg = false;
    changeImg();
}







function changeImg(){
    // Clear any old timer
    clearInterval(imgTimer);
    const allbullets =document.querySelectorAll(".bullet");
    imgTimer= setInterval(function(){
        storyImg.src=imgArr[imgIndex];
        addActiveToOne(allbullets,allbullets[imgIndex],`active-bullet`);
        imgIndex= imgIndex + 1 < imgArr.length ? imgIndex + 1 : 0 ;
    },3000);
}
// End Of Controlling Change Story Img  


// All Related To Story Box 
// ===============================================================



















































// ===============================================================
// All Related To Contact Box

// While Input 
emailInput.addEventListener("input",function(){
    alertEmailMessage.classList.remove("active-alert-email");
})

// When User Sumbit Email
subscribeForm.addEventListener("submit",function(e){
    // Prevent send Email to Data Base
    e.preventDefault();

    // check Email has @
    checkEmail();
})

function checkEmail(){

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emilTest = emailRegex.test((emailInput.value).trim());

    if(emilTest){
        // Clear Timer to Avoid any pervious time
        clearTimeout(alertTiemr);
        clearTimeout(responeTimer);

        // Hide  alert Message
        alertEmailMessage.classList.remove("active-alert-email");


        // Select & Show respone txt and Span
        document.querySelector(".respone").classList.add("active-respone");
        document.querySelector(".respone span").textContent=emailInput.value;

        // Hide them
        responeTimer=setTimeout( (_) =>{
            document.querySelector(".respone").classList.remove("active-respone")
            document.querySelector(".respone span").textContent="";
        }, 5000);


    }
    else {  
        // Clear Timer to Avoid any pervious time
        clearTimeout(alertTiemr);
        clearTimeout(responeTimer);
        
        // Hide  respone Message
        document.querySelector(".respone").classList.remove("active-respone")

        alertEmailMessage.classList.add("active-alert-email");
        alertTiemr =setTimeout((_)=>{
            alertEmailMessage.classList.remove("active-alert-email");
        },5000)
        
    }

    // Clear emailInput 
    emailInput.value="";
}

// All Related To Contact Box
// ===============================================================





























// ===============================================================
// All Related To Testimonial Box 

async function getCustomerComments(){
    let respone = await fetch("./Customer Data.json");
    let data = await respone.json();


    let numOfCustomer = data.length;
    for (let i = 0; i < numOfCustomer; i++) {

        // Create Customer Testimonial Box
        const customerTestimonial =document.createElement("div");
        customerTestimonial.className="customer-testimonial";
        if(i==0) {
            customerTestimonial.classList.add("active-customer");
        }
        
        
        // Create  Testimonial info Box
        const testimonialInfo =document.createElement("div");
        testimonialInfo.className="testimonial-info";


        // create Left Quote
        const leftQuote =document.createElement("i");
        leftQuote.className="fa-solid fa-quote-left";

        // Create Testimonial Text
        const p =document.createElement("p");
        p.className="testimonial-text";
        p.textContent= data[i].text

        // create Right Quote
        const rightQuote =document.createElement("i");
        rightQuote.className="fa-solid fa-quote-right";

        // Add Them
        testimonialInfo.appendChild(leftQuote);
        testimonialInfo.appendChild(p);
        testimonialInfo.appendChild(rightQuote);
        customerTestimonial.appendChild(testimonialInfo);




        //  Create  Customer info Box
        const customerInfo =document.createElement("div");
        customerInfo.className="customer-info";

        const img = document.createElement("img");
        img.src=data[i].image
        img.alt=`${data[i].name} Image`;


        // Create Personal Info box 

        const info = document.createElement("div")
        info.className="info";
        
        // create Name 
        const name = document.createElement("h3")
        name.className="name";
        name.textContent = data[i].name


        // Create status
        const customerStatus = document.createElement("p")
        customerStatus.textContent = data[i].role


        // Add Them
        customerInfo.appendChild(img);
        info.appendChild(name)
        info.appendChild(customerStatus);
        customerInfo.appendChild(info);
        customerTestimonial.appendChild(customerInfo);

        customerContainer.appendChild(customerTestimonial)
    }
    // ReAssing it to be Global to All 
    allCustomerBoxs = document.querySelectorAll(".customer-testimonial");

}
getCustomerComments();




// When Arrow Clicked
arrows.forEach((ar)=>{
    ar.addEventListener("click",function(){
        if(ar.classList.contains("fa-angle-right")){
            if(currentCustomerIndex < allCustomerBoxs.length-1){
                currentCustomerIndex++;
            }
        }
        else if (ar.classList.contains("fa-angle-left")){
            if (currentCustomerIndex > 0){
                currentCustomerIndex--;
            }
        }
        changeCustomer();
    })
})





// Start Customer Testimonial
function changeCustomer(){

    // Active Current Customer 
    addActiveToOne(allCustomerBoxs,allCustomerBoxs[currentCustomerIndex],"active-customer");

// If Current  Equal last Cutomer
// ===================================

    if(currentCustomerIndex === allCustomerBoxs.length-1){arrows[1].classList.add("end");}
    else {arrows[1].classList.remove("end");}

    if (currentCustomerIndex === 0){arrows[0].classList.add("end")}
    else {arrows[0].classList.remove("end")}
}
// End Customer Testimonial



// All Related To Testimonial Box 
// ===============================================================




























// ===================================================
// Start Shop 


// item.classList.remove("show-item")

// // Start Sort All Item According to Price 
const sortedItems = Array.from(allItem).sort((a,b)=>{
    const itemA = parseFloat(a.querySelector(".item-info .price span").textContent);
    const itemB = parseFloat(b.querySelector(".item-info .price span").textContent);
    return itemA -itemB;
})

// Show Best Items Overall
sortedItems.forEach((item,i)=>{
    if(item.classList.contains("best")){
        item.classList.add("show-item");
        item.parentElement.append(item);
    }
})
// // End Sort All Item According to Price 




allProductBox.forEach((product)=>{
    // Product Category clicked
    product.addEventListener("click",function(){

        // Remove From All select-product Class and  Add it to product
        addActiveToOne(allProductBox,product,"select-product");


        // Store Product Category'Name
        const pCategoryName = product.dataset.category;

        // Show item According to Category 
        showItems(pCategoryName);

    })
})



// Show item that Match Same Category 
function showItems(itemCategory){

    // Change To Best View 
    viewTxt.textContent = "view all";
    
    itemContainerTitle.textContent = "best sellers";
    
    // Change Class name
    viewBtn.classList.add("all-view");
    viewBtn.classList.remove("best-view");

    // Change Icon
    viewIcon.classList.add("fa-caret-down");
    viewIcon.classList.remove("fa-caret-up");



    sortedItems.forEach((item) => {

        // is Item best Price or Not
        const isBest = item.classList.contains("best");


        // if Product Category = all => Will Select all show Items
        // else if Item'Category == Product'Category => Will show Spectifc Items

        const correctCategory = itemCategory === "all" || item.dataset.category === itemCategory;

        if (isBest && correctCategory) {
            item.classList.add("show-item");
            item.parentElement.append(item);
        } 
        
        // Hide Item That not Match Conditions
        else { item.classList.remove("show-item");}
    });



}











// when Add To Cart Button clicked
addChartBtns.forEach((btn,i)=>{
    btn.addEventListener("click",function(){
        // if btn doesn't clicked before
        if(!btn.classList.contains("added"))
        {

            // add Added Class to it 
            btn.classList.add("added")

            // Change Text 
            btn.textContent="added to cart";


            // Increase Number of Item in cart
            numOfItemInCart++;
            // cartItemNum.textContent=numOfItemInCart;
            head_cart_item_num.textContent=numOfItemInCart;
            cartIconValue.textContent =numOfItemInCart;

            // Create Item In Cart 
            createItemInCart(btn.closest(".item"))

        }
    })
})















// Create Items In Cart Box
function createItemInCart(itemAdded){


    const  itemImgAdded =itemAdded.querySelector(".item-img img");
    const  itemImgAltAdded = itemImgAdded.alt;
    const  itemImgSrcAdded = itemImgAdded.src;
    const  itemDescribeAdded = itemAdded.querySelector(".item-info .txt").textContent;
    const  itemPriceAdded = itemAdded.querySelector(".item-info .price span").textContent;
    const  itemId = itemAdded.dataset.productId;


    // Cart Item Box 
    let createCartItem =document.createElement("div");
    createCartItem.className = "cart-item";
    createCartItem.dataset.productId =itemId;

    // Cart Item img Box
    let createCartItemImgBox =document.createElement("div");
    createCartItemImgBox.className = "cart-item-img";

    // Cart Item Img
    let createCartItemImg = document.createElement("img");
    createCartItemImg.src=itemImgSrcAdded; 
    createCartItemImg.alt=itemImgAltAdded;

    // Add Img to Box 
    createCartItemImgBox.appendChild(createCartItemImg);

    // Add ImgBox
    createCartItem.appendChild(createCartItemImgBox);



    const createCartItemInfo =document.createElement("div");
    createCartItemInfo.className = "cart-item-info";
    
    // Create Title
    const title = document.createElement("h3");
    title.textContent = itemDescribeAdded;
    
    // Create description
    const description = document.createElement("p");
    description.className = "product-name";
    description.textContent = itemImgAltAdded;


    // Create Price
    const priceBox = document.createElement("p");
    priceBox.className = "price";
    
    const priceIcon = document.createTextNode("$");

    const price =document.createElement("span")
    price.textContent = itemPriceAdded;
    priceBox.appendChild(priceIcon);
    priceBox.appendChild(price);


    createCartItemInfo.appendChild(title);
    createCartItemInfo.appendChild(description);
    createCartItemInfo.appendChild(priceBox);

    // Add createCartItemInfo
    createCartItem.appendChild(createCartItemInfo)


    
    const cartItemQuantity = document.createElement("div");
    cartItemQuantity.className="cart-item-quantity";
    cartItemQuantity.innerHTML=
    `<span class="quantity-control">
        <button class="quantity-decrease"><i class="fa-solid fa-minus"></i></button>
        <span class="quantity-value">1</span>
        <button class="quantity-increase"><i class="fa-solid fa-plus"></i></button>
    </span>
    <i class="fa-regular fa-trash-can"></i>`;

    createCartItem.appendChild(cartItemQuantity)

    cartBody.appendChild(createCartItem)


    // change Cart Summary Details 
    updateCartSummaryPrice(1,itemPriceAdded)

    // changeCartDetails(itemPriceAdded)

    // Call this Function Every Time
    QuantityControlClicked(createCartItem);

    // Add Delivery Price Once to Total Price and Delivery Price
    if(addDeliveryFlag){
        // Rempove Empty Box from cart
        cartEmptyBox.classList.add("is-cart-empty");
        
        summary_delivery_item_price.textContent=deliveryPrice;
        summary_total_item_price.textContent =  
            (parseFloat(summary_delivery_item_price.textContent) + 
            (parseFloat(summary_total_item_price.textContent)) ).toFixed(2);
            addDeliveryFlag=false;
    }

}











viewBtn.addEventListener("click",viewClicked);
// Show All/Best Item


function viewClicked(){

    // Currently Best Item Price is Showing 
    let showingBest  = viewBtn.classList.contains("all-view") ;
    
    
    // Change To Best View 
    viewTxt.textContent = showingBest  ?  "view best" : "view all";
    
    // Change Class name
    viewBtn.classList.toggle("all-view", !showingBest );
    viewBtn.classList.toggle("best-view", showingBest );

    // Change Icon
    viewIcon.classList.toggle("fa-caret-down", !showingBest );
    viewIcon.classList.toggle("fa-caret-up", showingBest );








    // Show Item According to Chice Best/All Price and Product Category
    viewItemFuction();
}






// Show Items According to Chice Best/All Price
function viewItemFuction(){

// Select Current Product  Box
const selectedProductType = Array.from(allProductBox).find((product)=>product.classList.contains("select-product"));

// Select Current Product Category Type
const productCategoryType =  selectedProductType.dataset.category;

const matchCategory = (item)=> 
    item.dataset.category === productCategoryType || productCategoryType==="all";




    // => User Needs  BEST PRICE 
    if(viewBtn.classList.contains("all-view")){

        itemContainerTitle.textContent="best sellers";

        // Show Best Price Only according to Selected Product Type
        sortedItems.forEach((item)=>{

            const isBest =  item.classList.contains("best");
            
            if(isBest && matchCategory(item)){
                item.classList.add("show-item")
                item.parentElement.append(item);
            }
            else {item.classList.remove("show-item")}
        })

    }

    // => User Needs  ALL PRICE 
    else {

        // Change Item Container Title According to Product Category
        const productName= selectedProductType.querySelector(".category-name").textContent;
        itemContainerTitle.textContent = productCategoryType === "all" ? `all bakery`:`all ${productName}`;


        
        
        
        //  Show All Item that same Product Category Type
        sortedItems.forEach((item)=>{

            if( matchCategory(item)){
                item.classList.add("show-item");
                item.parentElement.append(item);
            }

            else {item.classList.remove("show-item")}
        })
    }
    
}


// All Related To Shop
//=======================================================================================





















//=======================================================================================
// All Related To Cart Box

// when Cart Icon clicked
cartIcon.addEventListener("click",function(){
    cartOverlay.classList.add("show-cart"); 
    // quantityClicked();
    // trashClicked();
})


// when close Button Icon clicked
closeBtn.addEventListener("click",function(e){
    cartOverlay.classList.remove("show-cart"); 
})

// When user clicking to any place except Cart Box
cartOverlay.addEventListener("click",function(e){
    if(e.target === cartOverlay){
        cartOverlay.classList.remove("show-cart"); 
    }
})




















function QuantityControlClicked(CartItem){
    // Get Increament/Decreament Btns
    const quantityBtns = CartItem.querySelectorAll(".cart-item-quantity .quantity-control button")

    // Get trash Icon
    const trashIcon =  CartItem.querySelector(".cart-item-quantity i.fa-trash-can");

    quantityBtns.forEach((btn)=>{
        btn.addEventListener("click",function(){

            // Get Price of Item , Quantity Value , Id
            let {itemPrice,quantityVal,_}=returnQuantityInformation(btn);

            let quantity = parseInt(quantityVal.textContent);

            if(btn.classList.contains("quantity-increase")){

                // Increase Num of Item
                quantityVal.textContent =quantity + 1 ;
                updateCartSummaryPrice(1,itemPrice);
            }
            else if (btn.classList.contains("quantity-decrease") && quantity > 1){
                // Decrease Num of Item
                quantityVal.textContent =quantity-1;
                updateCartSummaryPrice(-1,itemPrice);
            }

        })
    })



    trashIcon.addEventListener("click",function(){

        // Decrease Number of Item Inside Cart wallet
        head_cart_item_num.textContent  = parseInt(head_cart_item_num.textContent)-1;
        cartIconValue.textContent  = parseInt(cartIconValue.textContent)-1;


        // Return price of Item , Id , Quantity Value
        let {itemPrice,quantityVal,itemId}=returnQuantityInformation(trashIcon);

        const quantity = parseInt(quantityVal.textContent) * -1;


        // Update Subtotal, [Num ,Price ] , Total [Price]
        updateCartSummaryPrice(quantity,itemPrice);

    // Make Total Price , and Delivery Price = Zero 
    if(parseInt(summary_subtotal_item_num.textContent) === 0){
        // able total  , Delivery to refill again
        addDeliveryFlag=true;

        //Decrease Number
        numOfItemInCart =0;

        summary_delivery_item_price.textContent = "0.00";
        summary_total_item_price.textContent = "0.00";

        // Show Empty Box
        cartEmptyBox.classList.remove("is-cart-empty");

    }



        // Make Add To Cart Button Active Again
        Array.from(document.querySelectorAll(".item-content .item")).forEach((item)=>{
            if(item.dataset.productId === itemId){
                item.querySelector(".add-to-cart").textContent="add to cart";
                item.querySelector(".add-to-cart").classList.remove("added");
            }
        })




        // Remove Cart Item
        trashIcon.closest(".cart-item").remove();

    })

}


// Return price of Item , Id , Quantity Value
function returnQuantityInformation(btn){
    //Get Item Box 
    let ItemBox = btn.closest(".cart-item");

    // Get ID Of Item
    const itemId = ItemBox.dataset.productId;


    // Get Item Price
    const itemPrice = ItemBox.querySelector(".cart-item-info .price span").textContent;

    
    // Get Current Quantity Value
    let quantityVal = ItemBox.querySelector(".quantity-control .quantity-value");


    return {itemPrice,quantityVal,itemId};
}






// Quantity Buutons Needs 
// => increase/Decrease  Number of Item inside Subtotal by one (+ OR -) (done)
// => increase/Decrease  Number of Item inside Subtotal price (According to Item Price) (done)
// => increase/Decrease  Number of Item inside total price (According to Item Price) (done)




// Trash Icon Needs


// => Subtract  Number of Item inside Subtotal According to Number of Quantity Value (done)
// => Subtract  Number of Item inside Subtotal price (According to Item Price * -Quantity Value) (done)
// => Subtract  Number of Item inside total price (According to Item Price * -Quantity Value) (done)

// => if Subtotal Wallet = zero => should  total price = zero

// => remove Added Class from Button's Item  free again to able to Add To Cart Again using Product's Id
// => Change Text
// => Decrease Number of Item in Cart 







function updateCartSummaryPrice(quantity,itemPrice){

    // =(Quantity can Be Negative and Positive)=

    // Decrease Number of Item inside Subtotal  
    summary_subtotal_item_num.textContent = parseInt(summary_subtotal_item_num.textContent) + quantity;


    // Subtract Price of Item from Subtotal
    summary_subtotal_item_price.textContent  = (parseFloat(summary_subtotal_item_price.textContent) + (parseFloat(itemPrice) *  quantity )).toFixed(2); 
    
    // Subtract Price of Item from Total
    summary_total_item_price.textContent  = (parseFloat(summary_total_item_price.textContent) + (parseFloat(itemPrice) * quantity)).toFixed(2); 

}

// All Related To Cart Box
//=======================================================================================














//  ==================================================================================
// General Functions




function addActiveToOne(allElement,element,className){
    allElement.forEach((e)=>{e.classList.remove(`${className}`);})
    element.classList.add(`${className}`);
}








// Show close-to-elements
function closeToBox(element){
    element.classList.add("close-to-elements");
}







// Control Pop Up
function managePopUp(element,txt){
    // Clear Timer
    clearTimeout(popuptimer);

    // Add Pop Up Text
    element.textContent=txt;
    // Show  PopUp
    element.classList.add("active-pop-up")

    // after 3s Remove PopUp
    popuptimer=setTimeout( (_) =>element.classList.remove("active-pop-up"),3000)
}

// General Functions
// ==================================================================================
























