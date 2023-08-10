import ctl from "@netlify/classnames-template-literals"

export default function FollowLink({title, link}){
return <a className={follow__link} href={link} rel="noreferrer">{title}</a>
}
const follow__link = ctl(`font-[500] text-md text-secondary underline mr-2 opacity-75 hover:opacity-90 transition-all`)
