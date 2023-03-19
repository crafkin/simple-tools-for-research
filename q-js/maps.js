
// requires you to set a default lat and long that will be where the map starts 


Qualtrics.SurveyEngine.addOnload(function () {
  document
    .getElementById(this.questionId)
    .querySelectorAll('[role*=presentation]')[0].style.display = 'none';
});

// If you need to set a default center
Qualtrics.SurveyEngine.addOnReady(function () {
  mapRender(apiKeyGoogleMap, document.getElementById(this.questionId), {
    location: {
      lat: 0.0, //set default 
      lng: 0.0, //set default
    },
    zoom: 12, // Optional
  });
});
