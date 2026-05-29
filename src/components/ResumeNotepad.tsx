import React from 'react';

interface ResumeNotepadProps {
  onResumeLinkClick: () => void;
}

export default function ResumeNotepad({ onResumeLinkClick }: ResumeNotepadProps) {
  return (
    <div className="flex flex-col h-full bg-white text-black font-mono text-xs md:text-sm select-text p-4 overflow-y-auto leading-relaxed h-[420px] md:h-[450px]">
      
      {/* Visual Header */}
      <div className="border-b-2 border-dashed border-gray-300 pb-3 mb-4 select-none">
        <h1 className="text-lg md:text-xl font-bold tracking-tight text-blue-900">KAPISH VERMA</h1>
        <p className="text-gray-600 font-bold">NSUT B.Tech Computer Science & Engineering</p>
        <p className="text-gray-500">New Delhi, India | kapishverma2005@gmail.com</p>
        <div className="mt-2">
          <button 
            id="view-pdf-resume-btn"
            onClick={onResumeLinkClick}
            className="win98-button font-sans px-3 py-1 font-bold text-xs text-black cursor-pointer select-none inline-flex items-center gap-1.5"
          >
            📄 View Official PDF Resume
          </button>
        </div>
      </div>

      {/* Career Education Section */}
      <div className="mb-4">
        <h2 className="font-bold text-blue-800 border-b border-gray-200 uppercase pb-0.5 mb-2">🎓 Education</h2>
        <div className="mb-2">
          <div className="flex justify-between font-bold">
            <span>Netaji Subhas University of Technology (NSUT)</span>
            <span className="text-gray-500">2023 - 2027</span>
          </div>
          <p className="italic text-gray-600">Bachelor of Technology (B.Tech) - Computer Science and Engineering</p>
          <p className="text-gray-500 text-xs">Core Focus: Data Structures, Algorithms, Product Management, Deep Learning.</p>
        </div>
      </div>

      {/* Core Strengths Section */}
      <div className="mb-4">
        <h2 className="font-bold text-blue-800 border-b border-gray-200 uppercase pb-0.5 mb-2">🛠️ Skills & Competencies</h2>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Product Management:</strong> Product Strategy, User Journey Mapping, PRDs, Metric Definition, Figma prototyping, Growth teardowns.</li>
          <li><strong>Advanced Technologies:</strong> Large Language Models (LLMs), Retrievals-Augmented Generation (RAG), Semantic Embeddings, Computer Vision pipelines.</li>
          <li><strong>Engineering Stack:</strong> React, Modern TypeScript, FastAPI, Node.js, Express, Tailwind CSS, Python, D3.js data viz.</li>
        </ul>
      </div>

      {/* Highlighted Work Section */}
      <div className="mb-4">
        <h2 className="font-bold text-blue-800 border-b border-gray-200 uppercase pb-0.5 mb-2">💼 Highlighted Accomplishments</h2>
        
        <div className="mb-3">
          <div className="flex justify-between font-bold">
            <span>🛡️ Compliance Copilot</span>
            <span className="text-gray-500 text-xs">AI Decision Support</span>
          </div>
          <p className="text-xs text-gray-700 font-medium">Built a two-stage RAG architecture that returns automated regulatory verdicts (Allowed/Not Allowed/Risky) with detailed evidence, reducing compliance resolution speed by 80%.</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-between font-bold">
            <span>🛠️ Vision-to-Action Quality Control</span>
            <span className="text-gray-500 text-xs">Computer Vision & Workflow Agent</span>
          </div>
          <p className="text-xs text-gray-700 font-medium">Created end-to-end operational agent converting defect detection into automated work orders and vendor procurement flows, linking diagnostics to actions.</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-between font-bold">
            <span>✈️ MakeMyTrip Cancellation Optimization</span>
            <span className="text-gray-500 text-xs text-right">Product Teardown</span>
          </div>
          <p className="text-xs text-gray-700 font-medium">Pioneered workflow solutions to capture and recover flight cancellation churns, improving premium user experiences and long-term user retention.</p>
        </div>
      </div>

      {/* Code Signature footnote */}
      <div className="border-t border-gray-200 pt-3 text-center text-[10px] text-gray-400 select-none">
        --- End of Document. Generated on Kapish98 OS ---
      </div>

    </div>
  );
}
