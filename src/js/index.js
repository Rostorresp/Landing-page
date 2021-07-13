document.getElementById("menu").addEventListener("click", function () {

  document.getElementById("nav__li-responsive-container-id").classList.toggle("mostrar");
});



// ----------------------------- servicios------------------------------------------

window.addEventListener('load', () => {
  let $items = document.querySelectorAll('.servicios__container ul li');
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




