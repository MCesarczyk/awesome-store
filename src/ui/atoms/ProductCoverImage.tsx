/* eslint-disable @next/next/no-img-element */
interface ProductCoverImageProps {
	src: string;
	alt: string;
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<img
				width={640}
				height={640}
				src={src}
				alt={alt}
				className="h-full object-cover object-center p-4 "
			/>
		</div>
	);
};
