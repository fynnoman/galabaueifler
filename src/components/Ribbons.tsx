export default function Ribbons() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 max-[1100px]:gap-4 z-20">
      {/* Ribbon 1 */}
      <div 
        className="h-12 max-[1100px]:h-[clamp(34px,4.4vw,48px)] bg-[#009746] text-white flex items-center justify-end pr-[66px] max-[1100px]:pr-[clamp(44px,6vw,66px)] pl-6 box-border w-[500px] max-[1100px]:w-[min(70vw,500px)]"
        style={{
          clipPath: 'polygon(0% 0%, calc(100% - 42px) 0%, 100% 100%, 0% 100%)'
        }}
      >
        <span className="font-mono text-[28px] max-[1100px]:text-[clamp(18px,2.6vw,28px)] leading-none tracking-normal whitespace-nowrap">
          Ihr Ansprechpartner
        </span>
      </div>

      {/* Ribbon 2 */}
      <div 
        className="h-12 max-[1100px]:h-[clamp(34px,4.4vw,48px)] bg-[#009746] text-white flex items-center justify-end pr-[66px] max-[1100px]:pr-[clamp(44px,6vw,66px)] pl-6 box-border w-[600px] max-[1100px]:w-[min(80vw,600px)]"
        style={{
          clipPath: 'polygon(0% 0%, calc(100% - 42px) 0%, 100% 100%, 0% 100%)'
        }}
      >
        <span className="font-mono text-[28px] max-[1100px]:text-[clamp(18px,2.6vw,28px)] leading-none tracking-normal whitespace-nowrap">
          für Garten- &amp; Landschaftsbau
        </span>
      </div>

      {/* Ribbon 3 */}
      <div 
        className="h-12 max-[1100px]:h-[clamp(34px,4.4vw,48px)] bg-[#009746] text-white flex items-center justify-end pr-[66px] max-[1100px]:pr-[clamp(44px,6vw,66px)] pl-6 box-border w-[500px] max-[1100px]:w-[min(70vw,500px)]"
        style={{
          clipPath: 'polygon(0% 0%, calc(100% - 42px) 0%, 100% 100%, 0% 100%)'
        }}
      >
        <span className="font-mono text-[28px] max-[1100px]:text-[clamp(18px,2.6vw,28px)] leading-none tracking-normal whitespace-nowrap">
          in Saarbrücken
        </span>
      </div>
    </div>
  );
}
