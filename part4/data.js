// Ngan hang du lieu KET Reading Part 4 — 18 bai doc hieu (ban dich VN lam de, cau hoi tieng Anh)
const DATA = [
  {
    "id": 1,
    "title": "Robert, James & Harry",
    "passage": "Robert: Robert thích căn phòng của anh ấy gọn gàng, nhưng điều này khá khó vì đó cũng là phòng ngủ của em trai anh ấy. Khi Robert ở một mình trong phòng, anh ta làm bài tập về nhà của mình hoặc nghe nhạc. Trên tường có một vài tấm áp phích nhỏ. Robert muốn có nhiều hơn, và sơn bức tường màu vàng, nhưng mẹ của anh ấy không đồng ý. Ở đó có những bức ảnh của cả gia đình trong kì nghỉ và của những đứa trẻ con chị gái anh ấy. “Tôi thích căn phòng nhất khi chúng ở đây. Nó không được ngăn nắp, nhưng tôi không bận tâm”.\nJames: Phòng ngủ của James được sơn màu yêu thích của anh ấy là màu vàng. Anh ấy yêu môn bóng bầu dục, và ở đó có rất nhiều bức ảnh của anh ấy khi đang chơi cho đội bóng của trường. Sau khi tan học, tôi thích lên đây và chơi games. Căn phòng giống như nơi an toàn của tôi. Tôi có thể thư giãn ở đây. James giữ cho phòng mình ngăn nắp. Sách vở học tập để trên một chiếc kệ, và một cái kệ khác đặt tất cả những cuốn sách còn lại.\nHarry: Sau khi tan học, tôi lên đây để trò chuyện với những người tôi biết trên máy tính. Tôi không bao giờ làm việc ở đây, tôi học ở phòng bếp. Anh ấy có một cái bàn lớn với một chiếc máy tính xách tay đặt ở giữa, một cái máy tính bàn ở một bên và một cái đèn ở bên kia. Trên tường có 2 tấm áp phích của 2 ngôi sao tennis anh ấy yêu thích. “Tôi không thích thể thao lắm nhưng tôi thích xem tennis.”",
    "questions": [
      {
        "n": 21,
        "q": "Who has more than one computer in his room.",
        "qvi": "Ai có nhiều hơn một chiếc máy tính trong phòng mình?",
        "ans": "C",
        "label": "Harry",
        "explain": "Harry có một chiếc máy tính xách tay (laptop) đặt ở giữa và một cái máy tính bàn ở một bên."
      },
      {
        "n": 22,
        "q": "Who would like more pictures on the walls?",
        "qvi": "Ai muốn có nhiều tranh ảnh/áp phích hơn trên tường?",
        "ans": "A",
        "label": "Robert",
        "explain": "Bài đọc ghi: \"trên tường có một vài tấm áp phích nhỏ. Robert muốn có nhiều hơn...\""
      },
      {
        "n": 23,
        "q": "Who has pictures of himself doing sport?",
        "qvi": "Ai có những bức ảnh chụp chính mình đang chơi thể thao?",
        "ans": "B",
        "label": "James",
        "explain": "James có \"rất nhiều bức ảnh của anh ấy khi đang chơi cho đội bóng của trường.\""
      },
      {
        "n": 24,
        "q": "Who shares his room with someone else?",
        "qvi": "Ai chung phòng với người khác?",
        "ans": "A",
        "label": "Robert",
        "explain": "Phòng của Robert \"cũng là phòng ngủ của em trai anh ấy.\""
      },
      {
        "n": 25,
        "q": "Who talks to friends when he's in his room?",
        "qvi": "Ai trò chuyện với bạn bè khi ở trong phòng?",
        "ans": "C",
        "label": "Harry",
        "explain": "Harry lên phòng \"để trò chuyện với những người tôi biết trên máy tính.\""
      },
      {
        "n": 26,
        "q": "Who sometimes has visitors to his room?",
        "qvi": "Ai thỉnh thoảng có khách ghé thăm phòng?",
        "ans": "A",
        "label": "Robert",
        "explain": "Robert nhắc đến những đứa con của chị gái mình: “tôi thích căn phòng nhất khi chúng ở đây...”"
      },
      {
        "n": 27,
        "q": "Who studies in his bedroom?",
        "qvi": "Ai học bài/làm bài tập trong phòng ngủ?",
        "ans": "A",
        "label": "Robert",
        "explain": "Robert \"làm bài tập về nhà của mình\" khi ở một mình trong phòng. Harry học ở phòng bếp, James lên phòng để chơi game và thư giãn."
      }
    ],
    "type": "who",
    "options": {
      "A": "Robert",
      "B": "James",
      "C": "Harry"
    }
  },
  {
    "id": 2,
    "title": "An Amazing Adventure (Hành trình của Erden Eruç)",
    "passage": "Erden Eruç là người Thổ Nhĩ Kỳ nhưng hiện tại đang sống ở Mỹ với vợ của mình, Nancy. Vào tháng 7/2012, anh ấy đã hoàn thành một chuyến đi 5 năm, trở thành người đầu tiên đi vòng quanh thế giới mà không cần động cơ hay cánh buồm. Tất cả những gì anh ấy dùng là tay và chân của chính mình để đạp xe, chèo thuyền và đi bộ vòng quanh thế giới. Kế hoạch của anh ấy trước khi bắt đầu chuyến đi là leo lên những ngọn núi cao nhất của 6 lục địa mà anh ấy đi qua. Đáng tiếc anh ấy chỉ chinh phục được 3 trong số chúng bởi vì thời tiết xấu và vấn đề tiền bạc.\nErden đã dành nhiều thời gian của mình trong chuyến đi để chèo thuyền. Chuyến đi xuyên biển Thái Bình Dương mất 312 ngày. Ở một mình trong thời gian dài không phải điều dễ dàng, nhưng anh ấy đã giữ cho mình bận rộn bằng cách nghe nhạc và học tiếng Tây Ban Nha. Anh ấy đã mang theo lương khô và một cái máy làm nước ngọt từ nước biển. Tuy nhiên, nó chỉ hoạt động vào những ngày nắng.\nErden chắc chắn rằng anh ấy sẽ có nhiều chuyến thám hiểm hơn nữa vào một ngày nào đó. Nhưng hiện tại, tất cả những gì anh ấy muốn làm là thư giãn, nghĩ về chuyến đi của mình và dành thời gian với Nancy.",
    "questions": [
      {
        "n": 21,
        "q": "Erden began his journey around the world in 2012.",
        "qvi": "Erden bắt đầu hành trình vào năm 2012.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Anh ấy hoàn thành chuyến đi 5 năm vào tháng 7/2012, nghĩa là anh ấy phải bắt đầu vào năm 2007."
      },
      {
        "n": 22,
        "q": "Erden travelled around the world by bike, boat and on foot.",
        "qvi": "Erden đi vòng quanh thế giới bằng xe đạp, thuyền và đi bộ.",
        "ans": "A",
        "label": "Right",
        "explain": "Bài viết ghi rõ anh sử dụng tay chân để \"đạp xe, chèo thuyền và đi bộ\"."
      },
      {
        "n": 23,
        "q": "The plan to climb the mountains was made after Erden started the journey.",
        "qvi": "Kế hoạch leo núi được lập sau khi bắt đầu chuyến đi.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Kế hoạch này có từ \"trước khi bắt đầu chuyến đi\"."
      },
      {
        "n": 24,
        "q": "It was difficult for Erden to be by himself for so long while he was rowing.",
        "qvi": "Ở một mình thời gian dài khi chèo thuyền là điều khó khăn với Erden.",
        "ans": "A",
        "label": "Right",
        "explain": "Bài viết ghi: \"ở một mình trong thời gian dài không phải điều dễ dàng\"."
      },
      {
        "n": 25,
        "q": "Erden already spoke a little Spanish before he began his trip.",
        "qvi": "Erden đã nói được chút tiếng Tây Ban Nha trước chuyến đi.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ nói anh ấy \"học tiếng Tây Ban Nha\" khi chèo thuyền để bận rộn, không nói trước đó anh ấy đã biết hay chưa."
      },
      {
        "n": 26,
        "q": "Erden was able to use his water machine every day.",
        "qvi": "Erden có thể dùng máy lọc nước mỗi ngày.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Chiếc máy lọc nước biển \"chỉ hoạt động vào những ngày nắng\"."
      },
      {
        "n": 27,
        "q": "As soon as he returned, Erden began planning his next adventure.",
        "qvi": "Ngay khi trở về, Erden lập kế hoạch cho chuyến đi tiếp theo.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Hiện tại anh ấy chỉ muốn \"thư giãn, nghĩ về chuyến đi... và dành thời gian với Nancy\"."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 3,
    "title": "David Rawson (Thần đồng chèo thuyền)",
    "passage": "David Rawson, 15 tuổi, một trong những người chèo thuyền giỏi nhất nước Mỹ ở độ tuổi đó. Cậu bé đến từ Connecticut, và dành hầu hết thời gian rảnh rỗi để luyện tập trên những dòng sông gần nhà.\nBố của David, Martin cũng rất thích chèo thuyền. “David giỏi hơn tôi. Nhưng tôi vẫn đi cùng nó khi tôi có thể”, ông ấy nói. Mẹ của David, Wendy, không bơi thuyền nhưng bà ấy rất vui khi lái xe đưa đón chồng con bằng xe ô tô của mình.\nĐó là một môn thể thao đắt đỏ. Nhà Rawsons có 7 chiếc thuyền, giá của chúng vào khoảng 1500$ đến 4000$ mỗi chiếc. Nhưng bạn có thể thấy bơi thuyền quan trọng như thế nào với gia đình đó khi bạn đến thăm nhà họ. Ở đó có nhiều bức ảnh của David đang bơi thuyền và rất nhiều thuyền trong gara.\n18 tháng trước, David đã bắt đầu chèo thuyền trên biển. Môn thể thao này gần giống lướt sóng ngoại trừ việc bạn ngồi trong một chiếc thuyền đặc biệt thay vì đứng trên ván trượt. David yêu nó, và điều này có nghĩa anh ấy có thể tiếp tục chơi môn thể thao này vào mùa hè, khi mà những dòng sông yêu thích của anh ấy không còn đủ nước.\nSang năm, David hy vọng được đến Học viện chèo thuyền nơi mà anh ấy sẽ học chèo thuyền như những môn học khác trong trường.",
    "questions": [
      {
        "n": 21,
        "q": "There are lots of places for David to do his sport in his area.",
        "qvi": "Có nhiều nơi để David tập luyện trong vùng.",
        "ans": "A",
        "label": "Right",
        "explain": "Cậu luyện tập trên \"những dòng sông gần nhà\" (sông ở dạng số nhiều)."
      },
      {
        "n": 22,
        "q": "Martin says that David is nearly as good at rowing as him.",
        "qvi": "Martin nói David giỏi gần bằng ông.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Người bố khẳng định: \"David giỏi hơn tôi.\""
      },
      {
        "n": 23,
        "q": "Wendy helps Martin and David by doing the driving.",
        "qvi": "Wendy giúp bằng cách lái xe đưa đón.",
        "ans": "A",
        "label": "Right",
        "explain": "Mẹ cậu \"rất vui khi lái xe đưa đón chồng con\"."
      },
      {
        "n": 24,
        "q": "The Rawsons paid the same price for all their boats.",
        "qvi": "Nhà Rawson mua tất cả thuyền với cùng một giá.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Giá của chúng dao động \"khoảng 1500$ đến 4000$ mỗi chiếc\"."
      },
      {
        "n": 25,
        "q": "Wendy is unhappy about how many boats there are in the garage.",
        "qvi": "Wendy không vui vì có quá nhiều thuyền trong gara.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết không đề cập đến cảm xúc của bà Wendy về số thuyền trong gara."
      },
      {
        "n": 26,
        "q": "David found a teacher to help him learn to row on the sea.",
        "qvi": "David tìm được thầy dạy chèo thuyền trên biển.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ nói cậu tự bắt đầu chèo trên biển 18 tháng trước, không nhắc đến giáo viên nào."
      },
      {
        "n": 27,
        "q": "It is possible for David to row on his favourite rivers all year.",
        "qvi": "David có thể chèo thuyền trên sông yêu thích quanh năm.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Vào mùa hè, \"những dòng sông yêu thích của anh ấy không còn đủ nước\"."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 4,
    "title": "Howard Bonnier (Chủ nhà hàng The Palace)",
    "passage": "Bray là một ngôi làng cách London 50km về phía Tây. Một người đàn ông Anh trẻ tuổi tên là Howard Bonnier đã mở một nhà hàng The Place (The Palace) 3,5 tháng trước. Không nhiều người ở Anh biết tên của Bonnier nhưng anh ấy thực sự khá nổi tiếng ở Pháp. Điều này bởi vì anh ấy đã viết những cuốn tạp chí về hầu hết những nhà hàng nổi tiếng ở đó. Anh ấy mới chỉ 29 tuổi.\nKhi Howard còn là một cậu bé, anh ấy thường đi tới nhà hàng cùng bố mẹ. Anh ấy rất thích làm việc này nên anh ấy đã quyết định không dành nhiều tiền mua quần áo và đĩa CD mà thay vào đó, anh ấy sử dụng tiền của mình để đến nước Pháp và ăn ở những nhà hàng ngon. Anh ấy cũng mua nhiều sách nấu ăn Pháp và Anh – anh ấy nói rằng anh ấy có hơn 250 quyển.\nVậy tại sao anh ấy lại quyết định mở một nhà hàng? Đơn giản vì anh ấy yêu nấu nướng. Nó có dễ để làm điều này hay không? Anh ấy nói rằng, nó thì đắt khi mở một nhà hàng của chính bạn, và nó khó hơn rất nhiều khi nấu ăn cho 50 người hơn là nấu ăn cho gia đình của bạn, nhưng anh ấy chắc chắn rằng mình đã làm điều đúng đắn.",
    "questions": [
      {
        "n": 21,
        "q": "The Palace has been open for less than a year.",
        "qvi": "Nhà hàng mở cửa chưa đầy một năm.",
        "ans": "A",
        "label": "Right",
        "explain": "Nhà hàng mới mở được 3,5 tháng."
      },
      {
        "n": 22,
        "q": "Lots of people in France know about Howard.",
        "qvi": "Nhiều người ở Pháp biết về Howard.",
        "ans": "A",
        "label": "Right",
        "explain": "Anh ấy \"thực sự khá nổi tiếng ở Pháp\" nhờ viết bài cho các tạp chí nhà hàng."
      },
      {
        "n": 23,
        "q": "Howard's parents took him out to restaurants.",
        "qvi": "Bố mẹ đưa Howard đi ăn nhà hàng.",
        "ans": "A",
        "label": "Right",
        "explain": "Lúc nhỏ, anh ấy \"thường đi tới nhà hàng cùng bố mẹ\"."
      },
      {
        "n": 24,
        "q": "Howard has always spent a lot of money on clothes.",
        "qvi": "Howard luôn chi nhiều tiền cho quần áo.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Anh ấy \"quyết định không dành nhiều tiền mua quần áo và đĩa CD\"."
      },
      {
        "n": 25,
        "q": "Howard has written books about French cooking.",
        "qvi": "Howard viết sách về nấu ăn Pháp.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ nói anh ấy mua sách nấu ăn (buy cookbooks) và viết tạp chí đánh giá nhà hàng (write magazines about restaurants), không nói anh ấy tự viết sách nấu ăn."
      },
      {
        "n": 26,
        "q": "It costs a lot of money to eat in Howard's restaurant.",
        "qvi": "Ăn ở nhà hàng của Howard rất đắt.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ bảo chi phí mở nhà hàng thì đắt, không nhắc tới giá món ăn."
      },
      {
        "n": 27,
        "q": "Howard says cooking for a lot of people is easy.",
        "qvi": "Howard nói nấu ăn cho nhiều người thì dễ.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Anh ấy nói \"nó khó hơn rất nhiều khi nấu ăn cho 50 người hơn là nấu cho gia đình\"."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 5,
    "title": "Bill (Nhà văn thiếu nhi viết cuốn \"Con chó chăn cừu\")",
    "passage": "Bill đã là một nông dân, một giáo viên và một nha sĩ trước khi trở thành một nhà văn thiếu nhi ở độ tuổi 60. Bây giờ, 13 năm sau, ông ấy đã viết được hơn 80 cuốn sách. Hàng ngày, ông ấy đến văn phòng và viết. Vào buổi tối, ông đưa những gì viết được cho vợ đọc. “Cô ấy nói với tôi khi cô ấy thích hoặc không thích điều gì đó”, Bill nói. “10 đứa cháu của tôi không sống gần đây nhưng chúng cũng đọc những câu chuyện của tôi và nói khi chúng hay hoặc không hay.” Và vì vậy, Bill biết được điều mà những đứa trẻ muốn đọc.\nBill viết về cuộc sống ở ngôi làng của ông ấy và trên những nông trại gần đó. Cuốn sách thứ 5 là cuốn sách yêu thích của ông ấy: “Con chó chăn cừu” kể về một người nông dân và con chó đã giúp đỡ anh ấy. “Tôi luôn luôn thích động vật, và những con chó thì rất thông minh, chúng có thể học rất nhanh”.\nNăm ngoái, cuốn sách đã được làm thành một bộ phim với những con vật và diễn viên thực sự. Những nhà làm phim đã sử dụng công nghệ mới nhất để làm con người nghĩ rằng động vật đang nói chuyện. Bill rất hài lòng với bộ phim. “Đôi khi, những nhà làm phim làm thay đổi những cuốn sách nhưng họ đã không thay đổi cuốn sách của tôi và tôi yêu bộ phim”.",
    "questions": [
      {
        "n": 21,
        "q": "Bill became a writer thirteen years ago.",
        "qvi": "Bill trở thành nhà văn 13 năm trước.",
        "ans": "A",
        "label": "Right",
        "explain": "Ông bắt đầu viết từ năm 60 tuổi, và \"Bây giờ, 13 năm sau...\"."
      },
      {
        "n": 22,
        "q": "Bill writes his books in the evenings.",
        "qvi": "Bill viết sách vào buổi tối.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Hàng ngày ông đến văn phòng để viết (ban ngày), buổi tối là thời gian đưa cho vợ đọc."
      },
      {
        "n": 23,
        "q": "Bill shows his writing to his wife.",
        "qvi": "Bill cho vợ xem bản thảo.",
        "ans": "A",
        "label": "Right",
        "explain": "\"Vào buổi tối, ông đưa những gì viết được cho vợ đọc.\""
      },
      {
        "n": 24,
        "q": "Bill writes books about his grandchildren.",
        "qvi": "Bill viết sách về các cháu của mình.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Ông viết về \"cuộc sống ở ngôi làng của ông ấy và trên những nông trại gần đó\". Các cháu chỉ là người đọc và nhận xét."
      },
      {
        "n": 25,
        "q": "The Sheepdog was Bill's first book.",
        "qvi": "Cuốn \"Con chó chăn cừu\" là cuốn sách đầu tiên.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Đây là \"cuốn sách thứ 5\" của ông."
      },
      {
        "n": 26,
        "q": "Bill prefers writing about animals to writing about people.",
        "qvi": "Bill thích viết về động vật hơn con người.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc nói ông thích động vật, nhưng không có sự so sánh về sở thích viết giữa hai đề tài này."
      },
      {
        "n": 27,
        "q": "The film of The Sheepdog is different from the book.",
        "qvi": "Phim có nội dung khác so với sách.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bill nói: \"...họ đã không thay đổi cuốn sách của tôi\", tức là phim giống sách."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 6,
    "title": "John (Người làm vườn kiêm ca sĩ Jon Otis)",
    "passage": "Trong một công viên ở một thị trấn nhỏ ở trung tâm nước Anh, John cắt cỏ và tưới nước cho hoa. Nhưng suốt tuần trước, anh ấy đã ở Nhật và hàng triệu người Nhật đã xem người làm vườn 35 tuổi trên TV bởi lúc đó John là ca sĩ số 1 tại Nhật.\nJohn tới Nhật một vài tháng trước để hát ở những câu lạc bộ nhảy ở Osaka và Nagoya. Một người dẫn chương trình phát thanh đã nghe những bài hát của anh ấy và phát lại chúng trên radio. Hàng trăm người trẻ tuổi đã gọi đến đài để yêu cầu người dẫn chương trình phát lại những bài hát đó một lần nữa.\nJohn, người sử dụng cái tên Jon Otis khi anh ấy hát ở Nhật, sẽ không dừng công việc ở công viên ở Anh. Anh ấy không biết mình có thể kiếm bao nhiêu tiền từ việc đi hát. “Tôi phải giữ công việc của tôi ở công viên”, anh ấy nói, “tôi vẫn phải chi trả các hóa đơn”. Những người làm vườn khác không biết rằng anh ấy nổi tiếng ở Nhật, họ chưa từng nghe anh ấy hát.\nVợ của John, Denise, một nhân viên y tế, nói: “Điều này sẽ không thay đổi cuộc sống của chúng tôi. Tôi chỉ biết John Pickering, không biết John Otis”.",
    "questions": [
      {
        "n": 21,
        "q": "A few days ago, John was on television in Japan.",
        "qvi": "Vài ngày trước John đã lên TV ở Nhật.",
        "ans": "A",
        "label": "Right",
        "explain": "Bài đọc ghi \"suốt tuần trước, anh ấy đã ở Nhật và... xem người làm vườn... trên TV\"."
      },
      {
        "n": 22,
        "q": "John's first show in Japan was on the radio.",
        "qvi": "Buổi diễn đầu tiên của John ở Nhật là trên radio.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Đầu tiên anh ấy đến hát ở \"những câu lạc bộ nhảy\", sau đó người nhà đài nghe được mới đem phát lên radio."
      },
      {
        "n": 23,
        "q": "John hopes to become famous in England one day.",
        "qvi": "John hy vọng một ngày nào đó nổi tiếng ở Anh.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết không nhắc gì đến mong muốn nổi tiếng tại Anh của anh ấy."
      },
      {
        "n": 24,
        "q": "John Pickering and Jon Otis are the same person.",
        "qvi": "John Pickering và Jon Otis là cùng một người.",
        "ans": "A",
        "label": "Right",
        "explain": "Jon Otis là tên anh ấy dùng khi hát ở Nhật, còn người vợ gọi tên thật của anh là John Pickering."
      },
      {
        "n": 25,
        "q": "John will still work in the park because he needs the money.",
        "qvi": "John vẫn làm ở công viên vì cần tiền.",
        "ans": "A",
        "label": "Right",
        "explain": "Anh nói: “Tôi phải giữ công việc... tôi vẫn phải chi trả các hóa đơn”."
      },
      {
        "n": 26,
        "q": "John's colleagues think his songs are very good.",
        "qvi": "Đồng nghiệp nghĩ bài hát của anh rất hay.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Các đồng nghiệp ở công viên \"chưa từng nghe anh ấy hát\"."
      },
      {
        "n": 27,
        "q": "John's wife would like him to stop singing.",
        "qvi": "Vợ John muốn anh dừng ca hát.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Người vợ chỉ nói việc này không làm thay đổi cuộc sống của họ, không bảo muốn anh nghỉ hát."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 7,
    "title": "Bill - Travel Writer (Nhà văn du lịch chuyển từ Anh về Mỹ)",
    "passage": "Tôi được sinh ra ở Mỹ nhưng tôi viết nhiều cuốn sách du lịch về nước Anh. Tôi đã sống ở đó cùng vợ và 4 đứa con trong 20 năm, nhưng 3 năm trước, chúng tôi đã tới sống ở Mỹ. Những đứa con của tôi bây giờ đang học về cuộc sống ở Mỹ. Tôi chắc chúng sẽ cảm thấy hạnh phúc vì được sống ở hai quốc gia. Tôi thích nước Anh và tôi muốn quay trở lại, nhưng con gái tôi, Felicity, sẽ học đại học ở đây, vì vậy sẽ không thể đi tới nơi khác trong 4 năm.\nTôi vừa tới nước Anh trong 6 tuần để làm việc trên một chương trình radio về ngôn ngữ Anh và cũng nói về cuốn sách tôi vừa hoàn thành. Hầu hết những nhà văn đều không thích làm điều này; họ không muốn đi khắp nơi để bán những cuốn sách của họ. Tôi thì không bận tâm về điều đó. Tôi thích tới thăm nhiều nơi mới và gặp gỡ nhiều người. Nó rất khác so với cuộc sống tôi có ở Mỹ. Ở Anh, tôi được chở trong những chiếc xe lớn và ở trong những khách sạn đắt tiền. Điều đó thật tốt bởi vì tôi không phải trả bất kì hóa đơn nào cả. Mọi người tốt bụng và vui vẻ.",
    "questions": [
      {
        "n": 21,
        "q": "Bill returned to the United States after living in England for a long time.",
        "qvi": "Bill về Mỹ sau khi sống ở Anh thời gian dài.",
        "ans": "A",
        "label": "Right",
        "explain": "Ông ấy đã sống ở Anh tận 20 năm trước khi dời về Mỹ."
      },
      {
        "n": 22,
        "q": "Bill thinks it will be good for his children to live in more than one country.",
        "qvi": "Bill nghĩ sống ở nhiều quốc gia sẽ tốt cho con.",
        "ans": "A",
        "label": "Right",
        "explain": "Ông khẳng định: \"Tôi chắc chúng sẽ cảm thấy hạnh phúc vì được sống ở hai quốc gia.\""
      },
      {
        "n": 23,
        "q": "Bill's daughter didn't want to go to college in England.",
        "qvi": "Con gái Bill không muốn học đại học ở Anh.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ nói cô bé \"năm nay sẽ học đại học ở đây (Mỹ)\", không nói đến việc cô bé có \"muốn\" học ở Anh hay không."
      },
      {
        "n": 24,
        "q": "Bill has just visited England to finish writing his new book.",
        "qvi": "Bill đến Anh để viết cho xong sách mới.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Ông đến để quảng bá cho \"cuốn sách tôi vừa hoàn thành\" (sách đã viết xong rồi)."
      },
      {
        "n": 25,
        "q": "Bill is happy with the things he has to do to sell his books.",
        "qvi": "Bill vui vẻ với việc đi quảng bá bán sách.",
        "ans": "A",
        "label": "Right",
        "explain": "Ông nói: \"Tôi thì không bận tâm... Tôi thích tới thăm nhiều nơi mới và gặp gỡ nhiều người.\""
      },
      {
        "n": 26,
        "q": "Bill has travelled to many different places in the United States.",
        "qvi": "Bill đi du lịch nhiều nơi ở Mỹ.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ so sánh cuộc sống ở Anh với cuộc sống ở Mỹ chứ không nhắc việc ông đi du lịch tại Mỹ."
      },
      {
        "n": 27,
        "q": "It cost Bill a lot of money to travel around England for six weeks.",
        "qvi": "Chuyến đi Anh 6 tuần tốn của Bill nhiều tiền.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Ông được tài trợ ở khách sạn đắt tiền và đi xe lớn: \"tôi không phải trả bất kì hóa đơn nào cả.\""
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 8,
    "title": "Victoria (Nữ vận động viên trượt ván tuyết)",
    "passage": "Victoria đến từ Anh đã bắt đầu trượt dốc tuyết (snowboarding) năm 20 tuổi. Bây giờ cô ấy 23 tuổi và đã chiến thắng nhiều cuộc thi ở môn thể thao này. Chúng tôi nói chuyện với cô ấy khi cô ấy đang ở Switzerland cho một cuộc thi trượt dốc tuyết vào tuần trước và hỏi cô ấy tại sao lại bắt đầu môn thể thao này.\n“Tôi luôn thích tất cả các môn thể thao, đặc biệt là trượt tuyết, và nó có vẻ tự nhiên để bắt đầu trượt tuyết bằng ván. Nó không mất nhiều thời gian để học và bạn có thể trượt tốt chỉ trong một vài tháng.”\nChúng tôi đã hỏi cô ấy nếu cô ấy phải tập luyện nhiều. “Vào mùa đông, tôi trượt tuyết trên núi mỗi ngày từ 8.30 am đến 4pm. Tôi cũng chạy và đạp xe. Nhưng tôi thích làm tất cả các việc đó. Tôi thích những cuộc thi và được ở trên núi. Nhưng khi trượt xuống tự do – làm điều mà bạn muốn khi không ở trong một cuộc thi, đó là điều tuyệt vời nhất trên thế giới đối với tôi.”\nChúng tôi đã hỏi cô ấy cái gì là quan trọng khi bạn học. “Bạn có thể học nhanh nhưng bạn cần những bài học. Nó cũng quan trọng khi phải mặc đúng loại quần áo vì vậy bạn sẽ không bị ướt, vì khi bắt đầu, bạn dành hầu hết thời gian để ngã xuống.”",
    "questions": [
      {
        "n": 21,
        "q": "Victoria was visiting Switzerland for a competition.",
        "qvi": "Victoria đến Thụy Sĩ vì một cuộc thi.",
        "ans": "A",
        "label": "Right",
        "explain": "\"khi cô ấy đang ở Switzerland cho một cuộc thi trượt dốc tuyết...\""
      },
      {
        "n": 22,
        "q": "Victoria has won many skiing competitions.",
        "qvi": "Victoria thắng nhiều cuộc thi trượt tuyết/trượt ván.",
        "ans": "A",
        "label": "Right",
        "explain": "\"đã chiến thắng nhiều cuộc thi ở môn thể thao này.\""
      },
      {
        "n": 23,
        "q": "Victoria thinks that snowboarding is a difficult sport to learn.",
        "qvi": "Victoria nghĩ môn này khó học.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cô ấy bảo: \"Nó không mất nhiều thời gian để học...\""
      },
      {
        "n": 24,
        "q": "Working hard at her sport is not a problem for Victoria.",
        "qvi": "Tập luyện vất vả không thành vấn đề với cô.",
        "ans": "A",
        "label": "Right",
        "explain": "Dù lịch tập dày đặc nhưng cô chia sẻ: \"Tôi thích làm tất cả các việc đó.\""
      },
      {
        "n": 25,
        "q": "Victoria likes competitions more than anything else.",
        "qvi": "Victoria thích các cuộc thi nhất.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Thứ cô thích nhất là \"khi trượt xuống tự do... đó là điều tuyệt vời nhất trên thế giới đối với tôi\"."
      },
      {
        "n": 26,
        "q": "Victoria thinks you should have a teacher if you want to learn snowboarding.",
        "qvi": "Cô ấy nghĩ nên có thầy dạy.",
        "ans": "A",
        "label": "Right",
        "explain": "Cô lưu ý: “...bạn cần những bài học (lessons)”, tức là cần người hướng dẫn."
      },
      {
        "n": 27,
        "q": "Victoria says you can wear anything you like when you learn to snowboard.",
        "qvi": "Cô ấy nói có thể mặc bất cứ gì khi học.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cô bảo: “Nó cũng quan trọng khi phải mặc đúng loại quần áo...” nhằm tránh bị ướt khi ngã."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 9,
    "title": "Ice-fishing (Câu cá dưới băng ở hồ Nipissing)",
    "passage": "Nếu bạn lái xe về phía Bắc từ Toronto khoảng 3 giờ, bạn sẽ đến hồ Nipissing. Vào mùa đông, cái hồ bắt đầu đóng băng và hàng nghìn người câu cá Canada đến đây mỗi cuối tuần. Họ xây những căn nhà nhỏ bằng gỗ và sơn chúng với màu sáng. Sau đó họ ngồi bên trong và câu những con cá đang bơi dưới băng.\nBob đã đến đây vào thời điểm này mỗi năm trong 25 năm. “Bạn cần quần áo sáng màu nhưng ấm, nhiều áo len mỏng, hai đôi tất và găng tay và 1 bộ đồ tuyết mặc ngoài cùng. Bắt cá thì dễ”, anh ấy nói, “đầu tiên, bạn làm vỡ băng và tạo một hố tròn nhỏ trên đó. Tiếp theo bạn lấy dây câu cá và buộc vào một ít bánh mỳ. Bạn thả cái dây qua hố xuống nước và kéo dây lên khi cá cắn câu. Những con cá thường dài từ 10-20cm. Một vài người thích ăn chúng, nhưng khi tôi bắt được 3,4 con, tôi thích ăn một ít socola hoặc đồ ăn nhẹ hơn. Hôm nay tôi đã bắt được 25 con. Nó là một môn thể thao tuyệt vời và bạn có thể gặp những người tốt ở đây.”",
    "questions": [
      {
        "n": 21,
        "q": "Fishermen only use the houses on Lake Nipissing in winter.",
        "qvi": "Ngư dân chỉ dùng nhà trên hồ vào mùa đông.",
        "ans": "A",
        "label": "Right",
        "explain": "Nhà gỗ này được dựng trên mặt băng để câu cá mùa đông, các mùa khác băng tan nên không dùng được."
      },
      {
        "n": 22,
        "q": "The fishermen sit in boats to catch the fish.",
        "qvi": "Ngư dân ngồi trên thuyền câu cá.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Họ \"xây những căn nhà nhỏ bằng gỗ... ngồi bên trong và câu\"."
      },
      {
        "n": 23,
        "q": "Bob goes to Lake Nipissing every winter.",
        "qvi": "Bob đến hồ Nipissing mỗi mùa đông.",
        "ans": "A",
        "label": "Right",
        "explain": "\"Bob đã đến đây vào thời điểm này (mùa đông) mỗi năm trong 25 năm.\""
      },
      {
        "n": 24,
        "q": "Bob wears old clothes for ice-fishing.",
        "qvi": "Bob mặc đồ cũ khi đi câu.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ kể ra các loại áo quần ấm cần mặc, không nói đồ cũ hay đồ mới."
      },
      {
        "n": 25,
        "q": "The fish are usually longer than twenty centimetres.",
        "qvi": "Cá thường dài hơn 20cm.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cá câu được \"thường dài từ 10-20cm\", tức là dài tối đa 20cm."
      },
      {
        "n": 26,
        "q": "When Bob has caught a few fish, he cooks them and eats them.",
        "qvi": "Khi bắt được vài con, Bob sẽ nấu ăn luôn.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bob nói khi câu được vài con thì ông \"thích ăn một ít socola hoặc đồ ăn nhẹ hơn\"."
      },
      {
        "n": 27,
        "q": "Bob thinks ice-fishing is a way of making new friends.",
        "qvi": "Bob nghĩ đây là cách để kết bạn mới.",
        "ans": "A",
        "label": "Right",
        "explain": "Ông khen: \"bạn có thể gặp những người tốt ở đây” (đồng nghĩa với việc có cơ hội kết bạn)."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 10,
    "title": "Corryvale Socks (Kinh doanh tất từ lông cừu)",
    "passage": "Nông trại Corryvale nằm ở phía đông nước Anh. Stephen và Jenny chăm sóc những con bò và gà; bán sữa và trứng. Nhưng hầu hết tiền của họ thì đến từ những con cừu của Jenny.\nCô ấy có 50 con cừu, mỗi con có đủ lông cho 6 cái áo len. Mỗi sáu tháng, Stephen cắt lông cừu một lần nên chúng sẽ không bị quá nóng. 5 năm trước, Jenny đã làm một vài cái áo len và thử bán chúng ở khu chợ trong vùng. Nhưng nó đang là mùa hè nên không ai muốn mua chúng. Sau đó cô ấy đã làm một vài đôi tất. Mọi người yêu chúng vì chúng rẻ, dày, và dễ giặt.\nĐó là cách mà việc kinh doanh của Jenny bắt đầu. Đầu tiên cô ấy làm tất ở nhà nhưng cô ấy đã sớm có hàng nghìn khách hàng nên cô ấy phải gửi lông đến một nhà máy, nơi mà bây giờ tất cả các đôi tất đều được làm bằng máy móc. Có 6 màu tất, 5 size cho mọi lứa tuổi, và những loại khác nhau để đi bộ, tập thể thao và trượt tuyết. Jenny bận nhất vào dịp Giáng sinh vì tất Corryvale là một món quà yêu thích. Ở trên tường văn phòng của Jenny có hàng trăm bức thư từ những vị khách hàng trên toàn thế giới.",
    "questions": [
      {
        "n": 21,
        "q": "Jenny only gets wool from her sheep once a year.",
        "qvi": "Jenny chỉ lấy lông cừu một lần một năm.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bài viết ghi: \"Mỗi sáu tháng, Stephen cắt lông cừu 1 lần\", tức là lấy lông 2 lần/năm."
      },
      {
        "n": 22,
        "q": "It took Jenny a long time to make the sweaters.",
        "qvi": "Jenny mất nhiều thời gian làm áo len.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ bảo cô có làm áo len đem bán, không nhắc làm nhanh hay lâu."
      },
      {
        "n": 23,
        "q": "Jenny couldn't sell the sweaters because it was the wrong time of year.",
        "qvi": "Jenny không bán được áo len vì sai thời điểm.",
        "ans": "A",
        "label": "Right",
        "explain": "Vì cô đem bán vào mùa hè (thời điểm nóng nực, không ai mua áo len)."
      },
      {
        "n": 24,
        "q": "Jenny decided that socks were easier to make than sweaters.",
        "qvi": "Jenny thấy làm tất dễ hơn làm áo len.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài chỉ nói cô chuyển từ áo len sang làm tất vì tất bán chạy, không so sánh độ dễ/khó sản xuất."
      },
      {
        "n": 25,
        "q": "Corryvale socks are still made on the farm.",
        "qvi": "Tất vẫn đang được làm tại nông trại.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bây giờ cô đã \"gửi lông đến 1 nhà máy\" để sản xuất hàng loạt bằng máy móc."
      },
      {
        "n": 26,
        "q": "You can't buy Corryvale socks for children.",
        "qvi": "Bạn không thể mua tất này cho trẻ em.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Sản phẩm có \"5 size cho mọi lứa tuổi\" nên trẻ em vẫn đi được."
      },
      {
        "n": 27,
        "q": "People from many different countries buy Corryvale socks.",
        "qvi": "Khách hàng từ nhiều nước mua tất.",
        "ans": "A",
        "label": "Right",
        "explain": "Văn phòng của cô treo đầy thư của khách hàng \"trên toàn thế giới\"."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 11,
    "title": "Frazer & Peter (Trò chơi học từ vựng cho em trai)",
    "passage": "Frazer và Peter là hai cậu bé 14 tuổi cùng lớn lên ở một thị trấn nhỏ ở Canada. Họ là những người bạn học cùng lớp. Giống như tất cả những người bạn khác của họ, họ thích đi bơi và câu cá vào cuối tuần. Nhưng suốt vài tháng trước, họ đã dành mọi cuối tuần ở trong phòng của Peter để làm việc với máy tính của anh ấy. Điều này không phải vì họ có quá nhiều bài tập về nhà. Họ đã làm một trò chơi về từ vựng trên máy tính.\nÝ tưởng cho trò chơi này đến từ em trai của Frazer, Kevin, người gặp vấn đề với việc phát âm. Kevin học từ vựng dễ hơn bằng cách xem những bức tranh và nghe những thông tin hơn là việc tự đọc. Anh trai của cậu bé muốn giúp. Frazer và Peter đã làm việc cùng nhau hơn 200 giờ để làm trò chơi trên máy tính và bây giờ nó đã sẵn sàng để sử dụng. Nó là một trò chơi về tranh và phát âm. Ví dụ, khi bạn nhìn vào từ “mũ” thì hình ảnh của cái mũ sẽ xuất hiện và đồng thời bạn sẽ nghe thấy Peter nói “mũ, mũ”.\nHai cậu bé đã chiến thắng nhiều giải thưởng cho trò chơi này và nó sẽ sớm được bán trên toàn thế giới. Nhiều trường học có hứng thú trong việc mua nó.",
    "questions": [
      {
        "n": 21,
        "q": "Peter and Frazer go to the same school in Canada.",
        "qvi": "Peter và Frazer học cùng trường.",
        "ans": "A",
        "label": "Right",
        "explain": "Hai người là \"bạn học cùng lớp\" (classmates)."
      },
      {
        "n": 22,
        "q": "Peter and Frazer like doing different sports to their friends.",
        "qvi": "Hai bạn thích chơi thể thao khác các bạn khác.",
        "ans": "B",
        "label": "Wrong",
        "explain": "\"Giống như tất cả những người bạn khác... họ thích đi bơi và câu cá\"."
      },
      {
        "n": 23,
        "q": "For the past few months, the boys have spent most of their time outside.",
        "qvi": "Mấy tháng qua hai bạn ở ngoài trời là chủ yếu.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Họ đã \"dành mọi cuối tuần ở trong phòng của Peter\" để lập trình máy tính."
      },
      {
        "n": 24,
        "q": "Peter and Frazer prefer playing computer games to doing their homework.",
        "qvi": "Họ thích chơi game hơn làm bài tập.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ bảo họ ở trong phòng không phải để làm bài tập, chứ không so sánh độ yêu thích giữa hai việc."
      },
      {
        "n": 25,
        "q": "It took less than 200 hours to finish the new computer game.",
        "qvi": "Mất ít hơn 200 giờ để hoàn thiện game.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Hai bạn đã làm việc \"hơn 200 giờ\" (more than 200 hours)."
      },
      {
        "n": 26,
        "q": "In the computer game, you see a picture of a word and hear it spoken.",
        "qvi": "Trong game bạn thấy hình ảnh của từ và nghe phát âm.",
        "ans": "A",
        "label": "Right",
        "explain": "Nhìn từ \"mũ\" sẽ ra hình cái mũ và nghe loa phát âm từ \"mũ, mũ\"."
      },
      {
        "n": 27,
        "q": "Students in other countries have said they would like to use the computer game.",
        "qvi": "Học sinh nước khác nói họ muốn dùng game.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ bảo \"Nhiều trường học (schools) có hứng thú\", không nhắc đến lời phát biểu trực tiếp từ các em học sinh (students)."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 12,
    "title": "Ba nghệ sĩ Piano: Ivan, Oleg & Josef",
    "passage": "Ivan: Ivan được sinh ra trong một gia đình ở Nga, nhưng từ lúc 12 – 18 tuổi, anh ấy đã học ở Ba Lan. Giáo viên dạy nhạc đầu tiên của anh ấy không thể chơi piano nhưng đã dạy anh ấy những bài hát opera. Mẹ của anh ấy dạy anh ấy chơi piano khi anh ấy 6 tuổi. Lúc 10 tuổi, anh ấy quyết định rằng mình cũng muốn viết nhạc và đã sớm có bản nhạc đầu tiên của chính mình.\nOleg: Oleg là đứa trẻ nhỏ nhất trong năm anh chị em và khi anh ấy 4 tuổi, bố của anh ấy, một người thích chơi piano, đã dạy anh ấy một vài bản nhạc Nga cổ điển. Khi anh ấy 6 tuổi, anh ấy đã có bài học piano với một giáo viên piano sống cùng thành phố. Oleg sớm chiến thắng nhiều giải thưởng cho việc chơi piano của anh ấy. Lúc 14 tuổi, anh ấy đã đi học nhạc ở Úc trong 2 năm và sau đó trở về nhà tại Nga.\nJosef: Bố của Josef là người Đức nhưng ông ấy dạy nhạc ở Ba Lan khi Josef được sinh ra. Cả gia đình đã chuyển đến Đức khi Josef 2 tuổi và một năm sau, anh ấy đã bắt đầu chơi piano. Anh ấy có buổi hòa nhạc đầu tiên khi anh ấy 6 tuổi. Lúc 10 tuổi, anh ấy đã có 52 buổi hòa nhạc trong suốt 2 tháng trên chuyến đi tới Anh. Josef luôn thích nhạc nhưng anh ấy cũng có hứng thú với những môn học khác như vật lý và ngoại ngữ. Bây giờ anh ấy quá bận nhưng một ngày nào đó anh ấy cũng sẽ viết bản nhạc của chính mình.",
    "questions": [
      {
        "n": 21,
        "q": "Who had more than one sister or brother?",
        "qvi": "Ai có nhiều hơn một anh chị em?",
        "ans": "B",
        "label": "Oleg",
        "explain": "Oleg là con út trong gia đình có năm anh chị em."
      },
      {
        "n": 22,
        "q": "Who enjoyed other subjects as well as music?",
        "qvi": "Ai thích các môn học khác ngoài âm nhạc?",
        "ans": "C",
        "label": "Josef",
        "explain": "Josef hứng thú với cả môn vật lý và ngoại ngữ."
      },
      {
        "n": 23,
        "q": "Who studied in another country for two years?",
        "qvi": "Ai đi du học trong hai năm?",
        "ans": "B",
        "label": "Oleg",
        "explain": "Năm 14 tuổi, Oleg sang Úc học nhạc trong 2 năm. (Ivan đi du học tận 6 năm)."
      },
      {
        "n": 24,
        "q": "Who was the youngest to begin playing the piano?",
        "qvi": "Ai bắt đầu tập piano nhỏ tuổi nhất?",
        "ans": "C",
        "label": "Josef",
        "explain": "Ivan bắt đầu lúc 6 tuổi, Oleg lúc 4 tuổi, còn Josef bắt đầu lúc 3 tuổi (chuyển sang Đức lúc 2 tuổi, một năm sau bắt đầu chơi)."
      },
      {
        "n": 25,
        "q": "Who had music lessons with someone who wasn't a piano player?",
        "qvi": "Ai học nhạc với người không biết đánh piano?",
        "ans": "A",
        "label": "Ivan",
        "explain": "Giáo viên đầu tiên của Ivan không biết chơi piano mà chỉ dạy hát opera."
      },
      {
        "n": 26,
        "q": "Who did well in music competitions?",
        "qvi": "Ai đạt giải cao tại các cuộc thi âm nhạc?",
        "ans": "B",
        "label": "Oleg",
        "explain": "Oleg \"sớm chiến thắng nhiều giải thưởng cho việc chơi piano\"."
      },
      {
        "n": 27,
        "q": "Who also wrote music?",
        "qvi": "Ai đã từng tự sáng tác nhạc?",
        "ans": "A",
        "label": "Ivan",
        "explain": "Ivan viết bản nhạc đầu tiên năm 10 tuổi. (Josef hiện tại chưa viết, mới chỉ dự định tương lai)."
      }
    ],
    "type": "who",
    "options": {
      "A": "Ivan",
      "B": "Oleg",
      "C": "Josef"
    }
  },
  {
    "id": 13,
    "title": "Nick Barlow (Diễn viên truyền hình)",
    "passage": "Nick Barlow yêu công việc của anh ấy. Anh ấy là một diễn viên người Anh và anh ấy đi vòng quanh thế giới để làm những chương trình truyền hình. “Mọi người chào đón tôi ở bất cứ đâu tôi đến và khi tôi trở về nhà, tôi nhớ tất cả những điều đẹp đẽ đã diễn ra ở mỗi quốc gia”. Nick đã đi nhiều nơi nhưng có những chuyến đi mà anh ấy vẫn muốn đi thêm 1 lần nữa. “Tôi muốn tới thăm Nam Mỹ và trở về Úc một ngày nào đó”, anh ấy nói.\nỞ mỗi chuyến đi, Nick đi cùng một nhóm người. Họ mang theo máy ảnh và những thiết bị làm phim cần thiết cho chương trình. Nick không mang nhiều thứ cho bản thân nhưng trong mỗi chuyến đi, anh ấy luôn chắc chắn có một vài cuốn sách trong vali.\nVợ Nick, Helen, không bận tâm về việc đi lại do công việc của Nick. Cô ấy có nhiều bạn và luôn giữ bận rộn. Khi anh ấy trở về nhà, cô ấy thích nghe những câu chuyện về chuyến đi của anh ấy. Nhưng đôi khi có một vài vấn đề. Khi Nick đang ở rừng nhiệt đới Malaysia, anh ấy nhận được tin vợ anh ấy bị ốm trong bệnh viện. “Tôi cảm thấy thật tồi tệ bởi vì tôi không thể giúp đỡ, nhưng cô ấy đã không muốn tôi trở về. Tôi đã rất vui khi biết tin cô ấy đã khá hơn”.",
    "questions": [
      {
        "n": 21,
        "q": "Nick says that people in the places he visits are very friendly.",
        "qvi": "Nick bảo người dân ở các nước rất thân thiện.",
        "ans": "A",
        "label": "Right",
        "explain": "Nick nói anh được \"mọi người chào đón ở bất cứ đâu tôi đến\"."
      },
      {
        "n": 22,
        "q": "Nick buys something to take home from every country he visits.",
        "qvi": "Nick mua đồ lưu niệm từ mỗi nước mang về.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ nói anh ấy nhớ kỷ niệm đẹp khi về nhà, không kể chuyện mua sắm đồ đạc."
      },
      {
        "n": 23,
        "q": "On some trips, Nick travels alone.",
        "qvi": "Có những chuyến đi Nick đi một mình.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bài viết khẳng định: “ở mỗi chuyến đi, Nick đi cùng một nhóm người.”"
      },
      {
        "n": 24,
        "q": "There are often problems with the television cameras.",
        "qvi": "Máy quay phim thường xuyên gặp sự cố.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ bảo họ mang theo máy quay phim chứ không nói máy có bị hỏng hay không."
      },
      {
        "n": 25,
        "q": "Every time Nick goes away, he packs something to read.",
        "qvi": "Mỗi lần đi xa anh đều mang theo đồ để đọc.",
        "ans": "A",
        "label": "Right",
        "explain": "Trong vali anh ấy \"luôn chắc chắn có một vài cuốn sách\"."
      },
      {
        "n": 26,
        "q": "Helen is unhappy when he's away from home.",
        "qvi": "Helen không vui khi chồng vắng nhà.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cô ấy \"không bận tâm\" vì cô có nhiều bạn và biết cách giữ cho mình bận rộn."
      },
      {
        "n": 27,
        "q": "When Helen was sick, Nick returned home.",
        "qvi": "Khi vợ ốm, Nick đã lập tức bay về.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Vì vợ không muốn anh về nên anh vẫn ở lại Malaysia: “...cô ấy đã không muốn tôi trở về.”"
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 14,
    "title": "Bollywood (Điện ảnh Ấn Độ)",
    "passage": "Bollywood là tên của một xưởng làm phim ở Mumbai, Ấn Độ, làm 1000 bộ phim/năm. Từ lúc bắt đầu làm bộ phim đầu tiên năm 1913 đến nay, đã làm trên 29000 bộ phim. Con số này lớn hơn cả Mỹ và nó có nghĩa đây là xưởng làm phim lớn nhất trên thế giới. Hầu hết người Ấn Độ thích đi xem phim hơn bất kì hoạt động nào khác và có 10 triệu người đến rạp chiếu phim mỗi ngày. Những bộ phim Bollywood kể về những câu chuyện tình yêu lãng mạn và hát và nhảy là một phần quan trọng của mọi bộ phim. Những bộ phim Ấn Độ cũng được yêu thích ở bên ngoài Ấn Độ. Năm ngoái Bollywood đã kiếm được hơn 500 triệu $ bằng việc bán phim cho những nước khác.\nNhững diễn viên Ấn Độ làm nhiều phim mỗi năm hơn diễn viên Mỹ nhưng họ lại không được trả nhiều tiền như thế. Đó là lý do tại sao những bộ phim Bollywood chỉ mất khoảng 2 triệu $ để làm. Những bộ phim Hollywood không bao giờ được làm dưới 5 triệu $.\nHầu hết các diễn viên Bollywood đều trẻ. Họ làm việc vất vả nhưng chỉ trong vài năm. Amitabh Bachchan được nói là diễn viên tuyệt nhất Ấn Độ thì khác. Ông ấy đã đóng hơn 140 bộ phim trong suốt nghiệp diễn của mình trong 40 năm.",
    "questions": [
      {
        "n": 21,
        "q": "Since 1913, Bollywood has made just under 29,000 films.",
        "qvi": "Bollywood làm dưới 29.000 bộ phim.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bài đọc ghi xưởng đã làm trên (over) 29.000 bộ phim."
      },
      {
        "n": 22,
        "q": "A lot more films are made in India than in the USA.",
        "qvi": "Ấn Độ làm nhiều phim hơn Mỹ rất nhiều.",
        "ans": "A",
        "label": "Right",
        "explain": "Sản lượng của Ấn Độ \"lớn hơn cả Mỹ và nó có nghĩa đây là xưởng làm phim lớn nhất\"."
      },
      {
        "n": 23,
        "q": "Going to the cinema is most Indians' favourite hobby.",
        "qvi": "Đi xem phim là sở thích số một của người Ấn.",
        "ans": "A",
        "label": "Right",
        "explain": "\"Hầu hết người Ấn Độ thích đi xem phim hơn bất kì hoạt động nào khác...\""
      },
      {
        "n": 24,
        "q": "Bollywood spends a lot of money on advertisements to sell its films.",
        "qvi": "Bollywood chi nhiều tiền quảng cáo phim.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ nhắc doanh thu bán phim ra nước ngoài, không nói chi phí chạy quảng cáo."
      },
      {
        "n": 25,
        "q": "Films are cheaper to make in Bollywood than in Hollywood.",
        "qvi": "Phim sản xuất ở Bollywood rẻ hơn Hollywood.",
        "ans": "A",
        "label": "Right",
        "explain": "Phim Ấn Độ tốn khoảng 2 triệu $, trong khi phim Hollywood luôn trên 5 triệu $."
      },
      {
        "n": 26,
        "q": "Most Bollywood actors work in films until they are quite old.",
        "qvi": "Đa số diễn viên đóng phim đến già.",
        "ans": "B",
        "label": "Wrong",
        "explain": "\"Hầu hết các diễn viên Bollywood đều trẻ. Họ làm việc vất vả nhưng chỉ trong vài năm.\""
      },
      {
        "n": 27,
        "q": "Many young Indian actors would like to work with the Bollywood star Amitabh Bachchan.",
        "qvi": "Nhiều diễn viên trẻ muốn hợp tác với Amitabh Bachchan.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết ca ngợi sự nghiệp vĩ đại của ông chứ không nói về mong muốn của các diễn viên trẻ khác."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 15,
    "title": "Sean Murphy (Người đọc bản tin tối)",
    "passage": "Sean Murphy đọc những tin tức muộn trên truyền hình Anh lúc 11h mỗi tối. “Đây là khoảng thời gian tốt cho một chương trình tin tức vì chúng tôi có thể báo cáo những tin sớm từ Mỹ và những tin muộn từ Châu Âu. Tôi vẫn về nhà trước nửa đêm vì quãng đường từ chỗ làm về nhà tôi ở phía Bắc London chỉ mất 6 phút. Gia đình tôi đều đã ngủ khi tôi về, nhưng tôi vẫn làm một cốc sữa nóng và đọc một cuốn sách trong khoảng 1 giờ.\n“Tôi luôn dậy ăn sáng cùng con trước khi chúng lên xe bus tới trường. Sau đó tôi lấy báo và trở về giường ngủ một thời gian ngắn. Sau đó, tôi đi bơi – những người đọc tin tức dành quá nhiều thời gian để ngồi! Đôi khi tôi cũng chạy. Tôi đã tham gia chạy marathon 2 lần, đó là quãng đường đua dài 40km. Tôi hoàn thành mỗi lần nhưng không giành được vị trí thứ nhất.\n“Tôi bắt đầu công việc sau bữa ăn trưa lúc 2h khi tôi tới văn phòng. Phần còn lại của ngày là lên kế hoạch cho chương trình, nhưng tôi luôn cố gắng trở về nhà khoảng 1 giờ để gặp những đứa con của tôi trước khi chúng đi ngủ mỗi tối.”",
    "questions": [
      {
        "n": 21,
        "q": "Sean Murphy lives in London.",
        "qvi": "Sean Murphy sống ở thành phố London.",
        "ans": "A",
        "label": "Right",
        "explain": "Nhà anh ấy nằm ở vùng \"phía Bắc London\"."
      },
      {
        "n": 22,
        "q": "Sean's wife gives him a hot drink when he arrives home after work.",
        "qvi": "Vợ pha đồ uống nóng đón anh về.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Khi anh về nhà thì \"Gia đình tôi đều đã ngủ... tôi vẫn tự làm một cốc sữa nóng\"."
      },
      {
        "n": 23,
        "q": "Sean takes his children to school in the morning.",
        "qvi": "Sean chở các con đến trường buổi sáng.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Anh ăn sáng với các con rồi \"chúng tự lên xe bus tới trường\"."
      },
      {
        "n": 24,
        "q": "Sean likes to go swimming with his colleagues from work.",
        "qvi": "Sean thích đi bơi cùng đồng nghiệp.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Anh ấy tự đi bơi cho đỡ mỏi người, bài không nói anh đi một mình hay đi cùng đồng nghiệp."
      },
      {
        "n": 25,
        "q": "Sean has won the London Marathon.",
        "qvi": "Sean chiến thắng giải chạy Marathon London.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Anh tham gia 2 lần nhưng \"không giành được vị trí thứ nhất\"."
      },
      {
        "n": 26,
        "q": "Sean's working day begins in the afternoon.",
        "qvi": "Ngày làm việc của Sean bắt đầu vào buổi chiều.",
        "ans": "A",
        "label": "Right",
        "explain": "Ca làm việc của anh bắt đầu lúc 2h chiều (sau bữa trưa)."
      },
      {
        "n": 27,
        "q": "Sean usually leaves the office for an hour during the evening.",
        "qvi": "Sean thường trốn việc cơ quan 1 tiếng buổi tối.",
        "ans": "A",
        "label": "Right",
        "explain": "Anh nói buổi tối anh luôn \"cố gắng trở về nhà khoảng 1 giờ để gặp những đứa con\" rồi lại quay lại làm bản tin lúc 11h đêm."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 16,
    "title": "Chloë (Thần đồng Violin)",
    "passage": "Chloe được sinh ra ở Anh. Bố của cô ấy làm việc với máy tính và mẹ cô ấy dạy nhảy. Chloe bắt đầu chơi violin khi cô ấy 2 tuổi. Bố mẹ đã mua cho cô ấy một cây violin đặc biệt, cái mà đủ nhỏ cho cô ấy sử dụng, và ở độ tuổi đó, cô ấy đã có thể chơi mà không cần sự giúp đỡ. Chị gái của cô ấy, Virginia, lúc đó 19 tuổi, đã chơi piano, Chloe đã nghe và chơi lại những bản nhạc đó trên violin. 4 tuổi, cô ấy đã là một thành viên của những buổi hòa nhạc ở Anh và Mỹ và năm 1999, cô ấy đã là nghệ sĩ violin nhí trong bộ phim Hollywood Onegin.\nNhiều giáo viên sẵn lòng dạy cô ấy nhưng lúc cô ấy 7 tuổi, cô ấy đã gặp Zakhar Bron. Cô ấy đã chắc chắn ngay từ bắt đầu rằng anh ấy chính là giáo viên dành cho cô ấy. Công việc làm anh ấy phải di chuyển khắp nơi và mỗi năm, Chloe bay hàng nghìn km để đến lớp học của anh ấy.\nChloe chỉ 14 tuổi khi cô ấy làm đĩa CD đầu tiên, nhưng cô ấy nói rằng cô ấy cũng chỉ giống như tất cả những cô bé tuổi teen khác, “tôi có nhiều bạn bè và tôi yêu nhạc Pop. Luyện tập violin tốt hơn là quan trọng nhưng tôi cũng chắc chắn rằng mình có đủ thời gian cho những điều khác”.",
    "questions": [
      {
        "n": 21,
        "q": "Chloë's first violin was the same size as other violins.",
        "qvi": "Đàn violin đầu tiên của cô cùng cỡ đàn bình thường.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bố mẹ phải đặt cho cô một cây đàn đặc biệt \"đủ nhỏ cho cô ấy sử dụng\"."
      },
      {
        "n": 22,
        "q": "To start with, Chloë practised the same music as her sister.",
        "qvi": "Ban đầu cô luyện tập các bài giống chị gái.",
        "ans": "A",
        "label": "Right",
        "explain": "Cô bé nghe chị đánh piano rồi \"chơi lại những bản nhạc đó trên violin\"."
      },
      {
        "n": 23,
        "q": "Chloë prefers playing concerts in America to playing in Britain.",
        "qvi": "Chloë thích diễn ở Mỹ hơn diễn ở Anh.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài chỉ bảo cô diễn ở cả 2 nước, không so sánh xem cô thích bên nào hơn."
      },
      {
        "n": 24,
        "q": "When Chloë first met Zakhar Bron, she knew she wanted to study with him.",
        "qvi": "Vừa gặp thầy Zakhar Bron là cô biết muốn học thầy liền.",
        "ans": "A",
        "label": "Right",
        "explain": "Cô bé \"chắc chắn ngay từ bắt đầu rằng anh ấy chính là giáo viên dành cho cô ấy\"."
      },
      {
        "n": 25,
        "q": "Chloë travels to other countries for her lessons with Zakhar Bron.",
        "qvi": "Chloë phải ra nước ngoài để học thầy.",
        "ans": "A",
        "label": "Right",
        "explain": "Vì thầy di chuyển liên tục nên mỗi năm cô bé phải \"bay hàng nghìn km để đến lớp học\"."
      },
      {
        "n": 26,
        "q": "Chloë thinks she has a different life from other people her age.",
        "qvi": "Chloë nghĩ cuộc sống mình khác các bạn đồng trang lứa.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cô khẳng định mình \"cũng chỉ giống như tất cả những cô bé tuổi teen khác\"."
      },
      {
        "n": 27,
        "q": "Chloë plays pop music on the violin for her friends.",
        "qvi": "Chloë kéo nhạc Pop bằng violin cho bạn nghe.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết nói cô thích nghe nhạc Pop và có nhiều bạn bè, không nhắc đến việc cô kéo đàn bài nhạc Pop nào cho bạn nghe cả."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 17,
    "title": "Rob Stone (Kỷ niệm đóng kịch thời đi học)",
    "passage": "Tuần trước, Rob Stone, một diễn viên Anh nổi tiếng và là ngôi sao của nhiều bộ phim Hollywood, đã có một bữa tiệc cho sinh nhật thứ 53 của ông ấy. Rob mời rất nhiều các diễn viên khác đến nhà của ông ấy cho bữa tiệc. Sau bữa tối, ông ấy đã đứng dậy và nói với tất cả mọi người ở đó. Ông ấy đã kể với họ về một vài điều đã xảy ra khi ông ấy còn đi học 40 năm trước. Khi còn là một cậu học sinh, Rob yêu những vở kịch và đã rất vui khi được đóng một vai trong vở kịch. Nó là một vở kịch rất buồn của Shakespeare, một nhà văn thế kỉ thứ 16.\nRob đóng vai một người đàn ông già, người phải chết trên sân khấu. Ông ấy đã tập luyện chăm chỉ để làm tốt vai diễn. Ông ấy phải nằm trên 1 cái giường, nói một vài lời tạm biệt buồn bã với con trai của mình rồi la hét trong đau đớn và chết.\nGiống như tất cả các vị phụ huynh khác, ông bà Stone đến xem con trai họ trong vở kịch. Rob nói với những khách mời: ”Tôi sẽ không bao giờ quên buổi tối hôm đó. Nó thật tồi tệ. Khi tôi đã chết, tôi có thể nghe tiếng bố tôi cười. Tôi vẫn nhớ tôi đã cảm thấy tồi tệ như thế nào, và tôi đã không nói một lời nào với bố kể từ đó.\"",
    "questions": [
      {
        "n": 21,
        "q": "Rob Stone went to a restaurant for his birthday.",
        "qvi": "Rob Stone đi nhà hàng đón sinh nhật.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Ông tổ chức tiệc sinh nhật ngay tại nhà của mình."
      },
      {
        "n": 22,
        "q": "Rob talked to a few of his guests about his time at school.",
        "qvi": "Rob kể chuyện đi học cho một vài người khách nghe.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Ông đứng dậy và nói với tất cả mọi người có mặt tại bữa tiệc (talked to all of his guests)."
      },
      {
        "n": 23,
        "q": "Rob preferred Shakespeare's plays to those of any other writer.",
        "qvi": "Rob thích kịch Shakespeare nhất.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết chỉ kể ông từng đóng một vở kịch của Shakespeare hồi nhỏ chứ không nói ông thích nhà văn này nhất."
      },
      {
        "n": 24,
        "q": "Rob tried very hard to act well in the school play.",
        "qvi": "Rob nỗ lực hết mình để diễn tốt vở kịch ở trường.",
        "ans": "A",
        "label": "Right",
        "explain": "\"Ông ấy đã tập luyện chăm chỉ để làm tốt vai diễn.\""
      },
      {
        "n": 25,
        "q": "The old man that Rob played died at the end of the play.",
        "qvi": "Nhân vật ông già chết vào đoạn cuối vở kịch.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài viết tả lại cảnh nhân vật chết trên sân khấu chứ không làm rõ phân đoạn chết nằm ở giữa hay cuối vở kịch."
      },
      {
        "n": 26,
        "q": "Rob's father made his son unhappy at the play.",
        "qvi": "Bố của Rob làm con trai buồn lòng tại buổi diễn.",
        "ans": "A",
        "label": "Right",
        "explain": "Người bố đã bật cười khi thấy con đóng cảnh chết, khiến Rob cảm thấy \"tồi tệ\" (unhappy) và giận đến tận bây giờ."
      },
      {
        "n": 27,
        "q": "Rob never invited his father to watch him act again.",
        "qvi": "Rob không bao giờ mời bố đi xem diễn kịch nữa.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Bài đọc chỉ viết ông giận không nói chuyện với bố từ hôm đó, không cung cấp thông tin về việc gửi lời mời sau này."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  },
  {
    "id": 18,
    "title": "Bộ tách trà màu xanh của bà",
    "passage": "Khi tôi còn nhỏ, bố mẹ tôi đã chuyển nhà từ California đến Illinois cùng với tôi và 2 chị gái. Chúng tôi đã giúp mẹ gói ghém mọi thứ từ ngôi nhà cũ vào những cái hộp. Bên trong 3 trong số những cái hộp là những chiếc tách trà, bát, đĩa đặc biệt của bà tôi. Chúng đặc biệt bởi vì bà tôi, một họa sĩ tài ba, đã tự tay vẽ chúng với những hoa văn màu xanh.\nThật buồn, một trong số 3 cái hộp đã bị mất. Chúng tôi không bao giờ tìm thấy những chiếc tách trà, nhưng đĩa và bát đã đến nơi an toàn. Chúng tôi sử dụng chúng vào những ngày đặc biệt trong năm như là sinh nhật. Chúng tôi nhớ những chiếc tách trà, và buồn khi không thể có lại chúng một lần nữa.\n10 năm sau, tôi đã quyết định học đại học ở California. Vào kì nghỉ hè đầu tiên của tôi, một người bạn đã rủ tôi đến chợ đồ cổ cùng cô ấy. Lúc đầu tôi đã không muốn đi, nhưng cuối cùng tôi đã đồng ý và chúng tôi đã có một khoảng thời gian tuyệt vời. Ở đó có nhiều đồ cổ và thú vị được bán. Chúng tôi chỉ dừng lại khi tôi nhìn thấy một người phụ nữ đang bán 12 cái tách trà tuyệt đẹp với họa tiết là những bông hoa màu xanh. Tôi đã nhìn không chớp mắt và nhận ra đó là những chiếc tách trà của bà tôi.",
    "questions": [
      {
        "n": 21,
        "q": "The writer's grandmother asked an artist to paint the cups, plates and bowls for her.",
        "qvi": "Bà nhờ họa sĩ khác vẽ hộ bộ tách chén.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Chính người bà là họa sĩ tài ba và \"đã tự tay vẽ chúng\"."
      },
      {
        "n": 22,
        "q": "Some of the plates and bowls were broken when they arrived.",
        "qvi": "Một vài cái đĩa, bát bị vỡ lúc chuyển nhà.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Bài đọc ghi \"đĩa và bát đã đến nơi an toàn\" (không bị vỡ), chỉ có thùng chứa cốc là mất tích."
      },
      {
        "n": 23,
        "q": "The family forgot all about the grandmother's cups.",
        "qvi": "Gia đình quên béng chiếc cốc của bà.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Mọi người vẫn luôn \"nhớ những chiếc tách trà, và buồn khi không thể có lại chúng\"."
      },
      {
        "n": 24,
        "q": "The writer moved back to California because she wanted to study there.",
        "qvi": "Tác giả về lại California để đi học.",
        "ans": "A",
        "label": "Right",
        "explain": "Cô ấy quay lại vì \"đã quyết định học đại học ở California\"."
      },
      {
        "n": 25,
        "q": "The writer went to the market alone in her first summer in California.",
        "qvi": "Cô ấy đi chợ đồ cổ một mình.",
        "ans": "B",
        "label": "Wrong",
        "explain": "Cô ấy đi cùng \"một người bạn đã rủ tôi đến chợ đồ cổ cùng cô ấy\"."
      },
      {
        "n": 26,
        "q": "The writer enjoyed looking at things for sale at the market.",
        "qvi": "Tác giả thích ngắm đồ bày bán ở chợ.",
        "ans": "A",
        "label": "Right",
        "explain": "Cô ấy chia sẻ ở đó bán nhiều đồ thú vị và họ đã có \"một khoảng thời gian tuyệt vời\"."
      },
      {
        "n": 27,
        "q": "The writer paid a lot of money to buy the cups at the market.",
        "qvi": "Cô ấy bỏ nhiều tiền mua lại bộ cốc.",
        "ans": "C",
        "label": "Doesn't say",
        "explain": "Câu chuyện kết thúc ngay lúc cô nhìn chăm chằm và nhận ra bộ tách của bà mình, hoàn toàn không nhắc gì đến diễn biến mua bán hay trả tiền phía sau."
      }
    ],
    "type": "rwd",
    "options": {
      "A": "Right",
      "B": "Wrong",
      "C": "Doesn't say"
    }
  }
];
