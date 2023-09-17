/* eslint-disable @next/next/no-img-element */
interface ProductCoverImageProps {
	image: {
		id: string;
		url: string;
		alt: string;
	}
}

export const ProductCoverImage = ({ image }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100 text-black">
			<img
				width={640}
				height={640}
				src={image.url}
				alt={image.alt || "sample image"}
				className="h-full object-cover object-center p-4 "
			/>
		</div>
	);
};
