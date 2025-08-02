import React from "react";

export default function DownloadButton({ user }) {
  // Create vCard text for download
  const vCardText = `
BEGIN:VCARD
VERSION:3.0
N:${user.lastName};${user.firstName}
FN:${user.firstName} ${user.lastName}
TITLE:${user.title}
TEL;TYPE=WORK,VOICE:${user.phone}
EMAIL:${user.email}
URL:${user.website}
ADR;TYPE=WORK:;;${user.address};;;;
END:VCARD
`.trim();

  const downloadVCard = () => {
    const blob = new Blob([vCardText], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${user.firstName}_${user.lastName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button className="download-button" onClick={downloadVCard}>
      Download vCard
    </button>
  );
}
