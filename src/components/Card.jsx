import React, { useState } from "react";
import "./Card.css";
import avatar from "../../src/assets/1538665870_cox-yarasiqli-cazibedar-baximli-model-oqlan-oglan-oghlan-sekilleri_10.jpg";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  WebsiteIcon,
} from "./icons";

export default function Card({ user }) {
  const [flipped, setFlipped] = useState(false);

  const {
    name,
    title,
    email,
    location,
    github,
    linkedin,
    whatsapp,
    website,
    phone,
    company,
  } = user;

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      role="button"
      aria-pressed={flipped}
    >
      <div className="card-front">
        <img src={avatar} alt={name} className="avatar" />
        <h2 className="title">{name}</h2>
        <p className="title">{title}</p>
        <p className="company">{company}</p>
        <div className="myqrhub-logo">MyQRHub</div>
      </div>
      <div className="card-back">
        <ul>
          <li>
            <PhoneIcon /> <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li>
            <EmailIcon /> <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <WebsiteIcon /> <a href={website}>{website}</a>
          </li>
          <li>
            <LocationIcon /> {location}
          </li>
        </ul>
        <div className="social">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          )}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
          )}
        </div>
        <div className="myqrhub-logo">MyQRHub</div>
      </div>
    </div>
  );
}
