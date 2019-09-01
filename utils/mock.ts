export const postMock = {
  heading:
    "What's the best way to create react native apps expo or create react native app?",
  author: {
    name: "RealToughCandy",
    username: "realCandy",
  },
  createdAt: new Date("2019-08-31T07:37:30Z"),
  tags: [
    { name: "react", uri: "/topic/react" },
    { name: "react native", uri: "/topic/react-native" },
    { name: "webdev", uri: "/topic/webdev" },
    { name: "javascript", uri: "/topic/javascript" },
  ],
};

export const userMock = {
  avatar: {
    uri:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rq-5ur5l--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/41065/2dde0a31-7a8a-4089-ab15-ffdf8192e082.jpg",
  },
  name: "Saurabh Sharma",
  username: "itsjzt",
};

export const answerMock = {
  author: userMock,
  createdAt: new Date("2019-08-31T07:37:30Z"),
  answer: `Lorem ipsum dolor sit amet consectetur adipiscing elit, gravida nisi curae volutpat turpis. Rutrum donec faucibus erat parturient taciti nisi dictum, morbi proin blandit mauris laoreet justo. Orci sem interdum neque enim ullamcorper primis dictum mollis facilisi, at donec netus euismod mus hendrerit convallis nam, aenean sodales porttitor facilisis himenaeos tortor mi nunc.

  Nostra ut convallis auctor consequat ultrices elementum, bibendum inceptos facilisis maecenas etiam dui potenti, ullamcorper id sodales rutrum diam. Tempus feugiat nostra bibendum ullamcorper pharetra donec dignissim nullam litora, vel dapibus facilisi ut fusce vivamus penatibus inceptos. Sollicitudin auctor convallis nec conubia cras tincidunt dictum placerat elementum aptent pellentesque integer, imperdiet interdum nullam justo sapien eleifend taciti aenean ultricies eget dui.`,
};
