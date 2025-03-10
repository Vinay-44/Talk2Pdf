import React from "react";

type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  console.log(pdf_url);
  
  return (
    <div className="h-full bg-[#161B22]/70 backdrop-blur-sm rounded-lg border border-[#00FF9D]/20">
      <iframe
        src={`${pdf_url}`}
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
};

export default PDFViewer;