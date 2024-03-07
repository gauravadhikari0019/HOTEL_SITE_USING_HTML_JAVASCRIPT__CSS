function submitBooking() {
    // Add your booking submission logic here (e.g., send data to server)
    alert('Booking submitted successfully!');
  }
  
  function checkReservation() {
    // Add your reservation checking logic here (e.g., send request to server)
    const bookingID = document.getElementById('bookingID').value;
    // Simulating result for demonstration purposes
    const isReserved = Math.random() < 0.5;
  
    const resultDiv = document.getElementById('reservationResult');
    resultDiv.innerHTML = isReserved ? '<p>Reservation Found!</p>' : '<p>No Reservation Found</p>';
    resultDiv.style.color = isReserved ? 'green' : 'red';
    resultDiv.style.fontWeight = 'bold';
  }
  
  function showBookingForm() {
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('reservation-checker').style.display = 'none';
  }
  
  function showReservationChecker() {
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('reservation-checker').style.display = 'block';
  }
  