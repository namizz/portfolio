import ProjectCard from "../ProjectCard";
const Project = () => {
  const Fellow = {
    images: [
      "/4kfellow/pic0.png",
      "/4kfellow/pic2.jpg",
      "/4kfellow/pic3.png",
      "/4kfellow/pic4.png",
      "/4kfellow/pic5.png",
      "/4kfellow/pic7.png",
    ],
    title: "4KF Membership App",
    description:
      "The 4K Fellowship Membership Portal is a web application designed to streamline membership registration and data management for the 4K Fellowship community. Users can be member by providing their personal information.\n The app allows team members to view, filter, and manage member data, making it easy to find specific individuals. With an intuitive interface, the platform enhances collaboration and accessibility within the fellowship.",
    color: "#3973b4",
    buttonColor: "#3973b4",
    tools: ["React", "Node.js", "Express", "Postgresql", "CSS"],
    source: "https://github.com/namizz/4k_Membership_Form",
    livedemo: "https://4k-fellow-naomis-projects-6a2c1253.vercel.app",
  };
  const Efood = {
    images: [
      "/project1/pro1.png",
      "/project1/pro2.png",
      "/project1/admin.jpg",
      "/project1/pro3.png",
      "/project1/pro7.png",
      "/project1/pro5.png",
      "project1/user.jpg",
      "/project1/pro4.png",
      "/project1/pro6.png",
      "/project1/pro8.png",
    ],
    title: "E-food (Food Ordering App)",
    description:
      "E-Food Ordering App is a user-friendly platform designed to order food by just clicking button. Users can easily browse a variety of meals, place orders, and track their order history. One of its standout features is the real-time notification system—as soon as a user places an order, the admin receives an instant notification. Admins can add new food items, see number of order report, and update order statuses. ",
    color: "#ff8800",
    buttonColor: "#ff8800",
    tools: ["React", "Spring Boot", "Postgresql", "Tailwind CSS", "Docker"],
    livedemo: "https://e-food-amber.vercel.app/",
    source: "https://github.com/namizz/E-Food",
  };
  const FoodRecipe = {
    images: [
      "/foodrecipe/pic1.png",
      "/foodrecipe/pic2.png",
      "/foodrecipe/pic3.png",
      "/foodrecipe/pic4.png",
      "/foodrecipe/pic5.png",
    ],
    title: "Food Recipe",
    description:
      "My food recipe app allows users to sign up, add their own recipes, and share them with others. It features JWT authentication and a well-structured database, with separate tables for ingredients and cooking steps. Currently in development, the app enables users to add detailed recipes, including ingredients and step-by-step instructions.",
    buttonColor: "#ffc549",
    color: "#ffc549",
    tools: [
      "Vue",
      "Nuxt js",
      "Go",
      "Postgresql",
      "TailWind CSS",
      "GraphQL",
      "Docker",
      "Apollo-Server",
    ],
    source: "https://github.com/namizz/Food-Recipes",
  };
  const JobMate = {
    images: [
      "/JobMate/pic1.png",
      "/JobMate/pic2.png",
      "/JobMate/pic3.png",
      "/JobMate/pic4.png",
      "/JobMate/pic5.png",
      "/JobMate/pic6.png",
      "/JobMate/pic7.png",
    ],
    title: "JobMate",
    description:
      "JobMate is a web app that helps job seekers enhance their careers with four core features: CV Review, Find Job, Interview Practice, and Career Tips. It supports both English and Amharic, making it accessible to users in Ethiopia and beyond. Users can review their CVs, practice interviews, explore jobs, and access offline career advice.",
    buttonColor: "#007bff",
    color: "#007bff",
    tools: ["React", "Next.js", "TypeScript", "Go"],
    source: "",
    liveDemo: "https://jobmate-kappa.vercel.app/",
  };

  return (
    <div>
      <div className="text-4xl font-bold text-[#0a0a0ad2]">My Projects</div>
      <ProjectCard {...Efood} />
      <ProjectCard {...Fellow} />
      <ProjectCard {...JobMate} />
      <ProjectCard {...FoodRecipe} />
    </div>
  );
};
export default Project;
