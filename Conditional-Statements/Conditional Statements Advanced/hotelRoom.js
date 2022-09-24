function hotelRoom(input) {
  let month = input[0];
  let nightsNumber = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  if (month == "May" || month == "October") {
    studioPrice = 50;
    apartmentPrice = 65;
  } else if (month == "June" || month == "September") {
    studioPrice = 75.2;
    apartmentPrice = 68.7;
  } else if (month == "July" || month == "August") {
    studioPrice = 76;
    apartmentPrice = 77;
  }

  if (
    (month == "May" || month == "October") &&
    nightsNumber > 7 &&
    nightsNumber <= 14
  ) {
    studioPrice = 0.95 * studioPrice;
    apartmentPrice = apartmentPrice;
  } else if ((month == "May" || month == "October") && nightsNumber > 14) {
    studioPrice = 0.7 * studioPrice;
    apartmentPrice = 0.9 * apartmentPrice;
  } else if ((month == "June" || month == "September") && nightsNumber > 14) {
    studioPrice = 0.8 * studioPrice;
    apartmentPrice = 0.9 * apartmentPrice;
  } else if (nightsNumber > 14) {
    studioPrice = studioPrice;
    apartmentPrice = 0.9 * apartmentPrice;
  }

  console.log(`Apartment: ${(apartmentPrice * nightsNumber).toFixed(2)} lv.`);
  console.log(`Studio: ${(studioPrice * nightsNumber).toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
