// some sample cars
const initialCars = [
  {
    modelName: "Tata Tiago",
    prize: "Available in a price range of Rs. 4.99 - 7.07 Lakh*",
    description:
      "Tata Tiago is a 5 seater Hatchback. It is available in 11 variants, a 1199 cc, BS6 and 2 transmission options: Manual & Automatic. Other key specifications of the Tiago include a kerb weight of 982-991kg, ground clearance of 170mm and boot space of 242 Liters. ",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  },
  {
    modelName: "Honda City 4th Generation",
    prize: "1.8-liter I-4 with 141 hp",
    description:
      "Honda City 4th Generation is a 5 seater Sedan available in a price range of Rs. 9.29 - 9.99 Lakh*. It is available in 2 variants, a 1497 cc, BS6 and a single Manual transmission. Other key specifications of the City 4th Generation include a kerb weight of 1061kg, ground clearance of 165mm and boot space of 510 Liters. ",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City-2017-2020/7259/Honda-City-2017-2020-SV-MT/1637828825177/front-left-side-47.jpg?tr=w-456",
  },
  {
    modelName: "Tata Punch",
    prize: "2.0-liter I-4 with 152 hp",
    description:
      "Tata Punch is a 5 seater SUV available in a price range of Rs. 5.48 - 9.08 Lakh*. It is available in 7 variants, a 1199 cc, BS6 and 2 transmission options: Manual & Automatic. Other key specifications of the Punch include a kerb weight of, ground clearance of 187 and boot space of 366 Liters. The Punch is available in 7 colours.",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/7513/1633329515070/front-left-side-47.jpg?tr=w-456",
  },
  {
    modelName: "Tata Nexon",
    prize: "2.0-liter I-4 with 144 hp",
    description:
      "Tata Nexon is a 5 seater SUV available in a price range of Rs. 7.29 - 13.34 Lakh*. It is available in 40 variants, 3 engine options that are BS6 compliant and 2 transmission options: Automatic & Manual. Other key specifications of the Nexon include a kerb weight of, ground clearance of 209mm and boot space of 350 Liters./",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  },
];

const additionalCars = [
  {
    modelName: "Tata Tigor",
    prize: "2.4-liter I-4 with 184 hp",
    description:
      "Tata Tigor is a 5 seater Sedan available in a price range of Rs. 5.67 - 7.84 Lakh*. It is available in 6 variants, a 1199 cc, BS6 and 2 transmission options: Manual & Automatic. Other key specifications of the Tigor include a kerb weight of 1004-1033, ground clearance of 170 and boot space of 419 Liters.",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tigor/7339/1579858414566/front-left-side-47.jpg?tr=w-456",
  },
  {
    modelName: "Tata Yodha Pickup",
    prize: "2.5-liter I-4 with 168 hp",
    description:
      "Tata Yodha Pickup is a 2 seater Pickup Truck available in a price range of Rs. 6.94 - 7.49 Lakh*. It is available in 4 variants, a 2956 cc, BS6 and a single Manual transmission. Other key specifications of the Yodha Pickup include a kerb weight of 1830Kg, ground clearance of 190mm and boot space of Liters. .",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Yodha-Pickup/7624/1609147376028/front-left-side-47.jpg?tr=w-456",
  },
  {
    modelName: "Tata Tigor EV",
    prize: "2.4-liter I-4 with 180 hp",
    description:
      "Tata Tigor EV is a 5 seater Sedan available in a price range of Rs. 11.99 - 13.14 Lakh*. It is available in 4 variants, a -, / and a single Automatic transmission. Other key specifications of the Tigor EV include a kerb weight of 1235, ground clearance of 172 and boot space of 316 Liters.",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tigor-EV/8574/1630405193652/front-left-side-47.jpg?tr=w-456",
  },
  {
    modelName: "Tata Altroz EV",
    prize: "2.5-liter I-4 with 176 hp",
    description:
      "Tata Altroz EV is a 5 seater hatchback. The Tata Altroz EV is expected to launch in India in March 2022. The Tata Altroz EV will rival Venue, XUV300 and Duster. Expect prices to start from 14.00 Lakh.",
    source:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz-EV/6844/1580964914459/front-left-side-47.jpg?tr=w-456",
  },
];

export { initialCars };
export { additionalCars };
