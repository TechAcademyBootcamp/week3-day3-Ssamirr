var buttons = document.getElementsByClassName('kart');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var card_body_parent = this.closest('.card');

        var card_title = card_body_parent.getElementsByClassName("card-title")[0].innerHTML;
        var card_pc = card_body_parent.getElementsByClassName("card-text")[0].innerHTML;
        var card_price = card_body_parent.getElementsByClassName("card-money")[0].innerHTML;
        var card_img = card_body_parent.getElementsByClassName("card-img-top")[0];
        var card_img_src = card_img.getAttribute('src');
        console.log(card_img);

        document.getElementsByClassName('elmnt4')[0].classList.add('d-none');

        var es = document.getElementById('card_products').children;
        for (var i = 0; i < es.length; i++) {
            if (es[i].getAttribute('product_title') == card_title) {
                return false;
            }
        }

        document.getElementById('card_products').innerHTML += `<div class="card mb-3" style="max-width: 540px;" product_title="${card_title}">
  <div class="row no-gutters">
    <div class="col-md-4" style="display:flex;align-items:center;justify-content:center">
      <img src="${card_img_src}"  class="card-img" style="width:60px;height:60px;" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body" style="display: flex;flex-direction: column; align-items: flex-start;">
        <h5 class="card-title js-title ">${card_title}</h5>
        <p class="card-text js-text">${card_price}</p>
        <p class="card-money js-money"><small class="text-muted"></small>${card_pc}</p>
      </div>
    </div>
  </div>
</div>`
    });
};


