'use client';

import { QRCodeSVG } from 'qrcode.react';

const WAITLIST_URL = 'https://yycpronto.com/inglewood/waitlist';

export default function QRCodePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 print:p-0">
      <div className="w-full max-w-md text-center">
        <div className="mb-6">
          <img
            src="/assets/pronto-logo.png"
            alt="Pronto Pizza"
            className="h-20 mx-auto mb-2"
          />
          <h2 className="text-3xl font-display text-black tracking-wider uppercase">Inglewood</h2>
        </div>

        <div className="border-2 border-[#FF5A1F] rounded-2xl p-8 mb-6">
          <h1 className="text-2xl font-display text-[#1A1B8C] uppercase tracking-wide mb-1">
            Skip the Line!
          </h1>
          <p className="text-[#FF5A1F] font-mono-serif text-sm mb-6 uppercase tracking-wider">
            Scan to Join Our Waitlist
          </p>

          <div className="flex justify-center mb-6">
            <QRCodeSVG
              value={WAITLIST_URL}
              size={220}
              level="H"
              fgColor="#000000"
              bgColor="#FFFFFF"
              imageSettings={{
                src: '/assets/pronto-logo.png',
                height: 36,
                width: 36,
                excavate: true,
              }}
            />
          </div>

          <p className="font-mono-serif text-gray-600 text-xs leading-relaxed">
            Open your phone camera, scan the code above, and join our virtual waitlist. We'll notify you when your table is ready.
          </p>
        </div>

        <div className="text-center font-mono-serif text-xs text-gray-500 space-y-0.5">
          <p className="font-bold text-black">1139 9th Ave SE, Calgary</p>
          <p>403-993-9093</p>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-8 bg-[#FF5A1F] text-white px-8 py-3 font-bold font-mono-serif uppercase tracking-wider rounded hover:bg-[#e04d17] transition-colors print:hidden"
        >
          Print QR Code
        </button>
      </div>
    </div>
  );
}
