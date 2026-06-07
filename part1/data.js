// Ngân hàng dữ liệu KET Reading Part 1 — 21 bài tập (matching quiz)
// Mỗi bài: statements (câu hỏi) + signs (biển báo A–H, gồm cả biển nhiễu) + đáp án + giải thích
const DATA = [
  {
    id: 1, image: "image_b96f7d.jpg",
    statements: [
      { n: 0, text: "This is broken.", ans: "C", example: true },
      { n: 1, text: "Children pay less than adults here.", ans: "H" },
      { n: 2, text: "Be careful because this will burn.", ans: "F" },
      { n: 3, text: "We don't want any money yet.", ans: "E" },
      { n: 4, text: "Things are cheaper here.", ans: "A" },
      { n: 5, text: "You must pay with cash.", ans: "G" }
    ],
    signs: {
      A: "SUMMER SALE LOW PRICES IN ALL DEPARTMENTS",
      B: "FIRE DOOR KEEP CLOSED",
      C: "LIFT NOT WORKING",
      D: "TOY SHOP NOW OPEN",
      E: "BUY NOW PAY NEXT YEAR!",
      F: "Keep this nightdress away from fire!",
      G: "We do not take cheques or credit cards.",
      H: "Under 12s HALF PRICE"
    },
    explain: {
      H: '"Under 12s" là trẻ dưới 12 tuổi, "HALF PRICE" là nửa giá (trả ít tiền hơn người lớn).',
      F: '"Keep away from fire" (Tránh xa lửa) khớp với "this will burn".',
      E: '"PAY NEXT YEAR" (Sang năm mới trả) = hiện tại chưa cần đưa tiền.',
      A: '"SALE" và "LOW PRICES" = hàng rẻ hơn ("cheaper").',
      G: 'Không nhận séc hay thẻ tín dụng = bắt buộc trả tiền mặt.'
    }
  },
  {
    id: 2, image: "image_b911c7.jpg",
    statements: [
      { n: 1, text: "Not all drivers can stop here.", ans: "D" },
      { n: 2, text: "Children cannot come here in the evening.", ans: "A" },
      { n: 3, text: "Drivers must be careful.", ans: "C" },
      { n: 4, text: "Not everyone can make a call from here.", ans: "B" },
      { n: 5, text: "Only adults have to pay here.", ans: "E" }
    ],
    signs: {
      A: "SWIMMING POOL ADULTS ONLY 6–8 p.m.",
      B: "TELEPHONE for customers' use only",
      C: "DANGER! No Traffic Lights Ahead",
      D: "PARKING FOR POLICE CARS ONLY",
      E: "LEEDS CASTLE FREE ADMISSION FOR CHILDREN",
      F: "Film matinee 2 p.m. £3.00",
      G: "Bookshop – Closed afternoons",
      H: "TELEPHONES ON SECOND FLOOR"
    },
    explain: {
      D: '"POLICE CARS ONLY" = tài xế khác không được dừng đỗ.',
      A: '"ADULTS ONLY 6–8 p.m." = trẻ em không được vào khung giờ tối.',
      C: 'Biển "DANGER!" yêu cầu tài xế phải cẩn thận.',
      B: '"for customers\' use only" = người không phải khách thì không dùng được.',
      E: '"FREE ADMISSION FOR CHILDREN" = chỉ người lớn phải trả tiền vé.'
    }
  },
  {
    id: 3, image: "image_b90688.jpg",
    statements: [
      { n: 1, text: "These are cheaper if you buy several of them.", ans: "E" },
      { n: 2, text: "You can't get many different meals here.", ans: "C" },
      { n: 3, text: "Put this in a cold place.", ans: "A" },
      { n: 4, text: "You are too late to get a seat for this show.", ans: "G" },
      { n: 5, text: "This place is not open all night.", ans: "B" }
    ],
    signs: {
      A: "KEEP IN FRIDGE",
      B: "Door locked at midnight – ask for key before going out.",
      C: "SOUP AND HOT PIES ONLY",
      D: "TICKETS FOR OASIS CONCERT ON SALE HERE from 8 p.m.",
      E: "ALL THIS WEEK BUY 5 GET 1 FREE",
      F: "NO ANIMALS IN RESTAURANT",
      G: "ALL TICKETS SOLD",
      H: "USE BY 19 JULY"
    },
    explain: {
      E: '"BUY 5 GET 1 FREE" giúp giá trên mỗi sản phẩm rẻ hơn khi mua nhiều.',
      C: '"ONLY" (chỉ súp và bánh nướng) = thực đơn giới hạn, ít lựa chọn.',
      A: '"FRIDGE" (tủ lạnh) chính là "cold place".',
      G: '"ALL TICKETS SOLD" = đã muộn, không còn chỗ ngồi.',
      B: '"locked at midnight" = nơi này không mở xuyên đêm.'
    }
  },
  {
    id: 4, image: "image_b8f45c.jpg",
    statements: [
      { n: 1, text: "You must not play football here.", ans: "G" },
      { n: 2, text: "You may be late.", ans: "B" },
      { n: 3, text: "You should not leave your car here.", ans: "D" },
      { n: 4, text: "You can study here soon.", ans: "H" },
      { n: 5, text: "You cannot drive here today.", ans: "A" }
    ],
    signs: {
      A: "Bridge closed to traffic because of high wind.",
      B: "DELAYS POSSIBLE",
      C: "OLYMPIC SPORTS CENTRE - use your student card here.",
      D: "DO NOT PARK IN FRONT OF THE GARAGE",
      E: "CAR PARK £2.00 for 2 hours",
      G: "NO BALL GAMES ON GRASS",
      H: "COMPUTER COURSE STARTS ON MONDAY"
    },
    explain: {
      G: '"NO BALL GAMES" (cấm trò chơi với bóng) bao gồm cả đá bóng.',
      B: '"DELAYS POSSIBLE" = có thể bị hoãn/muộn.',
      D: '"DO NOT PARK" = không nên để xe ở đây.',
      H: '"STARTS ON MONDAY" = việc học sắp diễn ra ("soon").',
      A: '"Bridge closed to traffic" = không thể lái xe qua đây hôm nay.'
    }
  },
  {
    id: 5, image: "image_b8f366.jpg",
    statements: [
      { n: 1, text: "This is not for adults.", ans: "A" },
      { n: 2, text: "You can't drive this way.", ans: "C" },
      { n: 3, text: "We can help you day and night.", ans: "D" },
      { n: 4, text: "You can have dinner here.", ans: "B" },
      { n: 5, text: "Come here to book a holiday.", ans: "F" }
    ],
    signs: {
      A: "YOUTH CLUB - Under 16s only",
      B: "Half-price drinks with 3-course meals!",
      C: "CITY CENTRE CLOSED TO TRAFFIC ALL DAY TODAY",
      D: "Tourist Information - open 24 hours",
      E: "NO PETROL STATION ON MOTORWAY",
      F: "TURNER TRAVEL - Fly away to the sun this summer",
      G: "SCHOOL OFFICE CLOSED FOR LUNCH",
      H: "We repair shoes QUICKLY 8 a.m. – 5 p.m."
    },
    explain: {
      A: '"Under 16s only" loại trừ người lớn ("not for adults").',
      C: '"CLOSED TO TRAFFIC" = không thể lái xe theo đường này.',
      D: '"open 24 hours" = phục vụ cả ngày lẫn đêm.',
      B: '"3-course meals" = dịch vụ nhà hàng, có thể ăn tối.',
      F: '"TRAVEL" và "Fly away to the sun" = đặt kỳ nghỉ ("book a holiday").'
    }
  },
  {
    id: 6, image: "image_b89ced.jpg",
    statements: [
      { n: 1, text: "You can't leave your bicycle here.", ans: "C" },
      { n: 2, text: "Adults shouldn't let children play with this.", ans: "G" },
      { n: 3, text: "You can buy children's clothes here.", ans: "A" },
      { n: 4, text: "Do not come in if you are not wearing the right clothes.", ans: "B" },
      { n: 5, text: "Use this door to go outside.", ans: "F" }
    ],
    signs: {
      A: "School Uniform Department – This floor",
      B: "DANGER! No hard hat? No boots? NO ENTRANCE",
      C: "NO BICYCLES AGAINST THIS WINDOW",
      D: "KEEP OUT",
      E: "BICYCLES ONLY",
      F: "Exit to Shoemaker Road",
      G: "DANGER! KEEP AWAY FROM CHILDREN",
      H: "BICYCLES TO RENT"
    },
    explain: {
      C: '"NO BICYCLES AGAINST THIS WINDOW" = cấm dựng xe đạp ở đây.',
      G: '"KEEP AWAY FROM CHILDREN" = để xa tầm tay trẻ em vì nguy hiểm.',
      A: '"School Uniform" (đồng phục) chính là quần áo của trẻ em/học sinh.',
      B: '"NO ENTRANCE" nếu thiếu nón bảo hộ/ủng = không mặc đúng đồ.',
      F: '"Exit" = lối ra ngoài ("go outside").'
    }
  },
  {
    id: 7, image: "image_b892c0.jpg",
    statements: [
      { n: 1, text: "This is only for young people.", ans: "H" },
      { n: 2, text: "Go to the next floor if you want a drink.", ans: "B" },
      { n: 3, text: "You cannot drive here today.", ans: "C" },
      { n: 4, text: "We are open every day.", ans: "G" },
      { n: 5, text: "Do not bring your lunch in here.", ans: "D" }
    ],
    signs: {
      B: "COFFEE MACHINE UPSTAIRS",
      C: "DANGER – FOG! MOTORWAY CLOSED",
      D: "COMPUTER ROOM - No food or drinks inside",
      E: "Restaurant closed Tuesday and Thursday lunchtime",
      F: "Ladies' and children's coats upstairs",
      G: "Kenyan Coffee Centre - Opening hours: 8 a.m. – 6 p.m. daily",
      H: "Under 12s swimming course Saturday 10 a.m."
    },
    explain: {
      H: '"Under 12s" = trẻ em/người trẻ tuổi dưới 12.',
      B: '"UPSTAIRS" = tầng trên, "COFFEE MACHINE" phục vụ đồ uống.',
      C: '"MOTORWAY CLOSED" = đường cao tốc đóng, không lái xe qua được.',
      G: '"daily" đồng nghĩa "every day".',
      D: '"No food or drinks" = không mang đồ ăn vào.'
    }
  },
  {
    id: 8, image: "image_b88a6a.jpg",
    statements: [
      { n: 1, text: "You can use this for two days.", ans: "F" },
      { n: 2, text: "Students do not have to pay to go here at weekends.", ans: "E" },
      { n: 3, text: "Someone would like to speak another language.", ans: "A" },
      { n: 4, text: "If you study here, you will pay less for this.", ans: "C" },
      { n: 5, text: "You can find things to listen to here in the college.", ans: "B" }
    ],
    signs: {
      A: "WANTED Spanish lessons",
      B: "English Language Student Library - books, magazines and cassettes",
      C: "College Film Night... College students £2.50 | Others £3.00",
      D: "The Biggest Video Store in Town - OPEN 24 HOURS",
      E: "YORK MUSEUM | Sat–Sun: £2 / Students free",
      F: "Weekend Travel Card £10",
      G: "Learn to play the guitar in four months | Video course",
      H: "Colour Photos | Passport size only 4 for £3"
    },
    explain: {
      F: '"Weekend" gồm 2 ngày (thứ Bảy & Chủ Nhật).',
      E: '"Sat–Sun" + "Students free" = sinh viên miễn phí cuối tuần.',
      A: '"WANTED Spanish lessons" = muốn học nói một ngôn ngữ mới.',
      C: '"College students £2.50" rẻ hơn "Others £3.00".',
      B: '"cassettes" (băng nghe) = tài liệu để nghe trong thư viện.'
    }
  },
  {
    id: 9, image: "image_b87fbe.jpg",
    statements: [
      { n: 1, text: "These cost less than usual.", ans: "G" },
      { n: 2, text: "This is a bad time to be ill.", ans: "D" },
      { n: 3, text: "Be careful where you put this.", ans: "A" },
      { n: 4, text: "You will need to take a heavy sweater or jacket with you.", ans: "E" },
      { n: 5, text: "You will not be able to wash yourself here for a few days.", ans: "C" }
    ],
    signs: {
      A: "KEEP THIS MEDICINE AWAY FROM CHILDREN",
      B: "Check your holiday insurance now – before you go away.",
      C: "SORRY! No showers in the Sports Centre this week",
      D: "Dr Jenkins is on holiday until Friday.",
      E: "TODAY Day trip to the mountains Wear something warm!",
      F: "CAR WASH – £4 | We'll make it look like new",
      G: "All our winter holidays – 25% cheaper"
    },
    explain: {
      G: '"25% cheaper" = giá thấp hơn thông thường.',
      D: 'Bác sĩ "on holiday" = bị ốm lúc này thì không có người khám.',
      A: '"KEEP AWAY FROM CHILDREN" = cẩn thận nơi đặt thuốc.',
      E: '"Wear something warm" khi lên núi = cần áo khoác/áo len dày.',
      C: '"No showers" = không thể tắm rửa tại đây tuần này.'
    }
  },
  {
    id: 10, image: "image_b87f80.jpg",
    statements: [
      { n: 1, text: "If you have a second class ticket, you can't go in here.", ans: "E" },
      { n: 2, text: "You should wait here before you sit down.", ans: "G" },
      { n: 3, text: "There are no more seats for the show.", ans: "F" },
      { n: 4, text: "If you want a seat, get your ticket seven days before you travel.", ans: "D" },
      { n: 5, text: "First class tickets are cheaper at the weekend.", ans: "B" }
    ],
    signs: {
      A: "SEATS AT THE FRONT RESERVED FOR CHILDREN",
      B: "SATURDAY – SUNDAY Travel First Class at Second Class prices",
      C: "Waiting Room closed for cleaning",
      D: "TRAINS - For a seat, book early (one week in advance)",
      E: "WAITING ROOM For passengers with First Class tickets",
      F: "QUEEN'S THEATRE | ALL TICKETS SOLD OUT | STANDING ROOM ONLY",
      G: "Please wait for a waitress to show you to your seat.",
      H: "THIS WEEK ONLY! Buy two full-price tickets – get one half-price!"
    },
    explain: {
      E: 'Phòng chờ chỉ cho vé Hạng Nhất = vé hạng hai không được vào.',
      G: '"wait for a waitress to show you to your seat" = đợi trước khi ngồi.',
      F: '"ALL TICKETS SOLD OUT" + "STANDING ROOM ONLY" = hết chỗ ngồi.',
      D: '"one week in advance" = trước 7 ngày ("seven days").',
      B: 'Đi Hạng Nhất với giá Hạng Hai vào cuối tuần = rẻ hơn.'
    }
  },
  {
    id: 11, image: "image_b81de6.jpg",
    statements: [
      { n: 1, text: "You can't leave your car here all day.", ans: "C" },
      { n: 2, text: "You pay less to eat at this time.", ans: "G" },
      { n: 3, text: "If you are staying here, you may leave your car in this place.", ans: "E" },
      { n: 4, text: "Bring a friend here for lunch and you will pay for only one meal.", ans: "D" },
      { n: 5, text: "You cannot drive here at the moment.", ans: "A" }
    ],
    signs: {
      A: "ROAD CLOSED | BECAUSE OF TRAFFIC ACCIDENT",
      B: "SORRY – CASH ONLY",
      C: "SHORT STAY CAR PARK | £1.50 up to 2 hours",
      D: "TWO MEALS FOR THE PRICE OF ONE WITH THIS VOUCHER",
      E: "PARKING FOR HOTEL GUESTS ONLY",
      F: "CROSSROADS CAFÉ | Good, cheap food 24 hours a day",
      G: "All meals HALF-PRICE | 5–6 pm",
      H: "LAST PETROL STATION BEFORE MOTORWAY"
    },
    explain: {
      C: '"SHORT STAY" + "up to 2 hours" = không đỗ cả ngày được.',
      G: '"5–6 pm" giảm nửa giá ("HALF-PRICE").',
      E: '"HOTEL GUESTS ONLY" = khách lưu trú được đỗ xe.',
      D: '"TWO MEALS FOR THE PRICE OF ONE" = 2 suất tính tiền 1.',
      A: '"ROAD CLOSED" do tai nạn = không lái xe qua được.'
    }
  },
  {
    id: 12, image: "image_b815ca.jpg",
    statements: [
      { n: 1, text: "You can listen to a writer here one evening this week.", ans: "C" },
      { n: 2, text: "If you have lost a book, call this number.", ans: "F" },
      { n: 3, text: "Always keep your bags with you.", ans: "G" },
      { n: 4, text: "When you have finished reading, put back all the books.", ans: "A" },
      { n: 5, text: "You can eat lunch during this meeting.", ans: "E" }
    ],
    signs: {
      A: "STUDENT LIBRARY | Return books to shelves after use",
      B: "All flights half price (weekdays only)",
      C: "THURSDAY 8 PM | MARTIN BANKS WILL READ FROM HIS LATEST BOOK",
      D: "Only take small bags into the library",
      E: "LANGUAGE CLUB | English Conversation: 1–2 pm Fridays — Bring sandwiches!",
      F: "Dictionary found. Phone Simon on 529164 to get it back.",
      G: "CITY AIRPORT | DO NOT LEAVE YOUR LUGGAGE UNATTENDED",
      H: "CONCERT TICKET OFFICE | CLOSED FOR LUNCH"
    },
    explain: {
      C: 'Martin Banks đọc sách mới tối thứ Năm = nghe nhà văn nói chuyện.',
      F: 'Tìm thấy từ điển, gọi số đi kèm để nhận lại.',
      G: '"DO NOT LEAVE LUGGAGE UNATTENDED" = luôn mang hành lý theo.',
      A: '"Return books to shelves after use" = trả sách sau khi đọc xong.',
      E: '"1–2 pm" + "Bring sandwiches!" = ăn trưa trong buổi gặp.'
    }
  },
  {
    id: 13, image: "image_b80aa2.jpg",
    statements: [
      { n: 1, text: "Young people and their parents may choose different meals.", ans: "E" },
      { n: 2, text: "You can eat here in the evenings.", ans: "D" },
      { n: 3, text: "The waitress will show you where to sit.", ans: "G" },
      { n: 4, text: "You can stay the night here.", ans: "B" },
      { n: 5, text: "You should not usually use this door to go outside.", ans: "A" }
    ],
    signs: {
      A: "FIRE EXIT ONLY – NO ENTRANCE TO GARDEN",
      B: "Bed and Breakfast | Only £24.95",
      C: "This way to the restaurant garden",
      D: "Dinner is served in the restaurant until 10.00 p.m. daily",
      E: "There is a special children's menu – please ask your waitress",
      F: "Galaxy Restaurant | We have high chairs for young children",
      G: "RIVERSIDE RESTAURANT | Please ask us to find you a table",
      H: "Antec Computers | All staff must use night entrance 8 p.m. – 6 a.m."
    },
    explain: {
      E: '"children\'s menu" riêng = con cái và cha mẹ chọn món khác nhau.',
      D: '"Dinner ... until 10.00 p.m." = ăn được vào buổi tối.',
      G: '"ask us to find you a table" = nhân viên dẫn tới chỗ ngồi.',
      B: '"Bed and Breakfast" = chỗ ngủ qua đêm.',
      A: '"FIRE EXIT ONLY" = không dùng làm lối ra thông thường.'
    }
  },
  {
    id: 14, image: "image_863af1.jpg",
    statements: [
      { n: 1, text: "You must have a ticket to go past here.", ans: "D" },
      { n: 2, text: "If you want to travel Monday to Friday, this ticket is cheaper.", ans: "H" },
      { n: 3, text: "Please let anybody carrying a lot of luggage sit here.", ans: "B" },
      { n: 4, text: "You can only buy your ticket here if you have cash.", ans: "A" },
      { n: 5, text: "People who are travelling can eat something here.", ans: "E" }
    ],
    signs: {
      A: "These ticket machines take £20 and £10 | No credit cards",
      B: "These seats are for people with heavy suitcases",
      C: "Sorry – restaurant is closed on today's London–Glasgow train",
      D: "Passengers only through this gate | Have your ticket ready",
      E: "Station Café open all day | (opposite ticket office)",
      F: "Passengers with bicycles pay £5 extra on this train",
      G: "Please do not leave luggage here",
      H: "Save money: buy a weekly travel ticket here"
    },
    explain: {
      D: '"Have your ticket ready" tại cổng = phải có vé mới qua được.',
      H: '"weekly travel ticket" = rẻ hơn cho người đi nhiều ngày trong tuần.',
      B: '"heavy suitcases" = chỗ ngồi cho người mang nhiều hành lý.',
      A: '"No credit cards" = chỉ dùng tiền mặt.',
      E: '"Station Café open all day" = hành khách ăn được ở đây.'
    }
  },
  {
    id: 15, image: "image_863028.jpg",
    statements: [
      { n: 1, text: "They need someone to work here.", ans: "G" },
      { n: 2, text: "A special visitor is coming to the shop.", ans: "B" },
      { n: 3, text: "Go here if you need help.", ans: "F" },
      { n: 4, text: "This has moved to a different place.", ans: "A" },
      { n: 5, text: "There is a new book on sale.", ans: "E" }
    ],
    signs: {
      A: "Children's book department now on ground floor",
      B: "Grey's Books | Famous children's writer, Michael Whistler, here on Monday 25th",
      C: "SALE | All travel books – half price",
      D: "Coffee shop first floor | Hot drinks & snacks",
      E: "Just arrived! The Teenage Diaries by Judy Watson",
      F: "Can't find the right book? Ask at the information desk",
      G: "WANTED – Sales assistant to help in children's book department",
      H: "New for customers | Visit our new website to order your books"
    },
    explain: {
      G: '"WANTED – Sales assistant" = cần tuyển người làm.',
      B: 'Nhà văn nổi tiếng Michael Whistler ghé = vị khách đặc biệt.',
      F: '"Ask at the information desk" = đến quầy thông tin nếu cần giúp.',
      A: '"now on ground floor" = gian hàng đã chuyển chỗ.',
      E: '"Just arrived!" = đầu sách mới được mở bán.'
    }
  },
  {
    id: 16, image: "image_862904.jpg",
    statements: [
      { n: 1, text: "You cannot come here tomorrow.", ans: "B" },
      { n: 2, text: "If you want to play music well, you can study here.", ans: "F" },
      { n: 3, text: "You will have to pay more if you come to this place tomorrow.", ans: "D" },
      { n: 4, text: "You can get cheaper tickets if you are at college.", ans: "A" },
      { n: 5, text: "You can buy music more cheaply here for a short time.", ans: "G" }
    ],
    signs: {
      A: "JULES FOURNIER PLAYS CLASSICAL GUITAR | Students half price",
      B: "The ABC cinema closes for two weeks today for repairs",
      C: "SUMMERTOWN SCHOOL | NO TICKETS LEFT FOR NEXT WEEK'S CONCERT",
      D: "NEW THEATRE RESTAURANT | Meals half price today only",
      E: "Music Shop | Closed for lunch",
      F: "Piano and guitar courses at City College | Beginners welcome",
      G: "MUSIC STORE | Low prices on latest CDs | Next two weeks only",
      H: "Please do not take any food or drink into theatre"
    },
    explain: {
      B: 'Rạp đóng cửa bảo trì 2 tuần từ hôm nay = ngày mai không đến được.',
      F: '"Piano and guitar courses" = học để chơi nhạc giỏi.',
      D: '"half price today only" = ngày mai giá tăng lại.',
      A: '"Students half price" = sinh viên được vé rẻ hơn.',
      G: '"Low prices ... Next two weeks only" = mua nhạc rẻ trong thời gian ngắn.'
    }
  },
  {
    id: 17, image: "image_8624e2.png",
    statements: [
      { n: 1, text: "If you need a job, try telephoning this number.", ans: "D" },
      { n: 2, text: "You should pay with cash here.", ans: "B" },
      { n: 3, text: "Sometimes you don't have to book here.", ans: "A" },
      { n: 4, text: "If you find what this person is looking for, you will get some money.", ans: "H" },
      { n: 5, text: "This shop has lower prices than the other shops near to it.", ans: "F" }
    ],
    signs: {
      A: "JANE MUIR HAIRDRESSERS | Appointments are not always needed.",
      B: "We do not take traveller's cheques or credit cards.",
      C: "FOUND! Handbag with £50 cash | See Sonia at reception",
      D: "CLEANER WANTED | Will pay £6 per hour | Call: 333456",
      F: "VISIT CRYSTAL'S | Our watches are the cheapest in town.",
      G: "Harry's Fruit Farm | Summer jobs for students | Cash paid for all jobs",
      H: "LOST! GOLD WATCH | £50 for its safe return"
    },
    explain: {
      D: '"CLEANER WANTED ... Call: 333456" = cần việc thì gọi số này.',
      B: 'Không nhận séc du lịch lẫn thẻ tín dụng = phải dùng tiền mặt.',
      A: '"Appointments are not always needed" = đôi khi không cần đặt lịch.',
      H: '"LOST! ... £50 for its safe return" = tìm thấy thì được thưởng tiền.',
      F: '"the cheapest in town" = giá rẻ hơn các cửa hàng lân cận.'
    }
  },
  {
    id: 18, image: "image_861d01.jpg",
    statements: [
      { n: 1, text: "You can learn how to make different kinds of food on this course.", ans: "H" },
      { n: 2, text: "You have to get off one train and get on another if you want to go to Cambridge.", ans: "F" },
      { n: 3, text: "Phone this person if you want a job working with cars.", ans: "A" },
      { n: 4, text: "If you want someone to wash some clothes for you, it will be cheaper this week.", ans: "G" },
      { n: 5, text: "You mustn't take too many clothes to try on.", ans: "C" }
    ],
    signs: {
      A: "Mechanic needed | Call garage Manager (Cambridge 221507)",
      B: "Cambridge Station taxi drivers only",
      C: "Jane's Jeans | No more than 3 pairs in the changing room",
      E: "For help with cooking and housework telephone Carol on 332768",
      F: "Passengers for Cambridge change at Stevenage Station",
      G: "Clean shirts in 24 hours | Half-price until Saturday",
      H: "Chinese and Thai cooking lessons start here on Saturday"
    },
    explain: {
      H: '"cooking lessons" (Trung Quốc & Thái) = học nấu nhiều loại đồ ăn.',
      F: '"change at Stevenage Station" = đổi tàu để đi tiếp Cambridge.',
      A: '"Mechanic needed" = tuyển thợ sửa máy, gọi quản lý.',
      G: '"Half-price until Saturday" = giặt ủi rẻ hơn tuần này.',
      C: '"No more than 3 pairs" = không thử quá nhiều đồ.'
    }
  },
  {
    id: 19, image: "image_85c787.png",
    statements: [
      { n: 1, text: "You cannot travel by railway until tomorrow.", ans: "D" },
      { n: 2, text: "Children and parents travel for less with this.", ans: "C" },
      { n: 3, text: "You must pay before you travel on this.", ans: "G" },
      { n: 4, text: "Only adults pay to go in here.", ans: "A" },
      { n: 5, text: "This is late because of bad weather.", ans: "F" }
    ],
    signs: {
      A: "MUSEUM OF TRAVEL AND TRANSPORT | Entrance free for children",
      B: "Please show your ticket at the museum entrance",
      C: "GET CHEAPER TICKETS WITH A FAMILY RAILCARD",
      D: "NO TRAINS TODAY BECAUSE OF VERY HIGH WINDS",
      E: "TRAIN TICKETS WILL COST MORE FROM 1ST JANUARY",
      F: "8.30 LONDON TRAIN | DELAYED BECAUSE OF FOG",
      G: "DO NOT GET ON THE TRAIN WITHOUT A TICKET",
      H: "TICKET OFFICE CLOSED | BUY YOUR TICKET ON THE TRAIN"
    },
    explain: {
      D: '"NO TRAINS TODAY" do gió lớn = phải chờ tới ngày mai.',
      C: '"FAMILY RAILCARD" = giảm giá vé cho cả bố mẹ lẫn con.',
      G: '"WITHOUT A TICKET" bị cấm lên tàu = phải trả tiền trước.',
      A: '"Entrance free for children" = chỉ người lớn mua vé.',
      F: '"DELAYED BECAUSE OF FOG" = trễ do thời tiết xấu.'
    }
  },
  {
    id: 20, image: "image_85c3c1.png",
    statements: [
      { n: 1, text: "If you want to do something special for your child's birthday, call this number.", ans: "F" },
      { n: 2, text: "This company can take you to catch your plane at any time.", ans: "H" },
      { n: 3, text: "If you need to buy something to wear, this may be the cheapest place to look.", ans: "E" },
      { n: 4, text: "This restaurant always has special meals for children.", ans: "D" },
      { n: 5, text: "If you need to know about the traffic, you can call this number.", ans: "B" }
    ],
    signs: {
      A: "For times of afternoon coach trips, please ask hotel receptionist",
      B: "Telephone: 2222 for motorway news",
      C: "Many children's toys and books half price | This weekend only!",
      D: "Ask your waiter for our under-12s' menu",
      E: "HARRISONS DEPARTMENT STORE | NEW SEASON'S JACKETS – LOWEST PRICES IN TOWN",
      F: "Star Restaurant | Children's Party Room | Bookings ☎ 791053",
      G: "For cheap day return tickets, you must travel after 10am",
      H: "JENNI'S AIRPORT TAXIS | 24 hours / 7 days a week"
    },
    explain: {
      F: '"Children\'s Party Room | Bookings" = tổ chức sinh nhật cho con, gọi đặt.',
      H: '"24 hours / 7 days a week" = đưa ra sân bay bất kỳ lúc nào.',
      E: '"LOWEST PRICES IN TOWN" = nơi rẻ nhất để mua đồ mặc.',
      D: '"under-12s\' menu" = thực đơn riêng cho trẻ em.',
      B: '"2222 for motorway news" = gọi để biết tình hình giao thông.'
    }
  }
];
