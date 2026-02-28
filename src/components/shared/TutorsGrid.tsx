import { Tutor } from "@/app/(common)/tutors/page";
import { TutorCard } from "./TutorCard";

type Props = {
	tutors: Tutor[];
};

export const TutorsGrid = ({ tutors }: Props) => {
	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{tutors?.length > 0 ? (
				tutors?.map((tutor) => (
					<TutorCard
						key={tutor.id}
						tutor={tutor}
					/>
				))
			) : (
				<p className="col-span-full text-center text-zinc-400 text-xl h-40 flex items-center justify-center">
					There are no tutors matching your criteria.
				</p>
			)}
		</div>
	);
};
