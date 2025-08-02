import Card from "./components/Card";
import profile from "./assets/profile.jpg";

function App() {
  const user = {
    name: "Axmed Axmedov",
    title: "Front-end Developer",
    company: "vCard Solutions",
    email: "axmedov@gmail.com",
    phone: "+994123456789",
    website: "https://axmed.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    whatsapp: "https://wa.me/994123456789",
    location: "Baku, Azerbaijan",
    avatar: profile,
  };

  return <Card user={user} />;
}

export default App;
