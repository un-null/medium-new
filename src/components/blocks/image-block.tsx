"use client";

import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

export const ImageBlock = ({ block }: { block: ImageBlockObjectResponse }) => {
	const src = block.image.type === "file" ? block.image.file.url : "";

	const caption =
		block.image.caption.length > 0 ? block.image.caption?.[0]?.plain_text : "";

	return (
		<div className="w-full mx-auto">
			<Image
				src={src}
				alt={caption}
				width={300}
				height={300}
				data-loaded="false"
				onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
				className="w-full aspect-video object-contain data-[loaded=false]:animate-pulse data-[loaded=false]:bg-zinc-200"
			/>
		</div>
	);
};
