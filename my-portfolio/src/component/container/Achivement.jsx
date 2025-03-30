import Timeline from "../Achivment";

const Achivement = () => {
  const data = [
    {
      title: "Top 3 on Hackaton ",
      images: [
        "/achivement/pic1.jpg",
        "/achivement/pic2.jpg",
        "/achivement/pic3.jpg",
        "/achivement/pic4.jpg",
      ],
      date: "Mar 6,2025",
      content:
        "We Finished 3rd Place in a 30-Hour Hackathon! organized by GDG Club at Addis Ababa University!  We built Student Budget Planner, a platform designed to help students track expenses, receive smart alerts, and get AI-powered financial recommendations. Our solution included both a mobile app (Flutter) and a web app (React).",
      references: [
        {
          url: "https://www.linkedin.com/posts/kalkidan-semre-20ag21_kenawakibsa-kasahun-amino-activity-7304288162309165056-jQjl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPVWbUBlClFwN2H2G2BlrUYd00AOZG84Qk",
          label: "LinkedIn Post",
        },
      ],
    },
    {
      title: "FreeCodeCamp Certification",
      images: ["/achivement/freecode1.png", "/achivement/freecode2.png"],
      content:
        "I completed 2 course on FreeCodeCamp Academy, which are Responsive Web Design, and JavaScript Algorithms and Data Structure course. Over the course, I completed more than 10 projects, sharpening my skills and enhancing my knowledge in web development and programming.",
      references: [
        {
          url: "https://www.freecodecamp.org/certification/fcce64678ed-1c15-406b-be48-9c662a6d1a78/responsive-web-design",
          label: "Responsive Web Design Certificate",
        },
        {
          url: "https://www.freecodecamp.org/certification/fcce64678ed-1c15-406b-be48-9c662a6d1a78/javascript-algorithms-and-data-structures-v8",
          label: "JavaScript Algorithms and Data Structure Certificate",
        },
      ],
      date: "Jun 21 & Aug 22, 2024",
    },
    {
      title: "A2SV Community Achievements in DSA",
      images: ["/achivement/a2sv.png"],
      content:
        "I have solved more than 500 LeetCode and Codeforces problems, focusing on Data Structures and Algorithms (DSA), which are crucial for improving programming skills and preparing for interviews. I am currently taking this course(DSA) at A2SV Community. Another achievement is that my team and I placed 1st in the trial contest at A2SV.",
      references: [
        {
          url: "https://leetcode.com/u/nami__zz/",
          label: "LeetCode Profile",
        },
        {
          label: "CodeForces Profile",
          url: "https://codeforces.com/profile/naomizerfu",
        },
      ],
    },
    {
      title: "Top 3% of Ethiopian National Exam",
      date: "Sept, 2022",
      content:
        "I ranked in the top 3% of the Ethiopian National Exam, which is a nationwide 12th-grade examination for university entrance. Out of approximately 1,000,000 students, I achieved this distinction, showcasing my dedication and academic excellence.",
    },
  ];
  return <Timeline data={data} />;
};
export default Achivement;
