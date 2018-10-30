ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938667,30.323079],
    zoom: 17,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  hintContent: 'Cat Energy'
  }, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map-pin.png',
  iconImageSize: [124, 106],
  iconImageOffset: [-62, -106]
  });

  myMap.geoObjects
  .add(myPlacemark);
});
