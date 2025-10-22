import React from "react";

export function Video({
  videoId,
  start,
  end,
  title,
}: {
  videoId: string;
  start: number;
  end: number;
  title: string;
}) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0`;

  return (
    <div className="flex justify-center items-center w-full max-h-[90vh] p-8">
      <div className="aspect-video w-3/4 shadow-2xl rounded-lg overflow-hidden ">
        <iframe
          title={title}
          src={embedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
