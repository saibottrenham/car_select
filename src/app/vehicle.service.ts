import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [
    {
      name: 'Tesla Model Y',
      images: [
        'assets/images/tesla-model-y/1.jpg',
        'assets/images/tesla-model-y/2.jpg',
        'assets/images/tesla-model-y/3.jpg',
        'assets/images/tesla-model-y/4.jpg',
        'assets/images/tesla-model-y/5.jpg',
        'assets/images/tesla-model-y/6.jpg',
        'assets/images/tesla-model-y/7.jpg',
        'assets/images/tesla-model-y/8.jpg',
        'assets/images/tesla-model-y/9.jpg',
        'assets/images/tesla-model-y/10.jpg',
      ],
      link: 'https://turo.com/au/en/suv-rental/australia/hurstville/tesla/model-y/2121538',
      currentSlide: 0,
      currentReviewIndex: 0,
      turo_Rating: 4.96,
      year: 2023,
      pricePerDay: 110,
      specs: ['RWD', 'Autopilot', 'Premium Interior'],
      wltpRange: 465,
      reviews: [
        {
        author: "Logan",
        author_image: "assets/images/authors/Logan.jpg",
        date: "2025-05-08",
        stars: 5,
        review: "Great clean car. Had an amazing time"
      },
      {
        author: "Amirarshia",
        author_image: "assets/images/authors/Amirarshia.jpg",
        date: "2025-04-23",
        stars: 5,
        review: "Great car and great host and flexible"
      },
      {
        author: "Son",
        author_image: "assets/images/authors/Logan.jpg",
        date: "2025-04-21",
        stars: 5,
        review: "I feel lucky that my first EV trial was rented from Tobias! Huge thanks for going above and beyond with his support. He took the time to clearly explain how to drive the car and use the mobile connector, which was incredibly helpful. His friendly and patient attitude made everything feel easy and stress-free. Truly a fantastic experience!"
      },
      {
        author: "Yuansong",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-03-31",
        stars: 5,
        review: "Fantastic Tesla and so clean."
      },
      {
        author: "Eroni",
        author_image: "assets/images/authors/Eroni.jpg",
        date: "2025-03-23",
        stars: 5,
        review: "Absolutely amazing ride! Easy to deal with too! Definitely recommended!"
      },
      {
        author: "Joanna",
        author_image: "assets/images/authors/Joanna.jpg",
        date: "2025-03-09",
        stars: 5,
        review: "I will definitely be booking again. Everything was so smooth from the time I booked, to the end of my trip. The communication, process and experience was amazing and stress free. Would 100% recommend booking with Tobias!"
      },
      {
        author: "Sabreena",
        author_image: "assets/images/authors/Sabreena.jpg",
        date: "2025-03-02",
        stars: 5,
        review: "I had the best 3 days with this beautiful Tesla Y. No issues or anything. Tobias responded quickly when you needed help. Will definitely book this again sometime soon"
      },
      {
        author: "Sabreena",
        author_image: "assets/images/authors/Sabreena.jpg",
        date: "2025-03-02",
        stars: 5,
        review: "I had the best 3 days with this beautiful Tesla Y. No issues or anything. Tobias responded quickly when you needed help. Will definitely book this again sometime soon"
      },
      {
        author: "Honza",
        author_image: "assets/images/authors/Honza.jpg",
        date: "2025-01-09",
        stars: 5,
        review: "The car was exactly as agreed. Pick up as well as return went smoothly, we had no issues."
      },
      {
        author: "Aathi",
        author_image: "assets/images/authors/Aathi.jpg",
        date: "2024-12-31",
        stars: 5,
        review: "Great car, friendly host."
      },
      {
        author: "Charles",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-12-16",
        stars: 3,
        review: "The host is courteous. However, in a busy city like Sydney, the detour to the pick up and drop off is costly. You lose a considerable amount of time."
      },
      {
        author: "Adrian",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-12-08",
        stars: 5,
        review: "Amazing host! Kind and helpful 10/10 would recommend"
      },
      {
        author: "Georgia",
        author_image: "assets/images/authors/Georgia.jpg",
        date: "2024-12-03",
        stars: 5,
        review: "Tobias was absolutely awesome! Car was fantastic and will be looking for it on my next Sydney trip!"
      },
      {
        author: "Sabreena",
        author_image: "assets/images/authors/Sabreena.jpg",
        date: "2025-03-02",
        stars: 5,
        review: "I had the best 3 days with this beautiful Tesla Y. No issues or anything. Tobias responded quickly when you needed help. Will definitely book this again sometime soon"
      },
      {
        author: "Josh",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-11-10",
        stars: 5,
        review: "The car is kept in a Woolworths parking lot but uber trips from the airport and back after finishing the car hire are provided for convenience. Timely responses from Tobias, Tesla was a great drive. Very clean, easy to connect via phone and was a great car for our trip. Thanks again."
      },
      {
        author: "Peter",
        author_image: "assets/images/authors/Peter.jpg",
        date: "2024-11-04",
        stars: 5,
        review: "Car was in great condition. Tobias was very helpful. Getting to the car was a little confusing due to being in the woolworths car park and the lighting at the time wasn't the greatest but eventually I found it."
      },
      {
        author: "Michael",
        author_image: "assets/images/authors/Michael.jpg",
        date: "2024-10-27",
        stars: 5,
        review: "Awesome car and awesome host. Made our trip stress free and enjoyable. Can't fault Tobias and the Telsa. Will definitely book again in the future ✌️"
      },
      {
        author: "James",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-10-22",
        stars: 5,
        review: "The car was amazing! We hired the Model Y for 11 days and have fallen in love with Tesla. I wish there were more superchargers available for easier long distance trips but overall it was very comfortable and the upgraded autopilot features were definitely worth it! Hope to rent this car again in the future."
      },
      {
        author: "Keshab",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-25",
        stars: 5,
        review: "Great Services"
      },
      {
        author: "Shahid",
        author_image: "assets/images/authors/Shahid.jpg",
        date: "2024-09-22",
        stars: 5,
        review: "Tobias was a great host, everything was organized very smoothly. Very responsive and helpful, will definitely rent again."
      },
      {
        author: "James",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-10-22",
        stars: 5,
        review: "The car was amazing! We hired the Model Y for 11 days and have fallen in love with Tesla. I wish there were more superchargers available for easier long distance trips but overall it was very comfortable and the upgraded autopilot features were definitely worth it! Hope to rent this car again in the future."
      },
      {
        author: "Jessica",
        author_image: "assets/images/authors/Jessica.jpg",
        date: "2024-09-08",
        stars: 5,
        review: "Tobias went out of the way to accommodate our needs and was very helpful. Car was clean and fully charged upon pickup. A great experience!"
      },
      {
        author: "billy",
        author_image: "assets/images/authors/billy.jpg",
        date: "2024-09-04",
        stars: 5,
        review: "The model y was a dream to drive, tobias was super helpful and an ease to work with, would come back again!!"
      },
      {
        author: "James",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-10-22",
        stars: 5,
        review: "The car was amazing! We hired the Model Y for 11 days and have fallen in love with Tesla. I wish there were more superchargers available for easier long distance trips but overall it was very comfortable and the upgraded autopilot features were definitely worth it! Hope to rent this car again in the future."
      },
      {
        author: "Troy",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-02",
        stars: 5,
        review: "Great car, location & host. Will definately use again"
      },
      {
        author: "Michael",
        author_image: "assets/images/authors/Michael_y.jpg",
        date: "2024-10-22",
        stars: 5,
        review: "Tobias was very helpful in sorting us a car seat for our daughter. We had a wonderful trip. Pick up and drop off was seamless. Would certainly hire with Tobias in the future. Thanks mate!"
      },
      {
        author: "James",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-10-22",
        stars: 5,
        review: "The car was amazing! We hired the Model Y for 11 days and have fallen in love with Tesla. I wish there were more superchargers available for easier long distance trips but overall it was very comfortable and the upgraded autopilot features were definitely worth it! Hope to rent this car again in the future."
      },
      {
        author: "Diego",
        author_image: "assets/images/authors/Diego.jpg",
        date: "2024-08-22",
        stars: 5,
        review: "Tobias was very friendly, kind and helped us a lot with tips and information about the Tesla. The car is very new, beautiful and very clean. The pickup location is very convenient, just get off the station and walk 5 minutes to the car. I will definitely rent with Tobias again."
      },
      {
        author: "Gunreet",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-07-25",
        stars: 5,
        review: "Amazing service by Tobias. Car was clean and drives smooth. Had a great trip!"
      },
      {
        author: "Josh",
        author_image: "assets/images/authors/Josh.jpg",
        date: "2024-07-18",
        stars: 5,
        review: "As always, Tobias went above and beyond to ensure a great trip and made everything a breeze to handle without stress."
      },
      {
        author: "Daniel",
        author_image: "assets/images/authors/Daniel.jpg",
        date: "2024-06-30",
        stars: 5,
        review: "Great car and was met promptly at airport arrival when picking up and met at airport departure at drop off. No issues whatsoever. Will definitely use again when back in Sydney"
      },
      {
        author: "Jeroen",
        author_image: "assets/images/authors/Jeroen.jpg",
        date: "2024-06-24",
        stars: 5,
        review: "Great car, great host, super quick in responding, very helpful in case of any questions. Highly recommended."
      },
      {
        author: "Yongky",
        author_image: "assets/images/authors/Yongky.jpg",
        date: "2024-05-01",
        stars: 5,
        review: "Excellent car to drive around Sydney and the experience of driving an EV car. Especially with Tobi, who loved his hospitality service, he handed over personally and explained every detail moreover on time and handed over a clean car."
      },
      {
        author: "Matthew",
        author_image: "assets/images/authors/Matthew.jpg",
        date: "2024-04-26",
        stars: 5,
        review: "Tobias was super helpful and friendly. Car was immaculate and great to drive."
      },
      {
        author: "Andrew",
        author_image: "assets/images/authors/Andrew.jpg",
        date: "2024-04-07",
        stars: 5,
        review: "Seamless pick up and drop off. Car in excellent condition and communication throughout was excellent!"
      },
      {
        author: "Joseph",
        author_image: "assets/images/authors/Joseph.jpg",
        date: "2024-07-25",
        stars: 5,
        review: "Tobias was great to deal with and the car was immaculate. Very good communication from start to finish! Would use Tobias’ services again next time I’m in Sydney!"
      },
      {
        author: "Pasquale",
        author_image: "assets/images/authors/Pasquale.jpg",
        date: "2024-02-14",
        stars: 5,
        review: "Had a great experience from start to finish. Very informative about any questions that I asked. As well as fast responder. 10/10 would hire from him again"
      },
      {
        author: "Richard",
        author_image: "assets/images/authors/Richard.jpg",
        date: "2024-02-13",
        stars: 5,
        review: "Great hire from Tobias. Prompt and clear communication. The car was in excellent condition with high SOC when collected. Would definitely recommend."
      },
      {
        author: "Lisa",
        author_image: "assets/images/authors/Lisa.jpg",
        date: "2024-02-08",
        stars: 5,
        review: "Great host! Appreciated the helpful instruction and clean car. Recommend!"
      },
      {
        author: "Adam",
        author_image: "assets/images/authors/Adam.jpg",
        date: "2024-02-07",
        stars: 5,
        review: "Amazing car and great host! Would definitely rent from him again"
      },
      {
        author: "Alexander",
        author_image: "assets/images/authors/Alexander.jpg",
        date: "2024-01-23",
        stars: 5,
        review: "Tobias was cool and easy to communicate… will rent again"
      },
      {
        author: "Tony",
        author_image: "assets/images/authors/Tony.jpg",
        date: "2024-01-11",
        stars: 5,
        review: "Tobias was really easy to deal with. The car is amazing and the service matches. Will definitely be using him the next time we are in Sydney."
      },
      {
        author: "Joseph",
        author_image: "assets/images/authors/Joseph.jpg",
        date: "2024-01-11",
        stars: 5,
        review: "Tobias was great to deal with and the car was immaculate. Very good communication from start to finish! Would use Tobias’ services again next time I’m in Sydney!"
      },
      {
        author: "Lee",
        author_image: "assets/images/authors/Lee.jpg",
        date: "2023-11-26",
        stars: 5,
        review: "Very clean and well maintained car.Very easy to deal and interact with the Tobi."
      },
      {
        author: "Lee",
        author_image: "assets/images/authors/Lee.jpg",
        date: "2023-11-26",
        stars: 5,
        review: "Very clean and well maintained car.Very easy to deal and interact with the Tobi."
      },
      {
        author: "dhanush",
        author_image: "assets/images/authors/dhanush.jpg",
        date: "2023-11-07",
        stars: 5,
        review: "Tobias is amazing . Loved the way he explained the car and he replies within minutes . The car was in great condition."
      },
      {
        author: "Aidan",
        author_image: "assets/images/authors/Aidan.jpg",
        date: "2023-10-08",
        stars: 5,
        review: "Tobias was amazing with the tutorial before the trip which eventually made so much sense during the trip. This car is brand new and beautiful to drive. Sorry I got every bug possible and thank you so much 😊"
      },
      {
        author: "Josh",
        author_image: "assets/images/authors/Josh_y.jpg",
        date: "2023-10-05",
        stars: 5,
        review: "Amazing car and Amazing host, I will be back next time I am in the area 100% Tobias go above and beyond for his guests."
      },
      {
        author: "Jordan",
        author_image: "assets/images/authors/Jordan.jpg",
        date: "2023-09-21",
        stars: 5,
        review: "Tobias was brilliant. Showed me all the nifty tricks of a Tesla and how to set it up, also spent the time running me through all the operational side and features! Will certainly be back."
      },
      {
        author: "Aaron",
        author_image: "assets/images/authors/Aaron.jpg",
        date: "2023-09-17",
        stars: 5,
        review: "Tobias was great! Quick pickup and drop off. Fun and clean car, will rent again!"
      },
      {
        author: "Clifton",
        author_image: "assets/images/authors/Clifton.jpg",
        date: "2023-09-12",
        stars: 5,
        review: "Tobias handed over the car very clean, on time and gave a very thorough run through of the car as it was my first time driving a Tesla. Tobias communication was perfect and greatly appreciated. 5/5 with nothing to fault"
      },
      {
        author: "Sadia",
        author_image: "assets/images/authors/Sadia.jpg",
        date: "2023-08-20",
        stars: 5,
        review: "Very clean. The owner was very helpful to explain all details of the car. Enjoyed my trip with the car."
      },
      {
        author: "Aaron",
        author_image: "assets/images/authors/Aaron.jpg",
        date: "2023-09-17",
        stars: 5,
        review: "Tobias was great! Quick pickup and drop off. Fun and clean car, will rent again!"
      },
      {
        author: "matthew",
        author_image: "assets/images/authors/matthew.jpg",
        date: "2023-08-18",
        stars: 5,
        review: "fantastic car!"
      },
      {
        author: "Braden",
        author_image: "assets/images/authors/Braden.jpg",
        date: "2023-07-21",
        stars: 5,
        review: "Great car, great host!"
      }
    ]
    },
    {
      name: 'Tesla Model 3 Highland LR',
      images: [
        'assets/images/tesla-model-3/1.jpg',
        'assets/images/tesla-model-3/2.jpg',
        'assets/images/tesla-model-3/3.jpg',
        'assets/images/tesla-model-3/4.jpg',
        'assets/images/tesla-model-3/5.jpg',
        'assets/images/tesla-model-3/6.jpg',
        'assets/images/tesla-model-3/7.jpg',
        'assets/images/tesla-model-3/8.jpg',
        'assets/images/tesla-model-3/9.jpg',
        'assets/images/tesla-model-3/10.jpg'
      ],
      link: 'https://turo.com/au/en/car-rental/australia/hurstville/tesla/model-3/2518309',
      currentSlide: 0,
      currentReviewIndex: 0,
      turo_Rating: 4.96,
      year: 2023,
      pricePerDay: 110,
      specs: ['Long Range', 'Dual Motor', 'Autopilot', 'Premium Interior'],
      wltpRange: 628,
      reviews: [
        {
        author: "Amirarshia",
        author_image: "assets/images/authors/Amirarshia.jpg",
        date: "2025-05-05",
        stars: 5,
        review: "Great as always"
      },
      {
        author: "Oktay",
        author_image: "assets/images/authors/Oktay.jpg",
        date: "2025-03-31",
        stars: 5,
        review: "Very fun experience and Tobias was very helpful with instructions on how to use the car. Will definitely recommend!"
      },
      {
        author: "Junxing",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-03-13",
        stars: 5,
        review: "An amazing journey! Good car and good host."
      },
      {
        author: "Lukas",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-12-18",
        stars: 5,
        review: "Stunning car. Probably the cleanest Tesla in Australia. Great communication too. Highly recommend."
      },
      {
        author: "Rishav",
        author_image: "assets/images/authors/Rishav.jpg",
        date: "2024-11-26",
        stars: 5,
        review: "Highly recommended. Hassle free service"
      },
      {
        author: "Caitlin",
        author_image: "assets/images/authors/Caitlin.jpg",
        date: "2024-11-04",
        stars: 5,
        review: "Amazing! Wonderful car flawless communication and flexibility when circumstances got a bit haywire and I had to extend trip on the fly. Would absolutely recommend!!!"
      },
      {
        author: "John",
        author_image: "assets/images/authors/John.jpg",
        date: "2024-10-17",
        stars: 5,
        review: "Great brand nrw model3, pleasure to drive. Tobias is friendly and helpful, who responds fast to any inquiries, will book again in the future!"
      },
      {
        author: "Daniel",
        author_image: "assets/images/authors/Daniel.jpg",
        date: "2024-10-09",
        stars: 5,
        review: "Best service experience to date. Very seamless and professional. Car was spotless and neat. No hassles."
      },
      {
        author: "Armond",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-30",
        stars: 5,
        review: "Great car makes getting around fun, easy to pick up and return and the host is very helpful and easy to deal with."
      },
      {
        author: "Ilia",
        author_image: "assets/images/authors/Ilia.jpg",
        date: "2024-09-29",
        stars: 5,
        review: "The trip was very pleasant. The pick-up and drop-off of the car is 15 minutes from the airport, you should take this into account, but personally I found it more convenient because there is no airport hustle and bustle. Charging from 20 percent to 100 takes about 90 minutes if the charging station is not busy and costs about $ 35. However, it is worth considering that sometimes you have to wait in line at the charging stations. Free car wash is a very convenient option and I was glad that it is there. The owner answered all my questions almost immediately, was very polite and always tried to help. I can recommend this car, I have no complaints about it, nice clean and well maintained. Thank you very much for the trip, I will definitely come back!"
      },
      {
        author: "Arjun",
        author_image: "assets/images/authors/Arjun.jpg",
        date: "2024-09-26",
        stars: 5,
        review: "Super friendly, drives like a dream, very easy to operate and nice clean new car. I was really impressed."
      },
      {
        author: "Alex",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-10",
        stars: 5,
        review: "Super easy. Tobias gave me all the info I needed ahead of time. Car was super cool."
      },
      {
        author: "Rakshith",
        author_image: "assets/images/authors/Rakshith.jpg",
        date: "2024-08-16",
        stars: 3,
        review: "The car is a normal model 3 tesla. Maintained well. No issues with the car. The pickup and drop off is misleading. They charge 80$ for uber ride to and from the airport and the car is located at the opposite side to sydney. If I knew it was an uber pickup and drop off I wouldn't have booked."
      },
      {
        author: "Mark",
        author_image: "assets/images/authors/Mark.jpg",
        date: "2024-07-29",
        stars: 5,
        review: "Perfect experience from drop off to collection. Great car and great host."
      },
      {
        author: "Josh",
        author_image: "assets/images/authors/Josh.jpg",
        date: "2024-07-21",
        stars: 5,
        review: "The car was very clean, Tobias was extremely quick in responding to me and answering any of my questions. Airport pick up and drop off was made very easy, will be hiring again!"
      },
      {
        author: "Hartoyo",
        author_image: "assets/images/authors/Hartoyo.jpg",
        date: "2024-07-17",
        stars: 5,
        review: "All good like new car, nothing to complain about. Host also a nice guy."
      },
      {
        author: "Steven",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-07-07",
        stars: 5,
        review: "Great car and great service by Tobias. Thanks for a great trip."
      },
      {
        author: "Hsiang-Yin",
        author_image: "assets/images/authors/Hsiang-Yin.jpg",
        date: "2024-06-09",
        stars: 5,
        review: "It was a great experience with Tesla model 3. Very easy to drive and lots of storage space for ours trip .Tobias is very patient and helpful with all ours questions. Definitely will like to book Tesla again with Tobias:)"
      },
      {
        author: "Kevin",
        author_image: "assets/images/authors/Kevin.jpg",
        date: "2024-05-26",
        stars: 5,
        review: "Tobias was extremely helpful in locating ideal pick up and drop off points with us. The Tesla was immaculately presented and an absolute pleasure to drive. Our kids had never been in one before and spent most of the weekend raving about its features. We’re very grateful that Tobias made his Tesla available to us. Thanks again."
      },
      {
        author: "Natanael",
        author_image: "assets/images/authors/Natanael.jpg",
        date: "2024-05-19",
        stars: 5,
        review: "Great new model 3 with all the cool features. Top notch experience. Car looks as new and was in perfect condition. highly recommend."
      },
      {
        author: "Dan",
        author_image: "assets/images/authors/Dan.jpg",
        date: "2024-05-14",
        stars: 5,
        review: "Absolutely beautiful car and a great host. Tobias has been so helpful and communication was amazing. I will be hiring this car again soon and urge people to do the same"
      },
      {
        author: "Nikki",
        author_image: "assets/images/authors/Nikki.jpg",
        date: "2024-04-30",
        stars: 5,
        review: "Beautiful brand new Tesla Model 3. Tobias went above and beyond with pickup and drop off. Had a lovely time! Definitely recommend booking."
      },
      {
        author: "Cloudia",
        author_image: "assets/images/authors/Cloudia.jpg",
        date: "2024-04-03",
        stars: 5,
        review: "Exceptional service. Good quality and very modern car. Great professionalism, Timely responses to requests, Tobias was extremely accommodative and patient with us, We strongly recommend"
      },
      {
        author: "Nick",
        author_image: "assets/images/authors/Nick.jpg",
        date: "2024-03-11",
        stars: 5,
        review: "First time using Turo and Tobias was extremely helpful and easy to deal with! Car was fantastic! Will not be using the normal rental car companies ever again and will be using Tobias’s cars again definitely!!"
      },
      {
        author: "Mick",
        author_image: "assets/images/authors/Mick.jpg",
        date: "2024-03-03",
        stars: 5,
        review: "Awesome first time using Turo! Tobias provided a nice clean car. Was nice cruising around in the new Tesla model 3."
      },
      {
        author: "muhammad",
        author_image: "assets/images/authors/muhammad.jpg",
        date: "2024-02-27",
        stars: 5,
        review: "Excellent car! And thanks to Tobias for answering all my questions almost instantly"
      },
      {
        author: "FALEH",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-02-23",
        stars: 5,
        review: "The car is extremely clean and in perfect condition. Tobias was polite, professional and uncomplicated. He made it a great experience. Highly recommend!"
      },
      {
        author: "Emily",
        author_image: "assets/images/authors/Emily.jpg",
        date: "2024-02-11",
        stars: 5,
        review: "Tobias's Tesla was such a pleasant car to drive, clean and comfortable! Tobias also had an open line of communication, and was quick to respond to my messages."
      },
      {
        author: "Philip",
        author_image: "assets/images/authors/Philip.jpg",
        date: "2024-02-08",
        stars: 5,
        review: "I Rented Tobias Tesla Model 3 2024 model. The car was brand new and very easy to drive! Tobias was very helpful with both pickup and dropp off. Great value for the money. Would definitely recommend!"
      },
      {
        author: "Luke",
        author_image: "assets/images/authors/Luke.jpg",
        date: "2024-01-28",
        stars: 5,
        review: "The best car experience I’ve ever had. Toby was more than happy to answer any questions I had and responded within minutes every time or less. This is definitely worth the experience. Range managed my trip to Canberra with no problem.Thank you for the trip again Toby."
      },
      {
        author: "Nicolas",
        author_image: "assets/images/authors/Nicolas.jpg",
        date: "2024-02-08",
        stars: 5,
        review: "The best first experience ever!!! This was my first time using Turo and coming from years of experience using conventional car rental companies, I was incredibly satisfied! Tobias was extremely communicative and helpful, plus his car was immaculate! My experience with Tobias / Turo was vastly more personal and friendly than with any of the car rental companies I’ve used in the past. If all hosts on Turo are like Tobias, I don’t ever see myself renting from a conventional car rental again. Excellent!!!"
      }
    ]
    },
    {
      name: 'Tesla Model 3 Performance',
      images: [
        'assets/images/tesla-model-3-perf/1.jpg',
        'assets/images/tesla-model-3-perf/2.jpg',
        'assets/images/tesla-model-3-perf/3.jpg',
        'assets/images/tesla-model-3-perf/4.jpg',
        'assets/images/tesla-model-3-perf/5.jpg',
        'assets/images/tesla-model-3-perf/6.jpg',
        'assets/images/tesla-model-3-perf/7.jpg',
        'assets/images/tesla-model-3-perf/8.jpg',
        'assets/images/tesla-model-3-perf/9.jpg'
      ],
      link: 'https://turo.com/au/en/car-rental/australia/hurstville/tesla/model-3/2741050',
      currentSlide: 0,
      currentReviewIndex: 0,
      turo_Rating: 4.96,
      year: 2024,
      pricePerDay: 120,
      specs: ['Performance Suspension', 'Full Self Driving', '0-100 in 3 sec', 'Premium Interior'],
      wltpRange: 528,
      reviews: [        
        {
        author: "Marcus",
        author_image: "assets/images/authors/Marcus.jpg",
        date: "2025-04-27",
        stars: 5,
        review: "Great car, very clean, easy pick up. I’ll be back for sure"
      },
      {
        author: "Juan",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-04-24",
        stars: 5,
        review: "Great car, super clean, and an enjoyable experience overall. Would rent again."
      },
      {
        author: "Simon",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-04-17",
        stars: 4,
        review: "Car had a really bad smoke smell. Tobias was very helpful"
      },
      {
        author: "Adam",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-03-02",
        stars: 5,
        review: "Always an easy trip experience renting through tobias"
      },
      {
        author: "Dhanushka",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-01-27",
        stars: 5,
        review: "Car is in superb condition and stunning. Was well cleaned and charged ready to go. Very supportive and friendly service. Will rent again."
      },
      {
        author: "Adam",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2025-01-12",
        stars: 5,
        review: "Beautiful car , easy pickup and drop off system, would definitely recommend"
      },
      {
        author: "Kevin",
        author_image: "assets/images/authors/Kevin_p.jpg",
        date: "2025-01-05",
        stars: 5,
        review: "Car was very clean, tidy, in great condition and was lovely to drive. Highly recommended!"
      },
      {
        author: "Liam",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-12-31",
        stars: 5,
        review: "Fantastic car, made the trip even more enjoyable."
      },
      {
        author: "Daniel",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-12-25",
        stars: 5,
        review: "Everything was flawless. Instructions were clear and car was easily located."
      },
      {
        author: "Dominik",
        author_image: "assets/images/authors/Dominik.jpg",
        date: "2024-12-09",
        stars: 5,
        review: "Fantastic car and great host that was super organised and made our pick up a breeze! Would definitely use again"
      },
      {
        author: "olumide",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-11-16",
        stars: 5,
        review: "I had a great experience overall. The car was easy to find and the drop-off process went smoothly. Additionally, the car was in excellent condition and very clean, which I really appreciated."
      },
      {
        author: "Darren",
        author_image: "assets/images/authors/Darren.jpg",
        date: "2024-10-27",
        stars: 5,
        review: "car wash amazing, service was exceptional, definitely recommend"
      },
      {
        author: "Jeffrey",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-10-02",
        stars: 5,
        review: "Model 3 performance was very clean and still smelt new. We requested 2 child seats which was very convenient at no extra cost. Through the Tesla app pick-up was contactless. Tobias was quick at communicating and great problem solving skills when part of the charger was missing. I recommend Tobias and his other cars that he has to offer and will hire through him again."
      },
      {
        author: "Steven",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-06",
        stars: 5,
        review: "What an amazing experience. This was the first time I have rented and driven a Tesla. Tobias was great to communicate with and using the Tesla app and operating the car couldn’t be any easier. Would definitely hire through Turo and Tobias again. Although I think I might have to buy my own!"
      },
      {
        author: "Deborah",
        author_image: "assets/images/authors/placeholder.jpg",
        date: "2024-09-01",
        stars: 5,
        review: "Fabulous car, good host, great communication etc. loved the experience. Thanks Tobias!"
      },
      {
        author: "Josh_p",
        author_image: "assets/images/authors/Josh.jpg",
        date: "2024-08-19",
        stars: 5,
        review: "Tobias was a pleasure to deal with. Car was immaculate. Easy pickup and drop off."
      },
      {
        author: "Luke",
        author_image: "assets/images/authors/Luke.jpg",
        date: "2024-07-01",
        stars: 5,
        review: "As always with Toby it’s been a faultless experience and joy to ride for me and my friends. Highly recommend."
      }
    ]
    },
    {
      name: 'Tesla Model Y Juniper',
      images: [
        'assets/images/tesla-model-y-juniper/1.jpg',
        'assets/images/tesla-model-y-juniper/2.jpg',
        'assets/images/tesla-model-y-juniper/3.jpg',
        'assets/images/tesla-model-y-juniper/4.jpg',
        'assets/images/tesla-model-y-juniper/5.jpg',
        'assets/images/tesla-model-y-juniper/6.jpg',
        'assets/images/tesla-model-y-juniper/7.jpg',
        'assets/images/tesla-model-y-juniper/8.jpg',
        'assets/images/tesla-model-y-juniper/9.jpg'
      ],
      link: 'https://turo.com/au/en/car-rental/australia/hurstville/tesla/model-y/3166589',
      currentSlide: 0,
      currentReviewIndex: 0,
      turo_Rating: 4.96,
      year: 2025,
      pricePerDay: 118,
      specs: ['Improved Suspension', 'Full Self Driving', 'Premium Interior'],
      wltpRange: 465,
      reviews: []
    }
  ];

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }
}
