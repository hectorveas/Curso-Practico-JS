//array de cupones
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

/* array cupones tipo objeto
    const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
*/


function calcularPrecioDescuento(precio, descuento) {
    const PorcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * PorcentajePrecioConDescuento) / 100;
    return PrecioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const PrecioConDescuento = calcularPrecioDescuento(priceValue,discountValue);

    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento son: " + PrecioConDescuento

}

/* Con codigo de descuento

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    }
  
    let descuento;
  
    switch(couponValue) {
      case "JuanDC_es_Batman":
        descuento = 15;
      break;
      case "pero_no_le_digas_a_nadie":
        descuento = 30;
      break;
      case "es_un_secreto":
        descuento = 25;
      break;
    }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  */

  /* Con codigo de descuento con array de objetos

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
  }
  */