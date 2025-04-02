interface GridItemProps {
    iSelected?: boolean
    }

    export function GridItem({ iSelected = false }: GridItemProps) {
    return (
        <section className={`hover:scale-102 transition-all duration-100 aspect-video bg-gray-300 ${iSelected ? "" : ""} overflow-hidden`}>
        <article className="w-full h-full flex flex-col">
            <header className="sr-only">Grid Item</header> 
        </article>
        </section>
    )
    }
