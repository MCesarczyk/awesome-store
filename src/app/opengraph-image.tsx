import { ImageResponse } from "next/og";
 
export const runtime = "edge";
 
export const alt = "awesome shop";
export const content = "Awesome shop";
export const size = {
	width: 1280,
	height: 640,
};
 
export const contentType = "image/png";
 
// eslint-disable-next-line import/no-default-export
export default async function og() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: '#525252',
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[64px] leading-4">Awesome shop</p>
				<p tw="font-serif mt-20 p-0 font-black">Use on your own risk!</p>
			</div>
		),
	);
}
