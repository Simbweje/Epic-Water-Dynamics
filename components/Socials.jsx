 import {RiLinkedinFill, RiTwitterXFill,RiYoutubeFill, RiInstagramFill, RiFacebookBoxFill} from 'react-icons/ri'
import Link from 'next/link';

const icons =[ 
{ path: '/',
    name: <RiLinkedinFill/>
},
{ path: '/',
    name: <RiTwitterXFill/>
},
{ path: '/',
    name: <RiInstagramFill/>
},
{ path: '/',
    name: <RiFacebookBoxFill/>
},
{ path: '/',
    name: <RiYoutubeFill/>
},
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return ( 
                    <Link href={icon.path}  key={index}>
                        <div className={`${iconStyles}`}> 
                        {icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
} 

export default Socials; 