import { inglewoodHours } from "@/lib/inglewood-hours";

export default function InglewoodHours({ spacious = false, compact = false }: { spacious?: boolean; compact?: boolean }) {
  if (spacious) {
    return (
      <div className="w-full text-left">
        <table className={`w-full table-fixed ${compact ? "text-sm xl:text-base" : "text-sm sm:text-lg md:text-xl"}`}>
          <caption className="sr-only">Inglewood hours of operation</caption>
          <thead className="text-pronto-orange">
            <tr className="border-b border-white/30">
              <th scope="col" className="w-[38%] py-4 pr-2 font-bold">Day</th>
              <th scope="col" className="w-[34%] py-4 px-2 font-bold">Lunch</th>
              <th scope="col" className="w-[28%] py-4 pl-2 font-bold">Dinner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            <tr>
              <th scope="row" className="py-5 pr-2 font-bold">Monday</th>
              <td colSpan={2} className="py-5 pl-2 text-white/70">Closed</td>
            </tr>
            {inglewoodHours.map(({ label, dinnerLabel }) => (
              <tr key={label}>
                <th scope="row" className="py-5 pr-2 font-bold">{label}</th>
                <td className="py-5 px-2 tabular-nums">
                  <span className="inline-block">11:30 AM</span>{" – "}
                  <span className="inline-block">2 PM</span>
                </td>
                <td className="py-5 pl-2 tabular-nums">
                  <span className="inline-block">5 PM</span>{" – "}
                  <span className="inline-block">{dinnerLabel}</span>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="py-5 pr-2 font-bold">Sunday</th>
              <td className="py-5 px-2 text-white/70"><span aria-label="Closed for lunch">—</span></td>
              <td className="py-5 pl-2 tabular-nums">
                <span className="inline-block">4 PM</span>{" – "}
                <span className="inline-block">9 PM</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="border-t border-white/30 pt-5 text-center text-sm sm:text-base text-white/70">
          Tuesday–Saturday: closed between 2 PM and 5 PM.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto text-left">
      <dl className="divide-y divide-current/20">
        <div className="flex justify-between gap-4 py-3">
          <dt className="font-bold">Monday</dt>
          <dd>Closed</dd>
        </div>
        {inglewoodHours.map(({ label, dinnerLabel }) => (
          <div key={label} className="py-3">
            <dt className="font-bold mb-2">{label}</dt>
            <dd className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <span>Lunch</span>
              <span className="text-right tabular-nums">11:30 AM – 2 PM</span>
              <span>Dinner</span>
              <span className="text-right tabular-nums">5 PM – {dinnerLabel}</span>
              <span className="col-span-2 text-xs opacity-80 mt-1">Closed between 2 PM and 5 PM</span>
            </dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 py-3">
          <dt className="font-bold">Sunday</dt>
          <dd className="tabular-nums">4 PM – 9 PM</dd>
        </div>
      </dl>
    </div>
  );
}