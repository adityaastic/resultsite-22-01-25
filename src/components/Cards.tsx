import { useEffect } from "react";
import { useContactCards, useInfoCardFirst } from "../hooks/useHome";
import { Link } from "react-router-dom";
import { Card } from "../Types";

export const ContactCards = () => {
  const { contactCards } = useContactCards();

  useEffect(() => {
    console.log(contactCards);
  }, [contactCards]);

  return (
    <>
      {contactCards?.slice(0, 3).map((content:Card) => (
        <div className="card-inner" key={content.id}>
          <p
            className="name"
            dangerouslySetInnerHTML={{ __html: content.paragraph }}
          ></p>
          {/* <p className="text-green">BABA JII SATTA KING</p> 
          <p>HEAD OF COMPANY</p> */}
          <p className="text-secondary">{content.number}</p>
          <div className="intro">
            <a href={`tel:${content.number}`} target="_blank">
              <button type="button" className="btn btn-primary">
                Call Now
              </button>
            </a>
            <Link
              to={`https://api.whatsapp.com/send?phone=${content.number}&text=Hello`}
              target="_blank"
            >
              <button type="button" className="btn btn-secondary">
                Whatsapp Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export const ContactCards2 = () => {
  const { contactCards } = useContactCards();

  useEffect(() => {
    console.log(contactCards);
  }, [contactCards]);
  return (
    <>
      {contactCards?.slice(2, 12).map((content:Card) => (
        <div className="card-inner" key={content.id}>
          <p
            className="name"
            dangerouslySetInnerHTML={{ __html: content.paragraph }}
          ></p>
          <p className="text-secondary">{content.number}</p>
          <div className="intro">
            <a href={`tel:${content.number}`} target="_blank">
              <button type="button" className="btn btn-primary">
                Call Now
              </button>
            </a>
            <Link
              to={`https://api.whatsapp.com/send?phone=${content.number}&text=Hello`}
              target="_blank"
            >
              <button type="button" className="btn btn-secondary">
                Whatsapp Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export const ContactCards3 = () => {
  const { contactCards} = useContactCards();

  useEffect(() => {
    console.log(contactCards);
  }, [contactCards]);
  return (
    <>
      {contactCards?.slice(12, 100).map((content:Card) => (
        <div className="card-inner" key={content.id}>
          <p
            className="name"
            dangerouslySetInnerHTML={{ __html: content.paragraph }}
          ></p>
          <p className="text-secondary">{content.number}</p>
          <div className="intro">
            <a href={`tel:${content.number}`} target="_blank">
              <button type="button" className="btn btn-primary">
                Call Now
              </button>
            </a>
            <Link
              to={`https://api.whatsapp.com/send?phone=${content.number}&text=Hello`}
              target="_blank"
            >
              <button type="button" className="btn btn-secondary">
                Whatsapp Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export const InfoCard = () => {
  const { InfoCardFirst } = useInfoCardFirst();
  return (
    <>

      <div className="card-inner">
        <p dangerouslySetInnerHTML={{ __html: InfoCardFirst?.disclaimer }}></p>
      </div>
    </>
  );
};



