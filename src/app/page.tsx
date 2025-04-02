import { Logo } from "@/components/logo";
import { MenuButton } from "@/components/menu-button";
import { GridItem } from "@/components/grid-items";

  export default function Home() {
    return (
      <main className="min-h-screen bg-black">
        <span className=" bg-gray-200 p-4 flex justify-between items-center">
          <Logo />
          <MenuButton />
        </span>

        <section className="p-4 bg-gray-800 mx-4 my-4 border">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GridItem
            iSelected={true}
            image="/volante.jpeg?h=200 w=200"
            title="Product One"
            description="This is the first product with amazing features."
          /> 
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </section>
          <h1 className=" text-white text-3xl font-extrabold">Welcome to Events and Talents Ucc </h1>
        </section>
      </main>
    )
  }
  