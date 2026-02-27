"use client";

import Link from "next/link";

export const CallToAction = () => {
	return (
		<section className="relative mt-32 py-24 bg-zinc-950 rounded-[3rem] overflow-hidden">
			{/* BG Gradient */}
			<div className="absolute inset-0 bg-linear-to-r from-primary-500/20 via-primary-600/15 to-primary-500/20 blur-3xl opacity-60" />
			<div className="relative max-w-5xl mx-auto px-4 text-center">
				{/* Header */}
				<h2 className="text-3xl md:text-4xl font-semibold text-primary-100">
					Ready to Begin Your Learning Journey?
				</h2>
				{/* Subtext */}
				<p className="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
					Whether you&apos;re looking to grow your skills or share your expertise,
					FortePath connects passionate learners and dedicated tutors in a focused and
					supportive environment.
				</p>
				{/* CTA Buttons */}
				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
					{/* CTA for Students */}
					<Link
						href="/tutors"
						className="w-full md:w-auto rounded-[10px] bg-primary-600 px-6 py-3 font-medium text-lg transition duration-250 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 active:shadow-none"
					>
						Find a Tutor
					</Link>
					{/* CTA for Tutors */}
					<Link
						// @ts-expect-error href accepts string
						href="/auth/signup"
						className="w-full md:w-auto rounded-[10px] border border-primary-500 px-6 py-3 text-lg text-primary-400 font-medium transition duration-250 hover:bg-primary-600 hover:text-foreground"
					>
						Become a Tutor
					</Link>
				</div>
				<p className="mt-6 text-zinc-400">
					Join a growing community of learners and educators shaping their own path to
					mastery.
				</p>
			</div>
		</section>
	);
};
