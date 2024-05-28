
const Posts = [
    {
      id: 1,
      desc: "I stayed at Narayana Girls PG hostel while preparing for competitive exams in Jaipur. The caring staff provided a safe, supportive environment that felt like home. The hostel had premium facilities like air conditioning, high-speed internet, etc which aided my studies.",
      name: "Pooja Sharma",
      profile:
        "https://img-mm.manoramaonline.com/content/dam/mm/ml/travel/travel-india/images/2018/2/27/solo-trip-women.jpg.image.845.440.jpg",
      post: "UPSC Aspirant",
      postImg:"https://media.licdn.com/dms/image/D5622AQH90MqIeF8SKw/feedshare-shrink_800/0/1716458887809?e=1720051200&v=beta&t=YDx4eguVBPlb6Gfb1Tp06rztoZ9rctyHFt-nHFbBIr0"
    },
    {
      id: 2,
      desc: "As an engineering student, Narayana Luxury Hostel near my college enhanced my overall student experience. The rooms had great amenities and the recreation lounge provided a nice space to relax. I loved bonding with other residents over games, movies and conversations.",
      name: "Vikas Verma",
      profile:
        "https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.webp?b=1&s=612x612&w=0&k=20&c=vakiaULafyfDOTKfO8XQ8m7bIhQ4ml_meJs7yN3TVgE=",
      post: "Engineering Student",
      postImg:"https://media.licdn.com/dms/image/sync/D4D10AQFxPcykRcioJw/image-shrink_800/0/1699906019616/AZRDIR_LI-DataAndAI-Blue-2B_IND_1200x1200_LIA_AZR-Direct_EN_Trial_Standard_SBAN_SINU_Illustration_Statement1png?e=1717480800&v=beta&t=htUc2fXedWwSJO2-0FwzM-Ib8sF4ftpAwZ98ikiV0FU"
    },
    {
      id: 3,
      desc: "Staying at Narayana Hostel Group helped me qualify for IAS exam through collective motivation and guidance. My mentors boosted my preparation while modular rooms let me study without distraction. Celebrating milestones together and lifelong friends I made fueled my success.",
      name: "Riya Malhotra",
      profile:
        "https://images1.dnaindia.com/images/DNA-EN/900x1600/2023/11/17/1700200075758_a448am2ctinadabi625x30006July22.webp",
      post: "IAS Officer",
      postImg:"https://media.licdn.com/dms/image/sync/D4D10AQFuzgTBlVZotA/image-shrink_800/0/1708611218211/1200x1200jpg?e=1717480800&v=beta&t=x9GMstIs2446mZaqmF6RRI9fnX0dlyvS4-RKBn9ZRDc"
    },
    {
      id: 4,
      desc: "As a student preparing for banking exams, Narayana Sitabari Hostel's location behind prominent coaching institutes proved very convenient. My room had facilities supporting my intense study schedule. The staff also aided my exam preparation while providing delicous homemade meals.",
      name: "Rohit Mishra",
      profile:
        "https://qph.cf2.quoracdn.net/main-thumb-257533145-200-ilzhxguqmosbtyudklwpegmlxvbuidgx.jpeg",
      post: "Bank Clerk",
      postImg:"https://media.licdn.com/dms/image/sync/D5610AQF5j4_AF0Gxfg/image-shrink_800/0/1716411358599?e=1717484400&v=beta&t=2hDHRsHrgUNvmXOVC-5D7w8NJfmbX4nRd_bUuwJYkQ0"
    },
    {
      id: 5,
      desc: "Narayana Luxury Lalkothi Hostel made my move from another state for college smooth. Its luxury amenities provided comfort that eased homesickness. My global connections expanded thanks to engaging conversations in the communal spaces.",
      name: "Riya Sengupta",
      profile:
        "https://as2.ftcdn.net/v2/jpg/00/66/95/81/1000_F_66958118_8v9DUzAcShBBentt3A25A4XfWsM6IlpH.jpg",
      post: "Law Student",
      postImg:"https://media.licdn.com/dms/image/D5622AQFNkxWStnyGBg/feedshare-shrink_2048_1536/0/1716548088932?e=1720051200&v=beta&t=fd9Yk5760JQ5rZAM0EKR5tWA99E5D2VWbXe8HraTy5g",
    },
    {
      id: 6,
      desc: "As a medical aspirant, the academic support and caring environment at Narayana Girls PG hostel facilitated my preparation. My mentors offered guidance while modern amenities like high-speed internet assisted me. I credit this hostel for my MBBS qualification.",
      name: "Shreya Verma",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZQgp8ohbS_wssif0rqXQi8EOtSuffCBeneuPmGYMnw&s",
      post: "MBBS Student",
      postImg:"https://media.licdn.com/dms/image/D5622AQFw9fRQQTOq7A/feedshare-shrink_800/0/1716535180352?e=1720051200&v=beta&t=mL0zdocMsVUKk6_NG9gfKP9DXgCUoCCDMwbNInmrEo8"
    },
    {
      id: 7,
      desc: "The premium facilities and study-oriented environment attracted me to Narayana Hostel Group. My room's setup boosted productivity for civil service exam preparation. Achieving my IAS dream wouldn't have been possible without the constant motivation I received here.",
      name: "Harsh Singh",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8_Gd6z6LZz_1WT3jtJepUQGmJlzOYZFnbJSNUtRDPw&s",
      post: "IAS Aspirant",
      postImg:"https://media.licdn.com/dms/image/D4D22AQEJTQ2HL6ZTYw/feedshare-shrink_2048_1536/0/1716874548777?e=1720051200&v=beta&t=ac7nA5sJZpn6UCzXecCJUOGF57VYbXIQoSn9MMwG0Qg"
    },
    {
      id: 8,
      desc: "As an engineering preparatory student, I preferred Narayana Sitabari Hostel for location convenience. The staff aided my schedule while providing hosting coaching lessons and doubt-solving. I appreciate them enabling my exam qualifications.",
      name: "Akash Roy",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZmQbI9b6J480E0jgJkNtY42TRMeMR1-NC-2RjkOx0A&s",
      post: "Engineering Aspirant",
      postImg:"https://media.licdn.com/dms/image/D5622AQEb00FAN_lqoA/feedshare-shrink_800/0/1716786646413?e=1720051200&v=beta&t=AGy6Jg3_Wu9Wl_bXRkHwDOfhDlv-212dH4_mFUfRCEQ"
    },
  ];
  export default Posts;
  