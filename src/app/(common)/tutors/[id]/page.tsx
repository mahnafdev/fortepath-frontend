import { Avatar, Chip } from "@heroui/react";
import { TbCurrencyDollar, TbMessage2Star, TbStar } from "react-icons/tb";

interface Category {
	id: string;
	name: string;
	slug: string;
	description: string;
}

interface Review {
	id: string;
	rating: number;
	feedback?: string;
	student?: {
		id: string;
		name: string;
		image?: string;
	};
	createdAt: string;
}

interface TutorProfile {
	id: string;
	designation: string;
	bio?: string;
	hourlyRate: number;
	user: {
		id: string;
		name: string;
		email: string;
		image?: string;
	};
	tutorCategories: { category: Category }[];
	reviews: Review[];
}

type Props = {
	params: Promise<{
		id: string;
	}>;
};

const TutorProfilePage = async ({ params }: Props) => {
	// Extract Id from URL params
	const { id } = await params;

	// Fetch the tutor and cache it
	const tutorRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
		cache: "force-cache",
	});
	const { data: tutor }: { data: TutorProfile } = await tutorRes.json();

	// Calculate average rating
	const averageRating =
		tutor?.reviews.length > 0
			? (
					tutor.reviews.reduce((sum, review) => sum + Number(review.rating), 0) /
					tutor.reviews.length
				).toFixed(1)
			: "0.0";

	return (
		<div className="min-h-[calc(100vh-15rem)] px-64 py-40">
			{tutor ? (
				<div className="max-w-lg mx-auto flex flex-col md:flex-row gap-5 items-center md:items-start md:justify-center px-7 py-8 border border-zinc-800/60 rounded-4xl shadow-md shadow-zinc-950/50">
					{/* Profile Picture */}
					<Avatar
						size="lg"
						className="size-18 rounded-xl"
					>
						<Avatar.Image
							src={tutor.user.image}
							alt={`${tutor.user.name} profile picture`}
						/>
					</Avatar>
					<div className="flex-1">
						{/* Name */}
						<h1 className="text-[28px] font-bold tracking-wide leading-[1.3] text-zinc-100">
							{tutor.user.name}
						</h1>
						{/* Designation */}
						<p className="mt-1 text-zinc-300 text-[19px] tracking-wide">
							{tutor.designation}
						</p>
						{/* Bio */}
						<p className="mt-3.5 text-zinc-300">{tutor.bio}</p>
						{/* Categories */}
						<div className="mt-5 flex flex-wrap gap-2">
							{tutor.tutorCategories.map((tc) => (
								<Chip
									key={tc.category.slug}
									variant="soft"
									className="bg-primary-500/15 px-3 text-[15px] h-7 text-primary-400  hover:bg-primary-500/20 transition-colors duration-200 cursor-default"
								>
									{tc.category.name}
								</Chip>
							))}
						</div>
						<div className="mt-5 -ml-1 flex items-center gap-6 text-[17px] text-zinc-300">
							{/* Hourly Rate */}
							<div className="flex items-center gap-1">
								<TbCurrencyDollar size={22} />
								<span>{tutor.hourlyRate}/hr</span>
							</div>
							{/* Average Rating */}
							<div className="flex items-center gap-2">
								<TbStar size={22} />
								<span>{averageRating}</span>
							</div>
							{/* Reviews Count */}
							<div className="flex items-center gap-2">
								<TbMessage2Star size={22} />
								<span>
									{tutor.reviews.length}{" "}
									{tutor.reviews.length !== 1 ? "reviews" : "review"}
								</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="max-w-md mx-auto flex items-center justify-center px-5 h-40 border border-zinc-800/60 rounded-3xl">
					<span className="text-lg text-zinc-400">
						The tutor you&apos;re looking for cannot be found.
					</span>
				</div>
			)}
		</div>
	);
};

export default TutorProfilePage;
