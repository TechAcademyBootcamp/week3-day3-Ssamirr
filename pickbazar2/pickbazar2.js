var buttons = document.querySelectorAll('.card');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    var card_body_parent = event.target.closest('.card');
    var target_element = event.target;
   
    if (target_element.closest('.kart') != null) {
     
      var card_title = card_body_parent.getElementsByClassName("card-title")[0].innerHTML;
      var card_pc = card_body_parent.getElementsByClassName("card-text")[0].innerHTML;
      var card_price = card_body_parent.getElementsByClassName("card-money")[0].innerHTML;
      var card_img = card_body_parent.getElementsByClassName("card-img-top")[0];
      var card_img_src = card_img.getAttribute('src');
      var count=1;
      var all_count=1;
      card_price=parseFloat(card_price.replace('$',''));
      var sum=card_price;
      sum=parseFloat(sum).toFixed(2);
      var added_product = document.querySelector(`[product_title="${card_title}"]`);
      
      var all_sum;
      all_sum=parseFloat(all_sum).toFixed(2);              
      all_sum = parseFloat(document.querySelector('.all-sum').textContent);
      all_sum=all_sum+card_price;
      console.log(all_sum);
       all_sum=parseFloat(all_sum).toFixed(2);
      document.querySelectorAll('.all-sum').forEach((Element)=>{
        Element.innerHTML=all_sum;
      })
                    if(added_product){
                        count = parseInt(added_product.querySelector('.products-count').textContent);
                        // count = parseInt(added_product.querySelector('.products-count2').textContent);
                        count++;
                        
                        sum=card_price*count;

                        sum=parseFloat(sum).toFixed(2);
                        added_product.querySelectorAll('.products-count').forEach((Element)=>{
                          Element.innerHTML=count;
                        })
                        added_product.querySelectorAll('.products-money').forEach((Element)=>{
                          Element.innerHTML=sum;
                        })
      
                        

      //                   document.querySelector('.increase').addEventListener('click',function(){
      //                     count++;
      //                     added_product.querySelectorAll('.products-count').forEach((Element)=>{
      //                     Element.innerHTML=count;
      //                   })
      // })
      
                   
                    
                        // added_product.querySelector('.products-count2').innerHTML = count;
                        return false;
                    }

                    
                    
                      
                    
                   
      

      document.getElementsByClassName('elmnt4')[0].classList.add('d-none');

      var es = document.getElementById('card_products').children;
      for (var i = 0; i < es.length; i++) {
        
        if (es[i].getAttribute('product_title') == card_title) {
          return false;
        }
        else{
          all_count++;
        }
      }
      document.querySelectorAll('.backet-item').forEach((items)=>{
        items.innerHTML=all_count;
      })
      
      
      
      
                   

      document.getElementById('card_products').innerHTML += `<div class="card" style="max-width: 540px;" product_title="${card_title}">
  <div class="row no-gutters">
    <div class="col-md-4" style="display:flex;align-items:center;justify-content:center">
    <div style="display:flex;flex-direction:column;">
    <div style="font-size: 25px;border: 1px solid black;border-radius: 200px;width: 30px;background: #f7f7f7;border-style:none;" >
    <div style="color:#77798c" class="increase">+</div>
    <div class="products-count style-count">${count}</div>
    <div style="color:#77798c" class="decrease">-</div>
    </div>
    </div>
    <div>
      <img src="${card_img_src}"  class="card-img" style="width:60px;height:60px;" alt="..."></div>
    </div>
    <div class="col-md-8">
      <div class="card-body" style="display: flex;flex-direction: column; align-items: flex-start;">
        <h5 class="card-title js-title ">${card_title}</h5>
        <div style="display: flex;width: 80%;justify-content: space-between;">
        <p class="card-text js-text">$${card_price}</p>
        <div class="d-flex ">
        <p class="dollar">$</p>
        <p class="products-money"> ${sum}</p>
        </div>
        </div>
        <div class="d-flex js-money"> 
        <span class="products-count mr-1">${count}</span>
         <span class="card-money "> X ${card_pc}</span> 
         </div>
       
        
        
      </div>
    </div>
  </div>
</div>`

    }
    else {
      document.querySelector('#cardbutton').click();
    }
  })
  
}


 


