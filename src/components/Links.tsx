import {
  BookiLogo,
  Facebook,
  Instagram,
  Whatsapp,
  
} from "../assets/index.ts"
import useLinks from "../hooks/useLinks.ts"

const Links = () => {
  const {contact} = useLinks();
  return (
    <div className="social-cl-fix">
        <div className="row">
          <div className="col-6">
            <a href={contact?.contact_links?.whatsapp_link} target="_blank"> <img src={Whatsapp} alt="Whatsapp" /> </a>
            <a href={contact?.contact_links?.instagram} target="_blank"> <img src={Instagram} alt="Instagram" /> </a>
          </div>
          <div className="col-6 text-end">
            <a href={contact?.contact_links?.facebook} target="_blank"> <img src={Facebook} alt="Facebook" /> </a>
            <a href={contact?.contact_links?.booki} target="_blank">  <img src={BookiLogo} alt="Baba Ji Logo" /> </a>
          </div>
        </div>
      </div>
  )
}

export default Links