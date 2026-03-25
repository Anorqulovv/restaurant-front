import Image from 'next/image';
import React from 'react'

interface LeafProps {
    style: React.CSSProperties;
}

const Leaf = ({ style }: LeafProps) => (
    <div className="absolute select-none pointer-events-none z-20" style={style}>
        <Image src="/images/leaf.png" loading="eager"  alt="Decorative leaf" fill sizes="(max-width: 768px) 30vw, 20vw" className="object-contain" />
    </div>
);


export default Leaf