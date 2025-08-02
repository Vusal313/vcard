import React from "react";
import "./Card.css";
import avatar from "../../src/assets/1538665870_cox-yarasiqli-cazibedar-baximli-model-oqlan-oglan-oghlan-sekilleri_10.jpg"
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
    <div className="card">
      <div className="card-front">
        <img src={avatar} alt={name} className="avatar" />
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p className="company">{company}</p>
      </div>
      <div className="card-back">
        <ul>
          <li><PhoneIcon /> <a href={`tel:${phone}`}>{phone}</a></li>
          <li><EmailIcon /> <a href={`mailto:${email}`}>{email}</a></li>
          <li><WebsiteIcon /> <a href={website}>{website}</a></li>
          <li><LocationIcon /> {location}</li>
        </ul>
        <div className="social">
          {github && <a href={github}><GitHubIcon /></a>}
          {linkedin && <a href={linkedin}><LinkedInIcon /></a>}
          {whatsapp && <a href={whatsapp}><WhatsAppIcon /></a>}
        </div>
      </div>
    </div>
  );
}
