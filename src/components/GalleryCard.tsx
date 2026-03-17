import { GalleryItem } from '@/@types'
import Image from 'next/image'

const GalleryCard = ({ item }: { item: GalleryItem }) => {
    return (
        <div className="relative rounded-3xl overflow-hidden aspect-4/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <Image src={item.image} alt={`Gallery ${item.id}`} fill className="object-cover" />
        </div>
    )
}

export default GalleryCard