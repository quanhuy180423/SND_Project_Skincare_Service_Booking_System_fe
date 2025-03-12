// const cities = [
//     { label: "Hà Nội", value: "ha-noi" },
//     { label: "Hồ Chí Minh", value: "ho-chi-minh" },
//     { label: "Đà Nẵng", value: "da-nang" },
//     { label: "Hải Phòng", value: "hai-phong" },
//     { label: "Cần Thơ", value: "can-tho" },
//     { label: "Nha Trang", value: "nha-trang" },
//     { label: "Huế", value: "hue" },
//     { label: "Vũng Tàu", value: "vung-tau" },
//     { label: "Buôn Ma Thuột", value: "buon-ma-thuot" },
//     { label: "Đà Lạt", value: "da-lat" },
//   ];
  
//   export default cities;
 const cities = [
    {
      label: "Hà Nội",
      value: "ha-noi",
      districts: [
        { label: "Ba Đình", value: "ba-dinh" },
        { label: "Hoàn Kiếm", value: "hoan-kiem" },
        { label: "Tây Hồ", value: "tay-ho" },
        { label: "Cầu Giấy", value: "cau-giay" },
        { label: "Đống Đa", value: "dong-da" },
      ],
    },
    {
      label: "Hồ Chí Minh",
      value: "ho-chi-minh",
      districts: [
        { label: "Quận 1", value: "quan-1" },
        { label: "Quận 3", value: "quan-3" },
        { label: "Quận 5", value: "quan-5" },
        { label: "Quận 7", value: "quan-7" },
        { label: "Thủ Đức", value: "thu-duc" },
      ],
    },
    {
      label: "Đà Nẵng",
      value: "da-nang",
      districts: [
        { label: "Hải Châu", value: "hai-chau" },
        { label: "Sơn Trà", value: "son-tra" },
        { label: "Ngũ Hành Sơn", value: "ngu-hanh-son" },
      ],
    },
  ];
    export default cities;
