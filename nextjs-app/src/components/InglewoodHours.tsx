import { inglewoodHours } from "@/lib/inglewood-hours";

export default function InglewoodHours() {
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