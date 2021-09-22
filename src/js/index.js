document.getElementById("menu").addEventListener("click", function () {

  document.getElementById("nav__li-responsive-container-id").classList.toggle("mostrar");
});



// ----------------------------- servicios------------------------------------------

window.addEventListener('load', () => {
  let $items = document.querySelectorAll('.servicios__container ul li button');
  let $detail = document.querySelectorAll('.pasos-detail article');
  // let $dataActive = null;

  $items.forEach(item => {/* iteramos items */

    item.addEventListener('click', (e) => {/* cada vez que haga click en un item */


      $items.forEach(element => {/* le quito al item la clase on-item-pasos */
        element.classList.remove('on-item-pasos')
      })

      e.currentTarget.classList.toggle('on-item-pasos');/* si lo tiene se lo quito, si no lo tiene le agrego la clase on-item-pasos */
      $dataActive = item.dataset.pasos;/* guarda el valor del dataset item que este seleccionado */

      $detail.forEach((paso, index) => {/* itero el detail de pasos */

        if (paso.dataset.pasos == $dataActive) {/* si coincide el dataset iterado con el dataset guardado en el $dataActive que lo muestre si no que lo oculte */
          paso.classList.add('on-pasos-detail');

        } else {
          paso.classList.remove('on-pasos-detail');
        }
      })
    })
  })

})


const botones = document.querySelectorAll('.servicio__iconos');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    boton.classList.add('servicio__activo');
    botones.forEach((boton2) => {
      if (boton.id !== boton2.id) {
        boton2.classList.remove('servicio__activo')
      }
    });
  });
});

boton.forEach((boton) => {

})



//id=#search
//id=#person
//id=#carter
//id=#hands



//botones.forEach((boton) => {
  //boton.addEventListener('click', () => {
    // agregar la clase .activo al boton
    //const idDondeHiceClick = boton.id;
    // tienes que recorrer el NodeList "botones" con un loop (puedes usar botones.forEach)
    // a cada boton que no tenga idClick (le quitas la clase .activo)
  //});
//});




