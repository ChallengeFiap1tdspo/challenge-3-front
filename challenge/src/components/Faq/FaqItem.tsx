import { useState } from "react";

type Props = { index: number; q: string; a: string };

export default function FaqItem({ index, q, a }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const id = `faq-${index}`;

  return (
    <li className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{q}</h3>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls={id}
          className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-50 focus:outline-none"
        >
          {open ? "-" : "+"}
        </button>
      </div>

      {open && (
        <p id={id} className="mt-3 text-gray-700">
          {a}
        </p>
      )}
    </li>
  );
}
