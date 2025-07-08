// AOS
AOS.init();

// Maps
const springMap = L.map('map-spring').setView([35.6895, 139.6917], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(springMap);
L.marker([35.6895, 139.6917]).addTo(springMap).bindPopup('Spring Destination: Tokyo').openPopup();

const summerMap = L.map('map-summer').setView([19.8968, -155.5828], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(summerMap);
L.marker([19.8968, -155.5828]).addTo(summerMap).bindPopup('Summer Destination: Hawaii').openPopup();

const autumnMap = L.map('map-autumn').setView([40.7128, -74.0060], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(autumnMap);
L.marker([40.7128, -74.0060]).addTo(autumnMap).bindPopup('Autumn Destination: New York').openPopup();

const winterMap = L.map('map-winter').setView([46.8182, 8.2275], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(winterMap);
L.marker([46.8182, 8.2275]).addTo(winterMap).bindPopup('Winter Destination: Switzerland').openPopup();

// Dark mode
const toggleBtn = document.getElementById('dark-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = toggleBtn.textContent === '🌙' ? '☀️' : '🌙';
});

// Quiz
document.getElementById("start-quiz").addEventListener("click", function() {
  Swal.fire({
    title: 'Question 1',
    text: 'Do you prefer warm or cold weather?',
    input: 'radio',
    inputOptions: {
      warm: 'Warm',
      cold: 'Cold'
    },
    inputValidator: (value) => {
      if (!value) {
        return 'Please select an option!'
      }
    }
  }).then((result) => {
    const weather = result.value;

    Swal.fire({
      title: 'Question 2',
      text: 'What’s your favorite activity?',
      input: 'radio',
      inputOptions: {
        adventure: 'Adventure sports',
        relax: 'Relaxing and sightseeing'
      },
      inputValidator: (value) => {
        if (!value) {
          return 'Please select an option!'
        }
      }
    }).then((result2) => {
      const activity = result2.value;

      Swal.fire({
        title: 'Question 3',
        text: 'What scenery do you love most?',
        input: 'radio',
        inputOptions: {
          flowers: 'Flowers & gardens',
          beaches: 'Beaches & ocean',
          forests: 'Forests & foliage',
          snow: 'Snowy mountains'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'Please select an option!'
          }
        }
      }).then((result3) => {
        const scenery = result3.value;

        let season = '';
        if (weather === 'warm' && scenery === 'flowers') {
          season = 'Spring';
        } else if (weather === 'warm' && scenery === 'beaches') {
          season = 'Summer';
        } else if (weather === 'cold' && scenery === 'forests') {
          season = 'Autumn';
        } else if (weather === 'cold' && scenery === 'snow') {
          season = 'Winter';
        } else {
          season = 'Summer'; // default fallback
        }

        Swal.fire({
          title: `Your perfect season is ${season}!`,
          text: `Get ready for your ideal seasonal adventure!`,
          imageUrl: `assets/images/${season.toLowerCase()}1.jpg`,
          imageWidth: 400,
          imageAlt: `${season} image`,
          confirmButtonText: 'Awesome!'
        });
      });
    });
  });
});
