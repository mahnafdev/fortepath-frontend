import { Tutor } from "@/app/tutors/page";
import { Avatar, Chip } from "@heroui/react";

export const TutorCard = ({ tutor }: { tutor: Tutor }) => {
	// Calculate average rating
	const avgRating =
		tutor.reviews.length > 0
			? (
					tutor.reviews.reduce(
						(
							sum: number,
							review: {
								rating: number;
							},
						) => sum + Number(review.rating),
						0,
					) / tutor.reviews.length
				).toFixed(1)
			: "0.0";

	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-primary-700 transition">
			{/* Tutor Profile Info */}
			<div className="flex items-center gap-3 mb-4">
				{/* Profile Picture */}
				<Avatar>
					<Avatar.Image
						src={tutor.user?.image}
						alt={`${tutor.user.name} profile picture`}
					/>
				</Avatar>
				<div>
					{/* Name */}
					<h3 className="font-semibold tracking-wide">{tutor.user.name}</h3>
					{/* Designation */}
					<p className="text-sm text-zinc-300">{tutor.designation}</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mb-4">
				{/* Categories */}
				{tutor.tutorCategories.map(
					(tc: { category: { name: string; slug: string } }) => (
						// Category Chip
						<Chip
							// Category slug as key
							key={tc.category.slug}
							variant="primary"
							className="bg-primary-500/15 text-primary-400 tracking-wide"
						>
							{tc.category.name}
						</Chip>
					),
				)}
			</div>
			<div className="flex items-center justify-between text-zinc-400">
				<span>${tutor.hourlyRate}/hr</span>
				<span>⭐ {avgRating}</span>
			</div>
		</div>
	);
};
