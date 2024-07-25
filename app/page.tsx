import About from "@/components/About";
import Project from "@/components/Project";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-2xl">Hello World</h1> */}
      <Welcome />
      <About />
      <Project />
    </main>
  );
}
