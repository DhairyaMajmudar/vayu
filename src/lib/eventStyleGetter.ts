export const eventStyleGetter = (event: any) => {
  const style: React.CSSProperties = {
    borderRadius: "6px",
    opacity: 0.9,
    color: "white",
    border: "0px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    display: "block",
    textAlign: "left",
    padding: "3px 8px",
  };

  if (event.isHoliday) {
    style.backgroundColor = "#dc2626";
    style.borderLeft = "3px solid #b91c1c";
  } else if (event.isLongWeekend) {
    style.backgroundColor = "#7c3aed";
    style.borderLeft = "3px solid #6d28d9";
  } else if (event.isPotential) {
    style.backgroundColor = "#9333ea";
    style.borderLeft = "3px solid #7e22ce";
    style.opacity = 0.75;
  } else if (event.category === "personal") {
    style.backgroundColor = "#2563eb";
    style.borderLeft = "3px solid #1d4ed8";
  } else if (event.category === "work") {
    style.backgroundColor = "#16a34a";
    style.borderLeft = "3px solid #15803d";
  } else if (event.category === "travel") {
    style.backgroundColor = "#d97706";
    style.borderLeft = "3px solid #b45309";
  } else if (event.category === "family") {
    style.backgroundColor = "#e11d48";
    style.borderLeft = "3px solid #be123c";
  } else {
    style.backgroundColor = "#4f46e5";
    style.borderLeft = "3px solid #4338ca";
  }

  return {
    style,
  };
};
