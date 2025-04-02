interface GridItemProps {
    iSelected?: boolean
    image?: string
    title?: string
    description?: string
    }

    export function GridItem({ iSelected = false }: GridItemProps) {
    return (
        <section className={`hover:scale-102 transition-all duration-100 aspect-video bg-gray-300 ${iSelected ? "" : ""} overflow-hidden`}>
        <article className="w-full h-full flex flex-col">
            <figure className="w-full h-3/4 overflow-hidden">
            <image className=" h-60 w-full /volante.jpeg" />
            </figure>
            <section className="p-3 flex-grow">
                <h2 className="font-medium text-gray-900 truncate">Event pinacoteca</h2>
                <p className="tex-sm text-gray-600 line-clamp-2">The event is led by the Universitys Culutra, Bienestar and Muisca area with live presentations with the participation of students </p>
            </section>
        </article>
        </section>
    )
    }
