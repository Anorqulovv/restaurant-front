import Image from 'next/image'

const GalleryCard = ({ item }: { item: any }) => {
    return (
        <div className="relative rounded-3xl overflow-hidden aspect-4/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <Image src={`https://anorkhulov.uz/${item?.image}`} alt={`Gallery ${item.id}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        </div>
    )
}

export default GalleryCard