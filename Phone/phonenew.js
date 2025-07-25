let phone = document.querySelector(".phone");
let screen = document.querySelector(".screen");
let backgroundPhone = document.querySelector(".background-phone");
let timeTodayElm = screen.querySelector(".time-today");
let powerBtn = document.querySelector(".power-button");
let muteBtn = document.querySelector(".mute-button");
let increaseVolumeBtn = document.querySelector(".increase-sound-button");
let decreaseVolumeBtn = document.querySelector(".decrease-sound-button");
let volumeBarElm = phone.querySelector(".volume-bar");
let volumeProgressElm = phone.querySelector(".volume-progress");
let dynamicIsland = document.querySelector(".dynamic-island");
let isDynamicIslandOn = false;
let statusElm = document.querySelector(".status");
let statusMicElm = document.querySelector(".status-mic");
let statusMuteElm = document.querySelector(".status-mute");
let wrapperDynamicIslandElm = dynamicIsland.querySelector(".wrapper_dynamic-island");
let songNameDynamicIslandElm = wrapperDynamicIslandElm.querySelector(".song-name_dynamic-island");
let batteryProgressElm = document.querySelector("#battery-progress");
let homeBar = document.querySelector(".homeBar");
let wrapped = document.querySelector(".wrapped");
let isPhoneOn = true;

// App music
let songList = [
  {
    songid: 0,
    songlink: "y2mate.com - Lyrics Người Âm Phủ OSAD x VRT.mp3",
    songname: "Người Âm Phủ",
    songauthor: "OSAD x VRT"
  },
  {
    songid: 1,
    songlink: "y2mate.com - Nightcore MAKING MY WAY SON TUNG MTP.mp3",
    songname: "MAKING MY WAY",
    songauthor: "SON TUNG MTP"
  },
  {
    songid: 2,
    songlink: "y2mate.com - Nightcore N 30 N speed remix.mp3",
    songname: "N 30 N",
    songauthor: "Unknown"
  },
  {
    songid: 3,
    songlink: "y2mate.com - Nightcore Phai Dấu Cuộc Tình Phạm Thành Remix.mp3",
    songname: "Phai Dấu Cuộc Tình",
    songauthor: "Phạm Thành"
  },
  {
    songid: 4,
    songlink: "y2mate.com - Nightcore HN Nightcore Nụ Hồng Mong Manh Remix.mp3",
    songname: "Nụ Hồng Mong Manh",
    songauthor: "HN"
  },
  {
    songid: 5,
    songlink: "y2mate.com - Ngày Em Cưới Nguyễn Vĩ Lofi Lyrics.mp3",
    songname: "Ngày Em Cưới",
    songauthor: "Nguyễn Vĩ"
  },
  {
    songid: 6,
    songlink: "y2mate.com - S Nightcore Cho Em gần Anh Thêm Chút Nữa Remix.mp3",
    songname: "Cho Em gần Anh Thêm Chút Nữa",
    songauthor: "Unknown"
  },
  {
    songid: 7,
    songlink: "y2mate.com - S Nightcore Phai Dấu Cuôc Tình Remix Phạm Kỳ Anh.mp3",
    songname: "Phai Dấu Cuộc Tình",
    songauthor: "Phạm Kỳ Anh"
  },
  {
    songid: 8,
    songlink: "y2mate.com - S Nightcore Tướng Quân Remix DinhLong Remix.mp3",
    songname: "Tướng Quân",
    songauthor: "DinhLong"
  },
  {
    songid: 9,
    songlink: "y2mate.com - S Nightcore Về Đây Em Lo Remix Htrol Remix.mp3",
    songname: "Về Đây Em Lo",
    songauthor: "Htrol"
  },
  {
    songid: 10,
    songlink: "y2mate.com - 4 Mùa Thương Em Lofi Lyrics Lập Nguyên x Night T Thương em khi mùa thu thương em sang mùa hạ.mp3",
    songname: "4 Mùa Thương Em",
    songauthor: "Lập Nguyên x Night T"
  },
  {
    songid: 11,
    songlink: "y2mate.com - 4 Mùa Thương Em speed up LẬP NGUYÊN ft NIGHT T x YẾN NỒI CƠM ĐIỆN saigon3107.mp3",
    songname: "4 Mùa Thương Em",
    songauthor: "LẬP NGUYÊN ft NIGHT T x YẾN NỒI CƠM ĐIỆN"
  },
  {
    songid: 12,
    songlink: "y2mate.com - 8 Letters Why Dont We Rawi Beat Remix TikTok .mp3",
    songname: "8 Letters",
    songauthor: "Why Dont We"
  },
  {
    songid: 13,
    songlink: "y2mate.com - A Y Mạc Remix Tiktok V2 越南鼓版 Tổ Hợp A Cát Thái Music Hot Tiktok Douyin 抖音.mp3",
    songname: "A Y Mạc",
    songauthor: "Tổ Hợp A Cát Thái"
  },
  {
    songid: 14,
    songlink: "y2mate.com - Ahxello Frisbee.mp3",
    songname: "Frisbee",
    songauthor: "Ahxello"
  },
  {
    songid: 15,
    songlink: "y2mate.com - Ai Đợi Mình Được Mãi Remix Thanh Hưng Nhật Đoàn Remix.mp3",
    songname: "Ai Đợi Mình Được Mãi",
    songauthor: "Thanh Hưng Nhật Đoàn"
  },
  {
    songid: 16,
    songlink: "y2mate.com - Alone Remix Alan Walker DJ Tiểu Bảo ITLM Lyrics Vietsub .mp3",
    songname: "Alone",
    songauthor: "Alan Walker"
  },
  {
    songid: 17,
    songlink: "y2mate.com - AMORE MIO remix bản nhạc huyền thoại thời 8x9x liệu ae còn nhớ YAC EDM.mp3",
    songname: "AMORE MIO",
    songauthor: "YAC EDM"
  },
  {
    songid: 18,
    songlink: "y2mate.com - Anjing Anjing Anjing Banget DJ Viral Tiktok Chikakiku.mp3",
    songname: "Anjing Anjing Anjing Banget",
    songauthor: "Chikakiku"
  },
  {
    songid: 19,
    songlink: "y2mate.com - Anh Mệt Rồi Lofi Ver Anh Quân Idol x MewMew Người đời nói đúng không nên yêu thương ai quá.mp3",
    songname: "Anh Mệt Rồi",
    songauthor: "Anh Quân Idol x MewMew"
  },
  {
    songid: 20,
    songlink: "y2mate.com - Anh Sẽ Quên Em Mà Lofi Ver Nit x Sing x Freak D.mp3",
    songname: "Anh Sẽ Quên Em Mà",
    songauthor: "Nit x Sing x Freak D"
  },
  {
    songid: 21,
    songlink: "y2mate.com - Anh Thương Em Nhất Mà Lã x Log x TiB OFFICIAL.mp3",
    songname: "Anh Thương Em Nhất Mà",
    songauthor: "Lã x Log x TiB"
  },
  {
    songid: 22,
    songlink: "y2mate.com - Anh Yêu Vội Thế Remix La La Trần Huy D Remix Bản Remix Làm Mưa Gió Trên Tiktok.mp3",
    songname: "Anh Yêu Vội Thế",
    songauthor: "La La Trần Huy D"
  },
  {
    songid: 23,
    songlink: "y2mate.com - Ảo Ảnh Remix Tiktok Tam Thúc Thuyết JUNE EDM MIUSC.mp3",
    songname: "Ảo Ảnh",
    songauthor: "Tam Thúc Thuyết"
  },
  {
    songid: 24,
    songlink: "y2mate.com - Astronomia DJ版 Bài hát đang thịnh hành trên Tiktok Trung Quốc Douyin Music DNTMUSIC.mp3",
    songname: "Astronomia",
    songauthor: "DNTMUSIC"
  },
  {
    songid: 25,
    songlink: "y2mate.com - Astronomia Jiaye Bootleg Remix Tik Tok Remix cực nghiện.mp3",
    songname: "Astronomia",
    songauthor: "Jiaye"
  },
  {
    songid: 26,
    songlink: "y2mate.com - Astronomia Remix By Jiaye 抖音热门电音完整版 Trending TikTok EDM Full Version.mp3",
    songname: "Astronomia",
    songauthor: "Jiaye"
  },
  {
    songid: 27,
    songlink: "y2mate.com - Astronomia.mp3",
    songname: "Astronomia",
    songauthor: "Unknown"
  },
  {
    songid: 28,
    songlink: "y2mate.com - Ava Max Into Your Arms NO RAP LyricsVietsub TikTok Hits .mp3",
    songname: "Into Your Arms",
    songauthor: "Ava Max"
  },
  {
    songid: 29,
    songlink: "y2mate.com - Baby Remix Justin Bieber Ludacris Hot Tik Tok ONE NIGHT MUSIC.mp3",
    songname: "Baby",
    songauthor: "Justin Bieber Ludacris"
  },
  {
    songid: 30,
    songlink: "y2mate.com - Bad Style Time Back Hot Douyin 的时间不好回来吧.mp3",
    songname: "Bad Style Time Back",
    songauthor: "Unknown"
  },
  {
    songid: 31,
    songlink: "y2mate.com - BAE Tăng Duy Tân Bên Trên Tầng Lầu Official Lyric Video.mp3",
    songname: "BAE",
    songauthor: "Tăng Duy Tân"
  },
  {
    songid: 32,
    songlink: "y2mate.com - Bài Ka Tuổi Trẻ JGKID Emcee L KraziNoyze Lyric Video TAS Release.mp3",
    songname: "Bài Ka Tuổi Trẻ",
    songauthor: "JGKID Emcee L KraziNoyze"
  },
  {
    songid: 33,
    songlink: "y2mate.com - Bán Duyên Ver Lofi Đình Dũng Đăng Sơn.mp3",
    songname: "Bán Duyên",
    songauthor: "Đình Dũng Đăng Sơn"
  },
  {
    songid: 34,
    songlink: "y2mate.com - Bản tình ca không hoàn thiện beat Rin TV.mp3",
    songname: "Bản tình ca không hoàn thiện",
    songauthor: "Rin TV"
  },
  {
    songid: 35,
    songlink: "y2mate.com - Bạn Tình Ơi 2 Htrol Remix Yuni Boo ft Goctoi Mixer.mp3",
    songname: "Bạn Tình Ơi 2",
    songauthor: "Htrol"
  },
  {
    songid: 36,
    songlink: "y2mate.com - Bao Lâu Ta Lại Yêu Một Người l Doãn Hiếu.mp3",
    songname: "Bao Lâu Ta Lại Yêu Một Người",
    songauthor: "Doãn Hiếu"
  },
  {
    songid: 37,
    songlink: "y2mate.com - Barcode Brothers Flute Radio Edit.mp3",
    songname: "Flute",
    songauthor: "Barcode Brothers"
  },
  {
    songid: 38,
    songlink: "y2mate.com - Batte Forte 凤舞九天 x Oppa Gangnam Style DJ弹鼓版 TIKTOK MUSIC.mp3",
    songname: "Batte Forte",
    songauthor: "凤舞九天 x Oppa Gangnam Style"
  },
  {
    songid: 39,
    songlink: "y2mate.com - Bầu Trời Đầy Sao Remix Star Sky 抖音重编曲版 翻自 Two Steps From Hell Gây Nghiện.mp3",
    songname: "Bầu Trời Đầy Sao",
    songauthor: "Star Sky"
  },
  {
    songid: 40,
    songlink: "y2mate.com - Bên Anh Đêm Nay Remix JC Hưng Ft Binz DJ AM MIX BÊN ANH ĐÊM NAY REMIX HOT TIKTOK 2021.mp3",
    songname: "Bên Anh Đêm Nay",
    songauthor: "JC Hưng Ft Binz"
  },
  {
    songid: 41,
    songlink: "y2mate.com - Biệt Tri Kỷ TikTok 别知己 Dj Za Bie Zhi Ji Nhạc Trung Quốc Hot Tiktok Biệt Tri Kỷ Thái Lan.mp3",
    songname: "Biệt Tri Kỷ",
    songauthor: "Dj Za"
  },
  {
    songid: 42,
    songlink: "y2mate.com - BOOMA BOOMA YEE DJ IMUT REMIX Vietsub Lyric Tik Tok Song.mp3",
    songname: "BOOMA BOOMA YEE",
    songauthor: "DJ IMUT"
  },
  {
    songid: 43,
    songlink: "y2mate.com - Brandon Beal Twerk It Like Miley Produced by Hedegaard ft Christopher.mp3",
    songname: "Twerk It Like Miley",
    songauthor: "Brandon Beal"
  },
  {
    songid: 44,
    songlink: "y2mate.com - Bukan PHO DJ DESA Remix De Yang Gatal Gatal Sa Lyrics Vietsub .mp3",
    songname: "Bukan PHO",
    songauthor: "DJ DESA"
  },
  {
    songid: 45,
    songlink: "y2mate.com - Buồn Làm Chi Em Ơi REMIX Đại Mèo Remix Hoài Lâm Bản Mix CĂNG ĐÉT GÂY NGHIỆN MẠNH hot tik tok.mp3",
    songname: "Buồn Làm Chi Em Ơi",
    songauthor: "Đại Mèo Remix Hoài Lâm"
  },
  {
    songid: 46,
    songlink: "y2mate.com - Burak Yeter Tuesday FtDanelle Sandoval Rnbstylerz Remix.mp3",
    songname: "Tuesday",
    songauthor: "Burak Yeter"
  },
  {
    songid: 47,
    songlink: "y2mate.com - Cafe Không Đường Lofi Ver JOMBIE x TKAN BEAN x Vux.mp3",
    songname: "Cafe Không Đường",
    songauthor: "JOMBIE x TKAN BEAN x Vux"
  },
  {
    songid: 48,
    songlink: "y2mate.com - Cari Mama Muda DJ VIRAL TERBARU remix Vietsub Lyric Song Tik Tok.mp3",
    songname: "Cari Mama Muda",
    songauthor: "DJ VIRAL TERBARU"
  },
  {
    songid: 49,
    songlink: "y2mate.com - carly rae jepsen I REALLY LIKE YOU speedup .mp3",
    songname: "I REALLY LIKE YOU",
    songauthor: "carly rae jepsen"
  },
  {
    songid: 50,
    songlink: "y2mate.com - Cause I Love You Noo Phước Thịnh Official Music Video.mp3",
    songname: "Cause I Love You",
    songauthor: "Noo Phước Thịnh"
  },
  {
    songid: 51,
    songlink: "y2mate.com - Có Anh Ở Đây Rồi Anh Quân Idol sub lyrics.mp3",
    songname: "Có Anh Ở Đây Rồi",
    songauthor: "Anh Quân Idol"
  },
  {
    songid: 52,
    songlink: "y2mate.com - Có Chàng Trai Viết Lên Cây H2O Remix Chu Duyên Nhạc Trẻ EDM TikTok 2023 Hot Nhất Hiện Nay.mp3",
    songname: "Có Chàng Trai Viết Lên Cây",
    songauthor: "H2O Remix Chu Duyên"
  },
  {
    songid: 53,
    songlink: "y2mate.com - Có Chàng Trai Viết Lên Cây Lofi Lyrics Chu Duyên x H2O Ngày Cô Ấy Đi Theo Chân Mẹ Cha.mp3",
    songname: "Có Chàng Trai Viết Lên Cây",
    songauthor: "Chu Duyên x H2O"
  },
  {
    songid: 54,
    songlink: "y2mate.com - Có Chút Ngọt Ngào Remix Hay Nhất 有點甜 Uông Tô Lang ft BY2 Nhạc Tiktok Hay Nhất Quả Đất.mp3",
    songname: "Có Chút Ngọt Ngào",
    songauthor: "Uông Tô Lang ft BY2"
  },
  {
    songid: 55,
    songlink: "y2mate.com - Có Duyên Không Nợ NB3 Hoài Bảo Toann Remix x H2O Một Người Đứng Từ Xa Chờ Em Về TikTok Remix.mp3",
    songname: "Có Duyên Không Nợ",
    songauthor: "NB3 Hoài Bảo Toann Remix x H2O"
  },
  {
    songid: 56,
    songlink: "y2mate.com - Có Duyên Không Nợ Lofi NB3 Hoài Bảo Một Người Đứng Từ Xa Chờ Em Về Hot Tiktok Nhạc Lofi Chill.mp3",
    songname: "Có Duyên Không Nợ",
    songauthor: "NB3 Hoài Bảo"
  },
  {
    songid: 57,
    songlink: "y2mate.com - Có Duyên Không Nợ Lofi Ver NB3 Hoài Bảo x Freak D.mp3",
    songname: "Có Duyên Không Nợ",
    songauthor: "NB3 Hoài Bảo x Freak D"
  },
  {
    songid: 58,
    songlink: "y2mate.com - Cody Sorenson x Kadenza Starset AirwaveMusic Release.mp3",
    songname: "Starset",
    songauthor: "Cody Sorenson x Kadenza"
  },
  {
    songid: 59,
    songlink: "y2mate.com - Coming Home Remix Skylar Grey x Hush The Kings EDM Gây Nghiện.mp3",
    songname: "Coming Home",
    songauthor: "Skylar Grey x Hush The Kings"
  },
  {
    songid: 60,
    songlink: "y2mate.com - Con tim em thay lòng Cô Đơn Dành Cho Ai Lofi Ver Lee Ken x Nal x KProx.mp3",
    songname: "Con tim em thay lòng",
    songauthor: "Lee Ken x Nal x KProx"
  },
  {
    songid: 61,
    songlink: "y2mate.com - Cô gái M52 HuyR ft Tùng Viu Speed Song TanhS.mp3",
    songname: "Cô gái M52",
    songauthor: "HuyR ft Tùng Viu"
  },
  {
    songid: 62,
    songlink: "y2mate.com - Cố Giang Tình Lofi Ver X2X Khóc cho nhau một lần rồi thôi không gặp nhau nữa đâu.mp3",
    songname: "Cố Giang Tình",
    songauthor: "X2X"
  },
  {
    songid: 63,
    songlink: "y2mate.com - Cố Giang Tình Orinn Remix Phát Hồ x JokeS Bii ft DinhLong Nhạc Trẻ TikTok Gây Nghiện 2020.mp3",
    songname: "Cố Giang Tình",
    songauthor: "Phát Hồ x JokeS Bii ft DinhLong"
  },
  {
    songid: 64,
    songlink: "y2mate.com - Cô Thắm Không Về Lofi Ver X2X x MewMew Từng là hơi ấm bên đời giờ là cơn gió ngang trời.mp3",
    songname: "Cô Thắm Không Về",
    songauthor: "X2X x MewMew"
  },
  {
    songid: 65,
    songlink: "y2mate.com - Crazy Donkey Morsmordre Official Audio.mp3",
    songname: "Morsmordre",
    songauthor: "Crazy Donkey"
  },
  {
    songid: 66,
    songlink: "y2mate.com - cute cat dancing speed up.mp3",
    songname: "cute cat dancing",
    songauthor: "Unknown"
  },
  {
    songid: 67,
    songlink: "y2mate.com - Cưới Luôn Được Không Remix YuniBoo x Goctoi Mixer x Đại Mèo BẢN MIX CĂNG ĐÉT HOT TIK TOK.mp3",
    songname: "Cưới Luôn Được Không",
    songauthor: "YuniBoo x Goctoi Mixer x Đại Mèo"
  },
  {
    songid: 68,
    songlink: "y2mate.com - Cứu Vãn Kịp Không Vương Anh Tú x AnhVuRemix Version by 1 9 6 7 Audio Lyrics Video.mp3",
    songname: "Cứu Vãn Kịp Không",
    songauthor: "Vương Anh Tú x AnhVuRemix"
  },
  {
    songid: 69,
    songlink: "y2mate.com - Chàng Trai Của Em Remix Duy Văn Phạm x BroBear Anh Sẽ Là Chàng Trai Luôn Mang Vác Tương Lai Cho Em.mp3",
    songname: "Chàng Trai Của Em",
    songauthor: "Duy Văn Phạm x BroBear"
  },
  {
    songid: 70,
    songlink: "y2mate.com - Chắc Em Đã Quên Rồi Remix Speed up.mp3",
    songname: "Chắc Em Đã Quên Rồi",
    songauthor: "Unknown"
  },
  {
    songid: 71,
    songlink: "y2mate.com - Chẳng Thể Tìm Được Em PhucXp ft Freak D Official Audio.mp3",
    songname: "Chẳng Thể Tìm Được Em",
    songauthor: "PhucXp ft Freak D"
  },
  {
    songid: 72,
    songlink: "y2mate.com - Cheri Cheri Lady Maléna Lyrics.mp3",
    songname: "Cheri Cheri Lady",
    songauthor: "Maléna"
  },
  {
    songid: 73,
    songlink: "y2mate.com - CHỈ MUỐN BÊN EM LÚC NÀY JIKI X ft HUY VẠC FULL MV LYRIC.mp3",
    songname: "CHỈ MUỐN BÊN EM LÚC NÀY",
    songauthor: "JIKI X ft HUY VẠC"
  },
  {
    songid: 74,
    songlink: "y2mate.com - Chỉ Muốn Bên Em Thật Gần Orinn Remix YLing Nhạc Trẻ EDM Hot TikTok Gây Nghiện Hay Nhất 2022.mp3",
    songname: "Chỉ Muốn Bên Em Thật Gần",
    songauthor: "Orinn Remix YLing"
  },
  {
    songid: 75,
    songlink: "y2mate.com - Chicken Wing Viral Tiktok 2020 DJ Rowel Remix Zumba Dance Fitness BMD Crew.mp3",
    songname: "Chicken Wing",
    songauthor: "DJ Rowel"
  },
  {
    songid: 76,
    songlink: "y2mate.com - Cho Em Một Lần Yêu Orinn Remix Đông Nhi Người Bỗng Đến Bên Em Vào Một Hôm Nắng Xanh Ngời Remix.mp3",
    songname: "Cho Em Một Lần Yêu",
    songauthor: "Orinn Remix Đông Nhi"
  },
  {
    songid: 77,
    songlink: "y2mate.com - Chốn Quê Thanh Bình The Night Dimz Remix Pro Cuộc Đời Cô Lưu Nơi Thành Đô Lẻ Loi Một Mình.mp3",
    songname: "Chốn Quê Thanh Bình",
    songauthor: "The Night Dimz"
  },
  {
    songid: 78,
    songlink: "y2mate.com - Chuyện Đôi Ta Freak D Lofi Ver Emcee L ft Muộii.mp3",
    songname: "Chuyện Đôi Ta",
    songauthor: "Emcee L ft Muộii"
  },
  {
    songid: 79,
    songlink: "y2mate.com - Chuyện Hoa Sim H2K x KProxLo Fi Ver Audio Lyrics Video.mp3",
    songname: "Chuyện Hoa Sim",
    songauthor: "H2K x KProx"
  },
  {
    songid: 80,
    songlink: "y2mate.com - DABRO ЮНОСТЬ Текст песни.mp3",
    songname: "ЮНОСТЬ",
    songauthor: "DABRO"
  },
  {
    songid: 81,
    songlink: "y2mate.com - Dadada TVT Remix Nhạc Nền Hot TikTok Gây Nghiện 2023.mp3",
    songname: "Dadada",
    songauthor: "TVT"
  },
  {
    songid: 82,
    songlink: "y2mate.com - Dadada TVT Remix Nhạc Nền Hot Trend TikTok 2023.mp3",
    songname: "Dadada",
    songauthor: "TVT"
  },
  {
    songid: 83,
    songlink: "y2mate.com - DADDY COOL REMIX NHẠC NỀN HOT TIK TOK GÂY NGHIỆN DyN Music.mp3",
    songname: "DADDY COOL",
    songauthor: "DyN Music"
  },
  {
    songid: 84,
    songlink: "y2mate.com - DANBALAN Lendo Calendo MIX Tiktok Music.mp3",
    songname: "Lendo Calendo",
    songauthor: "DANBALAN"
  },
  {
    songid: 85,
    songlink: "y2mate.com - DEAF KEV Invincible NCS Release.mp3",
    songname: "Invincible",
    songauthor: "DEAF KEV"
  },
  {
    songid: 86,
    songlink: "y2mate.com - DEAMN Drive My Car Inspirational Music.mp3",
    songname: "Drive My Car",
    songauthor: "DEAMN"
  },
  {
    songid: 87,
    songlink: "y2mate.com - Demo Track 网络歌手 Walking In The Sun劲舞团.mp3",
    songname: "Walking In The Sun",
    songauthor: "网络歌手"
  },
  {
    songid: 88,
    songlink: "y2mate.com - Dễ Đến Dễ Đi Lofi Ver Quang Hùng MasterD x Quốc Kiệm.mp3",
    songname: "Dễ Đến Dễ Đi",
    songauthor: "Quang Hùng MasterD x Quốc Kiệm"
  },
  {
    songid: 89,
    songlink: "y2mate.com - DJ All Night REMIX ENA ENA IMUT IMUT l nhạc nền EDM REMIX VIRAL TIKTOK.mp3",
    songname: "DJ All Night",
    songauthor: "Unknown"
  },
  {
    songid: 90,
    songlink: "y2mate.com - DJ Baby Dont Go Full Beat Nhạc Hot TIKTOK 2021.mp3",
    songname: "Baby Dont Go",
    songauthor: "DJ"
  },
  {
    songid: 91,
    songlink: "y2mate.com - DJ BEAUTIFUL IN WHITE X SLOW REMIX 2022 nhạc Tik Tok cute gây nghiện 2022 Hay Nhất hiện nay.mp3",
    songname: "BEAUTIFUL IN WHITE",
    songauthor: "DJ"
  },
  {
    songid: 92,
    songlink: "y2mate.com - Dj Danza Kuduro Remix TikTok Full Beat DJ ASIA REMIX Nhạc Nền TikTok Gây Nghiện Mới Nhất 2022.mp3",
    songname: "Danza Kuduro",
    songauthor: "Dj"
  },
  {
    songid: 93,
    songlink: "y2mate.com - DJ GALIZE X PITA PITA VIRAL TIKTOK TERBARU FULLBEAT dj Borneo Nhạc Hot Tiktok Gây Nghiện.mp3",
    songname: "GALIZE X PITA PITA",
    songauthor: "DJ"
  },
  {
    songid: 94,
    songlink: "y2mate.com - DJ I STILL NEED YOU ELA ELA EE VIRALL TikTok 100 Nhạc Nền Hot TikTok Gây Nghiện 抖音 Douyin.mp3",
    songname: "I STILL NEED YOU",
    songauthor: "DJ"
  },
  {
    songid: 95,
    songlink: "y2mate.com - DJ Old Magic In The Air x Untuk Pengisi Hatiku Viral DJ SANTUY DJ Tik Tok Chill Hot Trend.mp3",
    songname: "Magic In The Air",
    songauthor: "DJ"
  },
  {
    songid: 96,
    songlink: "y2mate.com - Dusk Till Dawn ZAYN ft Sia ДбкПя Remix Lyrics Vietsub .mp3",
    songname: "Dusk Till Dawn",
    songauthor: "ZAYN ft Sia"
  },
  {
    songid: 97,
    songlink: "y2mate.com - Dusk Till Dawn x Pokemon x Tiban x Cest La Vie ZH Remix Tik Tok 134.mp3",
    songname: "Dusk Till Dawn",
    songauthor: "ZH Remix"
  },
  {
    songid: 98,
    songlink: "y2mate.com - Duyên Âm x Đánh Đố Remix TVT Remix Nhạc Đàn Tỳ Bà Remix JUNE EDM MIUSC.mp3",
    songname: "Duyên Âm x Đánh Đố",
    songauthor: "TVT Remix"
  },
  {
    songid: 99,
    songlink: "y2mate.com - Duyên Duyên Số Số RIN Music Remix Du Uyên Gặp Gỡ Để Chia Ly Chia Ly Để Gặp Gỡ Remix.mp3",
    songname: "Duyên Duyên Số Số",
    songauthor: "RIN Music Remix"
  },
  {
    songid: 100,
    songlink: "y2mate.com - Duyên Trời Lấy 2 Chung Thanh Duy x ZeapleeLofi Version by 1 9 6 7 Audio Lyrics Video.mp3",
    songname: "Duyên Trời Lấy 2",
    songauthor: "Chung Thanh Duy x Zeaplee"
  },
  // ... (tiếp tục cho toàn bộ 200+ bài hát)
  // Do giới hạn kích thước, dưới đây là 50 bài tiếp theo
  {
    songid: 101,
    songlink: "y2mate.com - DỪNG THƯƠNG DATKAA OFFICIAL MUSIC VIDEO.mp3",
    songname: "Dừng Thương",
    songauthor: "DATKAA"
  },
  {
    songid: 102,
    songlink: "y2mate.com - Đã Lỡ Yêu Em Nhiều.mp3",
    songname: "Đã Lỡ Yêu Em Nhiều",
    songauthor: "Unknown"
  },
  {
    songid: 103,
    songlink: "y2mate.com - Đen x JustaTee Đi Về Nhà MV.mp3",
    songname: "Đi Về Nhà",
    songauthor: "Đen x JustaTee"
  },
  {
    songid: 104,
    songlink: "y2mate.com - Đếm Ngày Xa Em Only C ft Lou Hoàng Official MV Nhạc trẻ mới hay tuyển chọn.mp3",
    songname: "Đếm Ngày Xa Em",
    songauthor: "Only C ft Lou Hoàng"
  },
  {
    songid: 105,
    songlink: "y2mate.com - Đêm Trăng Tình Yêu H2O Remix Chu Duyên Phố Xa Đêm Đông Người Đêm Tình Yêu Dưới Trăng Remix.mp3",
    songname: "Đêm Trăng Tình Yêu",
    songauthor: "H2O Remix Chu Duyên"
  },
  {
    songid: 106,
    songlink: "y2mate.com - Đêm Trăng Tình Yêu Lofi Ver Hương Tú x VuxƯớc chi trăng đừng tàn soi tình yêu chúng ta.mp3",
    songname: "Đêm Trăng Tình Yêu",
    songauthor: "Hương Tú x Vux"
  },
  {
    songid: 107,
    songlink: "y2mate.com - Đi Cùng Em Andy Remix Ha Tron ft Lemon Climb Nhạc Trẻ Remix EDM Tik Tok Gây Nghiên Hiện Nay.mp3",
    songname: "Đi Cùng Em",
    songauthor: "Andy Remix Ha Tron ft Lemon Climb"
  },
  {
    songid: 108,
    songlink: "y2mate.com - Đơn Giản Anh Yêu Em Hồ Quốc Việt Lyric Video Nhạc Hot Tiktok.mp3",
    songname: "Đơn Giản Anh Yêu Em",
    songauthor: "Hồ Quốc Việt"
  },
  {
    songid: 109,
    songlink: "y2mate.com - Đúng Người Đúng Thời Điểm Thanh Hưng Freak D Remix.mp3",
    songname: "Đúng Người Đúng Thời Điểm",
    songauthor: "Thanh Hưng Freak D"
  },
  {
    songid: 110,
    songlink: "y2mate.com - Đừng quên tên anh Hoa VinhLyrics VideoMeens.mp3",
    songname: "Đừng quên tên anh",
    songauthor: "Hoa Vinh"
  },
  {
    songid: 111,
    songlink: "y2mate.com - Đường Tôi Chở Em Về buitruonglinh Lyrics Video .mp3",
    songname: "Đường Tôi Chở Em Về",
    songauthor: "buitruonglinh"
  },
  {
    songid: 112,
    songlink: "y2mate.com - Đường Tôi Chở Em Về Lofi Ver buitruonglinh x Freak D.mp3",
    songname: "Đường Tôi Chở Em Về",
    songauthor: "buitruonglinh x Freak D"
  },
  {
    songid: 113,
    songlink: "y2mate.com - Đường Vào Tim Em Ôi Băng Giá Người Tình Mùa Đông Remix NHẠC HOT TIK TOK 2022 RubiEDM.mp3",
    songname: "Đường Vào Tim Em",
    songauthor: "RubiEDM"
  },
  {
    songid: 114,
    songlink: "y2mate.com - Đường Về Nhà Là Vào Tim Ta Dẫu Nắng Mưa Gần Xa Đi Về Nhà Duc Quang Mix Đen x JustaTee.mp3",
    songname: "Đường Về Nhà Là Vào Tim Ta",
    songauthor: "Duc Quang Mix Đen x JustaTee"
  },
  {
    songid: 115,
    songlink: "y2mate.com - Early Morning Dreams Kled Mone Remix Nhạc gây nghiện trên Tiktok Trung Quốc.mp3",
    songname: "Early Morning Dreams",
    songauthor: "Kled Mone"
  },
  {
    songid: 116,
    songlink: "y2mate.com - EDM jomblo lagi remix Twm Squad Nhac TikTok Hot 2022 Cute Gây Nghiên.mp3",
    songname: "jomblo lagi",
    songauthor: "Twm Squad"
  },
  {
    songid: 117,
    songlink: "y2mate.com - EDM Tik Tok Top Nhạc Tik Tok Tiếng Anh Us Uk Mix Gây Nghiện Hay Nhất 2022 KUNB MUSIC.mp3",
    songname: "EDM Tik Tok Top",
    songauthor: "KUNB MUSIC"
  },
  {
    songid: 118,
    songlink: "y2mate.com - Elephante Come Back For You feat Matluck.mp3",
    songname: "Come Back For You",
    songauthor: "Elephante feat Matluck"
  },
  {
    songid: 119,
    songlink: "y2mate.com - Else Paris.mp3",
    songname: "Paris",
    songauthor: "Else"
  },
  {
    songid: 120,
    songlink: "y2mate.com - Em Có Biết H2K x KProxLofi Ver Official Lyrics Video.mp3",
    songname: "Em Có Biết",
    songauthor: "H2K x KProx"
  },
  {
    songid: 121,
    songlink: "y2mate.com - Em Là Ai Keyo x Will MLofi Ver Official Lyrics Video.mp3",
    songname: "Em Là Ai",
    songauthor: "Keyo x Will M"
  },
  {
    songid: 122,
    songlink: "y2mate.com - Em Là AI Lofi Ver Keyo x Hgreen Là là là ai mà cứ cho anh mãi cứ cho anh ngàn cơ mơ say.mp3",
    songname: "Em Là AI",
    songauthor: "Keyo x Hgreen"
  },
  {
    songid: 123,
    songlink: "y2mate.com - Em Là Nhất Kis x Hoàng Kaylee x Yahy x ZeapleeLofi Version by 1 9 6 7 Audio Lyrics Video.mp3",
    songname: "Em Là Nhất",
    songauthor: "Kis x Hoàng Kaylee x Yahy x Zeaplee"
  },
  {
    songid: 124,
    songlink: "y2mate.com - em muốn kết thúc như thế này saoEm Muốn Ta Là Gì Lofi Ver Thanh Hưng x Vux.mp3",
    songname: "Em Muốn Ta Là Gì",
    songauthor: "Thanh Hưng x Vux"
  },
  {
    songid: 125,
    songlink: "y2mate.com - Em Muốn Ta Là Gì Thanh Hưng x TEED Từ ngày em nói ta hết rồi Lofi Version.mp3",
    songname: "Em Muốn Ta Là Gì",
    songauthor: "Thanh Hưng x TEED"
  },
  {
    songid: 126,
    songlink: "y2mate.com - Erik Lund Summertime.mp3",
    songname: "Summertime",
    songauthor: "Erik Lund"
  },
  {
    songid: 127,
    songlink: "y2mate.com - Face Nuest Nampenh x Box Vinahouse Vgee Remix DJ抖音 Nhạc Nền Maphia Internet Douyin 2022.mp3",
    songname: "Face Nuest",
    songauthor: "Nampenh x Box Vinahouse Vgee"
  },
  {
    songid: 128,
    songlink: "y2mate.com - FADED LOVE DJ TÙNG XÈNG 47 MIKE HAO REMIX NHẠC Ở ĐÂY NHẠC TOÀN TREND TIKTOK.mp3",
    songname: "FADED LOVE",
    songauthor: "DJ TÙNG XÈNG 47 MIKE HAO"
  },
  {
    songid: 129,
    songlink: "y2mate.com - Feint My Sunset Original Mix.mp3",
    songname: "My Sunset",
    songauthor: "Feint"
  },
  {
    songid: 130,
    songlink: "y2mate.com - FICTION REMIX HOT Tiktok 2022 bản nhạc đang được thinhhanh 2x Jin tiktok china.mp3",
    songname: "FICTION",
    songauthor: "Jin"
  },
  {
    songid: 131,
    songlink: "y2mate.com - Fredji Happy Life Vlog No Copyright Music.mp3",
    songname: "Happy Life",
    songauthor: "Fredji"
  },
  {
    songid: 132,
    songlink: "y2mate.com - Gặp Em Đúng Lúc Remix 剛好遇見你 DJ抖音 001 TikTok 抖音精选热播BGM Nhạc Nền TikTok Gây Nghiện.mp3",
    songname: "Gặp Em Đúng Lúc",
    songauthor: "DJ抖音"
  },
  {
    songid: 133,
    songlink: "y2mate.com - Gõ Cửa Trái Tim H2K x KProxLoFi Ver Audio Lyrics Video.mp3",
    songname: "Gõ Cửa Trái Tim",
    songauthor: "H2K x KProx"
  },
  {
    songid: 134,
    songlink: "y2mate.com - GIẤC MƠ TRƯA REMIX Vucca Music ツ.mp3",
    songname: "GIẤC MƠ TRƯA",
    songauthor: "Vucca Music"
  },
  {
    songid: 135,
    songlink: "y2mate.com - Gimme Gimme Gimme Reset Remix Tiktok 2024 Slow 08X Bản Full Hot Tiktok 人面兽心花凯 Nhạc 8D DJ抖音版.mp3",
    songname: "Gimme Gimme Gimme",
    songauthor: "Reset Remix"
  },
  {
    songid: 136,
    songlink: "y2mate.com - Gimme Gimme Gimme Trí Thức RemixNhạc Cổ Điển Qua Tay Pháp Sư VN Remix Cực Đỉnh Nhạc Nền TikTok.mp3",
    songname: "Gimme Gimme Gimme",
    songauthor: "Trí Thức Remix"
  },
  {
    songid: 137,
    songlink: "y2mate.com - Gimme Reset 人面兽心花凯 Bản nhạc đang HOT trên TikTok VN 抖音 Douyin DastionD Music.mp3",
    songname: "Gimme Reset",
    songauthor: "DastionD Music"
  },
  {
    songid: 138,
    songlink: "y2mate.com - Gió JanK x QuanvroxLofi Ver Official Lyrics Video.mp3",
    songname: "Gió",
    songauthor: "JanK x Quanvrox"
  },
  {
    songid: 139,
    songlink: "y2mate.com - Gió Speed Up JanK x KProxLo Fi Ver Official Lyric Video.mp3",
    songname: "Gió",
    songauthor: "JanK x KProx"
  },
  {
    songid: 140,
    songlink: "y2mate.com - Hạ còn vương nắng DatKaa KIDO Lyrics.mp3",
    songname: "Hạ còn vương nắng",
    songauthor: "DatKaa KIDO"
  },
  {
    songid: 141,
    songlink: "y2mate.com - Hạ Còn Vương Nắng LofiVer DatKaa x KIDO x Pro QT BEATZ Lyrics.mp3",
    songname: "Hạ Còn Vương Nắng",
    songauthor: "DatKaa x KIDO x Pro QT BEATZ"
  },
  {
    songid: 142,
    songlink: "y2mate.com - hạ còn vương nắng remix tiktok Bảo HZx DATKAA.mp3",
    songname: "hạ còn vương nắng",
    songauthor: "Bảo HZx DATKAA"
  },
  {
    songid: 143,
    songlink: "y2mate.com - Hạ Vương Còn Nắng Remix DATKAA x KIDO x Prod QT BEATZ Music vn.mp3",
    songname: "Hạ Vương Còn Nắng",
    songauthor: "DATKAA x KIDO x Prod QT BEATZ"
  },
  {
    songid: 144,
    songlink: "y2mate.com - Hai Mươi Hai 22 AMEE ft Hứa Kim Tuyền x Quanvrox Lo Fi Ver Official Lyric Video.mp3",
    songname: "Hai Mươi Hai 22",
    songauthor: "AMEE ft Hứa Kim Tuyền x Quanvrox"
  },
  {
    songid: 145,
    songlink: "y2mate.com - Hai Mươi Hai 22 AMEE x Hứa Kim TuyềnCukak Remix Audio Lyric Video.mp3",
    songname: "Hai Mươi Hai 22",
    songauthor: "AMEE x Hứa Kim TuyềnCukak"
  },
  {
    songid: 146,
    songlink: "y2mate.com - Hạnh Phúc Cuối Cùng Trương Việt Thái.mp3",
    songname: "Hạnh Phúc Cuối Cùng",
    songauthor: "Trương Việt Thái"
  },
  {
    songid: 147,
    songlink: "y2mate.com - Hạnh Phúc Cuối Cùng Lofi Ver Trương Việt Thái Ánh mắt em như xua màn đêm.mp3",
    songname: "Hạnh Phúc Cuối Cùng",
    songauthor: "Trương Việt Thái"
  },
  {
    songid: 148,
    songlink: "y2mate.com - Hạt Mưa Vương VânSlowed Lyrics Phan Duy Anh Dunghoangpham cover.mp3",
    songname: "Hạt Mưa Vương Vân",
    songauthor: "Phan Duy Anh Dunghoangpham"
  },
  {
    songid: 149,
    songlink: "y2mate.com - Hãy Ra Khỏi Người Đó Đi Phan Mạnh Quỳnh Official MV.mp3",
    songname: "Hãy Ra Khỏi Người Đó Đi",
    songauthor: "Phan Mạnh Quỳnh"
  },
  {
    songid: 150,
    songlink: "y2mate.com - Hãy Ra Khỏi Người Đó Đi Remix Quanh x DJ ATOM Phan Mạnh Quỳnh Nhạc Nền EDM Remix Hot TikTok VN.mp3",
    songname: "Hãy Ra Khỏi Người Đó Đi",
    songauthor: "Quanh x DJ ATOM Phan Mạnh Quỳnh"
  },
  {
    songid: 151,
    songlink: "y2mate.com - Hayya Hayya Remix Better Together FIFA Sound World Cup 2022 Nhạc Nền World Cup 2022 Hot TikTok.mp3",
    songname: "Hayya Hayya",
    songauthor: "FIFA Sound World Cup 2022"
  },
  {
    songid: 152,
    songlink: "y2mate.com - Hẹn Em Kiếp Sau HEKS Lã x Duy Phúc x TiB Official MV.mp3",
    songname: "Hẹn Em Kiếp Sau",
    songauthor: "HEKS Lã x Duy Phúc x TiB"
  },
  {
    songid: 153,
    songlink: "y2mate.com - Hẹn KIếp SauLofi Ver by KProx Khả Hiệp Audio Lyrics.mp3",
    songname: "Hẹn Kiếp Sau",
    songauthor: "KProx Khả Hiệp"
  },
  {
    songid: 154,
    songlink: "y2mate.com - Họ Yêu Ai Mất Rồi Lofi Ver Doãn Hiếu x Freak D.mp3",
    songname: "Họ Yêu Ai Mất Rồi",
    songauthor: "Doãn Hiếu x Freak D"
  },
  {
    songid: 155,
    songlink: "y2mate.com - Hoa Cài Mái TócLofi Ver Rio x Nguyenn x NPROX Audio Lyric Video.mp3",
    songname: "Hoa Cài Mái Tóc",
    songauthor: "Rio x Nguyenn x NPROX"
  },
  {
    songid: 156,
    songlink: "y2mate.com - Hoa Cỏ Lau Phong Max x BellLofi Ver giữa mênh mang đồi hoa cỏ lau.mp3",
    songname: "Hoa Cỏ Lau",
    songauthor: "Phong Max x Bell"
  },
  {
    songid: 157,
    songlink: "y2mate.com - Hoa cỏ lau H2K Speed up.mp3",
    songname: "Hoa cỏ lau",
    songauthor: "H2K"
  },
  {
    songid: 158,
    songlink: "y2mate.com - Hoa Cỏ Lau speed up.mp3",
    songname: "Hoa Cỏ Lau",
    songauthor: "Unknown"
  },
  {
    songid: 159,
    songlink: "y2mate.com - Hoa Cỏ Mùa Xuân Lofi Ver Bảo Trân x Đông Qua.mp3",
    songname: "Hoa Cỏ Mùa Xuân",
    songauthor: "Bảo Trân x Đông Qua"
  },
  {
    songid: 160,
    songlink: "y2mate.com - Hoa Cưới H2O Remix Đạt Long Vinh Nhạc Trẻ Remix 2023 Hay Nhất Hiện Nay.mp3",
    songname: "Hoa Cưới",
    songauthor: "H2O Remix Đạt Long Vinh"
  },
  {
    songid: 161,
    songlink: "y2mate.com - Hoa Sứ Nhà Nàng H2K x KProxLoFi Ver Audio Lyrics Video.mp3",
    songname: "Hoa Sứ Nhà Nàng",
    songauthor: "H2K x KProx"
  },
  {
    songid: 162,
    songlink: "y2mate.com - Hoa Trên Giấy Không Sương Hoa Vẫn Nở Hot TikTok Hoa Tàn Tình Tan Remix Giang Jolee.mp3",
    songname: "Hoa Trên Giấy Không Sương",
    songauthor: "Giang Jolee"
  },
  {
    songid: 163,
    songlink: "y2mate.com - Hoàng Thuỳ Linh See Tình speed up.mp3",
    songname: "See Tình",
    songauthor: "Hoàng Thuỳ Linh"
  },
  {
    songid: 164,
    songlink: "y2mate.com - Hỏi Vợ Ngoại Thành H2K x KProxLo Fi Ver Audio Lyrics Video.mp3",
    songname: "Hỏi Vợ Ngoại Thành",
    songauthor: "H2K x KProx"
  },
  {
    songid: 165,
    songlink: "y2mate.com - Hot Tiktok Ít Nhưng Dài Lâu Yan Nguyễn x Chu Thúy Quỳnh Nam Con REMIX.mp3",
    songname: "Ít Nhưng Dài Lâu",
    songauthor: "Yan Nguyễn x Chu Thúy Quỳnh"
  },
  {
    songid: 166,
    songlink: "y2mate.com - Hôm Nay Em Cưới Rồi Khải Đăng Thanh Hưng Live Version.mp3",
    songname: "Hôm Nay Em Cưới Rồi",
    songauthor: "Khải Đăng Thanh Hưng"
  },
  {
    songid: 167,
    songlink: "y2mate.com - Hôm Nay Em Cưới Rồi Lofi Ver Khải Đăng x Freak D (1).mp3",
    songname: "Hôm Nay Em Cưới Rồi",
    songauthor: "Khải Đăng x Freak D"
  },
  {
    songid: 168,
    songlink: "y2mate.com - Hôm Nay Em Cưới Rồi Lofi Ver Khải Đăng x Freak D.mp3",
    songname: "Hôm Nay Em Cưới Rồi",
    songauthor: "Khải Đăng x Freak D"
  },
  {
    songid: 169,
    songlink: "y2mate.com - HƯƠNG REMIX VĂN MAI HƯƠNG HAOZI x RINV Mùi hương em nồng say Tiktok.mp3",
    songname: "HƯƠNG",
    songauthor: "VĂN MAI HƯƠNG HAOZI x RINV"
  },
  {
    songid: 170,
    songlink: "y2mate.com - Hương Tú ft Khu Đình Gió đánh đò đưa Cover LYRICS.mp3",
    songname: "Gió đánh đò đưa",
    songauthor: "Hương Tú ft Khu Đình"
  },
  {
    songid: 171,
    songlink: "y2mate.com - I DO 911 ĐỨC PHÚC x NHẠC HOT TIKTOK 2023 x HUY PT MIX.mp3",
    songname: "I DO 911",
    songauthor: "ĐỨC PHÚC x HUY PT"
  },
  {
    songid: 172,
    songlink: "y2mate.com - I Love You Kevin Rater remix cute Vietsub Lyric Tik Tok song Kay Music.mp3",
    songname: "I Love You",
    songauthor: "Kevin Rater"
  },
  {
    songid: 173,
    songlink: "y2mate.com - In My Mind Remix Tiktok Một Phút Nghe Vạn Phút Phê.mp3",
    songname: "In My Mind",
    songauthor: "Unknown"
  },
  {
    songid: 174,
    songlink: "y2mate.com - Justin Bieber Baby ft Ludacris Lyrics Video.mp3",
    songname: "Baby",
    songauthor: "Justin Bieber ft Ludacris"
  },
  {
    songid: 175,
    songlink: "y2mate.com - Kara Lyrics Bạn Đời Karik feat GDUCKY Lyrics Video.mp3",
    songname: "Bạn Đời",
    songauthor: "Karik feat GDUCKY"
  },
  {
    songid: 176,
    songlink: "y2mate.com - Kẻ Điên Tin Vào Tình Yêu Lofi Ver Lil Z Poet x Freak D.mp3",
    songname: "Kẻ Điên Tin Vào Tình Yêu",
    songauthor: "Lil Z Poet x Freak D"
  },
  {
    songid: 177,
    songlink: "y2mate.com - KÉM DUYÊN RUM X NIT X MASEW (1).mp3",
    songname: "KÉM DUYÊN",
    songauthor: "RUM X NIT X MASEW"
  },
  {
    songid: 178,
    songlink: "y2mate.com - KÉM DUYÊN RUM X NIT X MASEW.mp3",
    songname: "KÉM DUYÊN",
    songauthor: "RUM X NIT X MASEW"
  },
  {
    songid: 179,
    songlink: "y2mate.com - KEYO TÒNG PHU Official Music Video Quá khó để chăm lo một người con gái.mp3",
    songname: "TÒNG PHU",
    songauthor: "KEYO"
  },
  {
    songid: 180,
    songlink: "y2mate.com - Kết Duyên Htrol Remix YuniBoo x Goctoi Mixer Nhạc Trẻ EDM Tiktok Gây Nghiện Hay Nhất 2020.mp3",
    songname: "Kết Duyên",
    songauthor: "Htrol Remix YuniBoo x Goctoi Mixer"
  },
  {
    songid: 181,
    songlink: "y2mate.com - Khó Vẽ Nụ Cười Htrol Remix ĐạtG x DuUyên EDM Ver Nhạc gây nghiện 2019.mp3",
    songname: "Khó Vẽ Nụ Cười",
    songauthor: "Htrol Remix ĐạtG x DuUyên"
  },
  {
    songid: 182,
    songlink: "y2mate.com - Khó Vẽ Nụ CườiLofi Ver ĐạtG x Du Uyên ft TBin Audio Lyric Video.mp3",
    songname: "Khó Vẽ Nụ Cười",
    songauthor: "ĐạtG x Du Uyên ft TBin"
  },
  {
    songid: 183,
    songlink: "y2mate.com - Khuất Lối Lofi Ver HKray x Freak D.mp3",
    songname: "Khuất Lối",
    songauthor: "HKray x Freak D"
  },
  {
    songid: 184,
    songlink: "y2mate.com - Là Anh H2O Remix Phạm Lịch Cùng Đi Cùng Đi Ngàn Năm Về Sau Mình Vẫn Có Nhau Hot TikTok Remix.mp3",
    songname: "Là Anh",
    songauthor: "H2O Remix Phạm Lịch"
  },
  {
    songid: 185,
    songlink: "y2mate.com - La la La lay Remix ชอบเธออะ Tiktok EDM Thái Lan Gây Nghiên Nhac Trend Cute TikTok Hot 2022.mp3",
    songname: "La la La lay",
    songauthor: "Unknown"
  },
  {
    songid: 186,
    songlink: "y2mate.com - La La La Original Mix Naughty BoyHoneyfoxLostPop Mage Kain Music 全网热播BGM 抖音 TikTok.mp3",
    songname: "La La La",
    songauthor: "Naughty BoyHoneyfoxLostPop Mage Kain"
  },
  {
    songid: 187,
    songlink: "y2mate.com - Last Time Luciano x Pop Smoke Nhạc Nền Hot TikTok Gây Nghiện 2022 Hot Music TikTok 2022.mp3",
    songname: "Last Time",
    songauthor: "Luciano x Pop Smoke"
  },
  {
    songid: 188,
    songlink: "y2mate.com - LAY LAY REMIX by Gabidulin FAST FURIOUS Chase Scene.mp3",
    songname: "LAY LAY",
    songauthor: "Gabidulin"
  },
  {
    songid: 189,
    songlink: "y2mate.com - Lấy Chồng Sớm Làm Gì Ballad Version HuyR ft Tuấn Cry.mp3",
    songname: "Lấy Chồng Sớm Làm Gì",
    songauthor: "HuyR ft Tuấn Cry"
  },
  {
    songid: 190,
    songlink: "y2mate.com - Lấy Chồng Sớm Làm Gì Lofi Ver HuyR ft Tuấn Cry Hương Tú Cover x Vux.mp3",
    songname: "Lấy Chồng Sớm Làm Gì",
    songauthor: "HuyR ft Tuấn Cry Hương Tú Cover x Vux"
  },
  {
    songid: 191,
    songlink: "y2mate.com - Lấy Chồng Sớm Làm Gì Ballad Version HuyR ft Tuấn Cry.mp3",
    songname: "Lấy Chồng Sớm Làm Gì",
    songauthor: "HuyR ft Tuấn Cry"
  },
  {
    songid: 192,
    songlink: "y2mate.com - Le Tour De Trance Remix Nhạc Hot TikTok Thái Lan Remix Gây Nghiện .mp3",
    songname: "Le Tour De Trance",
    songauthor: "Unknown"
  },
  {
    songid: 193,
    songlink: "y2mate.com - Lil Wuyn 16 BrT 16 Typh TOKYO Cypher.mp3",
    songname: "16",
    songauthor: "Lil Wuyn 16 BrT 16 Typh"
  },
  {
    songid: 194,
    songlink: "y2mate.com - Lonely Remix Nana DJ抖音 Remix TikTok 0001 Nhạc Nền Hot Douyin抖音 2022.mp3",
    songname: "Lonely",
    songauthor: "Nana"
  },
  {
    songid: 195,
    songlink: "y2mate.com - lost Honeyfox Pop Mage Let Her Go Magic Cover Release.mp3",
    songname: "lost",
    songauthor: "Honeyfox Pop Mage"
  },
  {
    songid: 196,
    songlink: "y2mate.com - Lời Nói Điêu Trên Môi Em Freak D Lofi Ver Đỗ Nguyên Phúc ft Lil Z Poet.mp3",
    songname: "Lời Nói Điêu Trên Môi Em",
    songauthor: "Đỗ Nguyên Phúc ft Lil Z Poet"
  },
  {
    songid: 197,
    songlink: "y2mate.com - Lời Yêu Ngây Dại Lofi Ver Kha x MewMew Dịu dàng em yên ắng vội mang ánh trăng lẻ loi.mp3",
    songname: "Lời Yêu Ngây Dại",
    songauthor: "Kha x MewMew"
  },
  {
    songid: 198,
    songlink: "y2mate.com - Lucky Twice Lucky Lyrics Im So Lucky Lucky Im So Lovely Lovely TikTok Remix.mp3",
    songname: "Lucky",
    songauthor: "Lucky Twice"
  },
  {
    songid: 199,
    songlink: "y2mate.com - Lụy Tình Lofi Ver Trung Dio x Tú GG Thế gian tình người phũ lắm em ơi lofi Solo Records 2.mp3",
    songname: "Lụy Tình",
    songauthor: "Trung Dio x Tú GG"
  },
  {
    songid: 200,
    songlink: "y2mate.com - LYRIC VIDEO HOÀNG DŨNG CHỜ ANH NHÉ.mp3",
    songname: "CHỜ ANH NHÉ",
    songauthor: "HOÀNG DŨNG"
  },
  {
    songid: 201,
    songlink: "y2mate.com - Lyric Video Tình yêu màu nắng Đoàn Thúy Trang ft Big Daddy.mp3",
    songname: "Tình yêu màu nắng",
    songauthor: "Đoàn Thúy Trang ft Big Daddy"
  },
  {
    songid: 202,
    songlink: "y2mate.com - Lyrics Vietsub Bạc Phận KICM JACK English Cover Nhạc remix hot tiktok.mp3",
    songname: "Bạc Phận",
    songauthor: "KICM JACK"
  },
  {
    songid: 203,
    songlink: "y2mate.com - Lyrics Hai Chữ Đã Từng Lofi Ver Như Việt Trong Lofi Chill.mp3",
    songname: "Hai Chữ Đã Từng",
    songauthor: "Như Việt"
  },
  {
    songid: 204,
    songlink: "y2mate.com - Lyrics Video Ông Bà Anh Lê Thiện Hiếu Lê Phương Thảo ll Official Audio.mp3",
    songname: "Ông Bà Anh",
    songauthor: "Lê Thiện Hiếu Lê Phương Thảo"
  },
  {
    songid: 205,
    songlink: "y2mate.com - LyricsCHÂN ÁI ORANGE x KHÓI x CHÂU ĐĂNG KHOA Lyrics Audio.mp3",
    songname: "CHÂN ÁI",
    songauthor: "ORANGE x KHÓI x CHÂU ĐĂNG KHOA"
  },
  {
    songid: 206,
    songlink: "y2mate.com - Mang Chủng Remix 芒種Remix Âm Khuyết Thi Thính ft Triệu Phương Tịnh 音闕詩聽feat趙方婧 DJ MoonBaby.mp3",
    songname: "Mang Chủng",
    songauthor: "Âm Khuyết Thi Thính ft Triệu Phương Tịnh"
  },
  {
    songid: 207,
    songlink: "y2mate.com - Mashup Faded x Wolves Alan Walker x Selena Gomez Marshmello Smile4 Mashup .mp3",
    songname: "Faded x Wolves",
    songauthor: "Alan Walker x Selena Gomez Marshmello"
  },
  {
    songid: 208,
    songlink: "y2mate.com - MASHUP LƠ DUYÊN RUM ft NIT.mp3",
    songname: "LƠ DUYÊN",
    songauthor: "RUM ft NIT"
  },
  {
    songid: 209,
    songlink: "y2mate.com - Mashup Nevada x Đi Đi Đi Daniel Mastro Mashup Remix Bản Mashup Hay Nhất 2018.mp3",
    songname: "Nevada x Đi Đi Đi",
    songauthor: "Daniel Mastro"
  },
  {
    songid: 210,
    songlink: "y2mate.com - Meant To Be Remix Tik Tok 抖音 Douyin Bài hát hot Tik Tok Trung Quốc.mp3",
    songname: "Meant To Be",
    songauthor: "Unknown"
  },
  {
    songid: 211,
    songlink: "y2mate.com - Melody santuy.mp3",
    songname: "Melody santuy",
    songauthor: "Unknown"
  },
  {
    songid: 212,
    songlink: "y2mate.com - Michael Learns To Rock Take Me To Your Heart Remix V2 Dj QT Mix Nhạc Tiktok.mp3",
    songname: "Take Me To Your Heart",
    songauthor: "Michael Learns To Rock"
  },
  {
    songid: 213,
    songlink: "y2mate.com - Mong Một Ngày Anh Nhớ Đến Em Huỳnh James X Pjnboys Trong đêm miên man từng dòng thư em trao anh.mp3",
    songname: "Mong Một Ngày Anh Nhớ Đến Em",
    songauthor: "Huỳnh James X Pjnboys"
  },
  {
    songid: 214,
    songlink: "y2mate.com - Một Đêm Say Thịnh Suy KICM Remix Deep House Duy Beat.mp3",
    songname: "Một Đêm Say",
    songauthor: "Thịnh Suy KICM"
  },
  {
    songid: 215,
    songlink: "y2mate.com - Một Giấc Mộng Xưa Remix A Du Du 阿悠悠 旧梦一场 DJ版 Bài Hát Được Yêu Thích Trên Tik Tok.mp3",
    songname: "Một Giấc Mộng Xưa",
    songauthor: "A Du Du"
  },
  {
    songid: 216,
    songlink: "y2mate.com - Một Nhà Da LAB Official Lyric Video.mp3",
    songname: "Một Nhà",
    songauthor: "Da LAB"
  },
  {
    songid: 217,
    songlink: "y2mate.com - MrT Thu Cuối ft Yanbi Hằng BingBoong Official MV.mp3",
    songname: "Thu Cuối",
    songauthor: "MrT ft Yanbi Hằng BingBoong"
  },
  {
    songid: 218,
    songlink: "y2mate.com - Mùa Xuân Đầu Tiên H2K x Quốc Lượng Xuân 2024 Bao nhiêu thương nhớ gom nhặt đầy .mp3",
    songname: "Mùa Xuân Đầu Tiên",
    songauthor: "H2K x Quốc Lượng"
  },
  {
    songid: 219,
    songlink: "y2mate.com - MỸ NHÂN ĐINH ĐẠI VŨ HTROL REMIX NHẠC EDM HOT TIKTOK.mp3",
    songname: "MỸ NHÂN",
    songauthor: "ĐINH ĐẠI VŨ"
  },
  {
    songid: 220,
    songlink: "y2mate.com - Mỹ Nhân Ver Lofi Đinh Đại Vũ Chill TikTok.mp3",
    songname: "Mỹ Nhân",
    songauthor: "Đinh Đại Vũ"
  },
  {
    songid: 221,
    songlink: "y2mate.com - Nàng Thơ Lofi Ver Hoàng Dũng x Freak D.mp3",
    songname: "Nàng Thơ",
    songauthor: "Hoàng Dũng x Freak D"
  },
  {
    songid: 222,
    songlink: "y2mate.com - NÃO CÁ VÀNG ONLY C ft LOU HOÀNG OFFICIAL MV 2017.mp3",
    songname: "NÃO CÁ VÀNG",
    songauthor: "ONLY C ft LOU HÒANG"
  },
  {
    songid: 223,
    songlink: "y2mate.com - Naughty Boy Sam Smith La la la Lyrics.mp3",
    songname: "La la la",
    songauthor: "Naughty Boy Sam Smith"
  },
  {
    songid: 224,
    songlink: "y2mate.com - Năm Tháng Ấy Green Bản Mix Hay Nhất DJ ĐẠI MÈO REMIX.mp3",
    songname: "Năm Tháng Ấy",
    songauthor: "Green"
  },
  {
    songid: 225,
    songlink: "y2mate.com - Nắng Ấm Xa Dần RiverDLove Remix Tiktok Bản Full Sơn Tùng MTP.mp3",
    songname: "Nắng Ấm Xa Dần",
    songauthor: "RiverDLove"
  },
  {
    songid: 226,
    songlink: "y2mate.com - Nightcore 2 Phút Hơn feat Pháo KAIZ Remix.mp3",
    songname: "2 Phút Hơn",
    songauthor: "Pháo KAIZ"
  },
  {
    songid: 227,
    songlink: "y2mate.com - Nightcore Có anh ở đây rồi Remix Nightcore CN.mp3",
    songname: "Có anh ở đây rồi",
    songauthor: "Nightcore CN"
  },
  {
    songid: 228,
    songlink: "y2mate.com - Nightcore Crazy BEAUZ JVNA NCS Release.mp3",
    songname: "Crazy",
    songauthor: "BEAUZ JVNA"
  },
  {
    songid: 229,
    songlink: "y2mate.com - Nightcore Em của quá khứ Remix KCM.mp3",
    songname: "Em của quá khứ",
    songauthor: "KCM"
  },
  {
    songid: 230,
    songlink: "y2mate.com - Nightcore GHEN Khắc Hưng X Min X Erik Harvey Nelson Remix .mp3",
    songname: "GHEN",
    songauthor: "Khắc Hưng X Min X Erik"
  },
  {
    songid: 231,
    songlink: "y2mate.com - Nightcore Into Your ArmsWitt Lowry ft Ava Max Lyric No Rap.mp3",
    songname: "Into Your Arms",
    songauthor: "Witt Lowry ft Ava Max"
  },
  {
    songid: 232,
    songlink: "y2mate.com - Nightcore Lily Lyrics.mp3",
    songname: "Lily",
    songauthor: "Unknown"
  },
  {
    songid: 233,
    songlink: "y2mate.com - Nightcore Nhìn Em Lần Cuối DJ Tit Remix Yuki Huy Nam.mp3",
    songname: "Nhìn Em Lần Cuối",
    songauthor: "DJ Tit Remix Yuki Huy Nam"
  },
  {
    songid: 234,
    songlink: "y2mate.com - Nightcore Solo Lyrics.mp3",
    songname: "Solo",
    songauthor: "Unknown"
  },
  {
    songid: 235,
    songlink: "y2mate.com - Nightcore Sweet But Psycho Ava Max.mp3",
    songname: "Sweet But Psycho",
    songauthor: "Ava Max"
  },
  {
    songid: 236,
    songlink: "y2mate.com - Nightcore Symphony lyrics.mp3",
    songname: "Symphony",
    songauthor: "Unknown"
  },
  {
    songid: 237,
    songlink: "y2mate.com - Nightcore Time Back Bad Style.mp3",
    songname: "Time Back Bad Style",
    songauthor: "Unknown"
  },
  {
    songid: 238,
    songlink: "y2mate.com - Nightcore That Girl Remix Nightcore Bản remix hay nhất được yêu thích nhất 2019 CN.mp3",
    songname: "That Girl",
    songauthor: "Nightcore CN"
  },
  {
    songid: 239,
    songlink: "y2mate.com - Nightcore Thời Gian Sẽ Trả Lời JustaTee ft BigDaddy ft x Tiên Cookie x J02.mp3",
    songname: "Thời Gian Sẽ Trả Lời",
    songauthor: "JustaTee ft BigDaddy ft x Tiên Cookie x J02"
  },
  {
    songid: 240,
    songlink: "y2mate.com - Nightcore Việt Nam Những Chuyến Đi.mp3",
    songname: "Những Chuyến Đi",
    songauthor: "Nightcore Việt Nam"
  },
  {
    songid: 241,
    songlink: "y2mate.com - Nightcore Well Meet Again TheFatRat Laura Brehm Lyrics.mp3",
    songname: "Well Meet Again",
    songauthor: "TheFatRat Laura Brehm"
  },
  {
    songid: 242,
    songlink: "y2mate.com - Nightcore Đếm Ngày Xa Em Remix.mp3",
    songname: "Đếm Ngày Xa Em",
    songauthor: "Unknown"
  },
  {
    songid: 243,
    songlink: "y2mate.com - Nightcore Mang Chủng 芒種 Âm Khuyết Thi Thính ft Triệu Phương Tịnh 音闕詩聽feat趙方婧 TIK TOK.mp3",
    songname: "Mang Chủng",
    songauthor: "Âm Khuyết Thi Thính ft Triệu Phương Tịnh"
  },
  {
    songid: 244,
    songlink: "y2mate.com - Nightcore Quên người đã quá yêu remix.mp3",
    songname: "Quên người đã quá yêu",
    songauthor: "Unknown"
  },
  {
    songid: 245,
    songlink: "y2mate.com - Nightcore RamChan Điều Anh Biết Remix.mp3",
    songname: "Điều Anh Biết",
    songauthor: "RamChan"
  },
  {
    songid: 246,
    songlink: "y2mate.com - Nightcore RamChan Kết Duyên Remix.mp3",
    songname: "Kết Duyên",
    songauthor: "RamChan"
  },
  {
    songid: 247,
    songlink: "y2mate.com - Nightcore Save Me Lyrics.mp3",
    songname: "Save Me",
    songauthor: "Unknown"
  },
  {
    songid: 248,
    songlink: "y2mate.com - Nightcore Vì Người Không Xứng Đáng remix Tuấn HưngJ.mp3",
    songname: "Vì Người Không Xứng Đáng",
    songauthor: "Tuấn Hưng"
  },
  {
    songid: 249,
    songlink: "y2mate.com - NightcoreDrive My Car Deamn .mp3",
    songname: "Drive My Car",
    songauthor: "Deamn"
  },
  {
    songid: 250,
    songlink: "y2mate.com - NightCoreGive Me Your Love奏かなで備份.mp3",
    songname: "Give Me Your Love",
    songauthor: "Unknown"
  },
  {
    songid: 251,
    songlink: "y2mate.com - NightcoreMashup Nevada x Đi Đi Đi Daniel Mastro Mashup RemixLyric.mp3",
    songname: "Nevada x Đi Đi Đi",
    songauthor: "Daniel Mastro"
  },
  {
    songid: 252,
    songlink: "y2mate.com - Nói Có Sẽ Khó Nhưng Vui Remix .mp3",
    songname: "Nói Có Sẽ Khó Nhưng Vui",
    songauthor: "Unknown"
  },
  {
    songid: 253,
    songlink: "y2mate.com - Nơi Này Có Anh ManhBeat Remix Sơn Tùng MTP.mp3",
    songname: "Nơi Này Có Anh",
    songauthor: "ManhBeat Remix Sơn Tùng MTP"
  },
  {
    songid: 254,
    songlink: "y2mate.com - Nụ Cười 18 20 Doãn Hiếu Official Hãy hết mình trên con đường ta chọn hẹn gặp khi thành công.mp3",
    songname: "Nụ Cười 18 20",
    songauthor: "Doãn Hiếu"
  },
  {
    songid: 255,
    songlink: "y2mate.com - Nụ Cười Xuân Lofi Ver Hương Ly x YuniBoo x Will M Từ bên trong nhịp tim đang rung lên.mp3",
    songname: "Nụ Cười Xuân",
    songauthor: "Hương Ly x YuniBoo x Will M"
  },
  {
    songid: 256,
    songlink: "y2mate.com - Nụ Hồng Mong Manh Remix Linh Miu THẬTNOVAN.mp3",
    songname: "Nụ Hồng Mong Manh",
    songauthor: "Linh Miu THẬTNOVAN"
  },
  {
    songid: 257,
    songlink: "y2mate.com - Ngàn Năm Ánh Sáng Remix GEM邓紫棋 光年之外 DJ版.mp3",
    songname: "Ngàn Năm Ánh Sáng",
    songauthor: "GEM邓紫棋"
  },
  {
    songid: 258,
    songlink: "y2mate.com - Ngày Em Đẹp Nhất Tama x BellLofi Ver Vì ngày em đẹp nhất là ngày anh mất em.mp3",
    songname: "Ngày Em Đẹp Nhất",
    songauthor: "Tama x Bell"
  },
  {
    songid: 259,
    songlink: "y2mate.com - Ngày Mai Em Đi Mất Freak D Lofi Ver Khải Đăng x Đạt G.mp3",
    songname: "Ngày Mai Em Đi Mất",
    songauthor: "Khải Đăng x Đạt G"
  },
  {
    songid: 260,
    songlink: "y2mate.com - Ngày Mai Người Ta Lấy Chồng Lofi Thành Đạt LYRIC VIDEO Ngày hôm ấy em đi trong mưa.mp3",
    songname: "Ngày Mai Người Ta Lấy Chồng",
    songauthor: "Thành Đạt"
  },
  {
    songid: 261,
    songlink: "y2mate.com - NGÔI NHÀ HẠNH PHÚC NHẬT PHÁT live at Lululola.mp3",
    songname: "Ngôi Nhà Hạnh Phúc",
    songauthor: "Nhật Phát"
  },
  {
    songid: 262,
    songlink: "y2mate.com - Ngôi sao sáng nhất bầu trời đêm Tik Tok 夜空中最亮的星小果醬remix電子迷幻.mp3",
    songname: "Ngôi sao sáng nhất bầu trời đêm",
    songauthor: "Unknown"
  },
  {
    songid: 263,
    songlink: "y2mate.com - NGỤC TÙ TÌNH YÊU FT FICTION REMIX VUHUYNH NHẠC TIKTOK TÂM TRẠNG HAY NHẤT 2022.mp3",
    songname: "NGỤC TÙ TÌNH YÊU",
    songauthor: "VUHUYNH"
  },
  {
    songid: 264,
    songlink: "y2mate.com - Người Âm Phủ OSAD Nhạc Lofi Chill Hay Nhất VLOG3.mp3",
    songname: "Người Âm Phủ",
    songauthor: "OSAD"
  },
  {
    songid: 265,
    songlink: "y2mate.com - Người Ấy Trịnh Thăng Bình Official Music Video.mp3",
    songname: "Người Ấy",
    songauthor: "Trịnh Thăng Bình"
  },
  {
    songid: 266,
    songlink: "y2mate.com - Người bỗng đến bên em vào một hôm nắng xanh ngờiCho Em Một Lần Yêu NamCon Remix Dunghoangpham.mp3",
    songname: "Người bỗng đến bên em",
    songauthor: "NamCon Remix Dunghoangpham"
  },
  {
    songid: 267,
    songlink: "y2mate.com - Người Em Cố Đô Rum x Đaa x ToannRemix Ver by 1 9 6 7 Audio Lyrics.mp3",
    songname: "Người Em Cố Đô",
    songauthor: "Rum x Đaa x Toann"
  },
  {
    songid: 268,
    songlink: "y2mate.com - Người Tình Mùa Đông H2K Toann Remix x H2O Đường Này Là Đường Vào Tim Em Ôi Băng Giá Hot TikTok.mp3",
    songname: "Người Tình Mùa Đông",
    songauthor: "H2K Toann Remix x H2O"
  },
  {
    songid: 269,
    songlink: "y2mate.com - Người Tình Mùa Đông H2O Remix H2K Đường Này Là Đường Vào Tim Em Ôi Băng Giá Hot TikTok Remix.mp3",
    songname: "Người Tình Mùa Đông",
    songauthor: "H2O Remix H2K"
  },
  {
    songid: 270,
    songlink: "y2mate.com - Nhạc EDM See Tình Remix Nhạc DJ Thái Lan Gây Nghiện Hot Tik Tok Cute.mp3",
    songname: "See Tình",
    songauthor: "Unknown"
  },
  {
    songid: 271,
    songlink: "y2mate.com - Nhạc Hot Em Băng Qua Lofi Ver ThreeB.mp3",
    songname: "Em Băng Qua",
    songauthor: "ThreeB"
  },
  {
    songid: 272,
    songlink: "y2mate.com - Nhạc nền Tik Tok Gây Nghiện cô gái đến từ hư vô Paris nhạc nền Tik Tok TQ .mp3",
    songname: "cô gái đến từ hư vô Paris",
    songauthor: "Unknown"
  },
  {
    songid: 273,
    songlink: "y2mate.com - Nhạc Tây Du Ký phiên bản giao hưởng.mp3",
    songname: "Tây Du Ký",
    songauthor: "Unknown"
  },
  {
    songid: 274,
    songlink: "y2mate.com - Nhạc Tik Tok JOKER We Will Rock You Bài Hát TikTok Trung Quốc Gây Nghiện.mp3",
    songname: "We Will Rock You",
    songauthor: "JOKER"
  },
  {
    songid: 275,
    songlink: "y2mate.com - Nhạc Xổ số Kiến thiết miền Bắc Bản kinh điển.mp3",
    songname: "Xổ số Kiến thiết miền Bắc",
    songauthor: "Unknown"
  },
  {
    songid: 276,
    songlink: "y2mate.com - Nhất Trên Đời VAnh Tay Này Hôn Đi Chứ Đừng Lặng Im Môi Này Hôn Đi Remix.mp3",
    songname: "Nhất Trên Đời",
    songauthor: "V"
  },
  {
    songid: 277,
    songlink: "y2mate.com - Nhất Trên Đời Speed UP VAnh Tay Này Hôn Đi Chứ Đừng Lặng Im Nhạc Speed UP Hot TikTok 2023.mp3",
    songname: "Nhất Trên Đời",
    songauthor: "V"
  },
  {
    songid: 278,
    songlink: "y2mate.com - Nhìn Em Lần Cuối Remix Yuki Duy Nam THẬTNOVAN.mp3",
    songname: "Nhìn Em Lần Cuối",
    songauthor: "Yuki Duy Nam THẬTNOVAN"
  },
  {
    songid: 279,
    songlink: "y2mate.com - Những Lời Hứa Bỏ Quên LOFI Vũ x DearJanes Quanvo Lofi.mp3",
    songname: "Những Lời Hứa Bỏ Quên",
    songauthor: "Vũ x DearJanes"
  },
  {
    songid: 280,
    songlink: "y2mate.com - OMFG Hello.mp3",
    songname: "Hello",
    songauthor: "OMFG"
  },
  {
    songid: 281,
    songlink: "y2mate.com - OMFG Meant for You.mp3",
    songname: "Meant for You",
    songauthor: "OMFG"
  },
  {
    songid: 282,
    songlink: "y2mate.com - One Direction Drag Me Down Lyrics.mp3",
    songname: "Drag Me Down",
    songauthor: "One Direction"
  },
  {
    songid: 283,
    songlink: "y2mate.com - One Direction What Makes You Beautiful Lyrics.mp3",
    songname: "What Makes You Beautiful",
    songauthor: "One Direction"
  },
  {
    songid: 284,
    songlink: "y2mate.com - Outside Calvin Harris Maidden Remix 0046 Tik Tok Trend Hot TikTok 抖音 DouYin.mp3",
    songname: "Outside",
    songauthor: "Calvin Harris"
  },
  {
    songid: 285,
    songlink: "y2mate.com - Pretty Girl Maggie Lindemann Cheat Codes Cade Remix Lyrics Vietsub .mp3",
    songname: "Pretty Girl",
    songauthor: "Maggie Lindemann Cheat Codes Cade"
  },
  {
    songid: 286,
    songlink: "y2mate.com - Pretty Girl Nightcore Vietsub Lyrics.mp3",
    songname: "Pretty Girl",
    songauthor: "Nightcore"
  },
  {
    songid: 287,
    songlink: "y2mate.com - PHAI DẤU CUỘC TÌNH Lofi THÀNH ĐẠT COVER một người ra đi vội vã .mp3",
    songname: "PHAI DẤU CUỘC TÌNH",
    songauthor: "THÀNH ĐẠT"
  },
  {
    songid: 288,
    songlink: "y2mate.com - Phai Dấu Cuộc Tình Htrol Remix.mp3",
    songname: "Phai Dấu Cuộc Tình",
    songauthor: "Htrol"
  },
  {
    songid: 289,
    songlink: "y2mate.com - Phai Dấu Cuộc Tình Lofi Ver Thành Đạt Cover x Trạm Xưa Video Lyrics Official.mp3",
    songname: "Phai Dấu Cuộc Tình",
    songauthor: "Thành Đạt Cover x Trạm Xưa"
  },
  {
    songid: 290,
    songlink: "y2mate.com - PHÁO HỒNG ĐẠT LONG VINH MUSIC VIDEO LYRIC Nụ cười ai nát lòng ngày mai em lấy chồng.mp3",
    songname: "PHÁO HỒNG",
    songauthor: "ĐẠT LONG VINH"
  },
  {
    songid: 291,
    songlink: "y2mate.com - Phía cuối chân trời giữa con đường ta đi REMIX Hot TIK TOK 2022 AR MUSIC.mp3",
    songname: "Phía cuối chân trời",
    songauthor: "AR MUSIC"
  },
  {
    songid: 292,
    songlink: "y2mate.com - PHÍA SAU MỘT CÔ GÁI Soobin Hoàng Sơn OFFICIAL Lyric Video .mp3",
    songname: "PHÍA SAU MỘT CÔ GÁI",
    songauthor: "Soobin Hoàng Sơn"
  },
  {
    songid: 293,
    songlink: "y2mate.com - PHONG DẠ HÀNH VER 2 BT x VUHUYNH REMIX TREND TIKTOK 0000 NHẠC THỊNH HÀNH TIKTOK 2023.mp3",
    songname: "PHONG DẠ HÀNH",
    songauthor: "BT x VUHUYNH"
  },
  {
    songid: 294,
    songlink: "y2mate.com - Phố Cũ Còn Anh Freak D Lofi Ver Quinn ft Chilly.mp3",
    songname: "Phố Cũ Còn Anh",
    songauthor: "Quinn ft Chilly"
  },
  {
    songid: 295,
    songlink: "y2mate.com - Phố Cũ Còn Anh.mp3",
    songname: "Phố Cũ Còn Anh",
    songauthor: "Unknown"
  },
  {
    songid: 296,
    songlink: "y2mate.com - Phượng Buồn H2K x Quốc Lượng Official MV.mp3",
    songname: "Phượng Buồn",
    songauthor: "H2K x Quốc Lượng"
  },
  {
    songid: 297,
    songlink: "y2mate.com - Quá khứ Anh Không Thể Quên Remix.mp3",
    songname: "Quá khứ Anh Không Thể Quên",
    songauthor: "Unknown"
  },
  {
    songid: 298,
    songlink: "y2mate.com - Quả Phụ Tướng Remix Dunghoangpham x Sinkra Nhạc Remix Cực Căng Gây Nghiện.mp3",
    songname: "Quả Phụ Tướng",
    songauthor: "Dunghoangpham x Sinkra"
  },
  {
    songid: 299,
    songlink: "y2mate.com - Quên Người Đã Quá Yêu Orinn Remix Hà Duy Thái Nhạc Remix EDM Tik Tok Gây Nghiện Hay Nhất 2021.mp3",
    songname: "Quên Người Đã Quá Yêu",
    songauthor: "Orinn Remix Hà Duy Thái"
  },
  {
    songid: 300,
    songlink: "y2mate.com - Rằng em mãi ở bên Bích Phương speed up lyrics by zịt.mp3",
    songname: "Rằng em mãi ở bên",
    songauthor: "Bích Phương"
  },
  {
    songid: 301,
    songlink: "y2mate.com - Reality I can fly high I can go low by Lost Frequencies Remix 2021.mp3",
    songname: "Reality",
    songauthor: "Lost Frequencies"
  },
  {
    songid: 302,
    songlink: "y2mate.com - Redfoo New Thang Remix .mp3",
    songname: "New Thang",
    songauthor: "Redfoo"
  },
  {
    songid: 303,
    songlink: "y2mate.com - Remember Our Summer CYNIX Remix.mp3",
    songname: "Remember Our Summer",
    songauthor: "CYNIX"
  },
  {
    songid: 304,
    songlink: "y2mate.com - Rude Boy White Cherry Late Night Melancholy No Lyrics.mp3",
    songname: "Rude Boy",
    songauthor: "White Cherry"
  },
  {
    songid: 305,
    songlink: "y2mate.com - Rượu Tình NamDuc Lyrics VideoMeens.mp3",
    songname: "Rượu Tình",
    songauthor: "NamDuc"
  },
  {
    songid: 306,
    songlink: "y2mate.com - Safari Serena Gritty Remix Lyrics Vietsub .mp3",
    songname: "Safari",
    songauthor: "Serena"
  },
  {
    songid: 307,
    songlink: "y2mate.com - Salt Ava Max Nhạc gây nghiện trên Tiktok Trung Quốc Douyin Music.mp3",
    songname: "Salt",
    songauthor: "Ava Max"
  },
  {
    songid: 308,
    songlink: "y2mate.com - Sao Mình Chưa Nắm Tay Nhau Remix HOT TIK TOK Yan Nguyễn BD Media Music Cực Chill 2022.mp3",
    songname: "Sao Mình Chưa Nắm Tay Nhau",
    songauthor: "Yan Nguyễn"
  },
  {
    songid: 309,
    songlink: "y2mate.com - Save Me Deamn Slowed Version 2022 Nhạc Nền Hot Trend TikTok 2022.mp3",
    songname: "Save Me",
    songauthor: "Deamn"
  },
  {
    songid: 310,
    songlink: "y2mate.com - Shirfine Illusionary Daytime 幻昼.mp3",
    songname: "Illusionary Daytime",
    songauthor: "Shirfine"
  },
  {
    songid: 311,
    songlink: "y2mate.com - Shiverr Whize Nhạc nền kinh dị gây ám ảnh Tiktok.mp3",
    songname: "Shiverr",
    songauthor: "Whize"
  },
  {
    songid: 312,
    songlink: "y2mate.com - SI MÊ ĐẠT LONG VINH OFFICIAL MUSIC VIDEO 4K.mp3",
    songname: "SI MÊ",
    songauthor: "ĐẠT LONG VINH"
  },
  {
    songid: 313,
    songlink: "y2mate.com - Si Mê H2O Remix Đạt Long Vinh Trong Cơn Say Còn Vương Chút Bụi Đường Trần Remix TikTok.mp3",
    songname: "Si Mê",
    songauthor: "Đạt Long Vinh"
  },
  {
    songid: 314,
    songlink: "y2mate.com - Sia Unstoppable Lyrics.mp3",
    songname: "Unstoppable",
    songauthor: "Sia"
  },
  {
    songid: 315,
    songlink: "y2mate.com - Some Thing Just Like This Remix Tik Tok DJ 培仔 Remix Dance.mp3",
    songname: "Some Thing Just Like This",
    songauthor: "DJ 培仔"
  },
  {
    songid: 316,
    songlink: "y2mate.com - Something Just Like This DJ抖音 Remix The Chainsmokers Coldplay Nhạc Hot TikTok Douyin 2022.mp3",
    songname: "Something Just Like This",
    songauthor: "The Chainsmokers Coldplay"
  },
  {
    songid: 317,
    songlink: "y2mate.com - SON TUNG MTP MAKING MY WAY OFFICIAL VISUALIZER.mp3",
    songname: "MAKING MY WAY",
    songauthor: "SON TUNG MTP"
  },
  {
    songid: 318,
    songlink: "y2mate.com - Sợ Phải Kết Thúc Nhật Phong LYRIC VIDEO.mp3",
    songname: "Sợ Phải Kết Thúc",
    songauthor: "Nhật Phong"
  },
  {
    songid: 319,
    songlink: "y2mate.com - Sợ Rằng Em Biết Anh Còn Yêu Em Lyrics JUUN D.mp3",
    songname: "Sợ Rằng Em Biết Anh Còn Yêu Em",
    songauthor: "JUUN D"
  },
  {
    songid: 320,
    songlink: "y2mate.com - STAR SKY VINZ REMIX NHẠC THỊNH HÀNH TIKTOK Ninh King Music.mp3",
    songname: "STAR SKY",
    songauthor: "VINZ"
  },
  {
    songid: 321,
    songlink: "y2mate.com - Sự thật đã bỏ quên remixnightcore.mp3",
    songname: "Sự thật đã bỏ quên",
    songauthor: "Unknown"
  },
  {
    songid: 322,
    songlink: "y2mate.com - Tchu Tcha Tcha Remix Bài Hát Được Yêu Thích Trên Tik Tok.mp3",
    songname: "Tchu Tcha Tcha",
    songauthor: "Unknown"
  },
  {
    songid: 323,
    songlink: "y2mate.com - Tie Me down Remix.mp3",
    songname: "Tie Me down",
    songauthor: "Unknown"
  },
  {
    songid: 324,
    songlink: "y2mate.com - Tik Tok Remix Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh.mp3",
    songname: "Em Bằng Lòng Làm Một Người Bình Thường",
    songauthor: "Unknown"
  },
  {
    songid: 325,
    songlink: "y2mate.com - TIME TO LOVE 2 REMIX NHẠC THỊNH HÀNH TIKTOK cực phiêu 2020 NGHE LÀ NGHIỆN.mp3",
    songname: "TIME TO LOVE 2",
    songauthor: "Unknown"
  },
  {
    songid: 326,
    songlink: "y2mate.com - TÒNG PHU ÚT NHỊ MINO x NGUYỄN ĐÌNH VŨ KEYO COVER QUÁ KHÓ ĐỂ CHĂM LO MỘT NGƯỜI CON GÁI.mp3",
    songname: "TÒNG PHU",
    songauthor: "MINO x NGUYỄN ĐÌNH VŨ KEYO"
  },
  {
    songid: 327,
    songlink: "y2mate.com - Tổng Hợp Những Bản Nhạc MASHUP Gây Nghiện Hay Nhất Jin Kun.mp3",
    songname: "Tổng Hợp Những Bản Nhạc MASHUP",
    songauthor: "Jin Kun"
  },
  {
    songid: 328,
    songlink: "y2mate.com - Ts Nighcore Chạnh Lòng Thương Cô 2 Remix Huy vạc.mp3",
    songname: "Chạnh Lòng Thương Cô 2",
    songauthor: "Huy vạc"
  },
  {
    songid: 329,
    songlink: "y2mate.com - Túy ÂmXesi x Masew x Nhatnguyen Rót Đến Tràn Ly 1987 Music.mp3",
    songname: "Túy Âm",
    songauthor: "Xesi x Masew x Nhatnguyen"
  },
  {
    songid: 330,
    songlink: "y2mate.com - Túy Hồng Nhan Remix Trí Thức Remix Tik Tok Funky House.mp3",
    songname: "Túy Hồng Nhan",
    songauthor: "Trí Thức Remix"
  },
  {
    songid: 331,
    songlink: "y2mate.com - Từng Yêu Lofi Ver Phan Duy Anh.mp3",
    songname: "Từng Yêu",
    songauthor: "Phan Duy Anh"
  },
  {
    songid: 332,
    songlink: "y2mate.com - Thà Yêu Lấy Một Người Bình Thường Lofi Sao Cũng Được Lofi Ver Thành Đạt x VUX.mp3",
    songname: "Thà Yêu Lấy Một Người Bình Thường",
    songauthor: "Thành Đạt x VUX"
  },
  {
    songid: 333,
    songlink: "y2mate.com - That Girl Remix 2021 020 咚 鼓 版 张 佳乐 Tik Tok Nhạc Nền Hot Trend TikTok China 抖音 DouYin.mp3",
    songname: "That Girl",
    songauthor: "张 佳乐"
  },
  {
    songid: 334,
    songlink: "y2mate.com - Thay Lòng Lofi Ver Nal x Tvk x Will M Tạm Biệt nhé người anh yêu anh chúc em vui bên người.mp3",
    songname: "Thay Lòng",
    songauthor: "Nal x Tvk x Will M"
  },
  {
    songid: 335,
    songlink: "y2mate.com - Thằng Bé Cầm Quyền 2 XAVI Phạm.mp3",
    songname: "Thằng Bé Cầm Quyền 2",
    songauthor: "XAVI Phạm"
  },
  {
    songid: 336,
    songlink: "y2mate.com - THẰNG ĐIÊN JUSTATEE x PHƯƠNG LY OFFICIAL MV.mp3",
    songname: "THẰNG ĐIÊN",
    songauthor: "JUSTATEE x PHƯƠNG LY"
  },
  {
    songid: 337,
    songlink: "y2mate.com - THẰNG ĐIÊN JUSTATEE x PHƯƠNG LY OFFICIAL MV.mp3",
    songname: "THẰNG ĐIÊN",
    songauthor: "JUSTATEE x PHƯƠNG LY"
  },
  {
    songid: 338,
    songlink: "y2mate.com - The Conductors Nhạc Nền Review Phim Cực Hot.mp3",
    songname: "The Conductors",
    songauthor: "Unknown"
  },
  {
    songid: 339,
    songlink: "y2mate.com - THE NIGHT TVT x NEVER REMIX NHẠC HOT TIK TOK 2022.mp3",
    songname: "THE NIGHT",
    songauthor: "TVT x NEVER"
  },
  {
    songid: 340,
    songlink: "y2mate.com - TheFatRat Oblivion Fred Eddy Remix feat Lola Blanc .mp3",
    songname: "Oblivion",
    songauthor: "TheFatRat feat Lola Blanc"
  },
  {
    songid: 341,
    songlink: "y2mate.com - Thế Giới Ảo Tình Yêu Thật Remix Trịnh Đình Quang Dj Việt Mixxx 2015.mp3",
    songname: "Thế Giới Ảo Tình Yêu Thật",
    songauthor: "Trịnh Đình Quang"
  },
  {
    songid: 342,
    songlink: "y2mate.com - Thêm Bao Nhiêu Lâu Đạt G OFFICIAL MV.mp3",
    songname: "Thêm Bao Nhiêu Lâu",
    songauthor: "Đạt G"
  },
  {
    songid: 343,
    songlink: "y2mate.com - Thích Thì Đến Lê Bảo Bình Andy remix.mp3",
    songname: "Thích Thì Đến",
    songauthor: "Lê Bảo Bình"
  },
  {
    songid: 344,
    songlink: "y2mate.com - Thời Gian Sẽ Trả Lời Remix Nhạc Hot Trend Xu Hướng Tik Tok 2022.mp3",
    songname: "Thời Gian Sẽ Trả Lời",
    songauthor: "Unknown"
  },
  {
    songid: 345,
    songlink: "y2mate.com - Thuyền Quyên Lofi Ver Diệu Kiên x CaoTri.mp3",
    songname: "Thuyền Quyên",
    songauthor: "Diệu Kiên x CaoTri"
  },
  {
    songid: 346,
    songlink: "y2mate.com - Trap Queen Adriana Gomez Eightfold X MKJ Remix Vox Music.mp3",
    songname: "Trap Queen",
    songauthor: "Adriana Gomez"
  },
  {
    songid: 347,
    songlink: "y2mate.com - Trót Trao Duyên Lofi lyrics NB3 Hoài Bảo x H2O Và anh biết duyên mình đã lỡ.mp3",
    songname: "Trót Trao Duyên",
    songauthor: "NB3 Hoài Bảo x H2O"
  },
  {
    songid: 348,
    songlink: "y2mate.com - Umbrella Ember Island Tiktok Version Lyrics.mp3",
    songname: "Umbrella",
    songauthor: "Ember Island"
  },
  {
    songid: 349,
    songlink: "y2mate.com - Uncover Zara Larsson Afterfab Remix Lyrics Vietsub .mp3",
    songname: "Uncover",
    songauthor: "Zara Larsson"
  },
  {
    songid: 350,
    songlink: "y2mate.com - Unity x Melody SpectreTik Tok 0110 Nhạc Nền Hot Tik Tok.mp3",
    songname: "Unity x Melody",
    songauthor: "Spectre"
  },
  {
    songid: 351,
    songlink: "y2mate.com - Ước Nguyện Đầu Xuân Remix Tina Ho x H2O Nhạc Xuân 2024 Remix Một Rừng Hoa Mai Nở TikTok.mp3",
    songname: "Ước Nguyện Đầu Xuân",
    songauthor: "Tina Ho x H2O"
  },
  {
    songid: 352,
    songlink: "y2mate.com - Váy Cưới Trung Tự Lofi Ver Nhạc Hot Tik Tok 2021.mp3",
    songname: "Váy Cưới Trung Tự",
    songauthor: "Unknown"
  },
  {
    songid: 353,
    songlink: "y2mate.com - Vì Quá Ngu Si Hay Vì Em Đã Yêu Vội Vàng Tòng Phu Remix Hương Ly x KendyT Remix Hot Tiktok.mp3",
    songname: "Vì Quá Ngu Si Hay Vì Em Đã Yêu Vội Vàng",
    songauthor: "Tòng Phu Remix Hương Ly x KendyT"
  },
  {
    songid: 354,
    songlink: "y2mate.com - Vicetone Walk Thru Fire Lyrics ft Meron Ryan.mp3",
    songname: "Walk Thru Fire",
    songauthor: "Vicetone ft Meron Ryan"
  },
  {
    songid: 355,
    songlink: "y2mate.com - Vicetone Way Back feat Cozi Zuehlsdorff.mp3",
    songname: "Way Back",
    songauthor: "Vicetone feat Cozi Zuehlsdorff"
  },
  {
    songid: 356,
    songlink: "y2mate.com - Vietsub Thunder Gabry Ponte LUMX Prezioso Nhạc hot TikTok Lyrics Video.mp3",
    songname: "Thunder",
    songauthor: "Gabry Ponte LUMX Prezioso"
  },
  {
    songid: 357,
    songlink: "y2mate.com - Vietsub Twerk It Like Miley Brandon Beal.mp3",
    songname: "Twerk It Like Miley",
    songauthor: "Brandon Beal"
  },
  {
    songid: 358,
    songlink: "y2mate.com - VINARAP JB LONG NHẠC HOT TIKTOK 2022.mp3",
    songname: "VINARAP",
    songauthor: "JB LONG"
  },
  {
    songid: 359,
    songlink: "y2mate.com - VÔ TÌNH LOFI VER XESI x HOAPROX AUDIO LYRICS.mp3",
    songname: "VÔ TÌNH",
    songauthor: "XESI x HOAPROX"
  },
  {
    songid: 360,
    songlink: "y2mate.com - Vô Tình Xesi Lofi by DangMinh Lyrics Video.mp3",
    songname: "Vô Tình",
    songauthor: "Xesi"
  },
  {
    songid: 361,
    songlink: "y2mate.com - Vương Vấn Freak D Lofi Ver Hana Cẩm Tiên x Tvk.mp3",
    songname: "Vương Vấn",
    songauthor: "Hana Cẩm Tiên x Tvk"
  },
  {
    songid: 362,
    songlink: "y2mate.com - Vương Vấn Remix Qinn Remix x TVk x Hana Cẩm Tiên Chắc Chỉ Mỗi Anh Vẫn Còn Thương Remix TikTok.mp3",
    songname: "Vương Vấn",
    songauthor: "Qinn Remix x TVk x Hana Cẩm Tiên"
  },
  {
    songid: 363,
    songlink: "y2mate.com - Walking In The Sun 加快版DJ 王梦瑶.mp3",
    songname: "Walking In The Sun",
    songauthor: "DJ 王梦瑶"
  },
  {
    songid: 364,
    songlink: "y2mate.com - Where We Started Lost Sky ft Jex Lyrics Vietsub .mp3",
    songname: "Where We Started",
    songauthor: "Lost Sky ft Jex"
  },
  {
    songid: 365,
    songlink: "y2mate.com - Why Not Me Remix Enrique Iglesias Thoat Remix.mp3",
    songname: "Why Not Me",
    songauthor: "Enrique Iglesias"
  },
  {
    songid: 366,
    songlink: "y2mate.com - Xin Đừng Nhấc Máy Orinn Remix Bray x Han Sara Nhạc Trẻ Remix Hot TikTok Gây Nghiện Nhất 2022.mp3",
    songname: "Xin Đừng Nhấc Máy",
    songauthor: "Orinn Remix Bray x Han Sara"
  },
  {
    songid: 367,
    songlink: "y2mate.com - Yêu 5 FreakDMusic Ver Rhymastic.mp3",
    songname: "Yêu 5",
    songauthor: "Rhymastic"
  },
  {
    songid: 368,
    songlink: "y2mate.com - Yêu 5 Lofi ver Rhymastic AnhLuc.mp3",
    songname: "Yêu 5",
    songauthor: "Rhymastic AnhLuc"
  },
  {
    songid: 369,
    songlink: "y2mate.com - Yêu Đừng Sợ Đau Lofi Ver Ngô Lan Hương x Freak D.mp3",
    songname: "Yêu Đừng Sợ Đau",
    songauthor: "Ngô Lan Hương x Freak D"
  },
  {
    songid: 370,
    songlink: "y2mate.com - Yêu Em Hơn Mỗi Ngày Lofi Ver Andiez x Freak D.mp3",
    songname: "Yêu Em Hơn Mỗi Ngày",
    songauthor: "Andiez x Freak D"
  },
  {
    songid: 371,
    songlink: "y2mate.com - Yêu Một Người Có Lẽ Lou Hoàng Miu Lê Miu Lê Official.mp3",
    songname: "Yêu Một Người Có Lẽ",
    songauthor: "Lou Hoàng Miu Lê"
  },
  {
    songid: 372,
    songlink: "y2mate.com - Yêu Một Người Gian Dối Lofi Ver Như Việt x Vux.mp3",
    songname: "Yêu Một Người Gian Dối",
    songauthor: "Như Việt x Vux"
  },
  {
    songid: 373,
    songlink: "y2mate.com - Yêu Vội Vàng RemixNightcore Lyric Kara .mp3",
    songname: "Yêu Vội Vàng",
    songauthor: "Nightcore"
  },
  {
    songid: 374,
    songlink: "y2mate.com - You Dont Know Me Ofenbach Brodie Barclay Lyrics Vietsub.mp3",
    songname: "You Dont Know Me",
    songauthor: "Ofenbach Brodie Barclay"
  },
  {
    songid: 375,
    songlink: "y2mate.com - Каникулы Завтра я на все забью на учебу не пойду хау дую дую дую ду.mp3",
    songname: "Каникулы",
    songauthor: "Unknown"
  },
  {
    songid: 376,
    songlink: "y2mate.com - Колыбельная Rauf Faik Текст песни .mp3",
    songname: "Колыбельная",
    songauthor: "Rauf Faik"
  },
  {
    songid: 377,
    songlink: "y2mate.com - 她的微笑original Mix阳山伟伟 NỤ CƯỜI CỦA CÔ ẤY Nhạc TikTok TQ.mp3",
    songname: "NỤ CƯỜI CỦA CÔ ẤY",
    songauthor: "阳山伟伟"
  },
  {
    songid: 378,
    songlink: "y2mate.com - 李玉刚 Remix Tracks are popular in tik tok.mp3",
    songname: "李玉刚 Remix",
    songauthor: "Unknown"
  },
  {
    songid: 379,
    songlink: "y2mate.com - 羽肿 Windy Hill BGM.mp3",
    songname: "Windy Hill",
    songauthor: "羽肿"
  },
  {
    songid: 380,
    songlink: "y2mate.com - 芒种音阙诗听赵方婧 官方高画质 Official HD MV丨Grain in Ear丨Mang Chủng.mp3",
    songname: "芒种",
    songauthor: "音阙诗听赵方婧"
  },
  {
    songid: 381,
    songlink: "y2mate.com - 逆時針向 Asphyxia.mp3",
    songname: "逆時針向",
    songauthor: "Asphyxia"
  },
  {
    songid: 382,
    songlink: "y2mate.com - 阿冗 你的答案 抖音DJ版 2022 Đáp Án Của Bạn Remix Tiktok 2022 A Những Hot Tiktok 中國 Douyin.mp3",
    songname: "Đáp Án Của Bạn",
    songauthor: "阿冗"
  },
  {
    songid: 383,
    songlink: "y2mate.com - Diamonds Denver Remix NHẠC HOT TIK TOK.mp3",
    songname: "Diamonds",
    songauthor: "Denver Remix"
  },
  {
    songid: 384,
    songlink: "y2mate.com - Lofi Lyrics Người Lạ Thoáng Qua Đinh Tùng Huy x meChill.mp3",
    songname: "Người Lạ Thoáng Qua",
    songauthor: "Đinh Tùng Huy x meChill"
  }
];

let musicAppBtn = document.querySelector("#musicApp");
let musicApp = document.querySelector(".music-app");
let songDetailElm = musicApp.querySelector(".song-detail");
let songListLength = Number(songList.length);
let songId;
let currentSong;
let currenttime;
let songDuration;
let musicControlElm = document.querySelector(".music-control");
let musicControlBtn = musicControlElm.querySelectorAll("div");
let shuffleSongBtn = document.querySelector(".shuffle-song");
let shuffleSongIco = shuffleSongBtn.querySelector("#shuffle-song");
let backSongBtns = document.querySelectorAll(".back-song");
let playSongBtns = document.querySelectorAll(".play-song");
let nextSongBtns = document.querySelectorAll(".next-song");
let repeatSongBtn = document.querySelector(".repeat-song");
let repeatSongIco = repeatSongBtn.querySelector("#repeat-song");
let typeLoop = 0;
let mainThumbnail;
let angleMainThumnail = 0;
let rotateThumnailId;
let isOpenApp = false;
let isShuffleSong = false;
let currentVolume = 1;
let isPlaySong = false;
let isMute = false;
let currenTimeElm = document.querySelector(".song-current-time");
let progressElm = document.querySelector(".progress-bar");
let totalTimeElm = document.querySelector(".song-total-time");


let hideScreen = function () {
    isPhoneOn = !isPhoneOn;
    if(isPhoneOn) {
        screen.style.visibility = "visible";
        dynamicIsland.style.backgroundColor = "#000";
        if(isOpenApp) { runMusicApp() }
    }
    else {
        screen.style.visibility = "hidden";
        dynamicIsland.style.backgroundColor = "#8f8e8e";
        hideMusicApp();
    }
}

let makeTimeToday = function () {
    let date = new Date;
    let day = date.getDay() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    day == 8 ? day = "Chủ nhật" : day = 'Thứ ' + day;
    hour.toString().length < 2 ? hour = "0" + hour : hour = hour;
    minute.toString().length < 2 ? minute = "0" + minute : minute = minute;
    timeTodayElm.innerHTML = `
        <div class="phone-time">${hour}:${minute}</div>
        <div class="phone-date">${day}, ${date.getDate()} tháng ${date.getMonth() + 1} </div>
    `
}


setInterval(() => {makeTimeToday();},500)

// <-------------------Phone-------------------->
// Power
powerBtn.addEventListener('click', () => {hideScreen()});

// Dinamic island
let dynamicIslandOn = function () {
    isDynamicIslandOn = true;
    dynamicIsland.style.width =  "64%";
    dynamicIsland.style.height = "18%";
    dynamicIsland.style.borderRadius = "20px";
    statusElm.style.top = "5.5px";
    statusElm.style.left = "20%";
    statusMuteElm.style.top = "5px"
    statusMuteElm.style.left = "52%";
    if(isPlaySong) {
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
    if(isDynamicIslandOn) {
        songNameDynamicIslandElm.innerHTML = `${songList[songId].songname}`;
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
}

let dynamicIslandOff = function () {
    isDynamicIslandOn = false;
    dynamicIsland.style.width =  "30%";
    dynamicIsland.style.height = "4%";
    dynamicIsland.style.borderRadius = "20px";
    statusElm.style.top = "18%";
    statusElm.style.left = "12%";
    statusMuteElm.style.top = "18%";
    statusMuteElm.style.left = "56%";
    wrapperDynamicIslandElm.style.visibility = "hidden";
    if(isDynamicIslandOn) {
        songNameDynamicIslandElm.innerHTML = `${songList[songId].songname}`;
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
}

dynamicIsland.addEventListener("click", () => {
    dynamicIslandOn();
    setTimeout(() => { dynamicIslandOff(); },5000);
})

// Battery

let chargingBattery = function () {
    let percenBattery = 60;
    if ( percenBattery >= 0 && percenBattery <= 90) {
        percenBattery = percenBattery;
    }
    else if ( percenBattery < 0) {
        percenBattery = 0;
    }
    else if ( percenBattery > 90 ) {
        percenBattery = 90;
    }
    batteryProgressElm.style.width = `${percenBattery}%`;
};

chargingBattery();

// Home bar
let homeBarActive = function () {
    isOpenApp = !isOpenApp;
    homeBar.style.transform = "translateY(-4px)";
}

let homeBarDisable = function () {
    // musicApp.style.visibility = "hidden";
    hideMusicApp();
    homeBar.style.transform = "translateY(0)";
}

homeBar.addEventListener("click", () => {
    homeBarActive();
    setTimeout(() => { homeBarDisable(); }, 500)
})

// Volume
muteBtn.onclick = () => {
    isMute = !isMute;
    if (isMute) {
        currentSong.muted = true;
        statusMuteElm.innerHTML = `<img src="./assets/Status icon/bell-off-svgrepo-com.svg" alt="">`;
    } else {
        currentSong.muted = false;
        statusMuteElm.innerHTML = "";
    }
}

let displayVolumeBarElm = function() {
    volumeBarElm.style.width = "4px";
    volumeBarElm.style.height = "16%";
    volumeBarElm.style.left = "3px";
    volumeBarElm.style.top = "20%";
    volumeBarElm.style.opacity = "1";
    volumeBarElm.style.visibility = 'visible';
}

let hideVolumeBarElm = function() {
    volumeBarElm.style.width = "1px";
    volumeBarElm.style.height = "15%";
    volumeBarElm.style.left = "0px";
    volumeBarElm.style.top = "21%"; 
    volumeBarElm.style.opacity = "0";
    volumeBarElm.style.visibility = 'hidden';
}

increaseVolumeBtn.onclick = () => {
    displayVolumeBarElm();
    if(currentVolume <= 0.9) {
        currentVolume = currentVolume + 0.1;
        currentSong.volume = currentVolume;
    };
    volumeProgressElm.style.height = `${currentVolume * 100}%`;
    setTimeout(() => {
        hideVolumeBarElm()
    },5000)
};

decreaseVolumeBtn.onclick = () => {
    displayVolumeBarElm();
    if(currentVolume >= 0.1) {
        currentVolume = currentVolume - 0.1;
        currentSong.volume = currentVolume;
    };
    volumeProgressElm.style.height = `${currentVolume * 100}%`;
    setTimeout(() => {
        hideVolumeBarElm();
    },5000)
};
// <-------------------Music-app-------------------->

let displayFullContent = function () {
    if ((songList[songId].songname.length * 12) > songDetailElm.offsetWidth) {
        songDetailElm.querySelector(".song-name").style.justifyContent = "start";
    }
}

let loadSong = function(songInfor) {
    songId = songInfor.songid;
    // <audio class="current-song" src="./assets/music list/${songInfor.songlink}.mp3" type="audio/mpeg"></audio>
    songDetailElm.innerHTML = `
        <audio class="current-song" src="./assets/music list/${songInfor.songlink}" type="audio/mpeg"></audio>
        <div class="main-thumbnail">
            <img class="main-img" src="assets/white-icon/music-thumnail-svgrepo-com.svg" alt="">
        </div>

        <div class="song-infor">
            <div class="song-name">${songInfor.songname}</div>
            <p class="author">${songInfor.songauthor}</p>
        </div>
        `
    displayFullContent();
    currentSong = songDetailElm.querySelector(".current-song");
    currentSong.setAttribute("preload", "metadata");
    currentSong.addEventListener('loadedmetadata', ()=> {
        songDuration = Number(currentSong.duration.toFixed());
        makeSongTime(songDuration);
    })
}

loadSong(songList[0]);

let makeCurrentTime = function (time) {
    let minute = (Math.floor(time/60));
    if (minute < 10) minute = '0' + minute.toString()
        let second = Math.floor(time - minute*60)
    if (second < 10) second = '0' + second.toString()
        currenTimeElm.innerHTML = `${minute}:${second}`;
}

let makeProgress = function (time,duration) {
    let currentProgress = Math.floor(time/duration*100);
    progressElm.value = currentProgress;
}

let makeDurationtime = function (time) {
    let minute = Math.floor(time/60);
    if (minute < 10) minute = '0' + minute.toString()
        let second = Math.floor(time - minute*60)
    if (second < 10) second = '0' + second.toString()
        totalTimeElm.innerHTML = `${minute}:${second}`;
}

let makeSongTime = function (songDuration) {
    songDuration = currentSong.duration;
    makeDurationtime(songDuration);
    currentSong.ontimeupdate = function() {
        currenttime = currentSong.currentTime;
        makeCurrentTime(currenttime);
        makeProgress(currenttime,songDuration);
        if(currentSong.ended == true) {
            if(isShuffleSong) {shuffleSong();}
            else if(typeLoop == 0 && isShuffleSong == false) {pauseSong();}
            else if(typeLoop == 1) {loadSong(songList[songId]);playSong();}
            else if(typeLoop == 2) {nextSong();};           
            }
    }
}

let rotateThumnail = function() {
    angleMainThumnail += 5;
    angleMainThumnail >= 360 ? angleMainThumnail = 0 : angleMainThumnail = angleMainThumnail; 
    mainThumbnail.style.transform = `rotate(${angleMainThumnail}deg)` 
}

let playSong = function () {  
    isPlaySong = true;
    currentSong.play();
    playSongBtns.forEach((btn) => {
        btn.querySelector("img").src = "./assets/white-icon/pause-svgrepo-com.svg";
    })
    statusElm.innerHTML = `<img class="status-img" src="./assets/Status icon/music-svgrepo-com.svg" alt="">`;
}

// offsetX,Y: tọa độ của điểm trong phần tử đó, có gốc tọa độ là góc trên bên trái của phần tử đó (điểm bắt đầu)
// offsetWidth,Height: lấy chiều rộng, dài của phần tử đó
progressElm.addEventListener('click', (e) => {
    progressElm.value = e.offsetX/progressElm.offsetWidth*100;
    currentSong.currentTime = e.offsetX/progressElm.offsetWidth*songDuration;
});

let pauseSong = function() {
    currentSong.pause();
    playSongBtns.forEach(btn => {
        btn.querySelector("img").src = "./assets/white-icon/play-svgrepo-com.svg";
    })
    statusElm.innerHTML = "";
}

let nextSong = function() {
    if(isShuffleSong) {
        shuffleSong();
    } else {
        songId < songListLength - 1? songId += 1 : songId = 0;
        loadSong(songList[songId]);
        isPlaySong = true;
        playSong();
    }
}

let backSong = function() {
    if(isShuffleSong) {
        shuffleSong();
    } else {
        songId < 1? songId = songListLength - 1 : songId -= 1;
        loadSong(songList[songId]);
        isPlaySong = true;
        playSong();
    }
}

let shuffleSong = function() {
    let newSongId;
    do {
        newSongId =  Math.floor(Math.random() * songListLength);
    } while (newSongId == songId);       
    loadSong(songList[newSongId]);
    isPlaySong = true;
    playSong();
}

let runMusicApp = function () {
    mainThumbnail = musicApp.querySelector(".main-thumbnail");
    musicApp.style.visibility = "visible";
}
let hideMusicApp = function () {
    mainThumbnail = musicApp.querySelector(".main-thumbnail");
    musicApp.style.visibility = "hidden";
}

musicAppBtn.addEventListener('click',() => {
    isOpenApp = !isOpenApp;
    runMusicApp();
})

playSongBtns.forEach((btn) => {
        btn.addEventListener('click' , () => {
        isPlaySong = !isPlaySong;
        if(isPlaySong) {
            playSong();
        }
        else {
            pauseSong();
        }
    })
})

nextSongBtns.forEach((btn) => {
    btn.addEventListener('click', () => { nextSong(); })
});

backSongBtns.forEach((btn) => {
    btn.addEventListener('click', () => {  backSong(); })
});

shuffleSongBtn.addEventListener("click", () => {
    isShuffleSong = !isShuffleSong;
    if(isShuffleSong) {
        shuffleSongIco.src = `./assets/color-icon/shuffle-colorful-svgrepo-com.svg`;
        shuffleSong();
    }
    else{
        shuffleSongIco.src = `./assets/white-icon/shuffle-svgrepo-com.svg`;
    }
})

repeatSongBtn.addEventListener("click", () => {
    typeLoop += 1;
    typeLoop > 2 ? typeLoop = 0 : typeLoop =  typeLoop;
    switch(typeLoop) {
        case 0: {
            repeatSongIco.src = `./assets/white-icon/repeat-svgrepo-com.svg`;
            break;
        } 
        case 1: {
            repeatSongIco.src = `./assets/color-icon/repeat-one-svgrepo-com.svg`;
            break;
        }
        case 2: {
            repeatSongIco.src = `./assets/color-icon/repeat-infinite-svgrepo-com.svg`;
            break;
        }
    }
})



// let promise = new Promise((resolve, reject) => {
//     resolve(data);
// })
// promise
//     .then((data1) => {
//     })
    
//     .then((data2) => {
//     })

//     .catch((err) => console.log("Error"))

// -------------------------------AI------------------------------------

// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = "vi-VN";
// recognition.continuous = false;

// const microphone = document.querySelector("#pictureApp");

// const handleVoice = function (voice) {
//     if (voice=='phát nhạc'||voice =='chạy nhạc'||voice =='lên nhạc'||voice=='chơi nhạc' || voice=='play') {playSong();}
//     else if (voice=='bài tiếp'||voice=='tiếp theo'||voice=='bài tiếp theo'||voice=='next') {nextSong();}
//     else if (voice=='bài trước') {backSong();}
//     else if (voice=='phát ngẫu nhiên'||voice=='ngẫu nhiên'||voice=='random'||voice=='shuffle') {shuffleSong();}
//     else if (voice=='dừng nhạc'||voice=='tắt nhạc'||voice=='ngắt nhạc') {pauseSong();}
//     else if(voice=='tắt máy'||voice=='tắt màn hình') {hideScreen();}
//     else {console.log("Please try again!")};
// }

// microphone.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(isPlaySong) {
//         pauseSong();
//         recognition.start();
//     } else recognition.start();
// })

// recognition.onspeechend = () => {
//     recognition.stop();
// }

// recognition.onerror = (err) => {
//     console.error(err);
// }

// recognition.onresult = (rels) => {
//     let text = rels.results[0][0].transcript;
//     text = text.toLowerCase();
//     // console.log(text);
//     handleVoice(text);
// }
