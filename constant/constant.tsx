export const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "../#",
  },
  {
    id: 2,
    label: "Parent/Student",
    url: "../about/parent",
    subLinks: [
      {
        id: 1,
        label: "Parent",
        url: "../about/parent",
      },
      {
        id: 2,
        label: "Student",
        url: "../about/student",
      },
    ],
  },
  {
    id: 3,
    label: "Tutor",
    url: "../about/tutor",
  },
  {
    id: 4,
    label: "Contact Us",
    url: "../contact",
  },
];
