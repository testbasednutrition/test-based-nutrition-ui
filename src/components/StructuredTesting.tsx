import React from 'react';

export interface TestItem {
  name: string;
  logo: string;
}

interface StructuredTestingProps {
  foundational: TestItem[];
  baseline: TestItem[];
  advanced: TestItem[];
}

export const StructuredTesting: React.FC<StructuredTestingProps> = ({ foundational, baseline, advanced }) => {
  return (
    <div className="w-full mt-20 lg:mt-24 max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider uppercase">
          TESTING SHOULD BE STRUCTURED — NOT EXCESSIVE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2 border-l-4 border-[#9f1e13] pl-3">
            <h3 className="font-playfair text-[20px] font-bold text-gray-900 uppercase tracking-widest leading-none mt-1">FOUNDATIONAL TESTING</h3>
          </div>
          <div className="flex flex-col gap-4">
            {foundational.map((test, idx) => (
              <div key={idx} className="bg-white border border-[#dbd4c9] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#9f1e13]/30 transition-all">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden">
                  <img src={test.logo} alt={test.name} className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <span className="font-bold text-gray-900 text-[15px]">{test.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 border-l-4 border-[#9f1e13] pl-3">
              <h3 className="font-playfair text-[20px] font-bold text-gray-900 uppercase tracking-widest leading-none mt-1">BASELINE SCREENING</h3>
            </div>
            <p className="text-[#9f1e13] font-bold text-[11px] uppercase tracking-widest mt-3">RAPID FINGER-PRICK POINT-OF-CARE</p>
          </div>
          <div className="flex flex-col gap-4">
            {baseline.map((test, idx) => (
              <div key={idx} className="bg-white border border-[#dbd4c9] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#9f1e13]/30 transition-all">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden">
                  <img src={test.logo} alt={test.name} className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <span className="font-bold text-gray-900 text-[15px]">{test.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 border-l-4 border-[#9f1e13] pl-3">
              <h3 className="font-playfair text-[20px] font-bold text-gray-900 uppercase tracking-widest leading-none mt-1">ADVANCED SCREENING</h3>
            </div>
            <p className="text-[#9f1e13] font-bold text-[11px] uppercase tracking-widest mt-3">PHLEBOTOMY (WHERE REQUIRED)</p>
          </div>
          <div className="flex flex-col gap-4">
            {advanced.map((test, idx) => (
              <div key={idx} className="bg-white border border-[#dbd4c9] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#9f1e13]/30 transition-all">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden">
                  <img src={test.logo} alt={test.name} className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <span className="font-bold text-gray-900 text-[15px]">{test.name}</span>
              </div>
            ))}
            
            {/* Consultation Box */}
            <div className="bg-[#f9f5f2] border border-[#dbd4c9] rounded-2xl p-6 flex items-center justify-center shadow-inner mt-2">
              <p className="text-center font-bold text-[11px] text-gray-600 uppercase tracking-widest leading-relaxed">
                SCREENING IS DETERMINED BY<br/>CONSULTATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
