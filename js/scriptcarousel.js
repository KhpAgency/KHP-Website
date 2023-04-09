// jQuery(document).ready(function () {
//   if(jQuery('#client').length > 0){
//     var splide = new Splide( '#client', {
//       // type   : 'loop',
//       // drag   : 'false',
//       perPage: 3,
//       perMove: 1,
//       // focus    : 'center',
//       // padding: '5rem',
//       gap: '30px',
//       // trimSpace: false,
//       // arrows: false,
//       pagination: true,
//       // fixedWidth : '22.625rem',
//       // autoWidth: true,
//       breakpoints: {
//         767: {
//           perPage: 1,
//           // pagination: true,
//           // fixedWidth : '20.5rem',
//         },
//         991: {
//           perPage: 2,
//           // pagination: true,
//           // fixedWidth : '20.5rem',
//         },
//         1199: {
//           perPage: 3,
//           gap: '20px',
//           // fixedWidth : '20.5rem',
//         },
//       }
//     } );

//     splide.mount();
//   }
// });





jQuery(document).ready(function () {
  var sliders = jQuery('.client-slider');
  if(sliders.length > 0){
    sliders.each(function(index, element){
      var splide = new Splide( element, {
        // type   : 'loop',
        // drag   : 'false',
        perPage: 3,
        perMove: 1,
        // focus    : 'center',
        // padding: '5rem',
        gap: '30px',
        // trimSpace: false,
        // arrows: false,
        pagination: true,
        // fixedWidth : '22.625rem',
        // autoWidth: true,
        breakpoints: {
          767: {
            perPage: 1,
            // pagination: true,
            // fixedWidth : '20.5rem',
          },
          991: {
            perPage: 2,
            // pagination: true,
            // fixedWidth : '20.5rem',
          },
          1199: {
            perPage: 3,
            gap: '20px',
            // fixedWidth : '20.5rem',
          },
        }
      } );
      splide.mount();
    });
  }
});
