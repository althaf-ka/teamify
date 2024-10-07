import Image from "next/image";

function DashboardSnippet() {
  return (
    <div className="relative py-20">
      <div className="radial--blur absolute mx-10 h-3/6 w-full rounded-[50%] opacity-40" />
      <div className="relative aspect-video w-full">
        <Image
          alt="snippet"
          className="opacity-[0.95]"
          fill
          objectFit="contain"
          priority
          sizes="100vw"
          src="/dashboard-snippet.png"
        />
      </div>
    </div>
  );
}

export default DashboardSnippet;
