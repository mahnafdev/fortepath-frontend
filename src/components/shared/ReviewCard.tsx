import { Avatar } from "@heroui/react";
import { TbStarFilled } from "react-icons/tb";

interface Review {
	id: string;
	rating: number;
	feedback?: string;
	student: {
		image: string;
		name: string;
	};
}

export const ReviewCard = ({ review }: { review: Review }) => {
	const rating = Number(review.rating);

	return (
		<div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-3">
			{/* Student */}
			<div className="flex items-center gap-x-3">
				{/* Profile Picture */}
				<Avatar size="sm">
					<Avatar.Image
						src={review.student.image}
						referrerPolicy="no-referrer"
					/>
				</Avatar>
				{/* Name */}
				<h6 className="text-lg">{review.student.name}</h6>
			</div>
			{/* Rating */}
			<div className="flex gap-x-1">
				{new Array(rating).fill(null).map((_: null, idx: number) => (
					<TbStarFilled
						key={idx}
						size={20}
						color="var(--color-primary-500)"
					/>
				))}
				{new Array(5 - rating).fill(null).map((_: null, idx: number) => (
					<TbStarFilled
						key={idx}
						size={20}
						color="var(--color-zinc-800)"
					/>
				))}
			</div>
			{/* Feedback */}
			<p className="text-zinc-300 text-[15px] italic">&ldquo;{review.feedback}&rdquo;</p>
		</div>
	);
};
