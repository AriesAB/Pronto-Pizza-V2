export const inglewoodHours = [
  { label: "Tuesday – Thursday", days: ["Tuesday", "Wednesday", "Thursday"], dinnerClose: "21:00", dinnerLabel: "9 PM" },
  { label: "Friday – Saturday", days: ["Friday", "Saturday"], dinnerClose: "22:00", dinnerLabel: "10 PM" },
];

export const inglewoodOpeningHours = [
  ...inglewoodHours.flatMap(({ days, dinnerClose }) => [
    { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: "11:30", closes: "14:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: "17:00", closes: dinnerClose },
  ]),
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "16:00", closes: "21:00" },
];