import { Logo } from "@/components/logo";
import { MenuButton } from "@/components/menu-button";
import { GridItem } from "@/components/grid-items";

  export default function Home() {
    return (
      <main className="min-h-screen bg-black">
        <header className="bg-gray-200 p-4 flex justify-between items-center">
          <Logo />
          <MenuButton />
        </header>
  
        <section className="p-4 bg-gray-800 mx-4 my-4 border">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GridItem  />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </ul>
          <h1 className=" text-white text-3xl font-extrabold">Bienvenidos a Eventos y Talentos Ucc </h1>
        </section>
      </main>
    )
  }
  