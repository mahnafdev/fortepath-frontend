import { features } from "@/data/features";

export const Features = () => {
	return (
		<section className="pt-32">
			<div className="text-center mb-12">
				{/* Header */}
				<h2 className="text-3xl md:text-4xl font-bold text-primary-100 text-shadow-md text-shadow-primary-700 mb-3">
					Everything You Need to Learn Confidently
				</h2>
				{/* Subtext */}
				<p className="text-zinc-300">
					FortePath makes it easy to find the right tutor, book focused sessions, and
					learn at your own pace.
				</p>
			</div>
			{/* Features */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, idx) => {
					const Icon = feature.icon;
					return (
						<div
							key={idx}
							className="group rounded-3xl bg-zinc-900 border border-primary-950 p-6 transition hover:border-primary-900"
						>
							{/* Icon */}
							<div className="size-11 grid place-items-center rounded-lg bg-purple-900 text-purple-300 mb-4 transition group-hover:bg-purple-800 group-hover:text-purple-200">
								<Icon size={28} />
							</div>

							{/* Content */}
							<h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
							<p className="text-zinc-200 leading-relaxed">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
