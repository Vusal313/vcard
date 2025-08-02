import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function EditForm({ user, onSubmit }) {
  const [formData, setFormData] = useState({ ...user });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState(null);

  // EmailJS üçün öz parametrlərini daxil et
  const serviceID = "your_service_id";
  const templateID = "your_template_id";
  const userID = "your_user_id";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Email göndərmək üçün EmailJS istifadə:
    setSending(true);
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setMessage("Email göndərildi!");
        setSending(false);
      })
      .catch(() => {
        setMessage("Email göndərilərkən xəta baş verdi.");
        setSending(false);
      });
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
      <h2>Redaktə et</h2>

      {message && <p className="message">{message}</p>}

      <label>
        Ad:
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Soyad:
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Vəzifə:
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Telefon:
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
      </label>

      <label>
        GitHub URL:
        <input
          name="github"
          value={formData.github}
          onChange={handleChange}
          type="url"
        />
      </label>

      <label>
        LinkedIn URL:
        <input
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          type="url"
        />
      </label>

      <label>
        WhatsApp URL:
        <input
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          type="url"
        />
      </label>

      <label>
        Veb sayt:
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          type="url"
        />
      </label>

      <label>
        Ünvan:
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <button type="submit" disabled={sending}>
        {sending ? "Göndərilir..." : "Yadda saxla & Email göndər"}
      </button>
    </form>
  );
}
